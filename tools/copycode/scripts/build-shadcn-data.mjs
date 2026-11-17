// Builds shadcn-data.js: shadcn `data-slot` values → this repo's components.
//
//   slots[slot] = { name, file, tokens, bases, cva, internal, icons }
//     name      exported component ("CardHeader"), file → "@/components/ui/card"
//     tokens    every class the component applies (all variants)
//     bases     classes it always applies, one list per source (version check)
//     cva       its cva() definition, if any
//     internal  data-slots it renders itself (skipped when copying)
//     icons     lucide icons it renders itself ("lucide-chevron-down")
//   cva[name] = { base, bases, variants: { variant: { outline: [[…], […]] } }, defaults }
//   themeColors — --color-* names the project defines
//
// Source: packages/ui/src/components, plus template copies (templates/*/components/ui).
// Run: node scripts/build-shadcn-data.mjs
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, "..")
const repo = join(root, "..", "..")
const primaryDir = join(repo, "packages", "ui", "src", "components")
const extraDirs = existsSync(join(repo, "templates"))
  ? readdirSync(join(repo, "templates")).map((t) => join(repo, "templates", t, "components", "ui")).filter((d) => existsSync(d))
  : []

const STRING = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g
const classTokens = (text) => {
  const out = []
  for (const m of text.matchAll(STRING)) {
    for (const t of (m[1] ?? m[2] ?? m[3] ?? "").split(/\s+/)) if (t && !t.includes("${") && /^[!\-\[\(*@a-z0-9]/i.test(t)) out.push(t)
  }
  return out
}

function balanced(src, open) {
  const pair = { "(": ")", "{": "}" }[src[open]]
  let depth = 0
  for (let i = open; i < src.length; i++) {
    const c = src[i]
    if (c === '"' || c === "'" || c === "`") {
      const end = src.indexOf(c, i + 1)
      i = end < 0 ? src.length : end
      continue
    }
    if (c === src[open]) depth++
    else if (c === pair && --depth === 0) return src.slice(open, i + 1)
  }
  return src.slice(open)
}

const parseObjectOfStrings = (text) => {
  const out = {}
  for (const m of text.matchAll(/(?:"([^"]+)"|([\w-]+))\s*:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g)) out[m[1] ?? m[2]] = classTokens(m[3])
  return out
}

function parseCva(src) {
  const result = {}
  for (const m of src.matchAll(/const\s+(\w+)\s*=\s*cva\(/g)) {
    const call = balanced(src, m.index + m[0].length - 1)
    const cut = call.search(/,\s*\{/)
    const base = classTokens(call.slice(0, cut > 0 ? cut : call.length))
    const variants = {}
    const vIdx = call.indexOf("variants:")
    if (vIdx >= 0) {
      const block = balanced(call, call.indexOf("{", vIdx))
      for (const g of block.slice(1).matchAll(/(?:"([^"]+)"|([\w-]+))\s*:\s*\{/g)) {
        variants[g[1] ?? g[2]] = parseObjectOfStrings(balanced(block.slice(1), g.index + g[0].length - 1))
      }
    }
    const defaults = {}
    const dIdx = call.indexOf("defaultVariants:")
    if (dIdx >= 0) for (const d of balanced(call, call.indexOf("{", dIdx)).matchAll(/([\w-]+)\s*:\s*"([^"]+)"/g)) defaults[d[1]] = d[2]
    result[m[1]] = { base, variants, defaults }
  }
  return result
}

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/Icon$/, "").replace(/-$/, "").toLowerCase()

function parseFile(path) {
  const src = readFileSync(path, "utf8")
  const file = path.split("/").pop().replace(/\.tsx$/, "")
  const exported = new Set()
  for (const m of src.matchAll(/export\s*\{([^}]+)\}/g)) m[1].split(",").forEach((n) => exported.add(n.trim().split(/\s+as\s+/).pop()))
  for (const m of src.matchAll(/export\s+(?:default\s+)?function\s+(\w+)/g)) exported.add(m[1])
  const cva = parseCva(src)
  const comps = []
  const fns = [...src.matchAll(/^(?:export\s+)?function\s+(\w+)\s*\(/gm)]
  fns.forEach((m, i) => {
    const body = src.slice(m.index, fns[i + 1]?.index ?? src.length)
    const slots = [...body.matchAll(/data-slot=["{]+([\w-]+)|slot:\s*"([\w-]+)"/g)].map((s) => s[1] ?? s[2])
    if (!slots.length || !exported.has(m[1])) return
    const own = [...body.matchAll(/className=\{?cn\(([\s\S]*?)\n\s*\)|className="([^"]*)"/g)].flatMap((x) => classTokens(x[1] !== undefined ? x[1] : `"${x[2]}"`))
    comps.push({
      slot: slots[0],
      name: m[1],
      file,
      bases: [[...new Set(own)]],
      tokens: classTokens(body.replace(/data-slot=(?:"[\w-]+"|\{"[\w-]+"\})|slot:\s*"[\w-]+"/g, "")),
      cva: Object.keys(cva).find((n) => new RegExp(`\\b${n}\\(`).test(body)) || null,
      internal: [...new Set(slots.slice(1))],
      icons: [...new Set([...body.matchAll(/<(\w+Icon)\b/g)].map((x) => `lucide-${kebab(x[1])}`))],
    })
  })
  return { comps, cva }
}

const slots = {}
const cvas = {}
for (const f of readdirSync(primaryDir).filter((f) => f.endsWith(".tsx")).sort()) {
  const { comps, cva } = parseFile(join(primaryDir, f))
  for (const [name, def] of Object.entries(cva)) {
    for (const g of Object.values(def.variants)) for (const k of Object.keys(g)) g[k] = [g[k]]
    def.bases = [[...def.base]]
    cvas[name] = def
  }
  for (const c of comps) if (!slots[c.slot]) slots[c.slot] = c
}
for (const dir of extraDirs) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".tsx"))) {
    const { comps, cva } = parseFile(join(dir, f))
    for (const c of comps) {
      const s = slots[c.slot]
      if (!s) continue
      s.tokens.push(...c.tokens)
      if (!s.bases.some((b) => b.join(" ") === c.bases[0].join(" "))) s.bases.push(c.bases[0])
    }
    for (const [name, def] of Object.entries(cva)) {
      const t = cvas[name]
      if (!t) continue
      t.base.push(...def.base)
      if (!t.bases.some((b) => b.join(" ") === def.base.join(" "))) t.bases.push([...def.base])
      for (const [group, opts] of Object.entries(def.variants)) {
        for (const [opt, toks] of Object.entries(opts)) {
          const alts = ((t.variants[group] ||= {})[opt] ||= [])
          if (!alts.some((a) => a.join(" ") === toks.join(" "))) alts.push(toks)
        }
      }
    }
  }
}
for (const s of Object.values(slots)) {
  const def = s.cva && cvas[s.cva]
  if (def) s.tokens.push(...def.base, ...Object.values(def.variants).flatMap((g) => Object.values(g).flat(2)))
  s.tokens = [...new Set(s.tokens)]
  delete s.slot
}
for (const def of Object.values(cvas)) def.base = [...new Set(def.base)]

const styleDir = join(repo, "packages", "ui", "src", "styles")
const themeColors = new Set()
if (existsSync(styleDir)) {
  for (const f of readdirSync(styleDir).filter((f) => f.endsWith(".css"))) {
    for (const m of readFileSync(join(styleDir, f), "utf8").matchAll(/--color-([a-z0-9-]+)\s*:/g)) themeColors.add(m[1])
  }
}

writeFileSync(
  join(root, "shadcn-data.js"),
  `// Generated by scripts/build-shadcn-data.mjs from packages/ui. Do not edit.\nglobalThis.__copycodeUI = ${JSON.stringify({ slots, cva: cvas, themeColors: [...themeColors].sort() })}\n`
)
console.log(`shadcn-data.js — ${Object.keys(slots).length} slots, ${Object.keys(cvas).length} cva definitions, ${extraDirs.length} template copies merged`)
