import { Plus, Star } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const products = [
  { name: "Linen Overshirt", color: "Sand", price: 128, rating: 4.8, reviews: 214, badge: "New", tone: "from-amber-200/70 to-stone-300/40" },
  { name: "Merino Crew", color: "Charcoal", price: 96, rating: 4.9, reviews: 532, badge: "", tone: "from-zinc-500/60 to-zinc-300/30" },
  { name: "Canvas Tote", color: "Olive", price: 54, rating: 4.7, reviews: 98, badge: "Low stock", tone: "from-lime-700/50 to-lime-200/30" },
  { name: "Wool Beanie", color: "Rust", price: 38, rating: 4.6, reviews: 167, badge: "", tone: "from-orange-700/50 to-orange-200/30" },
  { name: "Selvedge Denim", color: "Indigo", price: 168, rating: 4.9, reviews: 408, badge: "Bestseller", tone: "from-indigo-800/60 to-indigo-300/30" },
  { name: "Leather Card Case", color: "Tan", price: 46, rating: 4.8, reviews: 76, badge: "", tone: "from-yellow-800/50 to-amber-200/30" },
  { name: "Cotton Socks, 3-pack", color: "Mixed", price: 28, rating: 4.5, reviews: 301, badge: "", tone: "from-rose-400/50 to-sky-200/30" },
  { name: "Waxed Field Jacket", color: "Forest", price: 245, rating: 4.9, reviews: 129, badge: "New", tone: "from-emerald-900/60 to-emerald-400/30" },
]

export default function Ecommerce01() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Autumn essentials</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Made in small batches from natural fibres. Free returns within 30 days.
            </p>
          </div>
          <a href="#" className="hidden text-sm underline-offset-4 hover:underline sm:block">
            Shop all
          </a>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group relative border-r border-b border-border">
              <div className={`relative aspect-[4/5] bg-gradient-to-b ${product.tone}`}>
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
                  <Star className="size-3 fill-current text-amber-500" />
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
