 
"use client"

import * as React from "react"
import { motion } from "framer-motion"

const images = [
  "/images/templates/portfolio-simple.jpg",
  "/images/templates/design-agency.jpg",
  "/images/templates/resort.jpg",
  "/images/templates/ai.jpg",
  "/images/templates/vercel.jpg",
  "/images/templates/aliimam-comp.jpg",
  "/images/templates/dalim-agency-old.jpg",
  "/images/templates/dalim-ui-old.jpg",
  "/images/templates/dalim-works-old.jpg",
]

export function HeroSection() {
  const total = images.length
  const centerIndex = (total - 1) / 2

  return (
    <section className="relative flex h-screen w-full items-center justify-center">

      <div className="flex flex-col  h-screen items-center justify-center">

        {/* Heading */}
        <motion.h1
          className="relative pt-40 z-50 max-w-2xl text-center text-4xl font-normal leading-[1.15] tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          A place to <br /> display  <br />
          <span className="font-semibold">designali work.</span>
        </motion.h1>

        {/* Circular Gallery */}
        <div className="absolute left-1/2 bottom-1/3 h-full w-full -translate-x-1/2">

          {images.map((src, index) => {
            const offset = index - centerIndex

            /*
             * Horizontal position
             */
            const x = offset * 90

            /*
             * Circle / arc calculation.
             *
             * Center images stay higher.
             * Outer images move downward.
             */
            const radius = 650

            const y =
              Math.sqrt(
                Math.max(0, radius * radius - x * x)
              ) - radius

            /*
             * Flip the curve downward
             */
            const arcY = -y

            /*
             * Rotate according to position on arc
             */
            const rotate =
              Math.asin(
                Math.min(1, Math.max(-1, x / radius))
              ) *
              (180 / Math.PI)

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  zIndex: index,
                }}
                initial={{
                  x: "-50%",
                  y: "-50%",
                  opacity: 0,
                  scale: 0.75,
                  rotate: rotate - 10,
                }}
                animate={{
                  x: `calc(-50% + ${x}px)`,
                  y: `calc(-50% + ${arcY}px)`,
                  opacity: 1,
                  scale: 1,
                  rotate,
                }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: `calc(-50% + ${arcY - 20}px)`,
                  scale: 1.08,
                  rotate: rotate * 0.6,
                  zIndex: 200,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <div className="h-36 w-48 overflow-hidden border-4 rounded-xl border-foreground bg-background shadow-xl md:h-40 md:w-56">
                  <img
                    src={src}
                    alt={`Designali project ${index + 1}`}
                    className="h-full w-full select-none object-cover"
                    draggable={false}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Description */}
        <motion.p
          className="relative z-50 px-10 mt-14 max-w-60 md:max-w-md text-center text-xs leading-relaxed text-neutral-500 sm:text-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
        >
          Templates, websites and brand projects designed and built by Ali
          Imam at Designali. Design se code tak.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="relative z-50 mt-7 flex items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.35,
            duration: 0.6,
          }}
        >
          <button
            type="button"
            className="rounded-full bg-neutral-900 px-6 py-3 text-xs font-medium text-white shadow-md transition-all hover:bg-neutral-800"
          >
            Explore Templates
          </button>

          <button
            type="button"
            className="text-xs font-medium text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900"
          >
            View work
          </button>
        </motion.div>
      </div>
    </section>
  )
} 