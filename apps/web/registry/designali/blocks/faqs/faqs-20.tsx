import {
  ArrowRight,
  Check,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const answers = [
  {
    q: "Is there a free plan?",
    yes: true,
    note: "Up to two calendars and 50 bookings a month, free forever.",
  },
  {
    q: "Do I need a credit card to start?",
    yes: false,
    note: "The 14-day Pro trial starts with just your email.",
  },
  {
    q: "Can clients book without an account?",
    yes: true,
    note: "They pick a time and enter their name and email. That's it.",
  },
  {
    q: "Does it sync with my existing calendar?",
    yes: true,
    note: "Two-way sync with any CalDAV or ICS calendar, every 60 seconds.",
  },
  {
    q: "Will you charge a fee per booking?",
    yes: false,
    note: "Plans are flat-rate. Card fees from your payment provider still apply.",
  },
  {
    q: "Can I take payments upfront?",
    yes: true,
    note: "Collect deposits or full payment at the moment of booking.",
  },
  {
    q: "Is there a long-term contract?",
    yes: false,
    note: "Pay monthly and cancel whenever you like from Settings.",
  },
  {
    q: "Can I use my own domain?",
    yes: true,
    note: "Point a subdomain like book.yourstudio.com at your page on Pro.",
  },
  {
    q: "Do reminders cost extra?",
    yes: false,
    note: "Email and SMS reminders are included on every paid plan.",
  },
]

export default function Faqs20() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Quick answers
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Yes or no? Straight answers about Slotwise.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex size-4 items-center justify-center bg-foreground text-background">
                <Check className="size-3" />
              </span>
              Yes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex size-4 items-center justify-center border border-border bg-background">
                <X className="size-3" />
              </span>
              No
            </span>
          </div>
        </div>
        <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {answers.map((item) => (
            <div key={item.q} className="flex gap-4 bg-background p-6">
              <span
                className={cn(
                  "flex h-7 w-12 shrink-0 items-center justify-center gap-1 text-xs font-semibold",
                  item.yes
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground"
                )}
              >
                {item.yes ? (
                  <Check className="size-3.5" />
                ) : (
                  <X className="size-3.5" />
                )}
                {item.yes ? "Yes" : "No"}
              </span>
              <div className="min-w-0">
                <dt className="text-sm font-medium">{item.q}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {item.note}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Got a question that needs more than one word?
          </p>
          <Button variant="outline" nativeButton={false} render={<a href="#" />}>
            Read the full FAQ
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
