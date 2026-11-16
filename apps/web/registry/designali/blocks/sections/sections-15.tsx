import {
  ArrowUpRight,
} from "@designali/icons"

const offices = [
  {
    city: "Design",
    role: "Brand identity & UI/UX",
    address: "designali.com/ui",
    href: "https://www.designali.com/ui",
    count: "2300+",
    unit: "UI designs",
    tag: "Figma",
    image: "/stock/design.jpg",
  },
  {
    city: "Development",
    role: "Next.js websites & products",
    address: "designali.com/blocks",
    href: "https://www.designali.com/blocks",
    count: "460+",
    unit: "blocks",
    tag: "Next.js",
    image: "/stock/development.jpg",
  },
  {
    city: "Strategy",
    role: "Design systems & AI workflows",
    address: "designali.com/work",
    href: "https://www.designali.com/work",
    count: "240+",
    unit: "landing pages",
    tag: "Systems",
    image: "/stock/strategy.jpg",
  },
]

export default function Sections15() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">How we work</h2>
          <p className="text-sm text-muted-foreground">
            Three disciplines, one studio. design se code tak.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <a key={office.city} href={office.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={office.image}
                  alt={office.city}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/80 px-2 py-1 text-[10px] tracking-wider uppercase backdrop-blur">
                  {office.tag}
                </span>
                <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-background transition-transform group-hover:-translate-y-1">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{office.city}</h3>
                  <p className="text-sm text-muted-foreground">{office.role}</p>
                </div>
                <p className="text-right text-sm">
                  {office.count}
                  <span className="block text-xs text-muted-foreground">{office.unit}</span>
                </p>
              </div>
              <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">{office.address}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
