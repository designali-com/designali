import {
  Check,
  ShieldCheck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const included = [
  "All 460+ blocks and 240+ page templates",
  "Figma source with auto-layout and variables",
  "React, TypeScript and Tailwind CSS code",
  "Lifetime updates, no renewals",
  "Commercial licence for unlimited projects",
  "4000+ icons in @designali/icons",
  "shadcn CLI install into any Next.js project",
  "Theme generator and token export",
]

export default function Pricing09() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            One price. Everything included.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            No tiers to compare and no features held back. Pay once and keep
            every future release.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl border border-border lg:grid-cols-[1.5fr_1fr]">
          <div className="p-8 md:p-12">
            <h3 className="text-lg font-medium">Designali lifetime access</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              For freelancers, studios and in-house teams who want a complete
              system without a subscription.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                What&apos;s included
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 border-t border-border bg-muted/50 p-8 text-center md:p-12 lg:border-t-0 lg:border-l">
            <p className="text-sm font-medium text-muted-foreground">
              Pay once, own it forever
            </p>
            <p className="flex items-baseline gap-2">
              <span className="text-6xl font-semibold tracking-tight">$249</span>
              <span className="text-sm text-muted-foreground line-through">
                $399
              </span>
            </p>
            <Button
              size="lg"
              className="w-full"
              nativeButton={false}
              render={<a href="/pricing" />}
            >
              Get lifetime access
            </Button>
            <p className="text-xs text-muted-foreground">
              Team licence for up to 10 seats: $699
            </p>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4" />
              30-day no-questions refund
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
