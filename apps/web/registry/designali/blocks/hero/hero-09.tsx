import { ArrowUpRight } from "lucide-react"

const tiles = [
  { label: "Brand identity", className: "from-chart-1/60 to-chart-2/30" },
  { label: "Product design", className: "from-chart-3/60 to-chart-4/30" },
  { label: "Motion", className: "from-chart-5/60 to-chart-1/30" },
  { label: "3D and CGI", className: "from-chart-2/60 to-chart-5/30" },
]

const services = ["Strategy", "Identity", "Web", "Motion", "CGI"]

export default function Hero09() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <h1 className="text-5xl leading-none font-medium tracking-tight md:text-8xl">
            Northwind
            <br />
            <span className="text-muted-foreground">Studio</span>
          </h1>
          <div>
            <p className="text-base leading-7 text-muted-foreground">
              A design practice for companies at the edge of a category. We
              help them look like the leader before they are one.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="border border-border px-3 py-1 text-xs"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile, index) => (
            <a
              key={tile.label}
              href="#"
              className={`group relative flex aspect-[3/4] flex-col justify-end border border-border bg-gradient-to-br p-4 ${tile.className} ${index % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <div className="flex items-center justify-between bg-background/80 px-3 py-2 text-sm backdrop-blur">
                {tile.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
