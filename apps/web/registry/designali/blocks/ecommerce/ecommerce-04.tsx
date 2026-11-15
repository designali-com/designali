import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const collections = [
  { name: "Living room", count: 84, tone: "from-orange-300/60 to-amber-100/30" },
  { name: "Kitchen & dining", count: 126, tone: "from-emerald-400/50 to-teal-100/30" },
  { name: "Bedroom", count: 59, tone: "from-sky-400/50 to-indigo-100/30" },
  { name: "Outdoor", count: 37, tone: "from-lime-500/50 to-yellow-100/30" },
]

export default function Ecommerce04() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <a
            href="#"
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-border bg-muted p-8 md:p-10 lg:row-span-2 lg:min-h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/50 via-orange-200/30 to-transparent transition-transform duration-700 group-hover:scale-105" />
            <div className="relative">
              <span className="bg-background px-2 py-1 text-xs">Winter edit · 2026</span>
              <h2 className="mt-4 text-4xl leading-tight font-medium tracking-tight md:text-5xl">
                Slow mornings,
                <br />
                warm rooms.
              </h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Wool throws, stoneware, and lighting chosen for the darker months.
              </p>
              <Button className="mt-6" render={<span />} nativeButton={false}>
                Shop the edit
                <ArrowRight />
              </Button>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href="#"
                className="group relative flex aspect-square flex-col justify-between overflow-hidden border border-border p-5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.tone} opacity-80 transition-opacity group-hover:opacity-100`} />
                <span className="relative self-end text-xs text-muted-foreground">
                  {collection.count} items
                </span>
                <span className="relative flex items-center justify-between text-sm font-medium md:text-base">
                  {collection.name}
                  <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
