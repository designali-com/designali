"use client"

import { useState } from "react"
import {
  ChevronDown,
  GitFork,
  Menu,
  Moon,
  Star,
  Sun,
  X,
} from "@designali/icons"

const links = ["Docs", "Components", "Blocks", "Blogs"]
const versions = ["v5.1 (latest)", "v5.0", "v4.x"]

export default function Header15() {
  const [open, setOpen] = useState(false)
  const [version, setVersion] = useState(versions[0]!)
  const [versionOpen, setVersionOpen] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <section className="w-full bg-background">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-6">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="text-muted-foreground">~/</span>
            designali
          </a>
          <div className="relative">
            <button
              type="button"
              aria-expanded={versionOpen}
              onClick={() => setVersionOpen(!versionOpen)}
              className="flex items-center gap-1 border px-2 py-0.5 font-mono text-[11px] text-muted-foreground hover:text-foreground"
            >
              {version.split(" ")[0]}
              <ChevronDown className="size-3" />
            </button>
            {versionOpen && (
              <ul className="absolute start-0 top-full z-30 mt-1 w-36 border bg-background py-1 shadow-md">
                {versions.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        setVersion(item)
                        setVersionOpen(false)
                      }}
                      className={`w-full px-3 py-1.5 text-start font-mono text-xs hover:bg-muted ${
                        item === version ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <nav className="ms-6 hidden gap-6 text-sm md:flex">
            {links.map((link, index) => (
              <a
                key={link}
                href="#"
                className={index === 1 ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-1">
            <a
              href="#"
              className="hidden h-8 items-center border text-xs sm:flex"
              aria-label="Star the designali repository"
            >
              <span className="flex h-full items-center gap-1.5 border-e px-2.5">
                <GitFork className="size-3.5" />
                Star
              </span>
              <span className="flex h-full items-center gap-1 px-2.5 tabular-nums text-muted-foreground">
                <Star className="size-3" />
                2.1k
              </span>
            </a>
            <button
              type="button"
              aria-label="Toggle colour preview"
              aria-pressed={dark}
              onClick={() => setDark(!dark)}
              className="flex size-8 items-center justify-center text-muted-foreground hover:text-foreground"
            >
              {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex size-8 items-center justify-center md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="grid grid-cols-2 gap-px border-t bg-border md:hidden">
            {links.map((link) => (
              <a key={link} href="#" className="bg-background px-6 py-4 text-sm">
                {link}
              </a>
            ))}
            <a href="#" className="col-span-2 flex items-center gap-2 bg-background px-6 py-4 text-sm text-muted-foreground">
              <GitFork className="size-4" />
              Source code / 2.1k stars
            </a>
          </nav>
        )}
      </header>
    </section>
  )
}
