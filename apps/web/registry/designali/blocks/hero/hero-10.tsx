"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
  Copy,
  Terminal,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const managers = [
  { id: "npm", command: "npm install @designali/icons" },
  { id: "pnpm", command: "pnpm add @designali/icons" },
  { id: "bun", command: "bun add @designali/icons" },
  { id: "shadcn", command: "npx shadcn add designali/hero-01" },
]

const output = [
  { text: "$ npx shadcn add designali/hero-01", tone: "text-foreground" },
  { text: "Fetching block from designali.com", tone: "text-muted-foreground" },
  { text: "Installing @designali/icons and @designali/logos", tone: "text-muted-foreground" },
  { text: "Writing components/blocks/hero-01.tsx", tone: "text-muted-foreground" },
  { text: "Done. Design se code tak.", tone: "text-emerald-600 dark:text-emerald-400" },
]

export default function Hero10() {
  const [active, setActive] = useState(managers[0]!.id)
  const [copied, setCopied] = useState(false)
  const current = managers.find((manager) => manager.id === active) ?? managers[0]!

  function copy() {
    navigator.clipboard?.writeText(current.command).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Terminal className="size-3.5" />
            designali / blocks / icons / logos
          </p>
          <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
            Add a Designali block with one command.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Install Designali icons, logos and 460+ production-ready blocks
            straight into your Next.js and Tailwind project. Copy, paste, ship.
          </p>
          <div className="mt-8 max-w-lg border border-border">
            <div className="flex overflow-x-auto border-b border-border">
              {managers.map((manager) => (
                <button
                  key={manager.id}
                  type="button"
                  onClick={() => {
                    setActive(manager.id)
                    setCopied(false)
                  }}
                  className={
                    manager.id === active
                      ? "border-b-2 border-foreground px-4 py-2 font-mono text-xs text-foreground"
                      : "border-b-2 border-transparent px-4 py-2 font-mono text-xs text-muted-foreground hover:text-foreground"
                  }
                >
                  {manager.id}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 bg-muted/40 px-4 py-3">
              <span className="font-mono text-sm text-muted-foreground">$</span>
              <code className="min-w-0 flex-1 truncate font-mono text-sm">
                {current.command}
              </code>
              <button
                type="button"
                onClick={copy}
                aria-label="Copy install command"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/docs" />}>
              Read the docs
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="/blocks" />}>
              Browse blocks
            </Button>
          </div>
        </div>
        <div className="min-w-0 border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ms-3 font-mono text-xs text-muted-foreground">
              ~/projects/designali-site
            </span>
          </div>
          <div className="space-y-2 overflow-x-auto p-5 font-mono text-xs leading-6 sm:text-sm">
            {output.map((line) => (
              <p key={line.text} className={`whitespace-nowrap ${line.tone}`}>
                {line.text}
              </p>
            ))}
            <p className="whitespace-nowrap text-foreground">
              $ <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground" />
            </p>
          </div>
          <div className="grid grid-cols-3 border-t border-border text-center">
            {[
              ["460+", "blocks"],
              ["4000+", "icons"],
              ["240+", "pages"],
            ].map(([value, label]) => (
              <div key={label} className="border-e border-border px-2 py-4 last:border-e-0">
                <p className="text-lg font-medium">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
