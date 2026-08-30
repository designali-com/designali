"use client"

import React from "react"
import { Equal, X } from "lucide-react"

import { Menus } from "@/registry/designali/blocks/header/header-01/components/menus"
import { ModeToggle } from "@/registry/designali/blocks/header/header-01/components/theme-switch"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Logo } from "@workspace/ui/designali/logo"

const menuItems = [ 
  { name: "Components", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
]

const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full transition-colors duration-300 ",
          isScrolled ? "border-transparent" : "border-b border-dotted"
        )}
      >
        <div
          className={cn(
            "mx-auto bg-background px-2 transition-all duration-300",
            isScrolled &&
            "bg-background/50 md:mt-2 max-w-5xl border-b md:border px-1 backdrop-blur-xl"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-1">
            <div className="flex w-full justify-between md:w-auto">
              <a href="#" aria-label="home" className="flex items-center gap-2">
                <Logo className="size-8 ml-3" />
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2.5 pr-4 md:hidden"
                >
                  <Equal className="m-auto scale-120 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-120 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit md:block">
              <Menus />
            </div>

            <div className="shadow-3xl hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm border p-3 shadow-zinc-300/20 backdrop-blur-2xl in-data-[state=active]:block md:flex-nowrap md:m-0 md:flex md:w-fit md:gap-6 md:space-y-0 md:border-transparent md:bg-transparent md:p-0 md:shadow-none md:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="block p-3 md:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block text-sm duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0">
                <ModeToggle />
                <Button className={cn(isScrolled && "md:hidden")}
                  render={<a target="_blank" href="https://cal.com/designali/30min" />
                  }>
                  <span>Book an Intro call</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }
