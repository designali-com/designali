import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const offers = [
  { title: "خصم ٢٠٪", body: "على جميع قوالب Designali" },
  { title: "+٤٦٠ بلوك", body: "جاهزة للنسخ واللصق في Next.js" },
  { title: "+٤٠٠٠ أيقونة", body: "مع حزمة @designali/icons" },
  { title: "من التصميم إلى الكود", body: "مع علي إمام" },
]

export default function RtlDirectionCarousel() {
  return (
    <div dir="rtl" className="w-full max-w-[14rem] sm:max-w-xs">
      <Carousel opts={{ direction: "rtl" }}>
        <CarouselContent>
          {offers.map((offer) => (
            <CarouselItem key={offer.title}>
              <Card>
                <CardContent className="flex h-32 flex-col items-start justify-center gap-1">
                  <span className="text-lg font-semibold">{offer.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {offer.body}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
