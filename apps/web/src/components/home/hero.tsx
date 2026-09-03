import { Button } from "@workspace/ui/components/button"
import { Logo } from "@workspace/ui/designali/logo"
import Link from "next/link"
 
export function HeroSection() {
  return (
    <section className="relative mx-auto flex h-[910px] w-full items-center justify-center overflow-hidden">
      {/* Background Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.5px] outline-primary"
              style={{
                top: `${i * 10 - 100}px`,
                left: "-10%",
                width: "400%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Panel */}
      <div className="relative z-10 m-2.5 flex h-[calc(100%-30px)] md:h-[calc(100%-70px)] w-[calc(100%-30px)] md:w-[calc(100%-70px)] items-center justify-center border border-dotted bg-background">
        <div className="flex flex-col items-center justify-center gap-5 p-20 text-center">
          <Logo className="size-20" />

          <h1 className="text-2xl font-medium md:text-5xl">
            design se code tak
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Where thoughtful design meets production-ready code. I design and
            build digital experiences that look great, feel intuitive, and work
            beautifully.
          </p>

          <Button nativeButton={false} render={<Link href="" />}>
            Book a Call
          </Button>
        </div>
         
      </div>
    </section>
  )
}
