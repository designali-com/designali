import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const stats = [
  { value: 460, suffix: "+", label: "Production-ready blocks" },
  { value: 4000, suffix: "+", label: "Icons in @designali/icons" },
  { value: 2300, suffix: "+", label: "UI design examples" },
]

const initials = ["AI", "DA", "DS", "DV", "CL"]

export default function CallToAction07() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl border border-border">
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center md:py-8">
              <CounterNumber
                value={stat.value}
                suffix={stat.suffix}
                className="text-2xl font-medium tracking-tight md:text-4xl"
              />
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 px-6 py-14 text-center md:py-20">
          <div className="flex -space-x-2">
            {initials.map((name) => (
              <span
                key={name}
                className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
            Join the founders and teams already designing with Designali.
          </h2>
          <Button size="lg" nativeButton={false} render={<a href="#" />}>
            Get started today
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
