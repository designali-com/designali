"use client"

import * as React from "react"
import { motion } from "motion/react"

const images = [
  "/img/hero-1.jpg",
  "/img/chat-1-light.jpg",
  "/img/hero-2.jpg",
  "/img/dashboard-1-dark.jpg",
  "/img/login-1.jpg",
  "/img/hero-1.jpg",
  "/img/chat-1-light.jpg",
  "/img/hero-2.jpg",
  "/img/dashboard-1-dark.jpg",
  "/img/login-1.jpg",
]

export function HeroSection() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-background">
      <div className="relative h-full w-full overflow-hidden">

        <motion.div
          className="absolute left-1/2 top-[50%] h-full w-full"
          style={{
            x: "-50%",
            y: "-50%",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, index) => {
            const angle = (index * 360) / images.length

            const radiusX = 500
            const radiusY = 500

            const x = Math.cos((angle * Math.PI) / 180) * radiusX
            const y = Math.sin((angle * Math.PI) / 180) * radiusY

            return (
              <div
                key={`${src}-${index}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
            translate(-50%, -50%)
            translate(${x}px, ${y}px)
          `,
                }}
              >
                {/* COUNTER ROTATION */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="h-30 w-full aspect-video overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        {/* CENTER CONTENT - STATIC */}
        <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 pb-20 text-center">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Next-Gen AI Image Generator v2.0
          </div>

          <h1 className="max-w-[700px] text-4xl font-normal tracking-[-0.04em] md:text-6xl">
             Your Imagination
            <br />
            To Life With AI
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-6 text-muted-foreground">
            Generate photorealistic assets, conceptual artwork, and stunning designs instantly using our advanced multi-model neural engine.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform active:scale-95"
            >
              Start Creating Free
              
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50"
            >
              Explore Showcase
            </button>
          </div>

          <div className="mt-12 grid w-full max-w-[650px] md:grid-cols-3 md:border-t border-border/60 pt-7">
            <div className="px-4 text-center">
              <h3 className="font-serif text-base font-medium">
                4K Resolution
              </h3>
              <p className="m-2 text-[11px] text-muted-foreground">
                Crisp, ultra-high-definition exports ready for print.
              </p>
            </div>

            <div className="border-y md:border-y-0 md:border-x border-border/60 p-4 text-center">
              <h3 className="font-serif text-base font-medium">
                Sub-Second Gen
              </h3>
              <p className="m-2 text-[11px] text-muted-foreground">
                Lightning fast rendering powered by optimized pipelines.
              </p>
            </div>

            <div className="px-4 text-center">
              <h3 className="font-serif text-base font-medium">
                Full Control
              </h3>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Fine-tune prompts, styles, and aspect ratios effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}