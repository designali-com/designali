"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, CornerDownLeft } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

type Question =
  | { id: string; kind: "text"; prompt: string; placeholder: string }
  | { id: string; kind: "choice"; prompt: string; options: string[] }

const questions: Question[] = [
  { id: "name", kind: "text", prompt: "First up, what should we call you?", placeholder: "Type your name" },
  {
    id: "team",
    kind: "choice",
    prompt: "How big is the team that will use Ferrybox?",
    options: ["Just me", "2 - 10", "11 - 50", "51 - 250", "250+"],
  },
  {
    id: "goal",
    kind: "choice",
    prompt: "What is the main thing you want to fix?",
    options: ["Scattered files", "Slow approvals", "Version confusion", "Client handoff"],
  },
  { id: "email", kind: "text", prompt: "Where can we send your setup plan?", placeholder: "name@company.com" },
]

export default function Forms17() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const done = index >= questions.length
  const question = questions[Math.min(index, questions.length - 1)]!
  const value = answers[question.id] ?? ""
  const progress = Math.round((Math.min(index, questions.length) / questions.length) * 100)

  const next = () => setIndex((i) => Math.min(questions.length, i + 1))
  const setValue = (v: string) => setAnswers((a) => ({ ...a, [question.id]: v }))

  return (
    <section className="w-full bg-background">
      <div className="h-1 w-full bg-muted">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex min-h-[520px] max-w-2xl flex-col justify-center px-6 py-20">
        {done ? (
          <div aria-live="polite">
            <p className="font-mono text-xs text-muted-foreground">All done</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Thanks, {answers.name || "friend"}. Your plan is on its way.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              We will email {answers.email || "you"} a setup checklist tailored
              to a {answers.team || "small"} person team within a few minutes.
            </p>
            <Button variant="outline" className="mt-8" onClick={() => setIndex(0)}>
              Start over
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (value) next()
            }}
          >
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              {index + 1} <ArrowRight className="size-3" /> {questions.length}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              <label htmlFor={`f17-${question.id}`}>{question.prompt}</label>
            </h2>

            {question.kind === "text" ? (
              <Input
                key={question.id}
                id={`f17-${question.id}`}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={question.placeholder}
                className="mt-8 h-14 border-0 border-b border-border bg-transparent px-0 text-xl focus-visible:border-foreground focus-visible:ring-0 md:text-2xl dark:bg-transparent"
              />
            ) : (
              <div className="mt-8 grid gap-2" id={`f17-${question.id}`} role="radiogroup">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={value === option}
                    onClick={() => setValue(option)}
                    className={cn(
                      "flex items-center gap-3 border px-4 py-3 text-left text-sm transition-colors",
                      value === option ? "border-foreground bg-muted" : "border-border hover:bg-muted/60"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-6 items-center justify-center border font-mono text-[10px]",
                        value === option ? "border-foreground bg-foreground text-background" : "border-border"
                      )}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-10 flex items-center gap-3">
              <Button type="submit" size="lg" disabled={!value}>
                {index === questions.length - 1 ? "Submit" : "OK"}
                <ArrowRight />
              </Button>
              <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
                press Enter <CornerDownLeft className="size-3" />
              </span>
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  className="ml-auto"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                >
                  <ArrowLeft />
                  Back
                </Button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
