import { ArrowRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function CallToAction11() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            See every metric that matters, in one tab.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
            Designali dashboard blocks turn revenue, retention and product usage into
            a single live view your whole team can read without a SQL course.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Browse dashboard blocks
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<a href="#" />}
            >
              View live demo
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Built with Next.js, React and Tailwind CSS. Copy, paste, ship.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/60 to-primary/40 blur-2xl dark:from-chart-5/30 dark:to-chart-5/20" />
          <div className="relative flex justify-center">
            <Macbook variant="macbook-pro" color="black" className="max-w-full">
              <img
                src="/img/dashboard-1-light.jpg"
                alt="Designali analytics dashboard block"
                className="size-full object-cover object-top dark:hidden"
              />
              <img
                src="/img/dashboard-1-dark.jpg"
                alt="Designali analytics dashboard block"
                className="hidden size-full object-cover object-top dark:block"
              />
            </Macbook>
          </div>
        </div>
      </div>
    </section>
  )
}
