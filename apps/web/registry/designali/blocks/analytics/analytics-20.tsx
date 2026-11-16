import {
  ArrowRight,
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const highlights = [
  { label: "Revenue", value: 212480, prefix: "$", suffix: "", decimals: 0, change: "+18%", good: true },
  { label: "Orders", value: 4906, prefix: "", suffix: "", decimals: 0, change: "+11%", good: true },
  { label: "Refund rate", value: 6.4, prefix: "", suffix: "%", decimals: 1, change: "+1.2 pts", good: false },
]

const movers = [
  { item: "Designali Icons Pro", note: "Top seller after Thursday launch", delta: "+214%" },
  { item: "Portfolio Simple template", note: "Featured in the Sunday newsletter", delta: "+96%" },
  { item: "Dalim UI kit", note: "Older kit, drop-off as expected", delta: "-38%" },
]

export default function Analytics20() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-4 md:px-10">
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="size-3.5" />
              Weekly digest
            </span>
            <span className="text-xs text-muted-foreground">Nov 9 – Nov 15, 2026</span>
          </div>

          <div className="px-6 py-10 md:px-10">
            <h2 className="text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              Your best week since launch, carried by one icon pack.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              designali.com sold{" "}
              <mark className="bg-primary/15 px-1 text-foreground dark:bg-primary/20">
                $212,480
              </mark>{" "}
              this week, up 18% on last week. Almost a third of that came from
              the{" "}
              <mark className="bg-chart-2/20 px-1 text-foreground">Designali Icons Pro</mark>,
              which launched on Thursday. Refunds ticked up to{" "}
              <mark className="bg-primary/15 px-1 text-foreground dark:bg-primary/20">6.4%</mark>,
              mostly duplicate license purchases.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-px border bg-border sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.label} className="bg-card p-5">
                  <dt className="text-xs text-muted-foreground">{h.label}</dt>
                  <dd className="mt-2">
                    <CounterNumber
                      value={h.value}
                      prefix={h.prefix}
                      suffix={h.suffix}
                      decimalPlaces={h.decimals}
                      className="text-2xl font-semibold tracking-tight"
                    />
                  </dd>
                  <dd
                    className={
                      h.good
                        ? "mt-1 text-xs text-primary dark:text-primary"
                        : "mt-1 text-xs text-primary dark:text-primary"
                    }
                  >
                    {h.change} week over week
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-12 text-xs tracking-widest text-muted-foreground uppercase">
              Biggest movers
            </h3>
            <ul className="mt-4 divide-y border-y">
              {movers.map((m) => (
                <li key={m.item} className="flex items-center justify-between gap-4 py-4">
                  <div className="min-w-0">
                    <p className="font-medium">{m.item}</p>
                    <p className="text-sm text-muted-foreground">{m.note}</p>
                  </div>
                  <span
                    className={
                      m.delta.startsWith("-")
                        ? "shrink-0 font-sans text-sm text-primary dark:text-primary"
                        : "shrink-0 font-sans text-sm text-primary dark:text-primary"
                    }
                  >
                    {m.delta}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button nativeButton={false} render={<a href="#" />}>
                Open full report
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button variant="outline" nativeButton={false} render={<a href="#" />}>
                View icon pack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
