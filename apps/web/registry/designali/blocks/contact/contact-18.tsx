"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const tags = ["Speed", "Reliability", "Pricing", "Design", "Docs", "Support"]

export default function Contact18() {
  const [score, setScore] = useState<number | null>(null)
  const [picked, setPicked] = useState<string[]>([])
  const [sent, setSent] = useState(false)

  const prompt =
    score === null
      ? "Select a score to continue"
      : score >= 9
        ? "Wonderful! What do you love most?"
        : score >= 7
          ? "Thanks. What would make it a 10?"
          : "Sorry to hear that. What let you down?"

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="border bg-background p-6 md:p-12">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <Check className="size-8 text-emerald-600 dark:text-emerald-400" />
              <h2 className="mt-4 text-2xl font-semibold">Feedback received</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The Pathwise product team reads every response on Fridays.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (score !== null) setSent(true)
              }}
            >
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Feedback
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                How likely are you to recommend Pathwise to a colleague?
              </h2>

              <div className="mt-8 grid grid-cols-6 gap-1.5 sm:grid-cols-11">
                {Array.from({ length: 11 }).map((_, n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setScore(n)}
                    aria-pressed={score === n}
                    className={cn(
                      "h-11 border text-sm font-medium tabular-nums transition-colors",
                      score === n
                        ? n >= 9
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : n >= 7
                            ? "border-amber-500 bg-amber-500 text-black"
                            : "border-rose-600 bg-rose-600 text-white"
                        : "hover:bg-muted"
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Not likely</span>
                <span>Extremely likely</span>
              </div>

              <fieldset
                disabled={score === null}
                className="mt-10 space-y-4 transition-opacity disabled:opacity-40"
              >
                <legend className="text-sm font-medium">{prompt}</legend>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => {
                    const on = picked.includes(tag)
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() =>
                          setPicked((p) => (on ? p.filter((t) => t !== tag) : [...p, tag]))
                        }
                        className={cn(
                          "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                          on ? "border-foreground bg-foreground text-background" : "hover:bg-muted"
                        )}
                      >
                        {tag}
                      </button>
                    )
                  })}
                </div>
                <Textarea placeholder="Tell us more (optional)" className="min-h-28" />
              </fieldset>

              <div className="mt-8 flex items-center justify-between gap-4 border-t pt-6">
                <p className="text-xs text-muted-foreground">Takes about 30 seconds</p>
                <Button type="submit" size="lg" disabled={score === null}>
                  Submit feedback
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
