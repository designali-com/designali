 
import { IPhoneDuo } from "@/registry/designali/ui/apple/iphone-duo"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { StudioDisplay } from "@/registry/designali/ui/apple/studio-display"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="mx-auto mt-40 h-full w-full">
      <section className="relative flex flex-wrap items-center justify-center gap-5">
        <StudioDisplay >
          <img
            src="/img/login-1.jpg"
            alt="App screen"
            className="h-full w-full object-cover"
          />
        </StudioDisplay>
        <IPhoneDuo >
          <video
            src="/vid/colorful-spheres.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </IPhoneDuo>
        <IPhoneDuo >
          <div className="flex flex-col text-center px-4 gap-4 items-center justify-center h-full w-full">
            <h1 className="text-xl font-bold">
              Hi Ali
            </h1>
            <p className="text-sm text-muted-foreground">
              I am a software engineer and a designer.
            </p>
            <Button nativeButton={false} size="sm" render={<Link href="/" />}>
              Contact Me
            </Button>
          </div>
        </IPhoneDuo>
      </section>
    </div>
  )
}
