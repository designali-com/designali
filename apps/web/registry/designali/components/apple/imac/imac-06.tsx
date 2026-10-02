import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacCustomFrameDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac size="lg" color="silver">
        <div className="h-full bg-black text-white">
          <div className="flex h-full flex-col items-center justify-center px-12 text-center">
            <span className="mb-4 rounded-full border border-white/20 px-4 py-1 text-xs">
              New Release
            </span>

            <h1 className="text-5xl font-bold tracking-tight">
              The future of design.
            </h1>

            <p className="mt-4 max-w-lg text-white/60">
              Create, prototype and ship modern digital experiences.
            </p>

            <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
              Explore
            </button>
          </div>
        </div>
      </IMac>
    </div>
  );
}