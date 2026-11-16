import {
  Package as PackageIcon,
  Truck as TruckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const lines = [
  { name: "Design Agency template", qty: 1, price: 129 },
  { name: "Client license (3 pack)", qty: 2, price: 24 },
]

export default function OrderDetailsAdminSheet() {
  const subtotal = lines.reduce((s, l) => s + l.qty * l.price, 0)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PackageIcon data-icon="inline-start" />
        Order #10482
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle>Order #10482</SheetTitle>
            <Badge variant="secondary">Paid</Badge>
          </div>
          <SheetDescription>Placed Feb 21, 2026 at 9:14 AM</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="flex flex-col gap-1 border p-3">
            <span className="font-medium">Noor</span>
            <span className="text-muted-foreground">
              noor@example.com
            </span>
            <span className="text-muted-foreground">
              21 Harbor Lane, Portland, OR 97201
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {lines.map((line) => (
              <div key={line.name} className="flex justify-between">
                <span>
                  {line.qty} × {line.name}
                </span>
                <span className="tabular-nums">
                  ${line.qty * line.price}.00
                </span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>$8.00</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${subtotal + 8}.00</span>
            </div>
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button variant="destructive" className="flex-1">
            Refund
          </Button>
          <Button className="flex-1">
            <TruckIcon data-icon="inline-start" />
            Fulfill order
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
