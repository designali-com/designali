import {
  Lock as LockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Separator } from "@workspace/ui/components/separator"

const items = [
  { name: "Design Agency Template", qty: 1, price: 64 },
  { name: "Designali Icons license", qty: 2, price: 18 },
  { name: "Blocks Pro bundle", qty: 1, price: 89 },
]

export default function OrderSummaryCard() {
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const discount = 18.9
  const shipping = 0
  const total = subtotal - discount + shipping

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
        <CardAction>
          <span className="text-muted-foreground">{items.length} items</span>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((i) => (
          <div key={i.name} className="flex justify-between gap-4">
            <span>
              {i.name} <span className="text-muted-foreground">× {i.qty}</span>
            </span>
            <span className="tabular-nums">
              {"$" + (i.qty * i.price).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <InputGroup>
          <InputGroupInput
            placeholder="Discount code"
            defaultValue="DESIGNALI10"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Apply</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <div className="grid gap-1.5 text-muted-foreground">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="tabular-nums">{"$" + subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
            <span>Discount</span>
            <span className="tabular-nums">{"-$" + discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>Instant download</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <div className="flex justify-between text-sm font-semibold">
          <span>Total</span>
          <span className="tabular-nums">{"$" + total.toFixed(2)}</span>
        </div>
        <Button>
          <LockIcon data-icon="inline-start" />
          Pay securely
        </Button>
      </CardFooter>
    </Card>
  )
}
