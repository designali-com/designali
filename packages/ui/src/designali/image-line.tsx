 "use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Image Corridor
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Two mirrored rails of images travel from the center of the screen toward
 * the viewer using CSS 3D perspective.
 *
 * The cards:
 * - Start small near the center.
 * - Grow as they move toward the viewer.
 * - Move outward from the vanishing point.
 * - Rotate gradually as they approach the edge.
 *
 * All dimensions use `cqw`, making the animation responsive to the container
 * width rather than the viewport.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type CorridorPath = {
  /**
   * Strength of the perspective projection.
   * Lower values create a wider-angle, more dramatic effect.
   *
   * @default 30
   */
  perspective?: number

  /**
   * Card width in world units.
   *
   * @default 18
   */
  cardWidth?: number

  /**
   * Card height in world units.
   *
   * @default 25
   */
  cardHeight?: number

  /**
   * Corner radius of each card.
   *
   * @default 0.4
   */
  cardRadius?: number

  /**
   * On-screen card height when the card is born.
   *
   * @default 2.6
   */
  birthHeight?: number

  /**
   * On-screen card height when the card exits.
   *
   * @default 46
   */
  exitHeight?: number

  /**
   * Horizontal position at birth.
   * Negative values make the card start across the center axis.
   *
   * @default -11
   */
  railBirth?: number

  /**
   * Horizontal position once the rails are fully open.
   *
   * @default 44
   */
  railExit?: number

  /**
   * Controls how quickly the rails open.
   *
   * Values greater than 1 open the rails earlier.
   *
   * @default 3.3
   */
  fan?: number

  /**
   * Y rotation at birth.
   *
   * @default 6
   */
  turnBirth?: number

  /**
   * Y rotation at exit.
   *
   * @default 28
   */
  turnExit?: number

  /**
   * Number of keyframe stops used to create the curve.
   *
   * Increase this if the animation appears faceted.
   *
   * @default 24
   */
  stops?: number
}

const PATH: Required<CorridorPath> = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.4,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
}

/**
 * Creates CSS keyframes for one side of the image corridor.
 */
function createKeyframes(
  direction: 1 | -1,
  name: string,
  path: Required<CorridorPath>
) {
  const steps: string[] = []

  for (let step = 0; step <= path.stops; step++) {
    const progress = step / path.stops

    /**
     * Geometric apparent-size progression.
     *
     * This keeps consecutive cards at a constant size ratio,
     * preventing gaps between cards near the exit.
     */
    const scale =
      (path.birthHeight / path.cardHeight) *
      Math.pow(
        path.exitHeight / path.birthHeight,
        progress
      )

    /**
     * Convert apparent scale into Z depth.
     */
    const z =
      path.perspective *
      (1 - 1 / scale)

    /**
     * Open the rail quickly near the beginning,
     * then hold the lateral position.
     */
    const rail =
      path.railExit -
      (path.railExit - path.railBirth) *
        Math.pow(1 - progress, path.fan)

    /**
     * Gradually rotate cards toward the viewer.
     */
    const turn =
      path.turnBirth +
      (path.turnExit - path.turnBirth) *
        progress

    steps.push(
      `${(progress * 100).toFixed(2)}%{` +
        `transform:translate3d(` +
        `${(direction * rail).toFixed(2)}cqw,0,` +
        `${z.toFixed(2)}cqw)` +
        `rotateY(${(-direction * turn).toFixed(2)}deg)` +
        `}`
    )
  }

  return `@keyframes ${name}{${steps.join("")}}`
}

export type StreamImage = {
  /**
   * Image source.
   */
  src: string

  /**
   * Accessible image description.
   */
  alt?: string
}

export type ImageCorridorProps = {
  /**
   * Images displayed on both rails.
   *
   * The sequence repeats when fewer images are provided
   * than the number of cards.
   */
  images: StreamImage[]

  /**
   * Number of cards visible on each rail.
   *
   * @default 9
   */
  cards?: number

  /**
   * Time in seconds for one card to travel through
   * the complete corridor.
   *
   * @default 18
   */
  speed?: number

  /**
   * Vertical position of the corridor axis.
   *
   * @default 55
   */
  axis?: number

  /**
   * Override any corridor geometry.
   */
  path?: CorridorPath

  /**
   * Content rendered above the image corridor.
   */
  children?: React.ReactNode

  /**
   * Additional classes.
   */
  className?: string
}

export function ImageCorridor({
  images,
  cards = 10,
  speed = 25,
  axis = 50,
  path,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & ImageCorridorProps) {
  const id = React.useId().replace(
    /[^a-zA-Z0-9]/g,
    ""
  )

  const rightAnimation = `image-corridor-right-${id}`
  const leftAnimation = `image-corridor-left-${id}`
  const cardClass = `image-corridor-card-${id}`

  const corridorPath = React.useMemo(
    () => ({
      ...PATH,
      ...path,
    }),
    [path]
  )

  const css = React.useMemo(
    () =>
      `${createKeyframes(
        1,
        rightAnimation,
        corridorPath
      )}${createKeyframes(
        -1,
        leftAnimation,
        corridorPath
      )}` +
      `
        @media (prefers-reduced-motion: reduce) {
          .${cardClass} {
            animation-play-state: paused;
          }
        }
      `,
    [
      rightAnimation,
      leftAnimation,
      cardClass,
      corridorPath,
    ]
  )

  const safeImages =
    images.length > 0 ? images : []

  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{
        containerType: "inline-size",
        ...props.style,
      }}
    >
      <style>{css}</style>

      {/* Image corridor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          perspective: `${corridorPath.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {[rightAnimation, leftAnimation].map(
            (animationName) =>
              Array.from(
                { length: cards },
                (_, index) => {
                  const image =
                    safeImages[
                      index %
                        Math.max(
                          safeImages.length,
                          1
                        )
                    ]

                  return (
                    <div
                      key={`${animationName}-${index}`}
                      className={cn(
                        cardClass,
                        "absolute overflow-hidden"
                      )}
                      style={{
                        left: "50%",
                        top: `${axis}%`,

                        width: `${corridorPath.cardWidth}cqw`,
                        height: `${corridorPath.cardHeight}cqw`,

                        marginLeft: `-${
                          corridorPath.cardWidth / 2
                        }cqw`,

                        marginTop: `-${
                          corridorPath.cardHeight / 2
                        }cqw`,

                        borderRadius: `${corridorPath.cardRadius}cqw`,

                        animation: `${animationName} ${speed}s linear infinite`,

                        /**
                         * Negative delay fills the corridor
                         * immediately on first render.
                         */
                        animationDelay: `-${
                          (index * speed) / cards
                        }s`,

                        backfaceVisibility: "hidden",
                      }}
                    >
                      {image ? (
                        <img
                          src={image.src}
                          alt={image.alt ?? ""}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="h-full w-full aspect-video object-contain"
                        />
                      ) : null}
                    </div>
                  )
                }
              )
          )}
        </div>
      </div>

      {/* Foreground content */}
      {children}
    </div>
  )
}
 