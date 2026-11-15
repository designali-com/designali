import { ArrowUpRight } from "lucide-react"

const panels = [
  {
    title: "Coastal",
    count: "128 photos",
    body: "Cliffs, harbours and long grey beaches from the Atlantic edge.",
    gradient: "linear-gradient(180deg, var(--chart-2), var(--chart-3))",
  },
  {
    title: "Urban",
    count: "214 photos",
    body: "Night streets, stairwells and rooftops across eleven cities.",
    gradient: "linear-gradient(200deg, var(--chart-5), var(--chart-1))",
  },
  {
    title: "Alpine",
    count: "96 photos",
    body: "High passes, glacier light and the huts that keep climbers alive.",
    gradient: "linear-gradient(160deg, var(--chart-4), var(--chart-2))",
  },
  {
    title: "Desert",
    count: "73 photos",
    body: "Dunes at blue hour and the roads that disappear into them.",
    gradient: "linear-gradient(120deg, var(--chart-1), var(--chart-4))",
  },
  {
    title: "Forest",
    count: "151 photos",
    body: "Moss, fog and old growth, mostly shot before seven in the morning.",
    gradient: "linear-gradient(240deg, var(--chart-3), var(--chart-5))",
  },
]

export default function Gallery14() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Browse by landscape
          </h2>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
            View all 662 photos <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="mt-10 flex h-[640px] flex-col gap-2 md:h-[480px] md:flex-row">
          {panels.map((panel) => (
            <a
              key={panel.title}
              href="#"
              className="group relative flex min-h-0 flex-1 overflow-hidden border border-border transition-[flex-grow] duration-500 ease-out hover:flex-[3] focus-visible:flex-[3] focus-visible:outline-none"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: panel.gradient }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative mt-auto w-full p-4 text-white md:p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-medium md:[writing-mode:vertical-rl] md:group-hover:[writing-mode:horizontal-tb] md:group-focus-visible:[writing-mode:horizontal-tb]">
                    {panel.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 max-w-xs text-sm text-white/80">{panel.body}</p>
                    <p className="mt-2 font-mono text-xs text-white/60">{panel.count}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
