import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacWebsiteDemo() {
  return (
    <div className="flex h-[600px] w-full items-center justify-center">
      <IMac size="lg" color="blue">
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