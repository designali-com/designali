"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, BookOpen, CornerDownLeft, FileCode, Hash, Search, X } from "lucide-react"

const pages = [
  { title: "Getting started", section: "Guides", icon: BookOpen },
  { title: "Authentication", section: "Guides", icon: BookOpen },
  { title: "Webhooks", section: "Guides", icon: BookOpen },
  { title: "POST /v1/payments", section: "API", icon: FileCode },
  { title: "GET /v1/customers", section: "API", icon: FileCode },
  { title: "Idempotency keys", section: "Concepts", icon: Hash },
  { title: "Rate limits", section: "Concepts", icon: Hash },
]

const links = ["Guides", "API", "SDKs", "Changelog"]

export default function Header13() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(
    () => pages.filter((page) => page.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((value) => !value)
      }
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  return (
    <section className="w-full bg-background">
      <header className="relative border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-6">
          <a href="#" className="flex shrink-0 items-center gap-2 text-sm font-semibold">
            <span className="flex size-6 items-center justify-center bg-foreground font-mono text-[11px] text-background">
              t/
            </span>
            Tollgate Docs
          </a>
          <nav className="hidden gap-5 text-sm lg:flex">
            {links.map((link, index) => (
              <a
                key={link}
                href="#"
                className={index === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ms-auto hidden h-9 w-full max-w-xs items-center gap-2 border bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted sm:flex"
          >
            <Search className="size-4" />
            Search documentation
            <kbd className="ms-auto border bg-background px-1.5 font-mono text-[10px]">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Search documentation"
            className="ms-auto flex size-9 items-center justify-center border sm:hidden"
          >
            <Search className="size-4" />
          </button>
          <a href="#" className="hidden shrink-0 items-center gap-1 text-sm md:flex">
            Dashboard
            <ArrowRight className="size-3.5" />
          </a>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t px-6 py-2.5 text-sm lg:hidden">
          {links.map((link, index) => (
            <a
              key={link}
              href="#"
              className={index === 0 ? "shrink-0 text-foreground" : "shrink-0 text-muted-foreground"}
            >
              {link}
            </a>
          ))}
        </nav>

        {open && (
          <div className="absolute inset-x-0 top-0 z-30 flex min-h-[420px] justify-center bg-background/70 px-4 pt-4 backdrop-blur-sm sm:pt-16">
            <div className="h-fit w-full max-w-lg border bg-background shadow-2xl" role="dialog" aria-label="Search">
              <div className="flex items-center gap-3 border-b px-4">
                <Search className="size-4 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search guides and endpoints..."
                  className="h-12 w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button type="button" onClick={() => setOpen(false)} aria-label="Close search">
                  <X className="size-4 text-muted-foreground" />
                </button>
              </div>
              <ul className="max-h-72 overflow-y-auto p-2">
                {results.length === 0 && (
                  <li className="px-3 py-8 text-center text-sm text-muted-foreground">
                    No results for &ldquo;{query}&rdquo;
                  </li>
                )}
                {results.map((page) => (
                  <li key={page.title}>
                    <a href="#" className="group flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-muted">
                      <page.icon className="size-4 text-muted-foreground" />
                      <span className="min-w-0 flex-1 truncate">{page.title}</span>
                      <span className="text-xs text-muted-foreground">{page.section}</span>
                      <CornerDownLeft className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </section>
  )
}
