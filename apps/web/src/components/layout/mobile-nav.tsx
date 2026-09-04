"use client"

import * as React from "react"
import Link from "next/link"
import { Equal, XIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { navLinks } from "@/registry/registry-categories"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <XIcon className="size-4" /> : <Equal className="size-4" />}
      </Button>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className={cn(
            "absolute top-[calc(100%+12px)] right-0",
            "w-[calc(100vw-16px)]",
            "border bg-background shadow-lg",
            "animate-in fade-in-0 slide-in-from-top-2",
            "duration-200"
          )}
        >
          <div className="p-2">
            {/* Navigation */}
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex h-10 items-center px-3",
                    "text-sm text-muted-foreground",
                    "transition-colors",
                    "hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="mt-2 border-t pt-2">
              <div className="grid gap-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  render={<Link href="/" onClick={closeMenu} />}
                >
                  Get full access
                </Button>

                <Button
                  className="w-full justify-start"
                  render={<Link href="/" onClick={closeMenu} />}
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
