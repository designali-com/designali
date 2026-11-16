import {
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  Rocket,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function Pricing15() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing for every stage
          </h2>
          <p className="mt-3 text-muted-foreground">
            Most teams start on Pro. Everything else is here when you need it.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <div className="relative overflow-hidden border border-foreground bg-background p-8 md:col-span-4 md:row-span-2 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -bottom-24 size-72 rounded-full bg-gradient-to-tr from-primary/25 to-primary/0 blur-2xl"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Pro</h3>
                <span className="bg-foreground px-2 py-0.5 text-xs text-background">
                  Most popular
                </span>
              </div>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-semibold tracking-tight">$24</span>
                <span className="text-sm text-muted-foreground">
                  per editor / month
                </span>
              </p>
              <ul className="mt-8 grid flex-1 gap-3 text-sm sm:grid-cols-2">
                {[
                  "Unlimited projects and pages",
                  "Custom domains with SSL",
                  "Staging environments",
                  "Form submissions to Slack",
                  "Role-based permissions",
                  "Analytics and heatmaps",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Start 14-day trial
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Compare all features
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border bg-background p-6 md:col-span-2">
            <Rocket className="size-5 text-muted-foreground" />
            <h3 className="mt-4 font-medium">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              1 project, our subdomain, community support.
            </p>
            <p className="mt-auto pt-6 text-2xl font-semibold">$0</p>
          </div>
          <div className="flex flex-col border border-border bg-background p-6 md:col-span-2">
            <GraduationCap className="size-5 text-muted-foreground" />
            <h3 className="mt-4 font-medium">Students and nonprofits</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pro features at no cost with a verified account.
            </p>
            <a
              href="#"
              className="mt-auto pt-6 text-sm font-medium underline-offset-4 hover:underline"
            >
              Apply in 2 minutes
            </a>
          </div>
          <a
            href="#"
            className="group flex flex-col gap-6 border border-border bg-background p-6 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between md:col-span-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <Building2 className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Enterprise</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  SSO, SCIM, audit logs, custom contracts and a 99.99% SLA. Volume
                  pricing from 50 editors.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium">
              Talk to sales
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
