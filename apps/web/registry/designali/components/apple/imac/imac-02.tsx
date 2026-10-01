import { IMac } from "@/registry/designali/ui/apple/imac" 

export function IMacDashboardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac>
      <video
            src="/vid/colorful-spheres.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </IMac>
    </div>
  );
}