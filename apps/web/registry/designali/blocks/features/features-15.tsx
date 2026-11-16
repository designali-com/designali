"use client"

import { useState } from "react"
import {
  Check,
  Copy,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const snippets: Record<string, string> = {
  Icons: `// npm install @designali/icons
import { ArrowRight } from "@designali/icons"

export function Cta() {
  return <ArrowRight className="size-4" />
}`,
  Logos: `// npm install @designali/logos
import { Github, Vercel } from "@designali/logos"

export function Stack() {
  return (
    <>
      <Github size={24} />
      <Vercel size={24} />
    </>
  )
}`,
  Vectors: `// npm install @designali/vectors
import { Abstract12Shapes } from "@designali/vectors"

export function Hero() {
  return <Abstract12Shapes size={160} />
}`,
}

const features = [
  ["Typed end to end", "Every Designali package ships with TypeScript types and autocomplete."],
  ["Tree-shakable", "Import only the icons, logos and vectors you use. Nothing more."],
  ["4000+ icons", "Lucide-compatible names, so switching to @designali/icons is painless."],
]

export default function Features15() {
  const langs = Object.keys(snippets)
  const [lang, setLang] = useState(langs[0]!)
  const [copied, setCopied] = useState(false)

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            For developers
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Add Designali assets in three lines.
          </h2>
          <ul className="mt-10 space-y-6">
            {features.map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 border border-neutral-800 bg-neutral-950 text-neutral-100">
          <div className="flex items-center justify-between border-b border-neutral-800">
            <div className="flex overflow-x-auto">
              {langs.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={cn(
                    "border-r border-neutral-800 px-4 py-2.5 text-xs whitespace-nowrap transition-colors",
                    l === lang ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-white"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Copy code"
              onClick={() => {
                navigator.clipboard?.writeText(snippets[lang]!).catch(() => {})
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
              className="px-3 text-neutral-400 hover:text-white"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
            <code>{snippets[lang]}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
