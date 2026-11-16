import {
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const thread = [
  {
    q: "Are Designali blocks free, or is it just a trial?",
    a:
      "Both exist. Plenty of blocks, icons and logos are free on designali.com, and Designali Pro unlocks the full library of templates and landing pages.",
  },
  {
    q: "Can my clients use sites I build with Designali templates?",
    a:
      "Yes. You can deliver client work built with Designali templates and blocks. You just can't resell the raw files as your own kit.",
  },
  {
    q: "We already have a design system. Will the blocks clash?",
    a:
      "Unlikely. Blocks only use semantic tokens like background, muted and primary, so they pick up your theme as soon as you paste them in.",
  },
  {
    q: "Can I talk to the person who built them?",
    a:
      "Yes. Ali Imam designs and codes every Designali block. Write to hello@designali.com or reach out on X at @designali_com.",
  },
]

export default function Faqs10() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            You asked, we answered
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The questions designers and developers ask Designali most, answered straight.
          </p>
        </div>
        <div className="mt-14 space-y-8">
          {thread.map((item) => (
            <div key={item.q} className="space-y-3">
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-foreground px-4 py-3 text-sm text-background md:max-w-[70%]">
                  {item.q}
                </p>
              </div>
              <div className="flex items-end gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                  <Sparkles className="size-4" />
                </span>
                <p className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 text-sm leading-6 md:max-w-[75%]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border pt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Got a question that isn&apos;t here?
          </p>
          <Button nativeButton={false} render={<a href="#" />}>
            Email hello@designali.com
          </Button>
        </div>
      </div>
    </section>
  )
}
