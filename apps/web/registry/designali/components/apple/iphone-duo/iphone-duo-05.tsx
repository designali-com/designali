import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"

export function IPhoneDuoLandscapeDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPhoneDuo 
        side="front"
        orientation="landscape"
        color="night-sky"
      >
       <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </IPhoneDuo>
    </div>
  )
}