import { IMac } from "@/registry/designali/ui/apple/imac" 

export function IMacSizesDemo() {
  return (
    <div className="flex flex-col items-center gap-12 p-8">
      <IMac size="sm">
        <div className="flex h-full items-center justify-center bg-muted">
          <span className="text-xs">Small</span>
        </div>
      </IMac>

      <IMac size="md">
        <div className="flex h-full items-center justify-center bg-muted">
          <span>Medium</span>
        </div>
      </IMac>

      <IMac size="lg">
        <div className="flex h-full items-center justify-center bg-muted">
          <span className="text-lg">Large</span>
        </div>
      </IMac>
    </div>
  );
}