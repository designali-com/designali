import {
  Check,
  Eye,
  FileCode,
  PackageCheck,
  Palette,
  Rocket,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  { icon: Check, title: "Brief confirmed", detail: "Kickoff call with Ali Imam", time: "Mon 10 Nov, 09:14", done: true },
  { icon: Palette, title: "Designed", detail: "Brand identity and UI in Figma", time: "Mon 10 Nov, 16:40", done: true },
  { icon: FileCode, title: "In development", detail: "Next.js build on Vercel preview", time: "Tue 11 Nov, 05:22", done: true },
  { icon: Eye, title: "In review", detail: "Final feedback round, 6 items left", time: "Today, 08:03", done: true, current: true },
  { icon: Rocket, title: "Launched", detail: "Expected 12:00 - 14:00", time: "Today", done: false },
]

const items = [
  { name: "Brand identity kit", qty: 1, image: "/images/templates/dalim-agency-old.jpg" },
  { name: "Next.js website", qty: 1, image: "/images/templates/vercel.jpg" },
  { name: "Social media templates", qty: 2, image: "/images/templates/dalim-works-old.jpg" },
]

export default function Ecommerce10() {
  const doneCount = events.filter((e) => e.done).length
  const progress = ((doneCount - 1) / (events.length - 1)) * 100

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-xs text-muted-foreground">Project #DA-58214</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Launching today</h2>
            <p className="mt-1 text-sm text-muted-foreground">Between 12:00 and 14:00 · 3 items</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Change launch time</Button>
            <Button>Open preview</Button>
          </div>
        </div>

        {/* Horizontal progress (desktop) */}
        <div className="mt-10 hidden md:block">
          <div className="relative h-1 bg-muted">
            <div className="absolute inset-y-0 left-0 bg-foreground" style={{ width: `${progress}%` }} />
          </div>
          <ol className="mt-4 grid grid-cols-5 gap-4">
            {events.map((e) => (
              <li key={e.title} className={cn(!e.done && "text-muted-foreground")}>
                <p className="text-sm font-medium">{e.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.time}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <ol className="border border-border p-6">
            {events
              .slice()
              .reverse()
              .map((e, i, arr) => (
                <li key={e.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < arr.length - 1 && (
                    <span className="absolute top-8 bottom-0 left-4 w-px bg-border" />
                  )}
                  <span
                    className={cn(
                      "relative flex size-8 shrink-0 items-center justify-center border",
                      e.current
                        ? "border-foreground bg-foreground text-background"
                        : e.done
                          ? "border-border bg-background"
                          : "border-dashed border-border bg-background text-muted-foreground"
                    )}
                  >
                    <e.icon className="size-4" />
                  </span>
                  <div className="pt-1">
                    <p className={cn("text-sm font-medium", !e.done && "text-muted-foreground")}>{e.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {e.detail} · {e.time}
                    </p>
                  </div>
                </li>
              ))}
          </ol>

          <div className="space-y-4">
            <div className="border border-border p-6">
              <p className="flex items-center gap-2 text-sm font-medium">
                <PackageCheck className="size-4" />
                In this project
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 text-sm">
                    <img src={item.image} alt={item.name} className="size-10 shrink-0 object-cover object-top border border-border" />
                    <span className="flex-1">{item.name}</span>
                    <span className="text-muted-foreground">x{item.qty}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted p-6 text-sm">
              <p className="font-medium">Client</p>
              <p className="mt-2 text-muted-foreground">
                Designali client
                <br />
                client@example.com
                <br />
                Hosted on Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
