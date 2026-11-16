"use client"

import { useState } from "react"
import {
  Check,
  CreditCard,
  Lock,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Contact", "Delivery", "Payment"]

const deliveryOptions = [
  { id: "standard", label: "Instant download", detail: "Files and license by email", price: 0 },
  { id: "express", label: "Setup help", detail: "Designali installs it on your Vercel", price: 9 },
  { id: "pickup", label: "GitHub access", detail: "Private repo invite in 2 hours", price: 0 },
]

const items = [
  { name: "Design Agency Template", variant: "Pro license · Next.js + Figma", price: 79, image: "/images/templates/design-agency.jpg" },
  { name: "Designali Icons Pro", variant: "Personal license", price: 39, image: "/images/templates/dalim-icons-old.jpg" },
]

export default function Ecommerce09() {
  const [step, setStep] = useState(0)
  const [delivery, setDelivery] = useState("standard")
  const [placed, setPlaced] = useState(false)

  const shipping = deliveryOptions.find((d) => d.id === delivery)?.price ?? 0
  const subtotal = items.reduce((s, i) => s + i.price, 0)
  const total = subtotal + shipping

  const next = () => (step < steps.length - 1 ? setStep(step + 1) : setPlaced(true))

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <ol className="flex items-center gap-2 text-sm">
            {steps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center gap-2">
                <button
                  type="button"
                  disabled={i > step || placed}
                  onClick={() => setStep(i)}
                  className="flex items-center gap-2 disabled:cursor-default"
                >
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center border text-xs",
                      i < step || placed
                        ? "border-foreground bg-foreground text-background"
                        : i === step
                          ? "border-foreground"
                          : "border-border text-muted-foreground"
                    )}
                  >
                    {i < step || placed ? <Check className="size-3" /> : i + 1}
                  </span>
                  <span className={cn(i > step && "text-muted-foreground")}>{s}</span>
                </button>
                {i < steps.length - 1 && <span className="h-px flex-1 bg-border" />}
              </li>
            ))}
          </ol>

          <div className="mt-10">
            {placed ? (
              <div className="border border-border p-8 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/15 text-chart-3 dark:text-primary">
                  <Check className="size-6" />
                </span>
                <h2 className="mt-4 text-2xl font-medium tracking-tight">Order placed</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Confirmation #DA-20931 is on its way to your inbox.
                </p>
              </div>
            ) : step === 0 ? (
              <div className="space-y-5">
                <h2 className="text-2xl font-medium tracking-tight">Contact details</h2>
                <div className="grid gap-2">
                  <Label htmlFor="e09-email">Email</Label>
                  <Input id="e09-email" type="email" placeholder="you@example.com" className="h-10" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="e09-first">First name</Label>
                    <Input id="e09-first" className="h-10" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="e09-last">Last name</Label>
                    <Input id="e09-last" className="h-10" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="e09-address">Address</Label>
                  <Input id="e09-address" placeholder="Street and number" className="h-10" />
                </div>
                <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
                  <div className="grid gap-2">
                    <Label htmlFor="e09-city">City</Label>
                    <Input id="e09-city" className="h-10" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="e09-zip">Postcode</Label>
                    <Input id="e09-zip" className="h-10" />
                  </div>
                </div>
              </div>
            ) : step === 1 ? (
              <fieldset className="space-y-3">
                <legend className="mb-5 text-2xl font-medium tracking-tight">Delivery method</legend>
                {deliveryOptions.map((o) => (
                  <label
                    key={o.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-4 border p-4 transition-colors",
                      delivery === o.id ? "border-foreground bg-muted/50" : "border-border hover:bg-muted/30"
                    )}
                  >
                    <input
                      type="radio"
                      name="e09-delivery"
                      value={o.id}
                      checked={delivery === o.id}
                      onChange={() => setDelivery(o.id)}
                      className="size-4 accent-foreground"
                    />
                    <span className="flex-1">
                      <span className="block text-sm font-medium">{o.label}</span>
                      <span className="block text-xs text-muted-foreground">{o.detail}</span>
                    </span>
                    <span className="text-sm tabular-nums">{o.price ? `$${o.price}` : "Free"}</span>
                  </label>
                ))}
              </fieldset>
            ) : (
              <div className="space-y-5">
                <h2 className="text-2xl font-medium tracking-tight">Payment</h2>
                <div className="grid gap-2">
                  <Label htmlFor="e09-card">Card number</Label>
                  <div className="relative">
                    <Input id="e09-card" inputMode="numeric" placeholder="1234 1234 1234 1234" className="h-10 pr-10" />
                    <CreditCard className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="e09-exp">Expiry</Label>
                    <Input id="e09-exp" placeholder="MM / YY" className="h-10" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="e09-cvc">CVC</Label>
                    <Input id="e09-cvc" placeholder="123" className="h-10" />
                  </div>
                </div>
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" />
                  Payments are encrypted and processed securely.
                </p>
              </div>
            )}

            {!placed && (
              <div className="mt-8 flex items-center justify-between gap-4">
                <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
                  Back
                </Button>
                <Button size="lg" onClick={next}>
                  {step === steps.length - 1 ? `Pay $${total.toFixed(2)}` : `Continue to ${steps[step + 1]?.toLowerCase()}`}
                </Button>
              </div>
            )}
          </div>
        </div>

        <aside className="h-fit border border-border bg-muted/40 p-6">
          <h3 className="font-medium">Order summary</h3>
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li key={item.name} className="flex gap-3">
                <img src={item.image} alt={item.name} className="size-14 shrink-0 object-cover object-top border border-border" />
                <span className="flex-1">
                  <span className="block text-sm font-medium">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.variant}</span>
                </span>
                <span className="text-sm tabular-nums">${item.price}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd className="tabular-nums">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery</dt>
              <dd className="tabular-nums">{shipping ? `$${shipping.toFixed(2)}` : "Free"}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
              <dt>Total</dt>
              <dd className="tabular-nums">${total.toFixed(2)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
