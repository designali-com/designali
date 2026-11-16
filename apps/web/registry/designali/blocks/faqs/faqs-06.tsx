"use client"

import { useState } from "react"
import {
  ArrowRight,
  MessageCircle,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const faqs = [
  {
    question: "Is Designali free to use?",
    answer:
      "Many blocks, icons and logos on designali.com are free. Designali Pro unlocks the full library of templates, landing pages and premium blocks.",
  },
  {
    question: "What do I get with Designali Pro?",
    answer:
      "Access to 460+ blocks, 240+ landing pages, templates and 2300+ UI examples, all built with Next.js, React, TypeScript and Tailwind CSS.",
  },
  {
    question: "Can I bring my existing components?",
    answer:
      "Yes. Blocks use semantic tokens like background, foreground and primary, so they sit next to your own components and inherit your theme.",
  },
  {
    question: "Can I hire Ali Imam for a custom project?",
    answer:
      "Yes. Designali takes on brand identity, UI/UX design and Next.js development projects. Share your brief at hello@designali.com.",
  },
  {
    question: "How does support work?",
    answer:
      "Write to support@designali.com with a link to the block or template you are using and you will get a reply from the Designali studio.",
  },
]

export default function Faqs06() {
  const [selected, setSelected] = useState(0)
  const current = faqs[selected] ?? faqs[0]!

  return (
    <section className="w-full border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[1fr_1.2fr]">
        <div className="border-border p-6 py-16 md:border-e md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions
          </h2>
          <ul className="mt-10 border-t border-border">
            {faqs.map((faq, index) => (
              <li key={faq.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-4 text-start text-sm transition-colors",
                    selected === index
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {faq.question}
                  <ArrowRight
                    className={cn(
                      "size-4 shrink-0 transition-transform",
                      selected === index ? "translate-x-0" : "-translate-x-1 opacity-0"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-10 bg-muted/40 p-6 py-16 md:p-12">
          <div>
            <span className="font-sans text-xs text-muted-foreground">
              {String(selected + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-2xl font-medium tracking-tight">
              {current.question}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {current.answer}
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="size-5 text-muted-foreground" />
              <p className="text-sm">Still have a question?</p>
            </div>
            <Button size="md" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
