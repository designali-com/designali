"use client"

import React from "react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { Logo } from "@workspace/ui/designali/logo"

import { Search } from "./search"
import { MobileNav } from "./mobile-nav"
import { navLinks } from "@/registry/registry-categories"

const CAL_LINK = "https://cal.com/designali-com/designali"

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-dotted bg-background/50 backdrop-blur-md">
      <nav className="w-full">
        <div className="relative mx-auto flex h-10 w-full items-center justify-between px-2">
          {/* Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="ml-2 flex items-center gap-2"
              aria-label="Designali"
            >
              <Logo className="size-6" />
            </Link>

            <nav className="ml-6 hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center Search */}

          <div className="flex items-center gap-2">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
              <Search />
            </div>
            <Button
              size="sm"
              variant={"ghost"}
              className={"hidden md:flex"}
              nativeButton={false}
              render={
                <Link
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Get full access
            </Button>
            <Button
              size="sm"
              nativeButton={false}
              render={
                <Link
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Dashboard
            </Button>

            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}

export function TemplateHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-dotted bg-background/50 backdrop-blur-md">
      <nav className="w-full">
        <div className="relative mx-auto flex h-10 w-full items-center justify-between px-2">
          {/* Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="ml-2 flex items-center gap-2"
              aria-label="Designali"
            >
              <Logo className="size-6" />
            </Link>
          </div>
 
          <div className="flex items-center gap-2">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
              <Search />
            </div>
            <Button
              size="sm"
              variant={"ghost"}
              className={"hidden md:flex"}
              nativeButton={false}
              render={
                <Link
                  href={"/pricing"} 
                  rel="noopener noreferrer"
                />
              }
            >
              Get full access
            </Button>
            <Button
              size="sm"
              nativeButton={false}
              render={
                <Link
                  href={"/dashboard"} 
                  rel="noopener noreferrer"
                />
              }
            >
              Dashboard
            </Button>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}
