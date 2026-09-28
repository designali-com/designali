 
"use client"

import { cn } from "@workspace/ui/lib/utils"
import { motion } from "framer-motion"

import {
  ClaudeAI,
  Cursor,
  Github,
  Grok,
  OpenAI,
  Replicate,
  Vercel,
} from "@designali/logos"

interface IntegrationIcon {
  icon: React.ReactNode
  className?: string
}

interface Integration01Props {
  label?: string
  title?: string
  description?: string
  integrations?: IntegrationIcon[]
  className?: string
}

const IntegrationIconBubble = ({
  icon,
  className,
}: IntegrationIcon) => {
  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center border bg-background",
        className
      )}
    >
      {icon}
    </div>
  )
}

export const Features = ({
  label = "Integrations",
  title = "Built for your workflow",
  description = "Designali works alongside the tools you already use to design, build, and ship modern products.",
  integrations = [
    { icon: <OpenAI size={28} /> },
    { icon: <ClaudeAI size={28} /> },
    { icon: <Cursor size={28} /> },
    { icon: <Github size={28} /> },
    { icon: <Vercel size={28} /> },
    { icon: <Replicate size={28} /> },
    { icon: <Grok size={28} /> },
  ],
  className,
}: Integration01Props) => {
  /**
   * Get position on quadratic bezier curve
   */
  const getPositionOnCurve = (index: number, total: number) => {
    if (total <= 1) {
      return {
        x: 50,
        y: 20,
      }
    }

    const t = index / (total - 1)

    const p0 = {
      x: 0,
      y: 75,
    }

    const p1 = {
      x: 50,
      y: -50,
    }

    const p2 = {
      x: 100,
      y: 75,
    }

    const x =
      Math.pow(1 - t, 2) * p0.x +
      2 * (1 - t) * t * p1.x +
      Math.pow(t, 2) * p2.x

    const y =
      Math.pow(1 - t, 2) * p0.y +
      2 * (1 - t) * t * p1.y +
      Math.pow(t, 2) * p2.y

    return {
      x,
      y,
    }
  }

  const mobileIntegrations = integrations.slice(0, 5)

  /**
   * Arc marquee
   *
   * Logos move from left -> center -> right
   * and then loop back to the beginning.
   *
   * The logo itself never rotates.
   */
  const renderIntegrationArc = (
    icons: IntegrationIcon[],
    className?: string
  ) => {
    const count = icons.length

    return (
      <div
        className={cn(
          "relative aspect-[3/1]",
          className
        )}
      >
        {/* Arc */}
        <svg
          className="absolute inset-0 size-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 0 75 Q 50 -50 100 75"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Logos */}
        {icons.map((integration, index) => {
          const start = getPositionOnCurve(index, count)

          return (
            <motion.div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{
                left: `${start.x}%`,
                top: `${start.y}%`,
              }}
              animate={{
                left: [
                  `${start.x}%`,
                  `${start.x}%`,
                  `${start.x}%`,
                ],
                top: [
                  `${start.y}%`,
                  `${start.y}%`,
                  `${start.y}%`,
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  /**
                   * Move the bubble along the arc
                   * without rotating the logo.
                   */
                  x: [
                    "0%",
                    "0%",
                  ],
                }}
              >
                <IntegrationIconBubble
                  icon={integration.icon}
                  className={integration.className}
                />
              </motion.div>
            </motion.div>
          )
        })}

        {/* Left Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-8
            w-1/4
            bg-linear-to-r
            from-background
            to-transparent
            md:w-24
          "
        />

        {/* Right Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            -right-8
            w-1/4
            bg-linear-to-l
            from-background
            to-transparent
            md:w-24
          "
        />
      </div>
    )
  }

  return (
    <section
      className={cn(
        "container mx-auto overflow-hidden px-4 py-20 md:py-28",
        className
      )}
    >
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {label && (
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {label}
          </p>
        )}

        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* Integration Arc */}
      <div className="relative mx-auto mt-14 max-w-5xl">
        {/* Mobile */}
        {renderIntegrationArc(
          mobileIntegrations,
          "md:hidden"
        )}

        {/* Desktop */}
        {renderIntegrationArc(
          integrations,
          "hidden md:block"
        )}
      </div>
    </section>
  )
} 