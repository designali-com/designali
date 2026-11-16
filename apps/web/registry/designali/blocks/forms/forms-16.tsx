import {
  Package,
  Truck,
  Zap,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"

const methods = [
  { id: "standard", icon: Package, title: "Instant download", eta: "Available right after payment", price: "Free" },
  { id: "express", icon: Truck, title: "Figma source files", eta: "Sent to your email", price: "$19.00" },
  { id: "same-day", icon: Zap, title: "Setup call with Ali Imam", eta: "30-minute onboarding call", price: "$99.00" },
]

const countries = ["India", "United States", "United Kingdom", "Germany", "Canada"]

export default function Forms16() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <ol className="flex items-center gap-3 text-xs text-muted-foreground">
          <li>Cart</li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">Details</li>
          <li aria-hidden>/</li>
          <li>Payment</li>
        </ol>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight">Where should we send your Designali files?</h2>

        <form className="mt-10 space-y-10">
          <div className="grid grid-cols-6 gap-x-4 gap-y-5">
            <div className="col-span-6 space-y-2 sm:col-span-3">
              <Label htmlFor="f16-first">First name</Label>
              <Input id="f16-first" autoComplete="given-name" placeholder="First name" className="h-10" />
            </div>
            <div className="col-span-6 space-y-2 sm:col-span-3">
              <Label htmlFor="f16-last">Last name</Label>
              <Input id="f16-last" autoComplete="family-name" placeholder="Last name" className="h-10" />
            </div>
            <div className="col-span-6 space-y-2">
              <Label htmlFor="f16-country">Country</Label>
              <NativeSelect id="f16-country" className="w-full" defaultValue="United States">
                {countries.map((country) => (
                  <NativeSelectOption key={country} value={country}>{country}</NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
            <div className="col-span-4 space-y-2">
              <Label htmlFor="f16-street">Street</Label>
              <Input id="f16-street" autoComplete="address-line1" placeholder="Street" className="h-10" />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="f16-number">No.</Label>
              <Input id="f16-number" placeholder="No." className="h-10" />
            </div>
            <div className="col-span-3 space-y-2 sm:col-span-2">
              <Label htmlFor="f16-postal">Postcode</Label>
              <Input id="f16-postal" autoComplete="postal-code" placeholder="Postcode" className="h-10" />
            </div>
            <div className="col-span-3 space-y-2 sm:col-span-4">
              <Label htmlFor="f16-city">City</Label>
              <Input id="f16-city" autoComplete="address-level2" placeholder="City" className="h-10" />
            </div>
            <div className="col-span-6 space-y-2">
              <Label htmlFor="f16-phone">Phone (optional)</Label>
              <Input id="f16-phone" type="tel" autoComplete="tel" placeholder="Phone number" className="h-10" />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-medium">Delivery options</legend>
            <RadioGroup defaultValue="express" className="mt-4 gap-0 divide-y divide-border border border-border">
              {methods.map((method) => (
                <Label
                  key={method.id}
                  className="flex cursor-pointer items-center gap-4 p-4 font-normal transition-colors hover:bg-muted/50 has-data-checked:bg-muted"
                >
                  <RadioGroupItem value={method.id} />
                  <method.icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{method.title}</span>
                    <span className="block text-xs text-muted-foreground">{method.eta}</span>
                  </span>
                  <span className="text-sm font-medium">{method.price}</span>
                </Label>
              ))}
            </RadioGroup>
          </fieldset>

          <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
            <Button variant="ghost" type="button">Back to cart</Button>
            <Button type="submit" size="lg">Continue to payment</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
