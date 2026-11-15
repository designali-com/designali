import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const steps = [
  {
    title: "Create a workspace",
    body: "Sign up with your work email. We import your team from Slack or Google automatically.",
    time: "30 sec",
  },
  {
    title: "Connect a repository",
    body: "Pick a GitHub or GitLab repo and Relay maps your services, owners and environments.",
    time: "2 min",
  },
  {
    title: "Ship your first preview",
    body: "Open a pull request and get a shareable preview URL with logs, before review even starts.",
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
                <span className="flex size-9 items-center justify-center bg-foreground font-mono text-sm text-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
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
          Total time to first deploy: about 6 minutes. Free on the Hobby plan.
        </p>
      </div>
    </section>
  )
}
