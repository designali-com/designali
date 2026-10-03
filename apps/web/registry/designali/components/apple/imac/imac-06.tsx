import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacCustomFrameDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac size="lg" color="blue">
        <img
          src="/img/hero-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IMac>
    </div>
  );
}