"use client"

import React, { useState } from "react"
import { ArrowUpRight, ChevronsLeftRight, Equal, X } from "lucide-react"

import { ModeToggle } from "@/registry/designali/blocks/header/header-03/components/theme-switch"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Logo } from "@workspace/ui/designali/logo"

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Web Design", href: "/services/web-design" },
  { name: "Branding", href: "/services/branding" },
]

const industries = [
  { name: "Technology", href: "/industries/technology" },
  { name: "E-commerce", href: "/industries/e-commerce" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Entertainment", href: "/industries/entertainment" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Hospitality", href: "/industries/hospitality" },
]

const insights = [
  { name: "Design Trends", href: "/insights/design-trends" },
  { name: "Case Studies", href: "/insights/case-studies" },
  { name: "Design Tips", href: "/insights/design-tips" },
  { name: "Podcast Hub", href: "/insights/podcasts" },
]

const aboutUs = [
  { name: "Our Team", href: "/about/team" },
  { name: "Portfolio", href: "/about/portfolio" },
  { name: "Careers", href: "/careers" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/50 backdrop-blur-md">
      <div className="px-3">
        <div className="flex h-20 items-center justify-between">
          <div className="flex h-14 items-center gap-2 border px-4">
            <Logo className="size-8" />
            <span className="text-lg font-medium">designali</span>
          </div>

          {/* Desktop Navigation */}
           

          {/* CTA Button */}
          <div className="hidden items-center gap-1 lg:flex">
            <ModeToggle />
            <Button
              nativeButton={false}
              variant={"outline"}
              className="h-14 px-6"
              render={<a href="/contact" className="flex items-center gap-2" />}
            >
              Get in touch
              <ArrowUpRight />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="lg:hidden"
              render={
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                />
              }
            >
              {isOpen ? <X className="size-8" /> : <Equal className="size-8" />}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto p-6 sm:w-[485px]"
            >
              <div className="flex h-full flex-col">
                <div className="flex-1 py-6">
                  <Accordion className="w-full">
                    <AccordionItem value="services">
                      <AccordionTrigger className="text-lg font-semibold">
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {services.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-lg font-semibold">
                        Industries
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {industries.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="insights">
                      <AccordionTrigger className="text-lg font-semibold">
                        Insights
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {insights.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="about">
                      <AccordionTrigger className="text-lg font-semibold">
                        About Us
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {aboutUs.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="pb-6">
                  <Button
                    nativeButton={false}
                    render={
                      <a
                        href="/contact"
                        className="flex items-center justify-center gap-2"
                      />
                    }
                    className="w-full"
                  >
                    Get in touch
                    <ChevronsLeftRight />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
