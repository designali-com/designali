import {
  ArrowRight,
  Play,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

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
            New: 460+ blocks for Next.js and Tailwind
            <ArrowRight className="size-3" />
          </a>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Design se code tak, with Designali Pro.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Get every Designali template, block, landing page and icon in one
            library. Copy the code, drop it into your Next.js app and ship.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Get Designali Pro
            </Button>
            <Button size="lg" variant="ghost" nativeButton={false} render={<a href="#" />}>
              <Play />
              Watch the walkthrough
            </Button>
          </div>
        </div>
        <div className="border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground">
                Monthly downloads on designali.com
              </p>
              <CounterNumber
                value={48190}
                size="lg"
                className="mt-1 block font-medium tracking-tight"
              />
            </div>
            <span className="border border-border px-2 py-0.5 text-xs text-primary dark:text-primary">
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
          <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
          <div className="mt-6 grid grid-cols-3 border-t border-border pt-4 text-sm">
            <div>
              <p className="text-xs text-muted-foreground">Blocks</p>
              <CounterNumber value={460} suffix="+" size="sm" className="mt-1 block font-medium" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Pages</p>
              <CounterNumber value={240} suffix="+" size="sm" className="mt-1 block font-medium" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Icons</p>
              <CounterNumber value={4000} suffix="+" size="sm" className="mt-1 block font-medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
