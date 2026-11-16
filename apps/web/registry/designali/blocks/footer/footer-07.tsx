import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const columns = [
  { title: "Products", links: ["Templates", "Blocks", "UI Designs", "Icons"] },
  { title: "Resources", links: ["Docs", "Blogs", "Logos", "Illustration"] },
  { title: "Studio", links: ["Work", "Pricing", "Contact", "Terms"] },
]

export default function Footer07() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="max-w-sm">
          <a href="#" className="text-lg font-semibold tracking-tight">
            designali
          </a>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            A monthly letter from Ali Imam on design, code and craft. New
            Designali templates, blocks and resources first.
          </p>
          <form className="mt-6 flex">
            <Input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-10 border-r-0"
            />
            <Button type="submit" className="h-10" aria-label="Subscribe">
              <ArrowRight />
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:underline underline-offset-4">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Designali. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/contact" className="hover:text-foreground">Contact</a>
            <a href="/docs/legal/terms" className="hover:text-foreground">Terms</a>
            <a href="/docs" className="hover:text-foreground">Docs</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
