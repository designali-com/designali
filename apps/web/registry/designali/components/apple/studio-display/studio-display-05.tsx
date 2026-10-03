import { StudioDisplay } from "@/registry/designali/ui/apple/studio-display" 

export default function IPhone01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
       <StudioDisplay size="md">
       <img
          src="/img/hero-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
       </StudioDisplay>
    </div>
  )
}
