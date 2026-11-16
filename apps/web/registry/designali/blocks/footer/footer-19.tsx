"use client"

import {
  ArrowUp,
  AtSign,
  Mail,
  Rss,
} from "@designali/icons"

const social = [
  { label: "Email", icon: Mail, href: "mailto:ali@designali.com" },
  { label: "Designali on X", icon: AtSign, href: "https://x.com/designali_com" },
  { label: "Blogs", icon: Rss, href: "/blogs" },
]

export default function Footer19() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/ali.jpg"
              alt="Ali Imam"
              className="size-12 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">Ali Imam</p>
              <p className="text-sm text-muted-foreground">
                Design engineer and founder of Designali. Design se code tak.
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
            {["Blogs", "Work", "Templates", "Contact"].map((link) => (
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
          © 2026 Ali Imam / Designali. Designed in Figma, built with Next.js
          and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
