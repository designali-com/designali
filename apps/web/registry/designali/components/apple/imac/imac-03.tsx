import { IMac } from "@/registry/designali/ui/apple/imac" 

export function IMacWebsiteDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac color="purple">
        <div className="h-full bg-white text-black">
          <header className="flex items-center justify-between border-b px-6 py-4">
            <span className="font-semibold">Designali</span>

            <nav className="flex gap-4 text-xs">
              <span>Products</span>
              <span>Docs</span>
              <span>Pricing</span>
            </nav>
          </header>

          <main className="flex h-[calc(100%-65px)] items-center justify-center px-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                Design to Code
              </h1>

              <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">
                Build beautiful interfaces with reusable components.
              </p>

              <button className="mt-6 rounded-full bg-black px-5 py-2 text-sm text-white">
                Get Started
              </button>
            </div>
          </main>
        </div>
      </IMac>
    </div>
  );
}