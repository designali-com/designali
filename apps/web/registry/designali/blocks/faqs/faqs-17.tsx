"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Eye, RotateCcw } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const cards = [
  {
    topic: "Getting started",
    q: "What does Fieldnote actually do?",
    a: "Fieldnote records your customer calls, transcribes them in real time and turns them into searchable highlights your whole product team can tag, clip and share.",
  },
  {
    topic: "Privacy",
    q: "Do participants know they are being recorded?",
    a: "Yes. Fieldnote joins as a visible participant and plays a short consent notice. Anyone can ask to pause recording, and the host can delete a call at any time.",
  },
  {
    topic: "Languages",
    q: "Which languages can it transcribe?",
    a: "Over 30 languages with automatic detection, including mixed-language calls. Translations into English are generated alongside the original transcript.",
  },
  {
    topic: "Integrations",
    q: "Where do my highlights end up?",
    a: "Push clips to your roadmap tool, post them in a team channel, or embed them in docs with a single link. Every highlight keeps a timestamp back to the full call.",
  },
  {
    topic: "Pricing",
    q: "How is Fieldnote priced?",
    a: "Per recorder, not per viewer. Anyone in your company can watch, search and comment for free. Recorders start at $18 per month on annual billing.",
  },
  {
    topic: "Security",
    q: "Where are recordings stored?",
    a: "In your chosen region (US, EU or Australia), encrypted at rest. Enterprise plans can set retention rules that auto-delete recordings after a fixed period.",
  },
]

export default function Faqs17() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const card = cards[index] ?? cards[0]!
  const progress = ((index + 1) / cards.length) * 100

  const go = (next: number) => {
    setIndex((next + cards.length) % cards.length)
    setRevealed(false)
  }

  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Questions, one at a time
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Think you know the answer? Flip the card to check.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-mono">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(cards.length).padStart(2, "0")}
          </span>
          <span className="tracking-[0.15em] uppercase">{card.topic}</span>
        </div>
        <div
          className="mt-3 h-1 w-full bg-muted"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={cards.length}
          aria-valuenow={index + 1}
          aria-label="FAQ progress"
        >
          <div
            className="h-full bg-foreground transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          type="button"
          onClick={() => setRevealed((value) => !value)}
          aria-live="polite"
          className="mt-6 flex min-h-80 w-full flex-col justify-between border border-border bg-card p-6 text-start transition-colors outline-none hover:bg-card/80 focus-visible:ring-1 focus-visible:ring-ring md:p-10"
        >
          <span className="block text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            {card.q}
          </span>
          <span className="mt-8 block">
            {revealed ? (
              <span className="block text-base leading-7 text-muted-foreground">
                {card.a}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="size-4" />
                Tap to reveal the answer
              </span>
            )}
          </span>
        </button>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => go(index - 1)}
            aria-label="Previous question"
          >
            <ChevronLeft data-icon="inline-start" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          <div className="flex items-center gap-1.5">
            {cards.map((item, dot) => (
              <button
                key={item.q}
                type="button"
                onClick={() => go(dot)}
                aria-label={`Go to question ${dot + 1}`}
                className={cn(
                  "h-1.5 transition-all",
                  dot === index
                    ? "w-6 bg-foreground"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
              />
            ))}
          </div>
          {index === cards.length - 1 ? (
            <Button variant="outline" size="md" onClick={() => go(0)}>
              <RotateCcw data-icon="inline-start" />
              <span className="hidden sm:inline">Start over</span>
            </Button>
          ) : (
            <Button
              size="md"
              onClick={() => go(index + 1)}
              aria-label="Next question"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight data-icon="inline-end" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
