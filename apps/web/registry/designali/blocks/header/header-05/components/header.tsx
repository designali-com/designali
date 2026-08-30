/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import { Equal, ShoppingBag } from "lucide-react"

import { Menus } from "@/registry/designali/blocks/header/header-05/components/menus"
import { PhoneMenu } from "@/registry/designali/blocks/header/header-05/components/phone-menus"
import { Search } from "@/registry/designali/blocks/header/header-05/components/search"
import { Sheet, SheetContent, SheetTrigger } from "@workspace/ui/components/sheet"
import { Logo } from "@workspace/ui/designali/logo"

const Header = () => {
  return (
    <header className="bg-foreground sticky top-0 flex h-12 w-full justify-center">
      <div className="flex w-full max-w-4xl justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <a
            href="#"
            aria-label="home"
            className="flex items-center gap-2 px-6 whitespace-nowrap"
          >
            <Logo className="size-8" />
          </a>

          <Menus />
          <Sheet>
            <div className="flex items-center gap-2 px-2">
              <Search />
              <button className="text-background hover:text-background/80 relative h-9 w-9">
                <ShoppingBag className="h-4 w-4" />
              </button>
              <SheetTrigger  >
                <button className="text-background hover:text-background/80 h-9 w-9 lg:hidden">
                  <Equal className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="bg-foreground/90 border-muted-foreground w-[300px] p-0 backdrop-blur-lg"
            >
              <PhoneMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { Header }
