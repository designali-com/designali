// Generates full landing pages from scripts/generate/pages/content/*.ts.
//
// Writes:
//   registry/designali/pages/<category>/landing-<category>-NN/page.tsx (one per brand)
//   registry/registry-pages.ts                                (registry items)
//   registry/registry-page-categories.ts                      (sidebar categories)
//
// Usage: pnpm --filter web exec tsx --tsconfig ./tsconfig.scripts.json ./scripts/generate/pages.mts
// Then:  pnpm --filter web registry:build
import { mkdirSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

import * as lucide from "lucide-react"
import prettier from "prettier"

import type {
  CategoryContent,
  Feature,
  PageBrand,
} from "./pages/types"

const root = path.resolve(import.meta.dirname, "../..")
const contentDir = path.join(import.meta.dirname, "pages/content")
const pagesDir = path.join(root, "registry/designali/pages")

/*
|--------------------------------------------------------------------------
| Design tokens
|--------------------------------------------------------------------------
| Full class strings only, so Tailwind can see them in the generated files.
*/

type Accent = {
  text: string
  bg: string
  soft: string
  ring: string
  glow: string
}

const ACCENTS: Accent[] = [
  { text: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-600", soft: "bg-indigo-500/10", ring: "ring-indigo-500", glow: "from-indigo-500/25 via-violet-500/10" },
  { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-600", soft: "bg-emerald-500/10", ring: "ring-emerald-500", glow: "from-emerald-500/25 via-teal-500/10" },
  { text: "text-orange-600 dark:text-orange-400", bg: "bg-orange-600", soft: "bg-orange-500/10", ring: "ring-orange-500", glow: "from-orange-500/25 via-amber-500/10" },
  { text: "text-sky-600 dark:text-sky-400", bg: "bg-sky-600", soft: "bg-sky-500/10", ring: "ring-sky-500", glow: "from-sky-500/25 via-cyan-500/10" },
  { text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-600", soft: "bg-rose-500/10", ring: "ring-rose-500", glow: "from-rose-500/25 via-pink-500/10" },
  { text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-600", soft: "bg-violet-500/10", ring: "ring-violet-500", glow: "from-violet-500/25 via-fuchsia-500/10" },
  { text: "text-teal-600 dark:text-teal-400", bg: "bg-teal-600", soft: "bg-teal-500/10", ring: "ring-teal-500", glow: "from-teal-500/25 via-emerald-500/10" },
  { text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-600", soft: "bg-amber-500/10", ring: "ring-amber-500", glow: "from-amber-500/25 via-yellow-500/10" },
  { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-600", soft: "bg-blue-500/10", ring: "ring-blue-500", glow: "from-blue-500/25 via-indigo-500/10" },
  { text: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-600", soft: "bg-fuchsia-500/10", ring: "ring-fuchsia-500", glow: "from-fuchsia-500/25 via-purple-500/10" },
]

const TILES = [
  "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
]

type Layout = "centered" | "editorial" | "split" | "bento" | "inverted" | "framed" | "spotlight"

type Variant = {
  layout: Layout
  gradient: boolean
  email: boolean
  serif: boolean
}

const FALLBACK_LAYOUTS: Layout[] = ["centered", "editorial", "split", "bento", "inverted"]

function detectVariant(page: PageBrand, index: number): Variant {
  const d = page.description.toLowerCase()
  let layout: Layout = FALLBACK_LAYOUTS[index % FALLBACK_LAYOUTS.length]!
  if (/framed/.test(d)) layout = "framed"
  else if (/spotlight/.test(d)) layout = "spotlight"
  else if (/inverted|dark hero|dark inverted/.test(d)) layout = "inverted"
  else if (/bento/.test(d)) layout = "bento"
  else if (/split/.test(d)) layout = "split"
  else if (/editorial|serif|minimal/.test(d)) layout = "editorial"
  else if (/gradient|centred|centered|product mockup|dashboard|terminal|full-bleed/.test(d))
    layout = "centered"
  return {
    layout,
    gradient: /gradient/.test(d),
    email: /email capture|waitlist/.test(d),
    serif: /editorial|serif/.test(d) || layout === "editorial",
  }
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

const J = (v: unknown) => JSON.stringify(v)

/** JSX text: plain when safe, otherwise a string expression. */
function tx(s: string) {
  return /^[^{}<>&'"`]*$/.test(s) ? s : `{${J(s)}}`
}

function pascal(s: string) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p[0]!.toUpperCase() + p.slice(1))
    .join("")
}

function rotate<T>(arr: T[], offset: number, count: number) {
  return Array.from({ length: Math.min(count, arr.length) }, (_, i) => arr[(offset + i) % arr.length]!)
}

function iconOk(name: string) {
  return typeof (lucide as Record<string, unknown>)[name] === "object" ||
    typeof (lucide as Record<string, unknown>)[name] === "function"
}

function headline(page: PageBrand, accent: Accent, inverted: boolean) {
  const hl = page.highlight
  const cls = inverted ? "text-background/60" : accent.text
  if (!hl || !page.headline.includes(hl)) return tx(page.headline)
  const i = page.headline.indexOf(hl)
  const before = page.headline.slice(0, i)
  const after = page.headline.slice(i + hl.length)
  return `${before ? `{${J(before)}}` : ""}<span className="${cls}">${tx(hl)}</span>${after ? `{${J(after)}}` : ""}`
}

/*
|--------------------------------------------------------------------------
| Section emitters
|--------------------------------------------------------------------------
| Each returns { jsx, fn } where `jsx` is the call site and `fn` is the
| component source appended to the file.
*/

type Ctx = {
  cat: CategoryContent
  page: PageBrand
  index: number
  accent: Accent
  v: Variant
  icons: Set<string>
  ui: Set<string>
  features: Feature[]
}

const H2 = (ctx: Ctx, extra = "") =>
  `text-3xl font-semibold tracking-tight text-balance md:text-5xl ${ctx.v.serif ? "font-serif font-normal" : ""} ${extra}`.trim()

function invertedBtn(kind: "primary" | "outline") {
  return kind === "primary"
    ? `className="bg-background text-foreground hover:bg-background/90"`
    : `variant="outline" className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"`
}

function logoMark(ctx: Ctx, inverted = false) {
  const letter = ctx.page.brand[0]!.toUpperCase()
  return `<a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
    <span className="flex size-7 items-center justify-center rounded-md ${inverted ? "bg-background text-foreground" : `${ctx.accent.bg} text-white`} text-sm">${letter}</span>
    <span className="${ctx.v.serif ? "font-serif text-lg font-normal" : ""}">${tx(ctx.page.brand)}</span>
  </a>`
}

function announcement(ctx: Ctx) {
  ctx.icons.add("ArrowRight")
  const inv = ctx.v.layout === "inverted"
  return `<div className="${inv ? "border-b border-background/10 bg-foreground text-background/80" : "border-b bg-muted/50 text-muted-foreground"} px-4 py-2 text-center text-xs sm:text-sm">
    <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
      ${tx(ctx.page.announcement)}
      <ArrowRight className="size-3.5" />
    </a>
  </div>`
}

function header(ctx: Ctx) {
  const inv = ctx.v.layout === "inverted"
  return `<header className="${inv ? "bg-foreground text-background" : "border-b bg-background/80 backdrop-blur"} sticky top-0 z-40">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
      ${logoMark(ctx, inv)}
      <nav className="hidden items-center gap-7 text-sm md:flex">
        {navLinks.map((link) => (
          <a key={link} href="#" className="${inv ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"} transition-colors">
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex${inv ? " text-background hover:bg-background/10 hover:text-background" : ""}" nativeButton={false} render={<a href="#" />}>
          ${tx(ctx.cat.navSecondary)}
        </Button>
        <Button size="sm" ${inv ? `className="bg-background text-foreground hover:bg-background/90"` : ""} nativeButton={false} render={<a href="#" />}>
          ${tx(ctx.page.primaryCta)}
        </Button>
      </div>
    </div>
  </header>`
}

function eyebrow(ctx: Ctx, inverted = false) {
  ctx.icons.add("Sparkles")
  return `<span className="inline-flex items-center gap-2 rounded-full border ${inverted ? "border-background/20 text-background/80" : "bg-background text-muted-foreground"} px-3 py-1 text-xs font-medium">
    <Sparkles className="size-3.5 ${inverted ? "" : ctx.accent.text}" />
    ${tx(ctx.page.eyebrow)}
  </span>`
}

function ctas(ctx: Ctx, opts: { inverted?: boolean; center?: boolean } = {}) {
  ctx.icons.add("ArrowRight")
  if (ctx.v.email) {
    ctx.ui.add("input")
    return `<form action="#" className="flex w-full max-w-md flex-col gap-2 sm:flex-row ${opts.center ? "mx-auto" : ""}">
      <Input type="email" required placeholder="you@company.com" aria-label="Email address" className="h-10 ${opts.inverted ? "border-background/20 bg-background/10 text-background placeholder:text-background/50" : "bg-background"}" />
      <Button type="submit" size="lg" ${opts.inverted ? invertedBtn("primary") : ""}>
        ${tx(ctx.page.primaryCta)}
        <ArrowRight />
      </Button>
    </form>`
  }
  return `<div className="flex flex-wrap gap-3 ${opts.center ? "justify-center" : ""}">
    <Button size="lg" ${opts.inverted ? invertedBtn("primary") : ""} nativeButton={false} render={<a href="#" />}>
      ${tx(ctx.page.primaryCta)}
      <ArrowRight />
    </Button>
    <Button size="lg" ${opts.inverted ? invertedBtn("outline") : `variant="outline"`} nativeButton={false} render={<a href="#" />}>
      ${tx(ctx.page.secondaryCta)}
    </Button>
  </div>`
}

/* Visuals ---------------------------------------------------------------- */

function visualFn(ctx: Ctx) {
  const kind = ctx.cat.visual
  if (kind === "code") {
    return `function HeroVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-left shadow-2xl">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">~/projects</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        {terminal.map((line, i) => (
          <div key={i} className={line.startsWith("$") ? "text-zinc-100" : line.startsWith("#") ? "text-zinc-500" : "text-zinc-400"}>
            {line.startsWith("$") ? (
              <>
                <span className="${ctx.accent.text.split(" ")[1]!.replace("dark:", "")}">$</span>
                {line.slice(1)}
              </>
            ) : (
              line
            )}
          </div>
        ))}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-zinc-300" />
      </pre>
    </div>
  )
}`
  }
  if (kind === "visual") {
    const bento = ctx.v.layout === "bento"
    return `function HeroVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 ${bento ? "md:grid-cols-4 md:grid-rows-2" : "md:grid-cols-3"}">
      {showcase.slice(0, ${bento ? 5 : 3}).map((item, i) => (
        <div
          key={item.name}
          className={\`relative overflow-hidden rounded-2xl \${item.tile} ${bento ? `\${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}` : `\${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"}`}\`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
          <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-zinc-900 backdrop-blur">
            {item.tag}
          </span>
          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 text-white">
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{item.name}</div>
              <div className="truncate text-xs text-white/75">{item.meta}</div>
            </div>
            <div className="shrink-0 text-sm font-semibold">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}`
  }
  // product
  return `function HeroVisual() {
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          app.${ctx.page.brand.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
        </span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden space-y-1 border-r p-3 text-sm md:block">
          {navLinks.map((link, i) => (
            <div key={link} className={\`rounded-md px-3 py-1.5 \${i === 0 ? "bg-muted font-medium" : "text-muted-foreground"}\`}>
              {link}
            </div>
          ))}
        </aside>
        <div className="space-y-4 p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-lg border p-3">
                <div className="truncate text-[11px] text-muted-foreground">{stat.label}</div>
                <div className="mt-1 text-lg font-semibold tracking-tight">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-medium">Last 12 weeks</span>
              <span className="${ctx.accent.text}">+24.6%</span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div key={i} className={\`flex-1 rounded-t-sm \${i === bars.length - 1 ? "${ctx.accent.bg}" : "bg-muted-foreground/20"}\`} style={{ height: \`\${h}%\` }} />
              ))}
            </div>
          </div>
          <div className="hidden divide-y rounded-lg border sm:block">
            {showcase.slice(0, 3).map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{item.meta}</div>
                </div>
                <span className="shrink-0 rounded-full ${ctx.accent.soft} px-2 py-0.5 text-[11px] font-medium ${ctx.accent.text}">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}`
}

/* Hero ------------------------------------------------------------------- */

function hero(ctx: Ctx) {
  const { v, page, accent } = ctx
  const h1Base = `text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ${v.serif ? "font-serif font-normal" : ""}`
  const sub = (cls: string) => `<p className="${cls}">${tx(page.subheadline)}</p>`

  if (v.layout === "editorial") {
    return `<section className="border-b">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
        <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
          <span>${tx(page.eyebrow)}</span>
          <span className="hidden sm:inline">${tx(page.tagline)}</span>
        </div>
        <h1 className="mt-12 max-w-5xl ${h1Base.replace("md:text-7xl", "md:text-8xl")}">${headline(page, accent, false)}</h1>
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
          ${sub("max-w-lg text-lg leading-8 text-muted-foreground")}
          <div className="md:justify-self-end">${ctas(ctx)}</div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <HeroVisual />
      </div>
    </section>`
  }

  if (v.layout === "split") {
    return `<section className="relative overflow-hidden border-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="space-y-7">
          ${eyebrow(ctx)}
          <h1 className="${h1Base.replace("md:text-7xl", "md:text-6xl")}">${headline(page, accent, false)}</h1>
          ${sub("max-w-xl text-lg leading-8 text-muted-foreground")}
          ${ctas(ctx)}
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr ${accent.glow} to-transparent blur-3xl" />
          <HeroVisual />
        </div>
      </div>
    </section>`
  }

  if (v.layout === "bento") {
    return `<section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          ${eyebrow(ctx)}
          <h1 className="${h1Base.replace("md:text-7xl", "md:text-6xl")}">${headline(page, accent, false)}</h1>
          ${sub("mx-auto max-w-2xl text-lg leading-8 text-muted-foreground")}
          ${ctas(ctx, { center: true })}
        </div>
        <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <HeroVisual />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={stat.label} className={\`flex flex-col justify-between rounded-2xl border p-5 \${i === 0 ? "${accent.soft}" : "bg-muted/40"} \${i === 2 ? "col-span-2 lg:col-span-1" : ""}\`}>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="mt-6 text-3xl font-semibold tracking-tight">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>`
  }

  if (v.layout === "inverted") {
    return `<section className="relative overflow-hidden bg-foreground text-background">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-28">
        <div className="max-w-4xl space-y-7">
          ${eyebrow(ctx, true)}
          <h1 className="${h1Base}">${headline(page, accent, true)}</h1>
          ${sub("max-w-2xl text-lg leading-8 text-background/65")}
          ${ctas(ctx, { inverted: true })}
        </div>
        <div className="mt-16">
          <HeroVisual />
        </div>
      </div>
    </section>`
  }

  if (v.layout === "framed") {
    return `<section className="border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
          <span>${tx(page.eyebrow)}</span>
          <span className="hidden sm:inline">${tx(page.tagline)}</span>
        </div>
        <div className="border-x px-6 py-16 md:py-28">
          <h1 className="max-w-5xl ${h1Base.replace("md:text-7xl", "md:text-8xl")}">${headline(page, accent, false)}</h1>
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            ${sub("max-w-md text-base leading-7 text-muted-foreground")}
            ${ctas(ctx)}
          </div>
        </div>
        <div className="grid grid-cols-2 border-x border-t lg:grid-cols-4">
          {stats.slice(0, 4).map((stat, i) => (
            <div key={stat.label} className={\`border-b px-6 py-8 \${i % 2 === 0 ? "border-r" : ""} \${i === 1 ? "lg:border-r" : ""}\`}>
              <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="border-x p-6 md:p-10">
          <HeroVisual />
        </div>
      </div>
    </section>`
  }

  if (v.layout === "spotlight") {
    return `<section className="relative isolate overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] ${accent.glow} to-transparent to-70%" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur">
            <span className="rounded-full ${accent.bg} px-2 py-0.5 font-medium text-white">New</span>
            <span className="text-muted-foreground">${tx(page.announcement)}</span>
          </a>
          <h1 className="${h1Base.replace("md:text-7xl", "md:text-8xl")}">${headline(page, accent, false)}</h1>
          ${sub("mx-auto max-w-2xl text-lg leading-8 text-muted-foreground")}
          ${ctas(ctx, { center: true })}
        </div>
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full ${accent.soft} blur-2xl" />
          <HeroVisual />
        </div>
      </div>
    </section>`
  }

  // centered (optionally gradient)
  return `<section className="relative overflow-hidden border-b">
    ${
      v.gradient
        ? `<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${accent.glow} to-transparent" />
    <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full ${accent.soft} blur-3xl" />`
        : `<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b ${accent.glow.split(" ")[0]} to-transparent opacity-50" />`
    }
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-28">
      <div className="mx-auto max-w-4xl space-y-7 text-center">
        ${eyebrow(ctx)}
        <h1 className="${h1Base}">${headline(page, accent, false)}</h1>
        ${sub("mx-auto max-w-2xl text-lg leading-8 text-muted-foreground")}
        ${ctas(ctx, { center: true })}
      </div>
      <div className="mx-auto mt-16 max-w-6xl">
        <HeroVisual />
      </div>
    </div>
  </section>`
}

/* Logos ------------------------------------------------------------------ */

function logosSection(ctx: Ctx) {
  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <p className="text-center text-sm text-muted-foreground">${tx(ctx.cat.copy.logosLabel)}</p>
      <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
        {logos.map((logo) => (
          <div key={logo} className="text-center text-base font-semibold tracking-tight text-muted-foreground/70 ${ctx.v.serif ? "font-serif font-normal italic" : ""}">
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>`
}

/* Section heading -------------------------------------------------------- */

function heading(ctx: Ctx, title: string, body?: string, opts: { center?: boolean; eyebrow?: string } = {}) {
  return `<div className="${opts.center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}">
    ${opts.eyebrow ? `<p className="text-sm font-medium ${ctx.accent.text}">${tx(opts.eyebrow)}</p>` : ""}
    <h2 className="${H2(ctx, opts.eyebrow ? "mt-3" : "")}">${tx(title)}</h2>
    ${body ? `<p className="mt-4 text-lg leading-8 text-muted-foreground">${tx(body)}</p>` : ""}
  </div>`
}

/* Features --------------------------------------------------------------- */

function featuresSection(ctx: Ctx) {
  const { copy } = ctx.cat
  const layout = ctx.v.layout
  const head = heading(ctx, copy.featuresTitle, copy.featuresBody, {
    eyebrow: copy.featuresEyebrow,
    center: layout === "centered" || layout === "bento" || layout === "spotlight",
  })

  if (layout === "editorial") {
    return `<section className="border-b">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">${head}</div>
        <div className="divide-y border-y">
          {features.map((feature, i) => (
            <div key={feature.title} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-2xl">{feature.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>`
  }

  if (layout === "bento") {
    return `<section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        ${head}
        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={\`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 \${i === 0 ? "${ctx.accent.soft} md:col-span-2 md:row-span-2 md:p-10" : ""} \${i === 3 ? "md:col-span-2" : ""}\`}
            >
              <feature.icon className={\`\${i === 0 ? "size-8" : "size-5"} ${ctx.accent.text}\`} />
              <h3 className={\`mt-6 font-semibold tracking-tight \${i === 0 ? "text-2xl md:text-3xl" : "text-lg"}\`}>{feature.title}</h3>
              <p className={\`mt-2 leading-7 text-muted-foreground \${i === 0 ? "max-w-md text-lg" : "text-sm"}\`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>`
  }

  if (layout === "split") {
    return `<section className="border-b bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        ${head}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border bg-background p-6 shadow-xs">
              <span className="flex size-10 items-center justify-center rounded-lg ${ctx.accent.soft}">
                <feature.icon className="size-5 ${ctx.accent.text}" />
              </span>
              <h3 className="mt-5 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>`
  }

  // centered / inverted: bordered grid
  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      ${head}
      <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="-mt-px -ml-px border-t border-l p-8">
            <feature.icon className="size-6 ${ctx.accent.text}" />
            <h3 className="mt-5 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>`
}

/* Showcase --------------------------------------------------------------- */

function showcaseSection(ctx: Ctx) {
  const { copy } = ctx.cat
  ctx.icons.add("ArrowUpRight")
  const head = `<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      ${heading(ctx, copy.showcaseTitle, copy.showcaseBody)}
      <Button variant="outline" nativeButton={false} render={<a href="#" />}>
        View all
        <ArrowUpRight />
      </Button>
    </div>`

  if (ctx.cat.visual === "visual") {
    return `<section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        ${head}
        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((item) => (
            <a key={item.name} href="#" className="group">
              <div className={\`relative aspect-[4/3] overflow-hidden rounded-2xl \${item.tile}\`}>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-zinc-900 backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-medium ${ctx.v.serif ? "font-serif text-lg" : ""}">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold">{item.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>`
  }

  const mono = ctx.cat.visual === "code"
  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      ${head}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map((item) => (
          <a key={item.name} href="#" className="group flex flex-col rounded-xl border p-6 transition-colors hover:bg-muted/40">
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold ${mono ? "font-mono text-sm" : ""}">
                {item.name.charAt(0)}
              </span>
              <span className="rounded-full ${ctx.accent.soft} px-2.5 py-0.5 text-xs font-medium ${ctx.accent.text}">{item.tag}</span>
            </div>
            <h3 className="mt-6 font-semibold ${mono ? "font-mono text-sm" : ""}">{item.name}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.meta}</p>
            <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm">
              <span className="font-medium">{item.price}</span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>`
}

/* Stats ------------------------------------------------------------------ */

function statsSection(ctx: Ctx) {
  const inv = ctx.v.layout === "inverted"
  return `<section className="${inv ? "bg-foreground text-background" : "border-b"}">
    <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
      {stats.slice(0, 4).map((stat, i) => (
        <div key={stat.label} className={\`py-12 \${i > 0 ? "lg:border-l lg:pl-8" : ""} \${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} ${inv ? "border-background/10" : ""}\`}>
          <div className="text-4xl font-semibold tracking-tight md:text-5xl ${ctx.v.serif ? "font-serif font-normal" : ""}">{stat.value}</div>
          <div className="mt-2 text-sm ${inv ? "text-background/60" : "text-muted-foreground"}">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>`
}

/* Steps ------------------------------------------------------------------ */

function stepsSection(ctx: Ctx) {
  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      ${heading(ctx, ctx.cat.copy.stepsTitle, undefined, { center: ctx.v.layout !== "editorial" })}
      <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative border-t-2 ${ctx.v.layout === "editorial" ? "border-foreground" : "border-border"} pt-6">
            <span className="text-sm font-medium ${ctx.accent.text}">Step {i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>`
}

/* Testimonials ----------------------------------------------------------- */

function testimonialsSection(ctx: Ctx) {
  const title = ctx.cat.copy.testimonialsTitle
  const avatar = (size: string) =>
    `<span className="flex ${size} shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
      {t.name.split(" ").map((p) => p[0]).join("")}
    </span>`

  if (ctx.v.layout === "editorial") {
    return `<section className="border-b">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="text-sm tracking-widest text-muted-foreground uppercase">${tx(title)}</p>
        {testimonials.slice(0, 1).map((t) => (
          <figure key={t.name} className="mt-10">
            <blockquote className="font-serif text-3xl leading-snug text-balance md:text-5xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="text-muted-foreground"> · {t.role}</span>
            </figcaption>
          </figure>
        ))}
        <div className="mt-16 grid gap-6 border-t pt-12 text-left md:grid-cols-2">
          {testimonials.slice(1).map((t) => (
            <figure key={t.name}>
              <blockquote className="leading-7 text-muted-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.name} <span className="font-normal text-muted-foreground">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>`
  }

  if (ctx.v.layout === "bento" || ctx.v.layout === "split") {
    ctx.icons.add("Quote")
    return `<section className="border-b ${ctx.v.layout === "split" ? "" : "bg-muted/30"}">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        ${heading(ctx, title, undefined, { center: true })}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className={\`flex flex-col justify-between rounded-2xl border bg-background p-6 \${i === 0 ? "md:col-span-2 md:p-10" : ""}\`}>
              <Quote className="size-6 ${ctx.accent.text}" />
              <blockquote className={\`mt-4 leading-relaxed \${i === 0 ? "text-xl md:text-2xl" : "text-muted-foreground"}\`}>{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm">
                ${avatar("size-9")}
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>`
  }

  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      ${heading(ctx, title, undefined, { center: true })}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border p-6">
            <blockquote className="flex-1 leading-7">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t pt-6 text-sm">
              ${avatar("size-10")}
              <span>
                <span className="block font-medium">{t.name}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>`
}

/* Pricing ---------------------------------------------------------------- */

function pricingSection(ctx: Ctx) {
  ctx.icons.add("Check")
  const inv = ctx.v.layout === "inverted"
  const { copy } = ctx.cat
  const mutedCls = (base: string) =>
    inv ? `{featured ? "${base} text-background/65" : "${base} text-muted-foreground"}` : `"${base} text-muted-foreground"`
  const featured = inv
    ? `"bg-foreground text-background border-foreground"`
    : `"border-transparent ring-2 ${ctx.accent.ring} shadow-xl"`
  return `<section className="border-b">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      ${heading(ctx, copy.pricingTitle, copy.pricingBody, { center: true })}
      <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => {
          const featured = i === 1
          return (
            <div key={tier.name} className={\`relative flex h-full flex-col rounded-2xl border p-8 \${featured ? ${featured} : ""}\`}>
              {featured && (
                <span className="absolute -top-3 left-8 rounded-full ${inv ? "bg-background text-foreground" : `${ctx.accent.bg} text-white`} px-3 py-1 text-xs font-medium">
                  Most popular
                </span>
              )}
              <h3 className="font-semibold">{tier.name}</h3>
              <p className=${mutedCls("mt-2 text-sm")}>{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                <span className=${mutedCls("text-sm")}>{tier.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className=${inv ? `{featured ? "mt-0.5 size-4 shrink-0" : "mt-0.5 size-4 shrink-0 ${ctx.accent.text}"}` : `"mt-0.5 size-4 shrink-0 ${ctx.accent.text}"`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className=${inv ? `{featured ? "mt-8 w-full bg-background text-foreground hover:bg-background/90" : "mt-8 w-full"}` : `"mt-8 w-full"`}
                variant={featured ? "default" : "outline"}
                nativeButton={false} render={<a href="#" />}
              >
                {tier.cta}
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  </section>`
}

/* FAQ -------------------------------------------------------------------- */

function faqSection(ctx: Ctx) {
  ctx.icons.add("Plus")
  return `<section className="border-b">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.5fr]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 className="${H2(ctx)}">${tx(ctx.cat.copy.faqTitle)}</h2>
        <p className="mt-4 text-muted-foreground">
          Still curious?{" "}
          <a href="#" className="font-medium text-foreground underline underline-offset-4">
            Get in touch
          </a>
          .
        </p>
      </div>
      <div className="divide-y border-y">
        {faqs.map((faq, i) => (
          <details key={faq.q} className="group py-5" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
              {faq.q}
              <Plus className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 pr-10 leading-7 text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>`
}

/* CTA -------------------------------------------------------------------- */

function ctaSection(ctx: Ctx) {
  const { page, v } = ctx
  if (v.layout === "inverted" || v.layout === "editorial") {
    return `<section className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ${v.serif ? "font-serif font-normal" : ""}">${tx(page.ctaHeadline)}</h2>
          <p className="mt-5 text-lg text-background/65">${tx(page.ctaBody)}</p>
        </div>
        ${ctas(ctx, { inverted: true })}
      </div>
    </section>`
  }
  return `<section className="px-6 py-20 md:py-28">
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border ${ctx.accent.soft} px-6 py-16 text-center md:py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b ${ctx.accent.glow} to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-2xl space-y-6">
        <h2 className="${H2(ctx)}">${tx(page.ctaHeadline)}</h2>
        <p className="text-lg text-muted-foreground">${tx(page.ctaBody)}</p>
        ${ctas(ctx, { center: true })}
      </div>
    </div>
  </section>`
}

/* Footer ----------------------------------------------------------------- */

function footerSection(ctx: Ctx) {
  const inv = ctx.v.layout === "inverted"
  const muted = inv ? "text-background/60" : "text-muted-foreground"
  const hover = inv ? "hover:text-background" : "hover:text-foreground"
  return `<footer className="${inv ? "border-t border-background/10 bg-foreground text-background" : ""}">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
      <div className="space-y-4">
        ${logoMark(ctx, inv)}
        <p className="max-w-xs text-sm ${muted}">${tx(ctx.page.tagline)}</p>
      </div>
      {footer.map((column) => (
        <div key={column.title}>
          <h3 className="text-sm font-medium">{column.title}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {column.links.map((link) => (
              <li key={link}>
                <a href="#" className="${muted} transition-colors ${hover}">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t ${inv ? "border-background/10" : ""}">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-xs ${muted} sm:flex-row">
        <span>© {new Date().getFullYear()} ${tx(ctx.page.brand)}. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="${hover}">Privacy</a>
          <a href="#" className="${hover}">Terms</a>
          <a href="#" className="${hover}">Cookies</a>
        </div>
      </div>
    </div>
  </footer>`
}

/*
|--------------------------------------------------------------------------
| Page assembly
|--------------------------------------------------------------------------
*/

const ORDER: Record<Layout, string[]> = {
  centered: ["announcement", "header", "hero", "logos", "features", "showcase", "steps", "stats", "testimonials", "pricing", "faq", "cta", "footer"],
  editorial: ["header", "hero", "stats", "features", "showcase", "testimonials", "steps", "pricing", "faq", "cta", "footer"],
  split: ["announcement", "header", "hero", "logos", "features", "steps", "showcase", "testimonials", "pricing", "faq", "cta", "footer"],
  bento: ["header", "hero", "logos", "features", "showcase", "testimonials", "steps", "pricing", "faq", "cta", "footer"],
  framed: ["header", "hero", "logos", "features", "showcase", "testimonials", "steps", "pricing", "faq", "cta", "footer"],
  spotlight: ["header", "hero", "logos", "features", "stats", "showcase", "steps", "testimonials", "pricing", "faq", "cta", "footer"],
  inverted: ["announcement", "header", "hero", "stats", "features", "showcase", "steps", "testimonials", "pricing", "faq", "cta", "footer"],
}

const SECTIONS: Record<string, (ctx: Ctx) => string> = {
  announcement,
  header,
  hero,
  logos: logosSection,
  features: featuresSection,
  showcase: showcaseSection,
  stats: statsSection,
  steps: stepsSection,
  testimonials: testimonialsSection,
  pricing: pricingSection,
  faq: faqSection,
  cta: ctaSection,
  footer: footerSection,
}

function renderPage(cat: CategoryContent, catIndex: number, page: PageBrand, index: number) {
  const name = `landing-${cat.slug}-${String(index + 1).padStart(2, "0")}`
  const v = detectVariant(page, index)
  const accent = ACCENTS[(catIndex * 3 + index * 7) % ACCENTS.length]!
  const featureCount = v.layout === "editorial" ? 5 : v.layout === "bento" ? 5 : 6
  const features = rotate(cat.features, index, featureCount)
  for (const f of features) {
    if (!iconOk(f.icon)) throw new Error(`${name}: unknown lucide icon "${f.icon}"`)
  }

  const ctx: Ctx = {
    cat,
    page,
    index,
    accent,
    v,
    icons: new Set(features.map((f) => f.icon)),
    ui: new Set(["button"]),
    features,
  }

  const order = ORDER[v.layout]
  const body = order.map((s) => SECTIONS[s]!(ctx)).join("\n")
  const visual = visualFn(ctx)

  const testimonials = rotate(cat.testimonials, index, 3)
  const faqs = rotate(cat.faqs, index, 5)
  const stats = rotate(cat.stats, index, 4)
  const logos = rotate(cat.logos, index, 8)
  const showcase = cat.showcase.map((s, i) =>
    cat.visual === "visual" ? { ...s, tile: TILES[(i + index * 2 + catIndex) % TILES.length] } : s
  )

  const data: string[] = [
    `const navLinks = ${J(cat.navLinks)}`,
    order.includes("logos") ? `const logos = ${J(logos)}` : "",
    `const features = [\n${features
      .map((f) => `  { icon: ${f.icon}, title: ${J(f.title)}, description: ${J(f.description)} },`)
      .join("\n")}\n]`,
    `const stats = ${J(stats)}`,
    `const steps = ${J(cat.steps)}`,
    `const showcase = ${J(showcase)}`,
    `const testimonials = ${J(testimonials)}`,
    `const tiers = ${J(cat.tiers)}`,
    `const faqs = ${J(faqs)}`,
    `const footer = ${J(cat.footer)}`,
  ]
  if (cat.visual === "code") {
    if (!cat.code?.length) throw new Error(`${cat.slug}: visual "code" requires code lines`)
    data.push(`const terminal = ${J(cat.code)}`)
  }

  const icons = [...ctx.icons].sort()
  const imports = [
    `import { ${icons.join(", ")} } from "lucide-react"`,
    "",
    ...[...ctx.ui].sort().map((u) => `import { ${pascal(u)} } from "@workspace/ui/components/${u}"`),
  ]

  const component = pascal(name)
  const source = `${imports.join("\n")}

${data.filter(Boolean).join("\n\n")}

export default function ${component}() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      ${body}
    </div>
  )
}

${visual}
`

  const description = page.description
  return { name, source, description, ui: [...ctx.ui].sort(), category: cat.slug, layout: v.layout }
}

/*
|--------------------------------------------------------------------------
| Main
|--------------------------------------------------------------------------
*/

const PAGES_PER_CATEGORY = 10

const files = readdirSync(contentDir).filter((f) => f.endsWith(".ts")).sort()
const categories: CategoryContent[] = []
for (const file of files) {
  const mod = await import(pathToFileURL(path.join(contentDir, file)).href)
  const cat = Object.values(mod)[0] as CategoryContent
  if (!cat?.slug) throw new Error(`${file}: no CategoryContent export`)
  if (cat.pages.length !== PAGES_PER_CATEGORY)
    throw new Error(`${file}: expected ${PAGES_PER_CATEGORY} pages, got ${cat.pages.length}`)
  if (cat.tiers.length !== 3) throw new Error(`${file}: expected 3 tiers`)
  categories.push(cat)
}

// Clear previously generated pages: category folders, plus the older flat
// landing-<category>-NN layout.
if (existsSync(pagesDir)) {
  const slugs = new Set(categories.map((c) => c.slug))
  for (const dir of readdirSync(pagesDir)) {
    const m = dir.match(/^landing-(.+)-\d{2}$/)
    if (slugs.has(dir) || (m && slugs.has(m[1]!))) rmSync(path.join(pagesDir, dir), { recursive: true })
  }
}

const prettierConfig = (await prettier.resolveConfig(path.join(root, "package.json"))) ?? {}
const items: ReturnType<typeof renderPage>[] = []
const layoutCount: Record<string, number> = {}

for (const [catIndex, cat] of categories.entries()) {
  for (const [index, page] of cat.pages.entries()) {
    const item = renderPage(cat, catIndex, page, index)
    const filePath = path.join(pagesDir, item.category, item.name, "page.tsx")
    const formatted = await prettier.format(item.source, {
      ...prettierConfig,
      filepath: filePath,
      plugins: [],
    })
    mkdirSync(path.dirname(filePath), { recursive: true })
    writeFileSync(filePath, formatted)
    items.push(item)
    layoutCount[item.layout] = (layoutCount[item.layout] ?? 0) + 1
  }
}

const registryEntries = items
  .map(
    (item) => `  {
    name: ${J(item.name)},
    description: ${J(item.description)},
    type: "registry:page",
    dependencies: ["lucide-react"],
    registryDependencies: ${J(item.ui)},
    files: [
      {
        path: ${J(`pages/${item.category}/${item.name}/page.tsx`)},
        target: ${J(`app/${item.name}/page.tsx`)},
        type: "registry:page",
      },
    ],
    categories: [${J(item.category)}],
    meta: {
      iframeHeight: "900px",
    },
  },`
  )
  .join("\n")

writeFileSync(
  path.join(root, "registry/registry-pages.ts"),
  `import { type Registry } from "shadcn/schema"

// Generated by scripts/generate/pages.mts. Edit the content files in
// scripts/generate/pages/content and re-run the generator instead.
export const pages: Registry["items"] = [
${registryEntries}
]
`
)

writeFileSync(
  path.join(root, "registry/registry-page-categories.ts"),
  `// Generated by scripts/generate/pages.mts.
export const pageCategories: {
  name: string
  slug: string
  description: string
  iconName: string
  hidden: boolean
}[] = [
${categories
  .map((c) => {
    if (!iconOk(c.iconName)) throw new Error(`${c.slug}: unknown category icon "${c.iconName}"`)
    return `  {
    name: ${J(c.name)},
    slug: ${J(c.slug)},
    description: ${J(c.description)},
    iconName: ${J(c.iconName)},
    hidden: false,
  },`
  })
  .join("\n")}
]

/** First page of every category, used on the /pages overview. */
export const featuredPages = ${J(items.filter((i) => i.name.endsWith("-01")).map((i) => i.name))}
`
)

console.log(`Wrote ${items.length} pages across ${categories.length} categories`, layoutCount)
