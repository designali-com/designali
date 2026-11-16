"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

const pricePerSeat = 14
const included = [
  "All 460+ Designali blocks",
  "Shared Figma and code library",
  "Version history",
  "Role-based permissions",
]

export default function Pricing07() {
  const [seats, setSeats] = useState(12)
  const discount = seats >= 50 ? 0.2 : seats >= 20 ? 0.1 : 0
  const total = Math.round(seats * pricePerSeat * (1 - discount))

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid border border-border bg-background lg:grid-cols-[3fr_2fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Designali Team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Pay only for the designers and developers you add
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              ${pricePerSeat} per seat each month. Volume discounts apply
              automatically at 20 and 50 seats.
            </p>
            <div className="mt-10">
              <div className="flex items-baseline justify-between text-sm">
                <span>Team size</span>
                <span className="text-2xl font-semibold tabular-nums">
                  {seats} seats
                </span>
              </div>
              <Slider
                className="mt-4"
                min={1}
                max={100}
                value={[seats]}
                onValueChange={(value) =>
                  setSeats(Array.isArray(value) ? value[0]! : value)
                }
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 border-t border-border bg-muted/50 p-8 md:p-12 lg:border-t-0 lg:border-l">
            <div>
              <p className="text-sm text-muted-foreground">
                Estimated monthly total
              </p>
              <p className="mt-2 text-5xl font-semibold tracking-tighter tabular-nums">
                ${total}
              </p>
              {discount > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Includes {discount * 100}% volume discount
                </p>
              )}
              <ul className="mt-6 space-y-2 text-sm">
                {included.map((item) => (
                  <li key={item}>&mdash; {item}</li>
                ))}
              </ul>
            </div>
            <Button size="lg" className="w-full">
              Start with Designali Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
