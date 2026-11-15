/**
 * Shared helpers for the UI example generator.
 *
 * A category module (scripts/generate/ui/<slug>.mts) default-exports an array
 * of `Example` objects. Each example only provides the *body* of the file
 * (data constants + `export default function <Name>() {}`); imports and the
 * "use client" directive are derived automatically by `buildFile`.
 */
import { readdirSync, readFileSync } from "node:fs"
import { createRequire } from "node:module"
import path from "node:path"
import { fileURLToPath } from "node:url"

export interface Example {
  /** PascalCase name of the default-exported component. */
  name: string
  /** One sentence used as the registry description. */
  description: string
  /** File body without imports. Must contain `export default function <name>`. */
  code: string
  /** Force the "use client" directive (auto-detected otherwise). */
  client?: boolean
  /**
   * Extra named imports the auto-importer can't infer, e.g.
   * { "date-fns": ["addDays", "format"], "input-otp": ["REGEXP_ONLY_DIGITS"] }.
   * Prefix with "type " for type-only imports.
   */
  imports?: Record<string, string[]>
}

const here = path.dirname(fileURLToPath(import.meta.url))
export const APP_ROOT = path.resolve(here, "../../..")
const UI_DIR = path.resolve(APP_ROOT, "../../packages/ui/src/components")

/** identifier -> module specifier for @workspace/ui components. */
function buildUiMap() {
  const map = new Map<string, string>()
  for (const file of readdirSync(UI_DIR)) {
    if (!file.endsWith(".tsx")) continue
    const mod = file.replace(/\.tsx$/, "")
    const src = readFileSync(path.join(UI_DIR, file), "utf8")
    const blocks = src.matchAll(/export\s*\{([^}]*)\}/g)
    for (const block of blocks) {
      for (const raw of block[1]!.split(",")) {
        const id = raw
          .trim()
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/)
          .pop()
          ?.trim()
        if (!id) continue
        const spec = `@workspace/ui/components/${mod}`
        const existing = map.get(id)
        // Prefer the module whose name matches the identifier prefix.
        const kebab = id.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        if (!existing || kebab.startsWith(mod)) map.set(id, spec)
      }
    }
  }
  map.set("cn", "@workspace/ui/lib/utils")
  return map
}

const require = createRequire(path.join(APP_ROOT, "package.json"))
const lucide = require("lucide-react") as Record<string, unknown>
export const LUCIDE = new Set(Object.keys(lucide))
export const UI = buildUiMap()

const KNOWN_GLOBALS = new Set(["React", "Fragment"])

