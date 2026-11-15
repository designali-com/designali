import { ArrowRight, Hammer, Lightbulb, Rocket } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const steps = [
  {
    icon: Lightbulb,
    title: "Describe the workflow",
    body: "Write what should happen in plain English. Tidewater drafts the automation and shows every step before it runs.",
    meta: "about 2 minutes",
  },
  {
    icon: Hammer,
    title: "Connect your tools",
    body: "300+ integrations including your CRM, helpdesk, billing and internal APIs. Credentials stay encrypted in your region.",
    meta: "about 5 minutes",
  },
  {
    icon: Rocket,
    title: "Turn it on",
    body: "Runs on a schedule, a webhook or a button. Every run is logged, replayable and alertable.",
    meta: "instant",
  },
]

const brands = ["Halcyon", "Northpeak", "Ostara", "Brindle & Co", "Vantage Rail"]

export default function Hero20() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Workflow automation
            </p>
            <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
              From idea to running automation before lunch.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Tidewater replaces brittle scripts and one-off zaps with
              workflows your whole ops team can read, review and trust.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Build your first workflow
                <ArrowRight />
              </Button>
            </div>
          </div>

          <ol className="relative">
            <span aria-hidden className="absolute start-5 top-5 bottom-5 w-px bg-border" />
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center border border-border bg-background">
                  <step.icon className="size-4" />
                </span>
                <div className="pt-1.5">
                  <p className="font-mono text-xs text-muted-foreground">
                    Step {index + 1} / {step.meta}
                  </p>
                  <h2 className="mt-2 text-xl font-medium">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            Running 4 million workflows a day for operations teams at
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brands.map((brand) => (
              <li key={brand} className="text-lg font-semibold tracking-tight text-muted-foreground/70">
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
