import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const collections = [
  { name: "Templates", count: 84, image: "/images/templates/design-agency.jpg" },
  { name: "Blocks", count: 460, image: "/images/templates/aliimam-comp.jpg" },
  { name: "Icon packs", count: 59, image: "/images/templates/dalim-icons-old.jpg" },
  { name: "UI kits", count: 37, image: "/images/templates/dalim-ui-old.jpg" },
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-transparent" />
            <DotPattern className="text-foreground/40 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]" />
            <div className="relative mb-8 flex justify-center transition-transform duration-700 group-hover:scale-105">
              <Macbook variant="macbook-pro" color="silver" size="sm" className="w-full! max-w-md">
                <img src="/images/templates/portfolio-simple.jpg" alt="Portfolio Simple Template" className="size-full object-cover object-top" />
              </Macbook>
            </div>
            <div className="relative">
              <span className="bg-background px-2 py-1 text-xs">Designali edit · 2026</span>
              <h2 className="mt-4 text-4xl leading-tight font-medium tracking-tight md:text-5xl">
                Design se
                <br />
                code tak.
              </h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Templates, blocks and icons chosen by Ali Imam for your next launch.
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
                <img src={collection.image} alt="" className="absolute inset-0 size-full object-cover object-top opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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