/** Detects whether a body needs the "use client" directive. */
function needsClient(code: string) {
  return (
    /\buse[A-Z]\w*\(/.test(code) ||
    /\son[A-Z]\w*=\{/.test(code) ||
    /\btoast\.|\bcreateToastManager\(/.test(code) ||
    /\b(setApi|formatter|formatters|tickFormatter)=\{/.test(code) ||
    // any prop given an inline function, e.g. filter={(value, search) => ...}
    /\s[a-z]\w*=\{\s*(?:async\s*)?(?:\([^)]*\)|[a-z_]\w*)\s*=>/.test(code) ||
    // component slots, e.g. components={{ DayButton: MyDayButton }}
    /\scomponents=\{\{/.test(code) ||
    // children-as-function / render callbacks passed to components
    />\s*\{\s*\(?[\w\s,{}:]*\)?\s*=>/.test(code)
  )
}

/** Turns an example body into a full, self-contained TSX file. */
export function buildFile(category: string, ex: Example) {
  const code = ex.code.trim()
  if (!new RegExp(`export default function ${ex.name}\\(`).test(code)) {
    throw new Error(
      `[${category}] ${ex.name}: body must contain "export default function ${ex.name}("`
    )
  }
  if (/@\/src\//.test(code) || /<img\b|<Image\b|AvatarImage/.test(code)) {
    throw new Error(`[${category}] ${ex.name}: no app imports or images`)
  }

  const local = new Set<string>()
  for (const m of code.matchAll(
    /\b(?:function|const|let|type|interface|class)\s+([A-Za-z_]\w*)/g
  ))
    local.add(m[1]!)

  const imports = new Map<string, Set<string>>()
  const add = (spec: string, id: string) => {
    if (!imports.has(spec)) imports.set(spec, new Set())
    imports.get(spec)!.add(id)
  }

  for (const [spec, ids] of Object.entries(ex.imports ?? {}))
    for (const id of ids) {
      add(spec, id)
      local.add(id.replace(/^type\s+/, ""))
    }

  const unknown: string[] = []
  // JSX tags
  for (const m of code.matchAll(/<([A-Z][A-Za-z0-9]*)[\s/>]/g)) {
    const id = m[1]!
    if (local.has(id) || KNOWN_GLOBALS.has(id)) continue
    if (UI.has(id)) add(UI.get(id)!, id)
    else if (LUCIDE.has(id)) add("lucide-react", id)
    else unknown.push(id)
  }
  // Icon references used as values (e.g. `icon: MailIcon`)
  for (const m of code.matchAll(/\b([A-Z][A-Za-z0-9]*Icon)\b/g)) {
    const id = m[1]!
    if (local.has(id)) continue
    if (LUCIDE.has(id)) add("lucide-react", id)
    else if (!UI.has(id)) unknown.push(id)
  }
  // Non-JSX helpers
  for (const id of [
    "cn",
    "toast",
    "createToastManager",
    "useComboboxAnchor",
    "buttonVariants",
    "badgeVariants",
    "toggleVariants",
    "navigationMenuTriggerStyle",
    "tabsListVariants",
  ]) {
    if (local.has(id)) continue
    if (new RegExp(`(?<![.\\w])${id}(\\.|\\()`).test(code)) add(UI.get(id)!, id)
  }
  if (/\btype ChartConfig\b|: ChartConfig\b|satisfies ChartConfig/.test(code))
    add("@workspace/ui/components/chart", "type ChartConfig")

  if (unknown.length) {
    throw new Error(
      `[${category}] ${ex.name}: unknown identifiers ${[...new Set(unknown)].join(", ")}`
    )
  }

  const lines: string[] = []
  // The input-otp package creates React context at module load, so any file
  // importing it directly must be a client component.
  const client = ex.client ?? (needsClient(code) || "input-otp" in (ex.imports ?? {}))
  if (client) lines.push(`"use client"`, "")
  if (/\bReact\./.test(code)) lines.push(`import * as React from "react"`)
  const extra = [...imports.keys()].filter(
    (s) => !s.startsWith("@workspace/") && s !== "lucide-react"
  )
  for (const spec of extra.sort())
    lines.push(`import { ${[...imports.get(spec)!].sort().join(", ")} } from "${spec}"`)
  if (imports.has("lucide-react"))
    lines.push(
      `import { ${[...imports.get("lucide-react")!].sort().join(", ")} } from "lucide-react"`
    )
  if (lines.length && lines[lines.length - 1] !== "") lines.push("")
  const ws = [...imports.keys()].filter((s) => s.startsWith("@workspace/")).sort()
  for (const spec of ws)
    lines.push(`import { ${[...imports.get(spec)!].sort().join(", ")} } from "${spec}"`)
  lines.push("", code, "")
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").replace(/^\n+/, "")
}

/* ------------------------------------------------------------------ */
/* Small helpers for templates                                         */
/* ------------------------------------------------------------------ */

/** JSON literal for embedding data in generated code. */
export const json = (value: unknown) => JSON.stringify(value, null, 2)

/** Escapes text for use inside JSX text nodes / attribute strings. */
export const esc = (s: string) =>
  s.replace(/[{}<>]/g, (c) => `{"${c}"}`)

/** Initials from a full name: "Maya Chen" -> "MC". */
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

/** PascalCase from free text: "social login" -> "SocialLogin". */
export const pascal = (s: string) =>
  s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(" ")
    .map((w) => w[0]!.toUpperCase() + w.slice(1))
    .join("")
