import {
  ArrowUpRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Marquee } from "@/registry/designali/ui/marquee"

const words = [
  "Landing pages",
  "Pricing tables",
  "Dashboards",
  "Onboarding",
  "Checkout",
  "Docs sites",
  "Changelogs",
  "Portfolios",
]

export default function CallToAction12() {
  return (
    <section className="w-full overflow-hidden border-y border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
          Whatever you are shipping next, start it here.
        </h2>
      </div>
      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Marquee pauseOnHover gap="1rem" repeat={3} className="[gap:1rem]">
          {words.map((word) => (
            <span
              key={word}
              className="border border-border bg-muted/50 px-6 py-3 text-lg whitespace-nowrap text-muted-foreground md:text-2xl"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mt-12 flex justify-center px-6">
        <Button size="lg" nativeButton={false} render={<a href="#" />}>
          Explore 460+ Designali blocks
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}
