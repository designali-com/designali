import { IPad } from "@/registry/designali/ui/apple/ipad"

export function IPadAirSpaceGreyDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPad
        variant="ipad-air"
        color="space-grey"
        size="xl"
      >
       <video
          src="/vid/colorful-spheres.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        /> 
      </IPad>
    </div>
  )
}