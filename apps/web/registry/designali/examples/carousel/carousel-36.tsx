"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, TicketPercentIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const coupons = [
  { code: "WELCOME10", title: "10% off first order", expires: "Ends Dec 31" },
  { code: "FREESHIP", title: "Free standard shipping", expires: "Ends Nov 30" },
  { code: "BUNDLE25", title: "$25 off bundles", expires: "Ends Dec 15" },
]

export default function CouponOffersCarousel() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[15rem] sm:max-w-sm"
    >
      <CarouselContent>
        {coupons.map((coupon) => (
          <CarouselItem key={coupon.code}>
            <div className="flex border border-dashed">
              <div className="flex w-16 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                <TicketPercentIcon className="size-6" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 p-3">
                <span className="text-sm font-medium">{coupon.title}</span>
                <span className="text-xs text-muted-foreground">
                  {coupon.expires}
                </span>
                <Button
                  variant="outline"
                  size="xs"
                  className="w-fit font-mono"
                  onClick={() => {
                    navigator.clipboard?.writeText(coupon.code)
                    setCopied(coupon.code)
                  }}
                >
                  {copied === coupon.code ? (
                    <CheckIcon data-icon="inline-start" />
                  ) : (
                    <CopyIcon data-icon="inline-start" />
                  )}
                  {coupon.code}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
