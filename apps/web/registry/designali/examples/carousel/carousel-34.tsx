import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const offers = [
  { title: "خصم ٢٠٪", body: "على جميع الاشتراكات السنوية" },
  { title: "شحن مجاني", body: "للطلبات فوق ٢٠٠ ريال" },
  { title: "هدية ترحيبية", body: "عند التسجيل لأول مرة" },
  { title: "نقاط مضاعفة", body: "طوال عطلة نهاية الأسبوع" },
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
