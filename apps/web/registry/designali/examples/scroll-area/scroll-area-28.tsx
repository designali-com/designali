import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  {
    name: "Portfolio Simple template",
    qty: 2,
    price: 68,
    tone: "from-muted to-muted-foreground",
  },
  {
    name: "Design Agency template",
    qty: 1,
    price: 32,
    tone: "from-primary/20 to-primary",
  },
  {
    name: "Resort template",
    qty: 1,
    price: 24,
    tone: "from-border to-muted-foreground",
  },
  {
    name: "AI template",
    qty: 1,
    price: 120,
    tone: "from-primary/20 to-primary",
  },
  {
    name: "Icons Pack",
    qty: 1,
    price: 145,
    tone: "from-primary/20 to-primary",
  },
  {
    name: "Logos Pack",
    qty: 3,
    price: 14,
    tone: "from-primary/20 to-primary",
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
