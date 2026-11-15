"use client"

import { useState } from "react"
import { Headphones, Pause, Play } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const episodes = [
  { n: 48, title: "Selling to procurement without losing your soul", guest: "Mira Castellano, Ledgerly", length: "52:14", date: "Nov 13", hue: "from-chart-1 to-chart-3" },
  { n: 47, title: "The founder who fired herself as CEO", guest: "Helena Achterberg, Quayside", length: "47:08", date: "Nov 6", hue: "from-chart-2 to-chart-4" },
  { n: 46, title: "Open-sourcing your core product, two years later", guest: "Diego Saldana, Tilework", length: "1:03:41", date: "Oct 30", hue: "from-chart-3 to-chart-5" },
  { n: 45, title: "Hiring your first designer when you cannot judge design", guest: "Amani Clarke, Bramble", length: "39:22", date: "Oct 23", hue: "from-chart-4 to-chart-1" },
  { n: 44, title: "Pricing in public: every change we made and why", guest: "Ravi Menon, Countbook", length: "58:50", date: "Oct 16", hue: "from-chart-5 to-chart-2" },
]

export default function Blog15() {
  const [playing, setPlaying] = useState<number | null>(null)
  const latest = episodes[0]

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex size-28 shrink-0 items-center justify-center bg-gradient-to-br from-chart-1 to-chart-4 text-background">
            <Headphones className="size-10" />
          </div>
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Podcast · Weekly</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Second Customer</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Conversations with founders about the messy stretch between the first
              sale and the first hundred. {latest ? `Latest: episode ${latest.n}.` : ""}
            </p>
          </div>
        </div>

        <ul className="mt-12 divide-y border-y">
          {episodes.map((ep) => {
            const on = playing === ep.n
            return (
              <li key={ep.n} className={cn("transition-colors", on && "bg-muted/50")}>
                <div className="flex items-center gap-4 py-5 sm:gap-6 sm:px-4">
                  <button
                    type="button"
                    onClick={() => setPlaying(on ? null : ep.n)}
                    aria-label={on ? `Pause episode ${ep.n}` : `Play episode ${ep.n}`}
                    className={cn(
                      "relative flex size-14 shrink-0 items-center justify-center bg-gradient-to-br text-background",
                      ep.hue
                    )}
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground">
                      {on ? <Pause className="size-3.5" /> : <Play className="size-3.5 translate-x-px" />}
                    </span>
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      Ep. {ep.n} · {ep.date}
                    </p>
                    <a href="#" className="mt-0.5 block leading-snug font-medium hover:underline hover:underline-offset-4">
                      {ep.title}
                    </a>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">with {ep.guest}</p>
                    {on && (
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-5 flex-1 items-end gap-[2px]">
                          {Array.from({ length: 48 }, (_, i) => (
                            <span
                              key={i}
                              className={cn("flex-1", i < 14 ? "bg-foreground" : "bg-foreground/20")}
                              style={{ height: `${30 + Math.abs(Math.sin(i * 1.7 + ep.n)) * 70}%` }}
                            />
                          ))}
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">12:40</span>
                      </div>
                    )}
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">{ep.length}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
