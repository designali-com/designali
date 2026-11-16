import {
  ArrowRight,
  Hammer,
  Lightbulb,
  Rocket,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Marquee } from "@/registry/designali/ui/marquee"

const steps = [
  {
    icon: Lightbulb,
    title: "Share your idea",
    body: "Tell Designali what you want to build. We shape the brief, the brand direction and the scope before any pixels move.",
    meta: "week 1",
  },
  {
    icon: Hammer,
    title: "Design and build",
    body: "Brand identity and UI/UX in Figma, then production-ready code with Next.js, React and Tailwind CSS.",
    meta: "weeks 2 to 5",
  },
  {
    icon: Rocket,
    title: "Launch",
    body: "Deploy on Vercel, hand off the code and the design system, and keep iterating with the studio.",
    meta: "week 6",
  },
]

const brands = ["Dalim", "Dalim Agency", "Dalim Fonts", "Dalim UI", "Dalim Works"]

export default function Hero20() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
              How Designali works
            </p>
            <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
              From idea to production-ready website.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Designali combines brand, UI/UX design and web development in one
              studio — design se code tak, led by Ali Imam.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="/contact" />}>
                Start a project
                <ArrowRight />
              </Button>
            </div>
          </div>

          <ol className="relative">
            <span aria-hidden className="absolute start-5 top-5 bottom-5 w-px bg-border" />
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center border border-border bg-background">
                  <step.icon className="size-4" />
                </span>
                <div className="pt-1.5">
                  <p className="font-sans text-xs text-muted-foreground">
                    Step {index + 1} / {step.meta}
                  </p>
                  <h2 className="mt-2 text-xl font-medium">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            The same process behind Designali projects like
          </p>
          <Marquee className="mt-6" gap="2.5rem" fade pauseOnHover>
            {brands.map((brand) => (
              <span key={brand} className="text-lg font-semibold tracking-tight whitespace-nowrap text-muted-foreground/70">
                {brand}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
