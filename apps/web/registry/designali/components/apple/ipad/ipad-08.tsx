import { IPad } from "@/registry/designali/ui/apple/ipad"

export function IPadVideoDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPad
        variant="ipad-pro"
        color="black"
        size="lg"
        orientation="landscape"
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