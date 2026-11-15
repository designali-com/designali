import { ArrowRight } from "lucide-react"

const categories = [
  { name: "Lighting", count: 48, tone: "from-amber-300 via-orange-400 to-rose-500", className: "sm:col-span-2 sm:row-span-2", feature: true },
  { name: "Seating", count: 112, tone: "from-stone-300 to-stone-500", className: "" },
  { name: "Tables", count: 64, tone: "from-emerald-300 to-teal-600", className: "" },
  { name: "Storage", count: 39, tone: "from-sky-300 to-indigo-500", className: "sm:col-span-2" },
  { name: "Textiles", count: 87, tone: "from-rose-200 to-fuchsia-500", className: "" },
  { name: "Objects", count: 156, tone: "from-lime-200 to-green-600", className: "" },
]

export default function Grid09() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Shop by room</h2>
          <a href="#" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex">
            All 506 pieces <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-4 md:auto-rows-[220px]">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className={`group relative flex overflow-hidden border border-border ${category.className}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.tone} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-5 text-white">
                <div>
                  <p className="text-xs opacity-80">{category.count} pieces</p>
                  <h3
                    className={`font-semibold tracking-tight ${
                      category.feature ? "text-4xl md:text-5xl" : "text-xl"
                    }`}
                  >
                    {category.name}
                  </h3>
                  {category.feature && (
                    <p className="mt-2 max-w-xs text-sm opacity-90">
                      Hand-blown glass pendants and brass task lamps, made in small batches.
                    </p>
                  )}
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center bg-white text-neutral-900 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
