import {
  Plus,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Macbook } from "@/registry/designali/ui/apple/macbook"

const products = [
  { name: "Portfolio Simple Template", color: "Next.js + Figma", price: 49, rating: 4.8, reviews: 214, badge: "New", image: "/images/templates/portfolio-simple.jpg" },
  { name: "Design Agency Template", color: "Next.js + Figma", price: 79, rating: 4.9, reviews: 532, badge: "", image: "/images/templates/design-agency.jpg" },
  { name: "Designali Icons Pro", color: "4,000+ icons", price: 39, rating: 4.7, reviews: 98, badge: "Popular", image: "/images/templates/dalim-icons-old.jpg" },
  { name: "Designali Logos Pack", color: "SVG + React", price: 29, rating: 4.6, reviews: 167, badge: "", image: "/images/templates/dalim-graphic-old.jpg" },
  { name: "Blocks Pro Bundle", color: "460+ blocks", price: 149, rating: 4.9, reviews: 408, badge: "Bestseller", image: "/images/templates/aliimam-comp.jpg" },
  { name: "Apple Device Mockups", color: "iPhone, iPad, MacBook", price: 35, rating: 4.8, reviews: 76, badge: "", image: "/images/templates/dalim-ui-old.jpg" },
  { name: "Vectors Starter Pack", color: "@designali/vectors", price: 19, rating: 4.5, reviews: 301, badge: "", image: "/images/templates/dalim-visuals-old.jpg" },
  { name: "Designali Pro, Lifetime", color: "Everything included", price: 249, rating: 4.9, reviews: 129, badge: "New", image: "/images/templates/vercel.jpg" },
]

export default function Ecommerce01() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Designali essentials</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Templates, blocks and icon packs from the Designali studio. Free updates for 12 months.
            </p>
          </div>
          <a href="#" className="hidden text-sm underline-offset-4 hover:underline sm:block">
            Shop all
          </a>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group relative border-r border-b border-border">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-muted px-3">
                <Macbook variant="macbook-air" color="silver" size="sm" className="w-full! max-w-full transition-transform duration-500 group-hover:scale-105">
                  <img src={product.image} alt={product.name} className="size-full object-cover object-top" />
                </Macbook>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-background px-2 py-0.5 text-[10px] tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
                <Button
                  size="icon"
                  variant="outline"
                  aria-label={`Add ${product.name} to cart`}
                  className="absolute right-3 bottom-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100"
                >
                  <Plus />
                </Button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <a href="#" className="text-sm font-medium hover:underline">
                    {product.name}
                  </a>
                  <span className="text-sm tabular-nums">${product.price}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{product.color}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="size-3 fill-current text-primary" />
                  {product.rating} ({product.reviews})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
