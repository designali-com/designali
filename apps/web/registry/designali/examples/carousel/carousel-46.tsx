"use client"

import * as React from "react"
import { CreditCardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const cards = [
  {
    brand: "Visa",
    last4: "4242",
    exp: "08/27",
    tone: "from-slate-700 to-slate-900",
  },
  {
    brand: "Mastercard",
    last4: "5100",
    exp: "02/28",
    tone: "from-indigo-600 to-indigo-900",
  },
  {
    brand: "Amex",
    last4: "0005",
    exp: "11/26",
    tone: "from-emerald-600 to-emerald-900",
  },
]

export default function PaymentCardSelector() {
  const [selected, setSelected] = React.useState(0)
  const [defaultCard, setDefaultCard] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  const card = cards[selected]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ align: "center" }}>
        <CarouselContent className="-ms-3">
          {cards.map((c, index) => (
            <CarouselItem key={c.last4} className="basis-[85%] ps-3">
              <div
                className={cn(
                  "relative flex aspect-[1.6] flex-col justify-between bg-gradient-to-br p-4 text-white",
                  c.tone
                )}
              >
                <div className="flex items-center justify-between">
                  <CreditCardIcon className="size-5" />
                  {defaultCard === index && (
                    <span className="bg-white/20 px-1.5 py-0.5 text-[10px]">
                      Default
                    </span>
                  )}
                </div>
                <span className="font-mono text-sm tracking-widest">
                  •••• {c.last4}
                </span>
                <div className="flex justify-between text-[11px] opacity-80">
                  <span>{c.brand}</span>
                  <span>{c.exp}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">
          {card.brand} ending {card.last4}
        </span>
        <Button
          size="sm"
          disabled={defaultCard === selected}
          onClick={() => setDefaultCard(selected)}
        >
          {defaultCard === selected ? "Default card" : "Make default"}
        </Button>
      </div>
    </div>
  )
}
