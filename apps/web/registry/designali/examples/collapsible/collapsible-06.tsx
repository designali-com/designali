import {
  ChevronDown as ChevronDownIcon,
  Package as PackageIcon,
  ShoppingBag as ShoppingBagIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Separator } from "@workspace/ui/components/separator"

const items = [
  { name: "Portfolio template", qty: 1, price: 89 },
  { name: "Icon pack license", qty: 3, price: 14 },
  { name: "Blocks bundle", qty: 1, price: 32 },
]

export default function CheckoutOrderSummary() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const shipping = 6
  return (
    <Collapsible className="w-full max-w-sm border bg-muted/40">
      <CollapsibleTrigger
        render={
          <Button variant="ghost" className="h-12 w-full justify-between px-4">
            <span className="flex items-center gap-2">
              <ShoppingBagIcon />
              Show order summary
              <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
            </span>
            <span className="text-sm font-semibold">
              ${subtotal + shipping}.00
            </span>
          </Button>
        }
      />
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="flex flex-col gap-3 border-t px-4 py-4 text-sm">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center border bg-background">
                <PackageIcon className="size-4 text-muted-foreground" />
                <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                  {item.qty}
                </span>
              </div>
              <span className="flex-1">{item.name}</span>
              <span>${item.qty * item.price}.00</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>${subtotal}.00</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Tax</span>
            <span>${shipping}.00</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
