import { Button } from "@workspace/ui/components/button"

export default function CallToAction03() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Free for teams up to five
        </span>
        <h2 className="mt-8 text-4xl font-medium tracking-tight text-foreground md:text-6xl">
          Design systems your whole team will actually use.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Tokens, components and documentation in one place, synced with your
          codebase on every merge. Set up takes about ten minutes.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<a href="#" />}>
            Start for free
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
            Talk to sales
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
