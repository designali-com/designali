 
"use client"

import React, { useState } from "react"

import {
  ArrowUpRight,
  ChevronsLeftRight,
  Equal,
  X,
} from "@designali/icons"

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
  {
    name: "Brand Identity",
    href: "/work",
  },
  {
    name: "UI/UX Design",
    href: "/work",
  },
  {
    name: "Web Development",
    href: "/work",
  },
  {
    name: "Design Systems",
    href: "/work",
  },
]

const industries = [
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Blocks",
    href: "/blocks",
  },
  {
    name: "UI Designs",
    href: "/ui",
  },
  {
    name: "Icons",
    href: "/icons",
  },
  {
    name: "Logos",
    href: "/logos",
  },
  {
    name: "Illustration",
    href: "/illustration",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Docs",
    href: "/docs",
  },
]

const insights = [
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Case Studies",
    href: "/work",
  },
  {
    name: "Terms",
    href: "/docs/legal/terms",
  },
]

const aboutUs = [
  {
    name: "Ali Imam",
    href: "https://www.linkedin.com/in/aliimam-in/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 border-b top-0 z-50 w-full bg-background/50 backdrop-blur-md">
      <div className="px-3">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <div className="flex h-14 items-center gap-2 border px-4">
            <Logo className="size-8" />

            <span className="text-lg font-medium">
              designali
            </span>
          </div>

          {/* Desktop Navigation */}

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>

              {/* Services */}

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"h-14 border px-6"}>
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-2 p-4">
                    {services.map((item) => (
                      <NavigationMenuLink
                        key={item.name}
                        href={item.href}
                        className="group grid rounded-md p-3 transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium">
                          {item.name}
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Explore {item.name.toLowerCase()}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries */}

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"h-14 border px-6"}>
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[500px] grid-cols-2 gap-1 p-4">
                    {industries.map((item) => (
                      <NavigationMenuLink
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights */}

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"h-14 border px-6"}>
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-2 p-4">
                    {insights.map((item) => (
                      <NavigationMenuLink
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-3 text-sm transition-colors hover:bg-accent"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"h-14 border px-6"}>
                  About
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-[220px] p-3">
                    {aboutUs.map((item) => (
                      <NavigationMenuLink
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-1 lg:flex">
            <ModeToggle />

            <Button
              nativeButton={false}
              variant="outline"
              className="h-14 px-6"
              render={
                <a
                  href="/contact"
                  className="flex items-center gap-2"
                />
              }
            >
              Get in touch
              <ArrowUpRight />
            </Button>
          </div>

          {/* Mobile Menu */}

          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger
              className="lg:hidden"
              render={
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                />
              }
            >
              {isOpen ? (
                <X className="size-8" />
              ) : (
                <Equal className="size-8" />
              )}
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full overflow-y-auto p-6 sm:w-[485px]"
            >
              <div className="flex h-full flex-col">

                <div className="flex-1 py-6">

                  <Accordion className="w-full">

                    {/* Services */}

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
                                onClick={() =>
                                  setIsOpen(false)
                                }
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Industries */}

                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-lg font-semibold">
                        Products
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {industries.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() =>
                                  setIsOpen(false)
                                }
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Insights */}

                    <AccordionItem value="insights">
                      <AccordionTrigger className="text-lg font-semibold">
                        Resources
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {insights.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() =>
                                  setIsOpen(false)
                                }
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* About */}

                    <AccordionItem value="about">
                      <AccordionTrigger className="text-lg font-semibold">
                        About
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {aboutUs.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                                onClick={() =>
                                  setIsOpen(false)
                                }
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

                {/* Mobile CTA */}

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
