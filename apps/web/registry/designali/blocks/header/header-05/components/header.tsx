/* eslint-disable @next/next/no-img-element */

"use client"

import React from "react"

import { Equal, ShoppingBag } from "lucide-react"

import { Menus } from "@/registry/designali/blocks/header/header-05/components/menus"
import { PhoneMenu } from "@/registry/designali/blocks/header/header-05/components/phone-menus"
import { Search } from "@/registry/designali/blocks/header/header-05/components/search"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import { Logo } from "@workspace/ui/designali/logo"

const Header = () => {
  return (
    <header className="sticky top-0 flex h-12 w-full justify-center bg-foreground">
      <div className="flex w-full max-w-4xl justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="home"
            className="flex items-center gap-2 px-6 whitespace-nowrap"
          >
            <Logo className="size-8" />
          </a>

          {/* Desktop Menu */}
          <Menus />

          {/* Actions + Mobile Menu */}
          <Sheet>
            <div className="flex items-center gap-2 px-2">
              <Search />

              {/* Shopping Bag */}
              <button
                type="button"
                aria-label="Shopping bag"
                className="relative flex h-9 w-9 items-center justify-center text-background hover:text-background/80"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>

              {/* Mobile Menu Trigger */}
              <SheetTrigger
                className="flex h-9 w-9 items-center justify-center text-background hover:text-background/80 lg:hidden"
                aria-label="Open menu"
              >
                <Equal className="h-5 w-5" />
              </SheetTrigger>
            </div>

            {/* Mobile Sheet */}
            <SheetContent side="right" className="">
              <PhoneMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { Header }
