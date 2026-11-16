import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function Hero13() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <span className="font-medium text-foreground">Designali</span>
          460+ blocks now live
          <ArrowRight className="size-3" />
        </a>
        <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
          From Figma file to shipped website.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Designali plans, designs and builds every project in one flow —
          brand, UI/UX and production-ready Next.js code. Design se code tak.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button size="lg" nativeButton={false} render={<a href="/contact" />}>
            Start a project
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="/work" />}>
            See the work
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl">
        <div
          aria-hidden
          className="absolute -inset-x-10 -top-10 bottom-0 bg-gradient-to-b from-chart-2/20 via-chart-1/10 to-transparent blur-2xl"
        />
        <div className="relative flex justify-center">
          <Macbook variant="macbook-pro" color="black" size="xl" className="max-w-full">
            <img
              src="/img/dashboard-1-light.jpg"
              alt="Designali studio dashboard"
              className="size-full object-cover object-top dark:hidden"
            />
            <img
              src="/img/dashboard-1-dark.jpg"
              alt="Designali studio dashboard"
              className="hidden size-full object-cover object-top dark:block"
            />
          </Macbook>
        </div>
      </div>
    </section>
  )
}
