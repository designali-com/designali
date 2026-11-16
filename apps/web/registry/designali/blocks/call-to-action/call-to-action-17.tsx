import {
  Apple,
  Smartphone,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { IPhone } from "@/registry/designali/ui/apple/iphone"

export default function CallToAction17() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 border border-border bg-gradient-to-br from-primary/5 to-background p-8 md:grid-cols-[1fr_auto] md:p-14 dark:from-chart-5/30">
        <div>
          <div className="flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
            <span className="ml-2 text-xs text-muted-foreground">
              Loved by designers and developers
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-5xl">
            Designali, in your pocket.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Browse 4,000+ icons, 460+ blocks and every Designali template,
            and send them straight to your next project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              <Apple data-icon="inline-start" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              <Smartphone data-icon="inline-start" />
              Google Play
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <IPhone size="md" color="black" className="max-w-full">
            <img
              src="/img/chat-1-light.jpg"
              alt="Designali on iPhone"
              className="size-full object-cover object-top dark:hidden"
            />
            <img
              src="/img/chat-1-dark.jpg"
              alt="Designali on iPhone"
              className="hidden size-full object-cover object-top dark:block"
            />
          </IPhone>
        </div>
      </div>
    </section>
  )
}
