import { Button } from "@workspace/ui/components/button"

export default function CallToAction06() {
  return (
    <section className="w-full bg-foreground px-6 py-20 text-background md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Stop rebuilding the same button.
          </h2>
          <p className="mt-6 text-base leading-7 text-background/70">
            Install 400+ production-ready blocks with one command and own the
            code from day one.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-auto">
          <div className="flex items-center justify-between gap-6 border border-background/20 px-4 py-3 font-mono text-sm">
            <span>
              <span className="text-background/50">$ </span>
              npx shadcn add @designali/hero-06
            </span>
            <span className="text-xs text-background/50">copy</span>
          </div>
          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1 bg-background text-foreground hover:bg-background/90"
              nativeButton={false} render={<a href="#" />}
            >
              Browse blocks
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="flex-1 border-background/20 text-background hover:bg-background/10 hover:text-background"
              nativeButton={false} render={<a href="#" />}
            >
              Read the docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
