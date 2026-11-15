import { ArrowRight, Play } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const bars = [42, 58, 51, 66, 72, 64, 80, 88, 76, 94, 90, 100]

export default function Hero07() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            New: forecasting with confidence intervals
            <ArrowRight className="size-3" />
          </a>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Revenue analytics your finance team will trust.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Connect Corvia, your CRM and your warehouse. Get MRR, churn and
            cohort reporting that reconciles to the cent, updated hourly.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Start 14-day trial
            </Button>
            <Button size="lg" variant="ghost" nativeButton={false} render={<a href="#" />}>
              <Play />
              Watch 2-minute demo
            </Button>
          </div>
        </div>
        <div className="border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground">
                Monthly recurring revenue
              </p>
              <p className="mt-1 text-3xl font-medium tracking-tight">
                $482,190
              </p>
            </div>
            <span className="border border-border px-2 py-0.5 text-xs text-emerald-600 dark:text-emerald-400">
              +8.4%
            </span>
          </div>
          <div className="mt-8 flex h-48 items-end gap-2">
            {bars.map((height, index) => (
              <div
                key={index}
                className={
                  index === bars.length - 1
                    ? "flex-1 bg-primary"
                    : "flex-1 bg-muted"
                }
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
          <div className="mt-6 grid grid-cols-3 border-t border-border pt-4 text-sm">
            <div>
              <p className="text-xs text-muted-foreground">Churn</p>
              <p className="mt-1 font-medium">1.9%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">ARPA</p>
              <p className="mt-1 font-medium">$214</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">NRR</p>
              <p className="mt-1 font-medium">118%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
