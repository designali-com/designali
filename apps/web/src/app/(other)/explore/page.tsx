import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { Button } from "@workspace/ui/components/button" 
import Link from "next/link"

export default function Page() {
  return (
    <div className="mx-auto mt-40 h-full w-full">
      <section className="relative flex flex-wrap items-center justify-center gap-5">
        <IPhone color="glacier" size="sm">
          <img
            src="/img/login-1.jpg"
            alt="App screen"
            className="h-full w-full object-cover"
          />
        </IPhone>
        <IPhone orientation="landscape">
          <video
            src="/vid/colorful-spheres.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </IPhone>
        <IPhone size="lg">
          <div className="flex flex-col text-center px-4 gap-4 items-center justify-center h-full w-full">
            <h1 className="text-xl font-bold">
              Hi Ali
            </h1>
            <p className="text-sm text-muted-foreground">
              I am a software engineer and a designer.
            </p>
            <Button size="sm" render={<Link href="/" />}> 
                Contact Me 
            </Button>
          </div>
        </IPhone>

      </section>
    </div>
  )
}
