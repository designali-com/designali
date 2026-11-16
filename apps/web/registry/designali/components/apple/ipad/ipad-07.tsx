import { IPad } from "@/registry/designali/ui/apple/ipad"

export function IPadAirStarlightDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPad
        variant="ipad-air"
        color="starlight"
        orientation="landscape"
        size="xl"
      >
        <img
          src="/img/hero-2.jpg"
          alt="Designali website hero"
          className="h-full w-full object-cover"
        />
      </IPad>
    </div>
  )
}