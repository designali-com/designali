"use client"

import { ArrowUp, AtSign, Mail, Rss } from "lucide-react"

const social = [
  { label: "Email", icon: Mail, href: "#" },
  { label: "Social profile", icon: AtSign, href: "#" },
  { label: "RSS feed", icon: Rss, href: "#" },
]

export default function Footer19() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-chart-3 to-chart-5 text-sm font-medium text-white">
              JW
            </span>
            <div>
              <p className="text-sm font-medium">Jun Watanabe</p>
              <p className="text-sm text-muted-foreground">
                Writing about type, interfaces and slow software.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex size-10 shrink-0 items-center justify-center border transition-colors hover:bg-muted"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
        <div className="flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {["Essays", "Notes", "Uses", "Colophon"].map((link) => (
              <a key={link} href="#" className="text-muted-foreground hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Jun Watanabe. Text licensed CC BY-NC 4.0. Set in a typeface
          you probably already have installed.
        </p>
      </div>
    </footer>
  )
}
