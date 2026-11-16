import {
  ArrowRight,
} from "@designali/icons"

import { DotPattern } from "@/registry/designali/ui/dot-pattern"
import { Button } from "@workspace/ui/components/button"

const tiles = [
  { label: "Brand identity", image: "/stock/design.jpg", className: "col-span-2 row-span-2" },
  { label: "Web development", image: "/stock/development.jpg", className: "" },
  { label: "Strategy", image: "/stock/strategy.jpg", className: "" },
  { label: "CGI, 3D & motion", image: "/img/ask/ask3.jpg", className: "col-span-2" },
]

const rituals = [
  { title: "Design and code together", body: "The person who designs a screen also builds it, so details survive the handoff." },
  { title: "Ship small, ship often", body: "Work goes live on Vercel early, so feedback happens on real pages, not static mockups." },
  { title: "Share what we build", body: "Blocks, icons and templates from client work often become free resources on designali.com." },
]

export default function Sections16() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="grid auto-rows-[120px] grid-cols-3 gap-3 sm:auto-rows-[150px]">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`relative overflow-hidden bg-muted ${tile.className}`}
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="absolute inset-0 size-full object-cover"
              />
              <DotPattern className="text-white opacity-40 mix-blend-overlay" width={10} height={10} />
              <span className="absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-[11px] font-medium backdrop-blur">
                {tile.label}
              </span>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-foreground p-4 text-background">
            <p className="text-3xl font-semibold tracking-tight">460+</p>
            <p className="text-[11px] leading-4 opacity-70">Blocks shared on designali.com</p>
          </div>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Life at designali</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Serious about the craft. Not about ourselves.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
            Designali is a small design and development studio led by Ali
            Imam. We keep it small on purpose, so every project gets senior
            designers who also write the code.
          </p>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {rituals.map((ritual) => (
              <div key={ritual.title} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-sm font-medium">{ritual.title}</dt>
                <dd className="text-sm text-muted-foreground">{ritual.body}</dd>
              </div>
            ))}
          </dl>
          <Button className="mt-10" size="lg" nativeButton={false} render={<a href="mailto:hello@designali.com" />}>
            Work with us
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
