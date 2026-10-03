import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacSizesDemo() {
  return (
    <div className="flex flex-col items-center gap-12 p-8">
      <IMac size="lg" color="blue">
        <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IMac>
    </div>
  );
}