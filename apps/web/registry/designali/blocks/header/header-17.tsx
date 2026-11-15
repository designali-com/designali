"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Work", count: "24" },
  { label: "Studio", count: "" },
  { label: "Services", count: "6" },
  { label: "Journal", count: "41" },
  { label: "Contact", count: "" },
]

export default function Header17() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="relative w-full bg-background">
      <header className="relative z-40">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="#"
            className={`text-lg font-semibold tracking-tight transition-colors ${open ? "text-background" : ""}`}
          >
            Atelier Nord
          </a>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-3 text-sm transition-colors ${open ? "text-background" : ""}`}
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-3 w-6">
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`absolute inset-x-0 top-0 z-30 min-h-[560px] bg-foreground text-background transition-[clip-path] duration-500 ease-out ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-28 pb-12 md:grid-cols-[2fr_1fr]">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href="#"
                tabIndex={open ? 0 : -1}
                className="group flex items-start gap-3 border-b border-background/15 py-3 text-4xl font-medium tracking-tight transition-opacity hover:opacity-70 sm:text-6xl"
              >
                {link.label}
                {link.count && <sup className="mt-2 text-xs font-normal opacity-60">{link.count}</sup>}
                <ArrowUpRight className="ms-auto mt-2 size-6 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </nav>
          <div className="space-y-8 text-sm md:pt-4">
            <div>
              <p className="opacity-50">New business</p>
              <a href="#" tabIndex={open ? 0 : -1} className="mt-1 block hover:underline">
                hello@ateliernord.studio
              </a>
            </div>
            <div>
              <p className="opacity-50">Studio</p>
              <p className="mt-1 leading-6">
                Vesterbrogade 41
                <br />
                1620 Copenhagen
              </p>
            </div>
            <div>
              <p className="opacity-50">Follow</p>
              <div className="mt-1 flex gap-4">
                {["Newsletter", "Showreel", "Press kit"].map((item) => (
                  <a key={item} href="#" tabIndex={open ? 0 : -1} className="hover:underline">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24">
        <p className="max-w-2xl text-3xl font-medium tracking-tight text-muted-foreground md:text-5xl">
          Identity and digital design for cultural institutions.
        </p>
      </div>
    </section>
  )
}
