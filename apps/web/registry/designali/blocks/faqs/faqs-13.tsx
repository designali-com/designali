import {
  CalendarDays,
  Mail,
  MessageSquare,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const small = [
  {
    q: "Can I pause my membership?",
    a: "Yes, for up to three months a year. Your rate is locked while paused.",
  },
  {
    q: "Is there a contract?",
    a: "No. Monthly plans cancel any time; annual plans refund unused months.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. We can sign yours or send our mutual NDA the same day.",
  },
  {
    q: "What timezone are you in?",
    a: "Our team covers CET to PST, so you get updates every working day.",
  },
]

const ghostOnDark =
  "border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background dark:border-background/30 dark:bg-transparent"

export default function Faqs13() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          Questions about the design subscription
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <div className="flex flex-col justify-between border border-border bg-background p-8 md:col-span-2 md:row-span-2">
            <span className="font-sans text-xs text-muted-foreground">
              Most asked
            </span>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                How does unlimited requests actually work?
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Add as many requests to your board as you like. We work through
                them one at a time (two on the Pro plan), and most requests are
                delivered in 48 hours. Bigger pieces like a full landing page
                are broken into milestones so you see progress every two days.
              </p>
            </div>
          </div>
          {small.map((item) => (
            <div key={item.q} className="border border-border bg-background p-6">
              <h3 className="text-sm font-medium">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.a}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-6 border border-border bg-foreground p-8 text-background md:col-span-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium">Still deciding?</h3>
              <p className="mt-1 text-sm text-background/60">
                Pick the channel that suits you. We reply within one working day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-background text-foreground hover:bg-background/90"
                nativeButton={false}
                render={<a href="#" />}
              >
                <CalendarDays data-icon="inline-start" />
                Book a call
              </Button>
              <Button
                variant="outline"
                className={ghostOnDark}
                nativeButton={false}
                render={<a href="#" />}
              >
                <MessageSquare data-icon="inline-start" />
                Live chat
              </Button>
              <Button
                variant="outline"
                className={ghostOnDark}
                nativeButton={false}
                render={<a href="#" />}
              >
                <Mail data-icon="inline-start" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
