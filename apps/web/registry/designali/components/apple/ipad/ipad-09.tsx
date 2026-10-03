import { IPad } from "@/registry/designali/ui/apple/ipad"

export function IPadImageDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPad
        variant="ipad-air"
        color="blue"
        size="lg"
      >
        <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IPad>
    </div>
  )
}