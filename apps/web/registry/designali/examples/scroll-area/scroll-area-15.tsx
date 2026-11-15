import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const products = [
  { name: "Linen Shirt", price: "$68", tone: "from-stone-200 to-stone-400" },
  { name: "Canvas Tote", price: "$32", tone: "from-amber-200 to-orange-400" },
  { name: "Wool Beanie", price: "$24", tone: "from-slate-300 to-slate-600" },
  {
    name: "Trail Sneaker",
    price: "$120",
    tone: "from-emerald-200 to-teal-500",
  },
  { name: "Rain Shell", price: "$145", tone: "from-sky-200 to-indigo-500" },
  { name: "Desk Lamp", price: "$89", tone: "from-rose-200 to-fuchsia-500" },
]

export default function ProductShelfHorizontal() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">You might also like</span>
        <a
          href="#"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          View all
        </a>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max gap-3 pb-3">
          {products.map((p) => (
            <div key={p.name} className="flex w-32 shrink-0 flex-col gap-2">
              <div className={cn("aspect-[4/5] bg-gradient-to-br", p.tone)} />
              <div className="text-xs">
                <p className="truncate font-medium">{p.name}</p>
                <p className="text-muted-foreground">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
