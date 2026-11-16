import {
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const marks = [
  { initials: "DA", className: "bg-primary" },
  { initials: "DU", className: "bg-primary" },
  { initials: "DI", className: "bg-primary" },
  { initials: "DF", className: "bg-primary" },
  { initials: "DW", className: "bg-primary" },
]

const names = ["Designali Blocks", "Designali Icons", "Designali Templates", "Dalim UI", "Dalim Works"]

export default function Clients20() {
  return (
    <section className="w-full bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 border border-border bg-card p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex -space-x-2">
              {marks.map((mark) => (
                <span
                  key={mark.initials}
                  className={`flex size-11 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ring-card ${mark.className}`}
                >
                  {mark.initials}
                </span>
              ))}
              <span className="flex size-11 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground ring-2 ring-card">
                +4k
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-primary dark:text-primary">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <CounterNumber value={4.9} decimalPlaces={1} suffix=" / 5" className="text-sm font-medium tracking-normal" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Rated by 4,200+ designers and developers using{" "}
                <span className="text-foreground">{names.join(", ")}</span>{" "}
                and more.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Join them free
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              Read reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
