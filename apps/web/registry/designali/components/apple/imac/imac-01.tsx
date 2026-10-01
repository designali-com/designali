import { IMac } from "@/registry/designali/ui/apple/imac" 

export function IMacDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac>
          <img
            src="/img/login-1.jpg"
            alt="App screen"
            className="h-full w-full object-cover"
          />
        </IMac>
    </div>
  );
}