import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"

export function IPhoneDuoDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPhoneDuo size="xl" side="frontback" color="night-sky">
      <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IPhoneDuo>
    </div>
  )
}