import {
  Moon,
  Smartphone,
  Star,
  TabletSmartphone,
} from "@designali/icons"

import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function Hero17() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-2 text-white">
              <Moon className="size-5" />
            </span>
            <span className="font-medium">Designali</span>
            <span className="text-muted-foreground">Mobile UI designs</span>
          </div>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Mobile app designs, ready to ship.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Designali mobile UI kits for iPhone, iPad and Android — designed
            in Figma, built in code, and ready for your next app.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-90"
            >
              <Smartphone className="size-6" />
              <span className="text-start leading-tight">
                <span className="block text-[10px] opacity-70">UI kit for</span>
                <span className="block text-sm font-medium">iPhone and iPad</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-border px-5 py-2.5 transition-colors hover:bg-muted"
            >
              <TabletSmartphone className="size-6" />
              <span className="text-start leading-tight">
                <span className="block text-[10px] text-muted-foreground">UI kit for</span>
                <span className="block text-sm font-medium">Android</span>
              </span>
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Rating</dt>
              <dd className="mt-1 flex items-center gap-1">
                <CounterNumber value={4.8} decimalPlaces={1} size="sm" className="text-lg font-medium" />
                <Star className="size-4 fill-primary text-primary" />
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">UI designs</dt>
              <dd className="mt-1">
                <CounterNumber value={2300} suffix="+" size="sm" className="text-lg font-medium" />
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Icons</dt>
              <dd className="mt-1">
                <CounterNumber value={4000} suffix="+" size="sm" className="text-lg font-medium" />
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[300px]">
          <div
            aria-hidden
            className="absolute -inset-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-3xl"
          />
          <div className="relative flex justify-center">
            <IPhone variant="18-pro" color="black" size="lg">
              <img
                src="/img/chat-1-light.jpg"
                alt="Designali mobile UI design"
                className="size-full object-cover object-top dark:hidden"
              />
              <img
                src="/img/chat-1-dark.jpg"
                alt="Designali mobile UI design"
                className="hidden size-full object-cover object-top dark:block"
              />
            </IPhone>
          </div>
        </div>
      </div>
    </section>
  )
}
