import { IPhone } from "@/registry/designali/ui/apple/iphone"

export default function IPhone01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <IPhone size="md" color="silver">
      <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IPhone>
    </div>
  )
}
