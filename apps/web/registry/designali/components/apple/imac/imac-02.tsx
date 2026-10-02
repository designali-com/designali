import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacDashboardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <IMac size="sm">
          <div className="flex h-full items-center justify-center">
            <span className="text-lg font-semibold">Small</span>
          </div>
        </IMac>

        <IMac size="md">
          <div className="flex h-full items-center justify-center">
            <span className="text-2xl font-semibold">Medium</span>
          </div>
        </IMac>

        <IMac size="lg">
          <div className="flex h-full items-center justify-center">
            <span className="text-3xl font-semibold">Large</span>
          </div>
        </IMac>
      </div>
    </div>
  );
}