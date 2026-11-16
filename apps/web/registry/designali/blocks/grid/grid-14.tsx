"use client"

import { useState } from "react"
import {
  BookOpen,
  Check,
  SquareKanban as KanbanSquare,
  Megaphone,
  Palette,
  Rocket,
  Users,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const options: { id: string; icon: IconComponent; title: string; text: string; includes: string }[] = [
  { id: "product", icon: Rocket, title: "Product launch", text: "Landing page, pricing and launch blocks in one starter.", includes: "4 pages · 32 blocks" },
  { id: "design", icon: Palette, title: "Design system", text: "Tokens, components and a Figma library kept in sync.", includes: "3 pages · 18 blocks" },
  { id: "marketing", icon: Megaphone, title: "Brand identity", text: "Logo, colour and type guidelines for your brand.", includes: "5 pages · 40 assets" },
  { id: "sprint", icon: KanbanSquare, title: "Web app", text: "Dashboard, auth and settings screens built with Next.js.", includes: "4 pages · 26 blocks" },
  { id: "hiring", icon: Users, title: "Portfolio", text: "A personal site to show your work, like Ali Imam's.", includes: "3 pages · 12 blocks" },
  { id: "wiki", icon: BookOpen, title: "Docs site", text: "Guides, components and changelog pages.", includes: "2 pages · 24 blocks" },
]

export default function Grid14() {
  const [selected, setSelected] = useState<string[]>(["product"])

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    )

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-sans text-xs text-muted-foreground">Step 2 of 3</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          What will you build with Designali?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Pick as many as you like. We&apos;ll set up starter blocks so nobody faces a blank page.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => {
            const isSelected = selected.includes(option.id)
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggle(option.id)}
                className={cn(
                  "group relative flex flex-col items-start gap-4 border bg-background p-5 text-left transition-colors",
                  isSelected ? "border-foreground ring-1 ring-foreground" : "border-border hover:border-foreground/40"
                )}
              >
                <span
                  className={cn(
                    "absolute top-4 right-4 flex size-5 items-center justify-center border transition-colors",
                    isSelected ? "border-foreground bg-foreground text-background" : "border-border"
                  )}
                >
                  {isSelected && <Check className="size-3" />}
                </span>
                <span className="flex size-10 items-center justify-center bg-muted">
                  <option.icon className="size-5" />
                </span>
                <span>
                  <span className="block font-medium">{option.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{option.text}</span>
                </span>
                <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase">
                  {option.includes}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="ghost">Skip for now</Button>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-xs text-muted-foreground">{selected.length} selected</span>
            <Button disabled={selected.length === 0}>Create project</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
