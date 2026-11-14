"use client"

import React from "react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { Logo } from "@workspace/ui/designali/logo"

export function Header() {
  return (
    <header className="sticky top-5 right-0 left-0 z-50 w-full border-b border-dotted bg-background/50 backdrop-blur-md">
      <nav className="w-full">
        <div className="relative mx-auto flex h-10 w-full items-center justify-between px-2">
          {/* Left */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="ml-2 flex items-center gap-2"
                aria-label="Designali"
              >
                <Logo className="size-6" />
              </Link>
            </div>


          </div>

          <nav className="ml-6 hidden items-center gap-6 sm:flex">
            <Link href="#process">
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Process
              </p>
            </Link>
            <Link href="#faq">
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </p>
            </Link>
            <Link href="#pricing">
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </p>
            </Link>
            <Link href="#works">
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Works
              </p>
            </Link>
            <Link href="#services">
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Services
              </p>
            </Link>
          </nav>

          <div className="flex items-center gap-2">

            <Button
              size="sm"  
              nativeButton={false}
              render={
                <Link
                  target="_blank"
                  href={"https://cal.com/designali/30min"}
                  rel="noopener noreferrer"
                />
              }
            >
              Book a Call
            </Button>

          </div>
        </div>
      </nav>
    </header>
  )
}
