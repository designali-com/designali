import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function IPhone01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Macbook size="md" variant="macbook-air" color="starlight">
        <video
          src="/vid/colorful-spheres.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </Macbook>
    </div>
  )
}
