"use client"

import { useEffect, useState } from "react"
import {
  ArrowRight,
  Menu,
  X,
} from "@designali/icons"

const links = ["Work", "Services", "Templates", "Blogs"]

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date())
    const first = setTimeout(() => setTime(format()), 0)
    const id = setInterval(() => setTime(format()), 30_000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  }, [timeZone])
  return time
}

export default function Header20() {
  const [open, setOpen] = useState(false)
  const time = useLocalTime("Asia/Kolkata")

  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-6 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight">designali</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">Studio time, {time ?? "--:--"}</span>
          </a>
          <nav className="hidden gap-8 text-sm lg:flex">
            {links.map((link) => (
              <a key={link} href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-6">
            <span className="hidden items-center gap-2 text-xs md:flex">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              Booking new projects
            </span>
            <a href="#" className="group hidden items-center gap-1.5 border-b border-foreground pb-0.5 text-sm lg:flex">
              Start a project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex size-9 items-center justify-center border lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t lg:hidden">
            <nav className="mx-auto max-w-7xl px-6 py-4">
              {links.map((link, index) => (
                <a key={link} href="#" className="flex items-baseline gap-4 border-b py-4 text-2xl font-medium tracking-tight">
                  <span className="font-sans text-xs text-muted-foreground">0{index + 1}</span>
                  {link}
                </a>
              ))}
            </nav>
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-6">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-primary" />
                Booking new projects
              </span>
              <a href="#" className="flex items-center justify-between bg-foreground px-4 py-3 text-sm text-background">
                Start a project
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </section>
  )
}
