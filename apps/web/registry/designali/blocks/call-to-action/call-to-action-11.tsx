import {
  ArrowRight,
  ChartColumn as BarChart3,
  Bell,
  Search,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const bars = [40, 62, 48, 75, 58, 88, 70, 95]

export default function CallToAction11() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            See every metric that matters, in one tab.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
            Designali dashboard blocks turn revenue, retention and product usage into
            a single live view your whole team can read without a SQL course.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Browse dashboard blocks
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<a href="#" />}
            >
              View live demo
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Built with Next.js, React and Tailwind CSS. Copy, paste, ship.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-sky-200/60 to-indigo-200/40 blur-2xl dark:from-sky-900/30 dark:to-indigo-900/20" />
          <div className="relative border border-border bg-card shadow-xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <div className="ml-4 flex flex-1 items-center gap-2 bg-muted px-3 py-1 text-xs text-muted-foreground">
                <Search className="size-3" />
                designali.com/blocks/analytics
              </div>
              <Bell className="ml-2 hidden size-4 text-muted-foreground sm:block" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
              {[
                ["MRR", "$84.2k", "+12%"],
                ["Churn", "1.8%", "-0.4%"],
                ["Active", "9,312", "+6%"],
              ].map(([label, value, delta]) => (
                <div key={label} className="p-4">
                  <div className="text-[11px] text-muted-foreground">{label}</div>
                  <div className="mt-1 text-lg font-medium md:text-xl">{value}</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
                    {delta}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <BarChart3 className="size-3.5" />
                Weekly revenue
              </div>
              <div className="mt-4 flex h-36 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-sky-500 to-indigo-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
