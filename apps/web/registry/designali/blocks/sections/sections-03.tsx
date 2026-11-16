import {
  ArrowUpRight,
} from "@designali/icons"

import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"
import { Button } from "@workspace/ui/components/button"

const highlights = [
  "Designed in Figma, built in Next.js",
  "One design system for brand, UI and code",
  "Deployed on Vercel, ready for production",
]

export default function Sections03() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-border bg-muted">
          <GridPattern className="opacity-60" width={32} height={32} />
          <Macbook
            variant="macbook-pro"
            color="silver"
            size="sm"
            className="relative max-w-[90%]"
          >
            <img
              src="/img/dashboard-1-light.jpg"
              alt="Designali dashboard design"
              className="size-full object-cover"
            />
          </Macbook>
          <span className="absolute top-4 right-4 border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
            designali.com
          </span>
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Design & Code
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From Figma file to live product, in one studio.
          </h2>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Designali designs and builds your product end to end. Brand
            identity, UI/UX and production-ready code come from the same
            hands, so what you approve is exactly what ships.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {highlights.map((item, index) => (
              <li key={item} className="flex items-center gap-4 py-3 text-sm">
                <span className="font-sans text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-8" size="lg" variant="outline">
            See our work
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
