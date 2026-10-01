import { IMac } from  "@/registry/designali/ui/apple/imac" 

export function IMacCustomFrameDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac
        
      >
        <div className="flex h-full items-center justify-center bg-black text-white">
          <div className="text-center">
            <p className="text-sm text-white/60">Custom Frame</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Designali
            </h2>
          </div>
        </div>
      </IMac>
    </div>
  );
}