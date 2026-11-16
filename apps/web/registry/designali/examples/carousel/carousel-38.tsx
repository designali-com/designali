"use client"

import * as React from "react"
import {
  Wallet as WalletIcon,
} from "@designali/icons"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const wallets = [
  {
    currency: "USD",
    balance: "$12,480.20",
    last: ["Template sales +$2,100", "Vercel invoice -$412"],
  },
  {
    currency: "EUR",
    balance: "€4,902.75",
    last: ["Brand identity project +€1,250", "Studio rent -€980"],
  },
  {
    currency: "GBP",
    balance: "£1,130.00",
    last: ["Icon pack refund +£45", "Motion freelancer -£600"],
  },
]

export default function WalletBalancesCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ align: "center" }}>
        <CarouselContent>
          {wallets.map((wallet) => (
            <CarouselItem key={wallet.currency} className="basis-[85%]">
              <div className="flex h-32 flex-col justify-between bg-primary p-4 text-primary-foreground">
                <div className="flex items-center justify-between text-xs opacity-80">
                  <span>{wallet.currency} account</span>
                  <WalletIcon className="size-4" />
                </div>
                <span className="text-2xl font-semibold tabular-nums">
                  {wallet.balance}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="border">
        <p className="border-b px-3 py-2 text-xs font-medium">
          Recent activity
        </p>
        {wallets[selected]!.last.map((line) => (
          <p key={line} className="px-3 py-2 text-xs text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
