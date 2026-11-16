"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const projectTypes = [
  { id: "landing", label: "Landing page", base: 6000 },
  { id: "site", label: "Marketing site", base: 18000 },
  { id: "app", label: "Web app", base: 42000 },
]

const toNumber = (value: number | readonly number[]) =>
  Array.isArray(value) ? value[0] : (value as number)

export default function Forms11() {
  const [type, setType] = useState("site")
  const [pages, setPages] = useState(8)
  const [weeks, setWeeks] = useState(8)
  const [cms, setCms] = useState(true)
  const [copy, setCopy] = useState(false)

  const base = projectTypes.find((item) => item.id === type)?.base ?? 0
  const rush = weeks < 6 ? 1.25 : 1
  const estimate = Math.round(
    (base + pages * 900 + (cms ? 4500 : 0) + (copy ? pages * 350 : 0)) * rush
  )
  const low = Math.round((estimate * 0.9) / 500) * 500
  const high = Math.round((estimate * 1.15) / 500) * 500

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Project estimator</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Estimate your Designali project in a minute.
          </h2>
        </div>

        <div className="mt-12 grid border border-border bg-background lg:grid-cols-[1.5fr_1fr]">
          <form className="space-y-10 p-6 md:p-10">
            <fieldset>
              <legend className="text-sm font-medium">What are we building?</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {projectTypes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setType(item.id)}
                    aria-pressed={type === item.id}
                    className={cn(
                      "border p-4 text-left transition-colors",
                      type === item.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:bg-muted"
                    )}
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="mt-1 block text-xs opacity-70">
                      from ${item.base.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Unique page templates</span>
                <span className="font-sans">{pages}</span>
              </div>
              <Slider
                value={[pages]}
                min={1}
                max={30}
                onValueChange={(value) => setPages(toNumber(value))}
                aria-label="Unique page templates"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Timeline</span>
                <span className="font-sans">
                  {weeks} weeks{weeks < 6 && <span className="ml-2 text-primary dark:text-primary">rush</span>}
                </span>
              </div>
              <Slider
                value={[weeks]}
                min={3}
                max={20}
                onValueChange={(value) => setWeeks(toNumber(value))}
                aria-label="Timeline in weeks"
              />
            </div>

            <div className="divide-y divide-border border border-border">
              <Label className="flex items-center justify-between gap-4 p-4">
                <span>
                  <span className="block text-sm font-medium">Headless CMS setup</span>
                  <span className="text-xs font-normal text-muted-foreground">Content modelling, previews and roles</span>
                </span>
                <Switch checked={cms} onCheckedChange={setCms} />
              </Label>
              <Label className="flex items-center justify-between gap-4 p-4">
                <span>
                  <span className="block text-sm font-medium">Copywriting</span>
                  <span className="text-xs font-normal text-muted-foreground">Brand voice and website copy</span>
                </span>
                <Switch checked={copy} onCheckedChange={setCopy} />
              </Label>
            </div>
          </form>

          <div className="flex flex-col justify-between gap-10 border-t border-border bg-foreground p-6 text-background md:p-10 lg:border-t-0 lg:border-l">
            <div>
              <p className="text-xs tracking-widest uppercase opacity-60">Estimated investment</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl" aria-live="polite">
                ${low.toLocaleString()}
                <span className="opacity-50"> - </span>
                ${high.toLocaleString()}
              </p>
              <p className="mt-4 text-sm leading-6 opacity-70">
                Based on similar Designali projects. Final quotes follow a
                30-minute scoping call with Ali Imam.
              </p>
            </div>
            <div className="space-y-3">
              <Label htmlFor="f11-email" className="text-background/80">
                Send me the detailed breakdown
              </Label>
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <Input
                  id="f11-email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 border-background/20 bg-transparent text-background placeholder:text-background/50 dark:bg-transparent"
                />
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Send
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
