import {
  ArrowUpRight,
} from "@designali/icons"

import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const regions = [
  {
    region: "Americas",
    cities: [
      { city: "Brand identity", type: "Remote" },
      { city: "Web development", type: "Remote" },
      { city: "UI/UX design", type: "Remote" },
    ],
  },
  {
    region: "Europe",
    cities: [
      { city: "Design systems", type: "Remote" },
      { city: "Templates", type: "Online" },
      { city: "Next.js builds", type: "Remote" },
    ],
  },
  {
    region: "Asia Pacific",
    cities: [
      { city: "CGI and 3D", type: "Remote" },
      { city: "Motion design", type: "Remote" },
      { city: "AI workflows", type: "Remote" },
    ],
  },
]

const dots: [number, number][] = [
  [18, 38], [24, 46], [33, 72], [48, 30], [46, 34], [53, 32],
  [86, 76], [70, 54], [82, 38],
]

export default function Location05() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[2.4/1] w-full border border-background/15">
          <DotPattern width={22} height={22} cx={11} cy={11} dotSize={1} className="text-background/40" />
          <svg viewBox="0 0 100 42" className="absolute inset-0 h-full w-full">
            {dots.map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y * 0.42} r="1.6" className="fill-background/15" />
                <circle cx={x} cy={y * 0.42} r="0.6" className="fill-background" />
              </g>
            ))}
          </svg>
          <p className="absolute start-4 top-4 text-xs tracking-widest text-background/60 uppercase">
            Designali &middot; Remote, worldwide
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {regions.map((group) => (
            <div key={group.region}>
              <h3 className="border-b border-background/15 pb-3 text-sm text-background/60">
                {group.region}
              </h3>
              <ul>
                {group.cities.map((item) => (
                  <li key={item.city}>
                    <a
                      href="#"
                      className="group flex items-center justify-between border-b border-background/15 py-4"
                    >
                      <span className="text-xl font-medium tracking-tight">
                        {item.city}
                      </span>
                      <span className="flex items-center gap-2 text-xs text-background/60">
                        {item.type}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
