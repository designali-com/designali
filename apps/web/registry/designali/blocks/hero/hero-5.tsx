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
    @keyframes horizontal-fan-${id} {
      0% {
        transform: rotateZ(0deg) rotateY(40deg) rotateX(0deg);
      }

      100% {
        transform: rotateZ(0deg) rotateY(0deg) rotateX(360deg);
      }
    }
  `
}

export function HeroSection() {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const css = React.useMemo(() => createCSS(id), [id])

  const totalCards = 14

  return (
    <section className="relative h-screen px-3 w-full overflow-hidden">
      {/* Background */}
      <div className="absolute border-b h-20 w-full overflow-hidden">
        <div className="relative h-full w-full">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="outline-primary/40 absolute h-20 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
              style={{
                top: `${i * 16 - 120}px`,
                left: "-10%",
                width: "400%",
              }}
            /> 
          ))}

        </div>
      </div>

      <div className="absolute border-t bottom-0 h-20 w-full overflow-hidden">
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
              key={i}
              className="outline-primary/40 absolute h-20 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
              style={{
                top: `${i * 16 - 120}px`,
                left: "-10%",
                width: "400%",
              }}
            /> 
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, var(--primary) 0%, var(--background) 35%)",
          opacity: 0.3,
        }}
      >
        {/* Rays */}
        <div
          className="absolute inset-0 blur-md"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
            backgroundImage:
              "repeating-conic-gradient(from 0deg at 100% 0%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 9deg)",
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl border-x flex h-screen w-full flex-col justify-between">
        <style>{css}</style>

        <div
          className="relative flex h-full w-full items-center flex-col justify-between" >

          <div className="relative z-10 flex h-full w-full items-center px-8">
            {/* LEFT CONTENT */}
            <div className="w-full mt-auto mb-20 md:mb-0 md:mt-0 max-w-sm lg:max-w-md">
              <div className="select-none text-left">
                <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-[-0.065em] sm:text-[9vw] lg:text-[6.8vw]">
                  DESIGN MOVES BRANDS
                </h1> 
              </div>

              <p className="mt-8 max-w-md text-left text-xs md:text-sm md:leading-6 text-muted-foreground">
                WE BUILD BOLD VISUAL IDENTITIES, DIGITAL EXPERIENCES,
                AND INTERFACES THAT TURN IDEAS INTO MEMORABLE BRANDS.
                STRATEGY, DESIGN, AND TECHNOLOGY — CRAFTED TOGETHER. 
              </p>

              <div className="my-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant={"outline"}
                >
                  Explore work
                </Button>

                <Button

                  size="lg"

                >
                  Start a project
                </Button>
              </div>
            </div>
          </div>


          <div
            className="
            pointer-events-none
            absolute 
            z-0
            top-1/3
            md:top-1/2
            md:left-[20%] 
            w-full
            items-center
            justify-center
            flex
          "
            style={{
              perspective: "100cqw",
              perspectiveOrigin: "50% 50%",
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                animation: `horizontal-fan-${id} 60s linear infinite`,
              }}
            >
              {Array.from({ length: totalCards }, (_, index) => {
                const angle = (index / totalCards) * 360
                const image = images[index % images.length]

                return (
                  <div
                    key={index}
                    className="absolute h-[14cqw] w-[24.5cqw] rounded border shadow-2xl/10 backdrop-blur-md"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      transform: `
                      rotateX(${angle}deg)
                      translateY(12cqw)
                    `,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden p-1">
                      <img
                        src={image?.src ?? ""}
                        alt={image?.alt ?? ""}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="h-full w-full rounded object-contain opacity-90 select-none"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}