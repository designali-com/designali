"use client"

import * as React from "react"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const articles = [
  {
    title: "Designing for empty states",
    body: "Empty states are the first thing new users see. Treat them as onboarding: explain what belongs here, why it matters, and the single action that fills it.",
  },
  {
    title: "Microcopy that converts",
    body: "Buttons should say what happens next. Replace generic labels with verbs tied to the outcome, and keep error messages specific and kind.",
  },
  {
    title: "Dark mode pitfalls",
    body: "Pure black backgrounds cause halation. Use near-black surfaces, raise elevation with lighter tones, and re-check every brand color for contrast.",
  },
  {
    title: "Motion with purpose",
    body: "Animate to explain change, not to decorate. Short durations, natural easing, and respect for reduced motion keep interfaces feeling fast.",
  },
  {
    title: "Forms people finish",
    body: "Ask only what you need, group related fields, validate inline, and keep the primary action visible on small screens.",
  },
]

export default function SplitListAndPreview() {
  const [index, setIndex] = React.useState(0)
  const article = articles[index]!

  return (
    <div className="grid w-full max-w-lg grid-cols-[2fr_3fr] border">
      <ScrollArea className="h-64 border-r">
        <div className="flex flex-col p-1">
          {articles.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setIndex(i)}
              className={cn(
                "px-2 py-2 text-left text-xs hover:bg-muted",
                index === i && "bg-muted font-medium"
              )}
            >
              {a.title}
            </button>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="h-64">
        <article className="flex flex-col gap-2 p-4">
          <h3 className="text-sm font-semibold">{article.title}</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {article.body}
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {article.body}
          </p>
        </article>
      </ScrollArea>
    </div>
  )
}
