import {
  ArrowUpRight,
} from "@designali/icons"

const tiles = [
  { label: "Brand identity", image: "/images/templates/dalim-agency-old.jpg" },
  { label: "UI/UX design", image: "/images/templates/design-agency.jpg" },
  { label: "Motion", image: "/images/templates/dalim-visuals-old.jpg" },
  { label: "3D and CGI", image: "/images/templates/aliimam-comp.jpg" },
]

const services = ["Identity", "UI/UX", "Next.js", "Motion", "CGI"]

export default function Hero09() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <h1 className="text-5xl leading-none font-medium tracking-tight md:text-8xl">
            Designali
            <br />
            <span className="text-muted-foreground">Studio</span>
          </h1>
          <div>
            <p className="text-base leading-7 text-muted-foreground">
              A design and development studio by Ali Imam. Thoughtful design
              meets production-ready code — design se code tak.
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
              className={`group relative flex aspect-[3/4] flex-col justify-end overflow-hidden border border-border bg-muted p-4 ${index % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <img
                src={tile.image}
                alt={`${tile.label} — Designali project`}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="relative flex items-center justify-between bg-background/80 px-3 py-2 text-sm backdrop-blur">
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
