"use client"

import { Button } from "@workspace/ui/components/button"
import * as React from "react"

const images = [
  { src: "/img/hero-1.jpg", alt: "Hero 1" },
  { src: "/img/chat-1-light.jpg", alt: "Chat UI" },
  { src: "/img/hero-2.jpg", alt: "Hero 2" },
  { src: "/img/dashboard-1-dark.jpg", alt: "Dashboard" },
  { src: "/img/login-1.jpg", alt: "Login Screen" },
]

function createCSS(id: string) {
  return `
    @keyframes orbit-${id} {
      from {
        transform: rotateY(0deg);
      }

      to {
        transform: rotateY(-360deg);
      }
    }
  `
}

export function HeroSection() {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const css = React.useMemo(() => createCSS(id), [id])

  const totalCards = 11
  const radiusCqw = 32

  return (
    <section className="relative h-screen w-full">

      <div className="relative border-x px-3 max-w-7xl mx-auto h-full w-full">
       
        <div className="relative border-x flex h-full w-full flex-col justify-between overflow-hidden">
         
          <style>{css}</style>
          <div
            className="relative flex w-full flex-col justify-between pt-[7vh] pb-[6vh] sm:pt-[9vh]"
            style={{ containerType: "inline-size" }}
          >
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-10">
              <div className="select-none text-center">
                <h1 className="text-4xl md:text-7xl font-medium tracking-tighter">
                  Ideas into impact <br /> Design with AI
                </h1>
              </div>

              <p className="mt-10 max-w-xl lowercase px-6 text-center text-sm leading-6 text-muted-foreground">
                WE BUILD BOLD BRANDS, DIGITAL EXPERIENCES,
                AND VISUAL SYSTEMS DESIGNED TO MAKE AN IMPACT.
                STRATEGY, CREATIVITY, AND TECHNOLOGY - IN ONE PLACE.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" className="gap-2">
                  Explore our work
                </Button>

                <Button variant="outline" size="lg" className="gap-2">
                  Start a project
                </Button>
              </div>
            </div>


            <div
              className="pointer-events-none relative my-auto mt-10 h-[20cqw] w-full"
              style={{
                perspective: "100cqw",
                perspectiveOrigin: "50% 50%",
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(-18deg) rotateY(0deg)",
                  animation: `orbit-${id} 40s linear infinite`,
                }}
              >
                {Array.from({ length: totalCards }, (_, index) => {
                  const angle = (index / totalCards) * 360
                  const image = images[index % images.length]

                  return (
                    <div
                      key={index}
                      className="absolute h-[10cqw] w-[17cqw] overflow-hidden backdrop-blur-md rounded border shadow-2xl"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `
                      rotateY(${angle}deg)
                      translateZ(${radiusCqw}cqw)
                    `,
                      }}
                    >
                      <img
                        src={image?.src ?? ""}
                        alt={image?.alt ?? ""}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="h-full w-full select-none p-1 object-contain"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}