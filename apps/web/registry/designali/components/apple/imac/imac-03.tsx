import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacWebsiteDemo() {
  return (
    <div className="flex h-[600px] w-full items-center justify-center">
      <IMac size="lg" color="blue">
        <div className="h-full bg-white">
          <header className="flex items-center justify-between border-b px-8 py-4">
            <div className="font-semibold">designali</div>

            <nav className="flex gap-6 text-sm text-muted-foreground">
              <span>Components</span>
              <span>Blocks</span>
              <span>Docs</span>
            </nav>
          </header>

          <main className="flex h-full items-center justify-center px-12">
            <div className="max-w-xl text-center">
              <p className="mb-3 text-sm text-muted-foreground">
                Design to Code
              </p>

              <h1 className="text-5xl font-bold tracking-tight">
                Build beautiful interfaces faster.
              </h1>

              <p className="mt-4 text-muted-foreground">
                A modern component library for designers and developers.
              </p>

              <button className="mt-6 rounded-lg bg-black px-5 py-3 text-sm text-white">
                Get Started
              </button>
            </div>
          </main>
        </div>
      </IMac>
    </div>
  );
}