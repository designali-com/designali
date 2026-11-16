import {
  Receipt as ReceiptIcon,
  Truck as TruckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

const items = [
  { name: "Designali Templates Pro", qty: 1, price: 64 },
  { name: "Icons Pro license", qty: 2, price: 18.5 },
  { name: "Logo pack", qty: 1, price: 6 },
]

export default function OrderReceiptDialog() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const shipping = 5
  const format = (value: number) => "$" + value.toFixed(2)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="link" />}>
        View order #10482
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>Order #10482</DialogTitle>
            <Badge variant="secondary">Shipped</Badge>
          </div>
          <DialogDescription>
            Placed Nov 9, 2026 · Delivered to hello@designali.com
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col divide-y border-y">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 py-2"
            >
              <span>
                {item.name}{" "}
                <span className="text-muted-foreground">× {item.qty}</span>
              </span>
              <span className="tabular-nums">
                {format(item.qty * item.price)}
              </span>
            </div>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-1 tabular-nums">
          <dt className="text-muted-foreground">Subtotal</dt>
          <dd className="text-end">{format(subtotal)}</dd>
          <dt className="text-muted-foreground">Shipping</dt>
          <dd className="text-end">{format(shipping)}</dd>
          <dt className="font-medium">Total</dt>
          <dd className="text-end font-medium">
            {format(subtotal + shipping)}
          </dd>
        </dl>
        <DialogFooter>
          <Button variant="outline">
            <ReceiptIcon data-icon="inline-start" />
            Download receipt
          </Button>
          <Button>
            <TruckIcon data-icon="inline-start" />
            Track package
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
