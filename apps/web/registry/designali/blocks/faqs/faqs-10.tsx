import {
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const thread = [
  {
    q: "Is there a free plan, or just a trial?",
    a: "Both. The free plan never expires and covers one workspace with up to three projects. Paid plans come with a 14-day trial, no card needed.",
  },
  {
    q: "Can my clients see projects without paying for a seat?",
    a: "Yes. Viewers and commenters are always free, on every plan. You only pay for people who edit.",
  },
  {
    q: "We already use another tool. Is moving painful?",
    a: "Usually it takes an afternoon. Our importer brings across pages, assets and comments, and we'll run the migration for you on annual plans.",
  },
  {
    q: "What if I need help at 2am?",
    a: "Our docs and status page are always on. Business customers also get a 24/7 on-call engineer for production incidents.",
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
            The questions we hear most on sales calls, answered straight.
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
            Chat with our team
          </Button>
        </div>
      </div>
    </section>
  )
}
