"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const campaigns = [
  { name: "Designali Icons launch", channel: "Social", spend: 18, roas: 4.6, orders: 1240 },
  { name: "Designali brand search", channel: "Search", spend: 32, roas: 6.1, orders: 3120 },
  { name: "Templates carousel", channel: "Social", spend: 12, roas: 3.2, orders: 610 },
  { name: "Design podcast spot", channel: "Audio", spend: 24, roas: 1.4, orders: 280 },
  { name: "21st.dev affiliates", channel: "Affiliate", spend: 9, roas: 5.3, orders: 720 },
  { name: "UI blocks search", channel: "Search", spend: 41, roas: 2.2, orders: 1450 },
  { name: "UI kit bundles", channel: "Social", spend: 15, roas: 2.8, orders: 530 },
  { name: "Newsletter swap", channel: "Affiliate", spend: 5, roas: 3.9, orders: 210 },
  { name: "YouTube pre-roll test", channel: "Audio", spend: 36, roas: 0.9, orders: 190 },
]

const channelColor: Record<string, string> = {
  Social: "var(--chart-1)",
  Search: "var(--chart-2)",
  Audio: "var(--chart-4)",
  Affiliate: "var(--chart-3)",
}

const maxSpend = 45
const maxRoas = 7

export default function Analytics16() {
  const [selected, setSelected] = useState<string | null>("Designali brand search")
  const active = campaigns.find((c) => c.name === selected)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight">Spend vs. return by campaign</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Q4 paid media for Designali. Bubble size reflects attributed
            orders. Anything below the break-even line is losing money.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="border p-4 md:p-6">
            <div className="flex gap-2">
              <div className="flex w-8 shrink-0 flex-col justify-between py-1 text-right font-mono text-[10px] text-muted-foreground">
                {[7, 6, 5, 4, 3, 2, 1, 0].map((t) => (
                  <span key={t}>{t}x</span>
                ))}
              </div>
              <div className="relative aspect-[4/3] min-w-0 flex-1 border-b border-l sm:aspect-[16/9]">
                <div
                  className="absolute inset-x-0 border-t border-dashed border-rose-500/60"
                  style={{ top: `${100 - (1 / maxRoas) * 100}%` }}
                >
                  <span className="absolute -top-5 right-1 text-[10px] text-rose-600 dark:text-rose-400">
                    Break-even 1x
                  </span>
                </div>
                {campaigns.map((c) => {
                  const size = 14 + Math.sqrt(c.orders) * 0.7
                  const on = c.name === selected
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelected(c.name)}
                      aria-label={c.name}
                      aria-pressed={on}
                      className={cn(
                        "absolute -translate-x-1/2 translate-y-1/2 rounded-full border-2 transition-all",
                        on ? "z-10 border-foreground opacity-100" : "border-background opacity-70 hover:opacity-100"
                      )}
                      style={{
                        left: `${(c.spend / maxSpend) * 100}%`,
                        bottom: `${(c.roas / maxRoas) * 100}%`,
                        width: size,
                        height: size,
                        background: channelColor[c.channel],
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <div className="mt-2 ml-10 flex justify-between font-mono text-[10px] text-muted-foreground">
              {[0, 15, 30, 45].map((t) => (
                <span key={t}>${t}k</span>
              ))}
            </div>
            <p className="mt-1 text-center text-[10px] text-muted-foreground">Spend</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border bg-muted/40 p-6">
              {active ? (
                <>
                  <p className="text-xs text-muted-foreground">{active.channel}</p>
                  <p className="mt-1 text-lg font-medium">{active.name}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4">
                    <div>
                      <dt className="text-[10px] text-muted-foreground uppercase">Spend</dt>
                      <dd className="mt-1 font-mono text-lg">${active.spend}k</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-muted-foreground uppercase">ROAS</dt>
                      <dd className="mt-1 font-mono text-lg">{active.roas}x</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-muted-foreground uppercase">Orders</dt>
                      <dd className="mt-1 font-mono text-lg">{active.orders.toLocaleString()}</dd>
                    </div>
                  </dl>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">Select a bubble to inspect a campaign.</p>
              )}
            </div>
            <ul className="space-y-2 text-sm">
              {Object.entries(channelColor).map(([name, color]) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="size-3 rounded-full" style={{ background: color }} />
                  <span className="flex-1">{name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {campaigns.filter((c) => c.channel === name).length} campaigns
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
