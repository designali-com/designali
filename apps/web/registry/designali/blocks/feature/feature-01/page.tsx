"use client"
 
import { Dithering  } from "@paper-design/shaders-react"
import { Abstract12Shapes, Abstract131Shapes, Abstract36Shapes } from "@designali/vectors"

export default function FeatureSection() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4">
      <div className="flex flex-col items-center justify-center py-10">
        {/* Heading */}
        <div>
          <h1 className="mx-auto mb-10 max-w-xs px-6 text-center text-xl md:max-w-full md:text-3xl">
            Design, built to make your brand stand out.
          </h1>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
          {/* Strategy */}
          <div className="h-[430px] overflow-hidden border border-dashed md:h-[460px]">
            <div className="relative h-full">
              {/* Icon */}
              <div className="absolute left-1/2  top-40 z-10 flex size-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-background/80 backdrop-blur-md">
                
                <Abstract12Shapes className="size-40 animate-[spin_30s_linear_infinite]" />
              </div>
 
              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                <h2 className="text-2xl">Strategy</h2>
                <p className="pt-2 text-sm text-muted-foreground">
                  We shape your brand strategy, positioning, and creative
                  direction to give your business a clear and confident
                  identity.
                </p>
              </div>
            </div>
          </div>

          {/* Design */}
          <div className="h-[430px] overflow-hidden border border-dashed md:h-[460px]">
            <div className="relative h-full">
              {/* Icon */}
              <div className="absolute left-1/2  top-40 z-10 flex size-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-background/80 backdrop-blur-md">
               
              <Abstract131Shapes className="size-40 animate-[spin_30s_linear_infinite]" />
              </div>

              <Dithering
                className="absolute bottom-0 h-full w-full"
                colorBack="#00000000"
                colorFront="#00aaff"
                shape="ripple"
                type="8x8"
                size={2}
                speed={1}
                offsetY={-0.15}
              />

              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                <h2 className="text-2xl">Design</h2>
                <p className="pt-2 text-sm text-muted-foreground">
                  We create memorable brands, websites, and digital
                  experiences that look distinctive, feel intuitive, and
                  connect with your audience.
                </p>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="h-[430px] overflow-hidden border border-dashed md:h-[460px]">
            <div className="relative h-full">
              {/* Icon */}
              <div className="absolute left-1/2  top-40 z-10 flex size-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-background">
              <Abstract36Shapes className="size-40 animate-[spin_30s_linear_infinite]" />
              </div>

              

              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                <h2 className="text-2xl">Development</h2>
                <p className="pt-2 text-sm text-muted-foreground">
                  We turn designs into fast, responsive, and scalable digital
                  experiences built to perform across every modern device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="relative mt-3 h-full w-full border border-dashed">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-dashed py-10 md:border-r lg:border-b-0 lg:border-r">
              <p className="text-center text-sm">48 Hours Delivery</p>
            </div>

            <div className="border-b border-dashed py-10 lg:border-b-0 lg:border-r">
              <p className="text-center text-sm">Access to Design Portal</p>
            </div>

            <div className="border-b border-dashed py-10 md:border-r md:border-b-0 lg:border-r">
              <p className="text-center text-sm">Top-notch quality</p>
            </div>

            <div className="py-10">
              <p className="text-center text-sm">
                Unlimited Design Requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}