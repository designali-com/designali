import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  {
    name: "Linen Shirt",
    qty: 2,
    price: 68,
    tone: "from-stone-200 to-stone-400",
  },
  {
    name: "Canvas Tote",
    qty: 1,
    price: 32,
    tone: "from-amber-200 to-orange-400",
  },
  {
    name: "Wool Beanie",
    qty: 1,
    price: 24,
    tone: "from-slate-300 to-slate-600",
  },
  {
    name: "Trail Sneaker",
    qty: 1,
    price: 120,
    tone: "from-emerald-200 to-teal-500",
  },
  {
    name: "Rain Shell",
    qty: 1,
    price: 145,
    tone: "from-sky-200 to-indigo-500",
  },
  {
    name: "Merino Socks",
    qty: 3,
    price: 14,
    tone: "from-rose-200 to-pink-400",
  },
]

export default function CheckoutOrderSummary() {
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-4 py-3 text-sm font-medium">
        Order summary
      </div>
      <ScrollArea className="h-56">
        <div className="flex flex-col gap-3 p-4">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-3 text-xs">
              <div
                className={cn(
                  "relative size-12 shrink-0 bg-gradient-to-br",
                  item.tone
                )}
              >
                <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                  {item.qty}
                </span>
              </div>
              <span className="flex-1 truncate font-medium">{item.name}</span>
              <span className="tabular-nums">${item.qty * item.price}.00</span>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col gap-1 border-t p-4 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="tabular-nums">${subtotal}.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm font-semibold">
          <span>Total</span>
          <span className="tabular-nums">${subtotal}.00</span>
        </div>
        <Button className="mt-2">Pay now</Button>
      </div>
    </div>
  )
}
