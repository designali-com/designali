"use client"

import { useLayoutEffect, useRef, useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const links = ["Overview", "Integrations", "Changelog", "Pricing", "Docs"]

type Box = { left: number; width: number }

export default function Navigation11() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [boxes, setBoxes] = useState<Box[]>([])
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  useLayoutEffect(() => {
    function measure() {
      setBoxes(
        refs.current.map((element) => ({
          left: element?.offsetLeft ?? 0,
          width: element?.offsetWidth ?? 0,
        }))
      )
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const hoverBox = hovered !== null ? boxes[hovered] : undefined
  const activeBox = boxes[active]

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6">
        <header className="flex w-full max-w-3xl items-center justify-between gap-4 border bg-background p-2">
          <a href="#" className="flex shrink-0 items-center gap-2 ps-2 text-sm font-semibold">
            <span className="size-4 rotate-45 border-2 border-foreground" />
            <span className="hidden sm:inline">Prism</span>
          </a>
          <nav
            className="relative flex min-w-0 overflow-x-auto"
            onMouseLeave={() => setHovered(null)}
          >
            {hoverBox && (
              <span
                aria-hidden
                className="absolute inset-y-0 bg-muted transition-all duration-200"
                style={{ left: hoverBox.left, width: hoverBox.width }}
              />
            )}
            {activeBox && (
              <span
                aria-hidden
                className="absolute bottom-0 h-0.5 bg-foreground transition-all duration-300"
                style={{ left: activeBox.left, width: activeBox.width }}
              />
            )}
            {links.map((link, index) => (
              <button
                key={link}
                ref={(element) => {
                  refs.current[index] = element
                }}
                type="button"
                onMouseEnter={() => setHovered(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "relative h-9 shrink-0 px-3 text-sm transition-colors",
                  active === index ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link}
              </button>
            ))}
          </nav>
          <a
            href="#"
            className="hidden h-9 shrink-0 items-center bg-primary px-4 text-sm text-primary-foreground md:flex"
          >
            Try free
          </a>
        </header>

        <div className="w-full max-w-3xl border bg-muted/30 p-8 text-center md:p-12">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            {links[active]}
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight">
            A sliding highlight follows the pointer while the underline marks where you are.
          </p>
        </div>
      </div>
    </section>
  )
}
