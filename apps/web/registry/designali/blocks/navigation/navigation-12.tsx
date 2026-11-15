"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Lock } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { title: "Cart", detail: "3 items" },
  { title: "Shipping", detail: "Address and method" },
  { title: "Payment", detail: "Card or wallet" },
  { title: "Review", detail: "Confirm order" },
]

export default function Navigation12() {
  const [current, setCurrent] = useState(1)

  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="font-semibold tracking-tight">
            Northbay Supply
          </a>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" />
            Secure checkout
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav aria-label="Checkout progress">
          <ol className="grid grid-cols-4 border">
            {steps.map((step, index) => {
              const done = index < current
              const active = index === current
              return (
                <li key={step.title} className="border-e last:border-e-0">
                  <button
                    type="button"
                    disabled={index > current}
                    onClick={() => setCurrent(index)}
                    aria-current={active ? "step" : undefined}
                    className={cn(
                      "relative flex h-full w-full flex-col items-center gap-2 p-3 text-center transition-colors md:flex-row md:p-4 md:text-start",
                      active && "bg-muted/60",
                      index > current && "cursor-not-allowed opacity-50",
                      done && "hover:bg-muted/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center border text-xs font-medium tabular-nums",
                        done && "border-foreground bg-foreground text-background",
                        active && "border-foreground"
                      )}
                    >
                      {done ? <Check className="size-3.5" /> : index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium md:text-sm">{step.title}</span>
                      <span className="hidden truncate text-xs text-muted-foreground md:block">
                        {step.detail}
                      </span>
                    </span>
                    {active && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground" />
                    )}
                  </button>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
          <div className="border p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Step {current + 1} of {steps.length}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">{steps[current].title}</h2>
            <div className="mt-6 space-y-3">
              <div className="h-10 border bg-muted/30" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-10 border bg-muted/30" />
                <div className="h-10 border bg-muted/30" />
              </div>
              <div className="h-10 border bg-muted/30" />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Button
                variant="ghost"
                disabled={current === 0}
                onClick={() => setCurrent((value) => Math.max(0, value - 1))}
              >
                <ArrowLeft />
                Back
              </Button>
              <Button
                onClick={() => setCurrent((value) => Math.min(steps.length - 1, value + 1))}
              >
                {current === steps.length - 1 ? "Place order" : `Continue to ${steps[current + 1].title}`}
                <ArrowRight />
              </Button>
            </div>
          </div>
          <aside className="h-fit border bg-muted/30 p-6 text-sm">
            <p className="font-medium">Order summary</p>
            <dl className="mt-4 space-y-2 text-muted-foreground">
              <div className="flex justify-between"><dt>Subtotal</dt><dd className="tabular-nums">$184.00</dd></div>
              <div className="flex justify-between"><dt>Shipping</dt><dd className="tabular-nums">$9.00</dd></div>
              <div className="flex justify-between border-t pt-2 font-medium text-foreground"><dt>Total</dt><dd className="tabular-nums">$193.00</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
