import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const products = [
  { name: "Portfolio Simple", price: "$68", tone: "from-muted to-muted-foreground" },
  { name: "Design Agency", price: "$32", tone: "from-primary/20 to-primary" },
  { name: "Resort", price: "$24", tone: "from-border to-muted-foreground" },
  {
    name: "AI Starter",
    price: "$120",
    tone: "from-primary/20 to-primary",
  },
  { name: "Vercel Starter", price: "$145", tone: "from-primary/20 to-primary" },
  { name: "Icons Pack", price: "$89", tone: "from-primary/20 to-primary" },
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
