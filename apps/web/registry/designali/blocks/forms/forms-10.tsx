import {
  CreditCard,
  Lock,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const items = [
  { name: "Designali Pro, All Templates", meta: "Personal licence", price: 149, tone: "from-primary to-chart-2" },
  { name: "Designali Icons Pro", meta: "4000+ icons / Figma + React", price: 49, tone: "from-chart-3 to-chart-5" },
]

const subtotal = items.reduce((sum, item) => sum + item.price, 0)
const shipping = 0
const tax = Math.round(subtotal * 0.08)

export default function Forms10() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
        <form className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Checkout</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Instant download from designali.com right after payment.
            </p>
          </div>

          <fieldset className="space-y-5">
            <legend className="mb-4 text-sm font-medium">1. Contact</legend>
            <div className="space-y-2">
              <Label htmlFor="f10-email">Email</Label>
              <Input id="f10-email" type="email" placeholder="you@example.com" className="h-10" />
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-border pt-8">
            <legend className="sr-only">Billing</legend>
            <p className="text-sm font-medium">2. Billing address</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="f10-address">Street address</Label>
                <Input id="f10-address" placeholder="Street address" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f10-city">City</Label>
                <Input id="f10-city" placeholder="City" className="h-10" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="f10-state">State</Label>
                  <NativeSelect id="f10-state" className="w-full" defaultValue="OR">
                    <NativeSelectOption value="OR">OR</NativeSelectOption>
                    <NativeSelectOption value="WA">WA</NativeSelectOption>
                    <NativeSelectOption value="CA">CA</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="f10-zip">ZIP</Label>
                  <Input id="f10-zip" inputMode="numeric" placeholder="ZIP" className="h-10" />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-border pt-8">
            <legend className="sr-only">Payment</legend>
            <p className="flex items-center justify-between text-sm font-medium">
              3. Payment
              <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                <Lock className="size-3" /> Encrypted
              </span>
            </p>
            <div className="border border-border">
              <div className="relative border-b border-border">
                <Label htmlFor="f10-card" className="sr-only">Card number</Label>
                <CreditCard className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="f10-card"
                  inputMode="numeric"
                  placeholder="1234 1234 1234 1234"
                  className="h-11 border-0 pl-10 focus-visible:ring-0"
                />
              </div>
              <div className="grid grid-cols-2">
                <Label htmlFor="f10-exp" className="sr-only">Expiry</Label>
                <Input id="f10-exp" placeholder="MM / YY" className="h-11 border-0 border-r border-border focus-visible:ring-0" />
                <Label htmlFor="f10-cvc" className="sr-only">CVC</Label>
                <Input id="f10-cvc" inputMode="numeric" placeholder="CVC" className="h-11 border-0 focus-visible:ring-0" />
              </div>
            </div>
            <Label className="flex items-center gap-2 text-xs font-normal text-muted-foreground">
              <Checkbox defaultChecked />
              Email me a copy of the invoice
            </Label>
          </fieldset>
        </form>

        <aside className="h-fit border border-border bg-muted/40 p-6 lg:sticky lg:top-6">
          <h3 className="text-sm font-medium">Order summary</h3>
          <ul className="mt-6 space-y-5">
            {items.map((item) => (
              <li key={item.name} className="flex gap-4">
                <span className={`size-16 shrink-0 bg-gradient-to-br ${item.tone}`} aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-5 font-medium">{item.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                </div>
                <p className="text-sm">${item.price}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2 border-t border-border pt-6">
            <Label htmlFor="f10-code" className="sr-only">Discount code</Label>
            <Input id="f10-code" placeholder="Discount code" className="h-10 bg-background" />
            <Button variant="outline" type="button">Apply</Button>
          </div>
          <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>${subtotal}.00</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery</dt>
              <dd>{shipping === 0 ? "Free" : `$${shipping}`}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Estimated tax</dt>
              <dd>${tax}.00</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd>${subtotal + shipping + tax}.00</dd>
            </div>
          </dl>
          <Button type="submit" size="lg" className="mt-6 w-full">
            Pay ${subtotal + shipping + tax}.00
          </Button>
        </aside>
      </div>
    </section>
  )
}
