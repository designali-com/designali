"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const scores = Array.from({ length: 11 }, (_, index) => index)

const topics = ["Onboarding", "Pricing", "Performance", "Docs", "Support"]

export default function Forms04() {
  const [score, setScore] = useState<number | null>(8)
  const [selected, setSelected] = useState<string[]>(["Docs"])

  const toggleTopic = (topic: string) =>
    setSelected((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic]
    )

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Quarterly survey · 2 minutes
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          How likely are you to recommend Fieldnote to a colleague?
        </h2>

        <div className="mt-10 grid grid-cols-11 border border-border">
          {scores.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setScore(value)}
              className={cn(
                "border-border py-3 text-sm transition-colors not-last:border-r md:py-4",
                score === value
                  ? "bg-foreground text-background"
                  : "hover:bg-muted"
              )}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Not likely</span>
          <span>Extremely likely</span>
        </div>

        <div className="mt-12 text-left">
          <p className="text-sm font-medium">What should we improve first?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                className={cn(
                  "border px-3 py-1.5 text-xs transition-colors",
                  selected.includes(topic)
                    ? "border-foreground bg-muted"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {topic}
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm font-medium">Anything else?</p>
          <Textarea
            rows={4}
            className="mt-3"
            placeholder="The search in docs could surface API references faster…"
          />
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <button
            type="button"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Skip for now
          </button>
          <Button size="lg" disabled={score === null}>
            Submit feedback
          </Button>
        </div>
      </div>
    </section>
  )
}
