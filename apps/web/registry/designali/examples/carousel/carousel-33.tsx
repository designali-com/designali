import {
  CreditCard as CreditCardIcon,
  Download as DownloadIcon,
  Package as PackageIcon,
  Receipt as ReceiptIcon,
  Mail as MailIcon,
} from "@designali/icons"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const events = [
  { title: "Order placed", time: "Nov 10, 09:14", icon: ReceiptIcon },
  { title: "Payment confirmed", time: "Nov 10, 09:15", icon: CreditCardIcon },
  { title: "Template license issued", time: "Nov 11, 16:40", icon: PackageIcon },
  { title: "Files sent to inbox", time: "Nov 13, 07:02", icon: MailIcon },
  { title: "Downloaded from designali.com", time: "Nov 13, 13:28", icon: DownloadIcon },
]

export default function VerticalOrderTimeline() {
  return (
    <Carousel
      orientation="vertical"
      opts={{ align: "start" }}
      className="w-full max-w-xs border p-3"
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Designali order #48213</p>
          <p className="text-xs text-muted-foreground">5 updates</p>
        </div>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none rotate-90" />
          <CarouselNext className="static translate-none rotate-90" />
        </div>
      </div>
      <CarouselContent className="-mt-2 h-48">
        {events.map((event) => (
          <CarouselItem key={event.title} className="basis-1/3 pt-2">
            <div className="flex h-full items-center gap-3 border-s-2 border-primary/40 ps-3">
              <event.icon className="size-4 text-muted-foreground" />
              <div>
                <p className="text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
