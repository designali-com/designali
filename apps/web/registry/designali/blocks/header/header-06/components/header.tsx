"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

import { ThemeSwitcher } from "@/registry/designali/blocks/header/header-06/components/theme"
import { cn } from "@workspace/ui/lib/utils"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"

import { Button } from "@workspace/ui/components/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

import { Logo } from "@workspace/ui/designali/logo"
import { NavMenu } from "@/registry/designali/blocks/header/header-06/components/menus"


export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-background px-4 transition-[border-color] duration-300",
        scrolled ? "border-b" : "border-b-0"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center" aria-label="Home">
          <Logo className="size-8" />
          <p className="uppercase font-medium text-sm">
            designali
          </p>
        </Link>

        <NavMenu />


        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="md">
            Contact
          </Button>

          <Button variant="outline" size="md">
            Dashboard
          </Button>

          {/* Account Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  aria-label="Open account menu"
                  className="outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              }
            >
              <Avatar className="border rounded-none">
                <AvatarImage src="/ali.jpg" alt="Ali Imam" />
                <AvatarFallback className={"rounded-none"}>AI</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              {/* My Account */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Team */}
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Team</DropdownMenuSubTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Invite users</DropdownMenuItem>

                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Invite via
                        </DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Email</DropdownMenuItem>

                            <DropdownMenuItem>Message</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* More */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More...</DropdownMenuSubTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>

                      <DropdownMenuItem>Support</DropdownMenuItem>

                      <DropdownMenuItem>API</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <div className="flex my-1 px-2 items-center justify-between">
                  <p className="text-xs">
                    Theme
                  </p>
                  <DropdownMenuShortcut>
                    <ThemeSwitcher />
                  </DropdownMenuShortcut>
                </div>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Logout */}
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
