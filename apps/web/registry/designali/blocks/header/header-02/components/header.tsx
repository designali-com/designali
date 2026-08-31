"use client"

import { useState } from "react"
import { ArrowRight, Equal } from "lucide-react"

import { Search } from "@/registry/designali/blocks/header/header-02/components/search"
import { ModeToggle } from "@/registry/designali/blocks/header/header-02/components/theme-switch"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

import { Button } from "@workspace/ui/components/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import { Logo } from "@workspace/ui/designali/logo"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    {
      label: "Overview",
      href: "#",
      active: true,
    },
    {
      label: "Design Systems",
      href: "#",
    },
    {
      label: "UI Kits",
      href: "#",
    },
    {
      label: "Brand Assets",
      href: "#",
    },
    {
      label: "Templates",
      href: "#",
    },
    {
      label: "Workshops",
      href: "#",
    },
    {
      label: "Design Labs",
      href: "#",
    },
    {
      label: "Case Studies",
      href: "#",
    },
    {
      label: "Resources",
      href: "#",
    },
  ]

  const properties = [
    {
      location: "Design Hub – India",
      venues: [
        {
          name: "Creative Studio",
          href: "#",
        },
      ],
    },
    {
      location: "Design Hub – Global",
      venues: [
        {
          name: "UI/UX Studio",
          href: "#",
        },
        {
          name: "Branding Lab",
          href: "#",
        },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            aria-label="Designali home"
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Logo className="ml-3 size-8" />

            <span className="text-lg font-medium">designali</span>
          </a>

          {/* Search */}
          <Search />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            {/* Desktop CTA */}
            <Button className="hidden items-center gap-2 md:flex">
              <span>Start Designing</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden" />
                }
              >
                <Equal className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full overflow-y-auto sm:w-[400px]"
              >
                <div className="m-6 mt-14">
                  {/* Mobile Navigation */}
                  <Accordion className="mb-8">
                    <AccordionItem value="navigation" className="border-none">
                      <AccordionTrigger className="rounded-lg bg-accent px-4 hover:bg-accent/80 hover:no-underline">
                        <div className="text-left">
                          <div className="font-medium">Design Hub</div>

                          <div className="text-sm text-muted-foreground">
                            / Overview
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-2">
                        <div className="overflow-hidden rounded-lg border">
                          {navItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className={`block border-b px-4 py-3 text-sm transition-colors last:border-b-0 hover:bg-accent ${
                                item.active ? "bg-accent font-medium" : ""
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Properties */}
                  <div className="space-y-6">
                    {properties.map((property) => (
                      <div key={property.location}>
                        <p className="mb-2 text-xs tracking-wider text-muted-foreground uppercase">
                          {property.location}
                        </p>

                        <ul className="space-y-2">
                          {property.venues.map((venue) => (
                            <li
                              key={venue.name}
                              className="border-t border-border"
                            >
                              <a
                                href={venue.href}
                                className="block py-3 text-lg font-medium transition-colors hover:text-muted-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {venue.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Secondary Navigation */}
        <nav className="hidden border-t lg:block">
          <ul className="-mx-2 flex items-center justify-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block px-4 py-3 text-xs transition-colors ${
                    item.active
                      ? "border-b-2 border-primary font-semibold"
                      : "text-muted-foreground hover:bg-primary/20"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
