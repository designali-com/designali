import * as React from "react"

import { Separator } from "@workspace/ui/components/separator"

const links = ["Privacy", "Terms", "Cookies", "Status"]

export default function SiteFooterSeparators() {
  return (
    <footer className="flex w-full max-w-md flex-col gap-4">
      <Separator />
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>&copy; 2026 Fieldnote Labs</span>
        <nav className="flex h-3.5 items-center gap-3">
          {links.map((link, index) => (
            <React.Fragment key={link}>
              {index > 0 && <Separator orientation="vertical" />}
              <a href="#" className="hover:text-foreground">
                {link}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  )
}
