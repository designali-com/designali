import {
  ArrowRight,
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const perks = [
  "Unlimited projects and collaborators",
  "Version history for 90 days",
  "Export to React, Next.js and Tailwind CSS",
  "Priority support from the Designali studio",
]

export default function CallToAction09() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl bg-gradient-to-br from-primary via-primary to-primary p-px">
        <div className="grid gap-10 bg-background p-8 md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <span className="inline-flex border border-border px-2.5 py-1 text-xs text-muted-foreground">
              14-day trial, no card
            </span>
            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-5xl">
              Everything in Designali Pro, free for two weeks.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Spin up a workspace in under a minute. If Designali is not saving your
              team hours by day fourteen, walk away and keep your exports.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start free trial
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Compare plans
              </Button>
            </div>
          </div>
          <ul className="flex flex-col justify-center gap-4 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-foreground text-background">
                  <Check className="size-3" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
