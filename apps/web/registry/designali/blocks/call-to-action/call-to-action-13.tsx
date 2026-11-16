import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const steps = [
  {
    title: "Pick a Designali template",
    body: "Browse /templates and pick a starting point, from portfolios to design agencies.",
    time: "30 sec",
  },
  {
    title: "Add blocks and icons",
    body: "Install Designali blocks and @designali/icons into your Next.js repo with one command.",
    time: "2 min",
  },
  {
    title: "Ship to Vercel",
    body: "Push to GitHub and get a production-ready site on Vercel, before your coffee cools.",
    time: "4 min",
  },
]

export default function CallToAction13() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
            Live in production before your coffee cools.
          </h2>
          <Button size="lg" nativeButton={false} render={<a href="#" />}>
            Start step one
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative bg-background p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center bg-foreground font-sans text-sm text-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  ~{step.time}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Total time to first deploy: about 6 minutes. Free blocks included.
        </p>
      </div>
    </section>
  )
}
