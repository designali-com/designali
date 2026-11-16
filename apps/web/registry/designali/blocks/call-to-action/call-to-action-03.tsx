import { Button } from "@workspace/ui/components/button"

import { GridPattern } from "@/registry/designali/ui/grid-pattern"

export default function CallToAction03() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-24 md:py-32">
      <GridPattern
        width={48}
        height={48}
        className="stroke-border opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Free for teams up to five
        </span>
        <h2 className="mt-8 text-4xl font-medium tracking-tight text-foreground md:text-6xl">
          Design systems your whole team will actually use.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Designali blocks, icons and docs in one place, synced with your
          Next.js codebase on every merge. Set up takes about ten minutes.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<a href="#" />}>
            Start for free
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
            Talk to Ali
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
