"use client"

import React, { useState } from "react"
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
                href="https://designali.com/"
                className="ml-2 flex items-center gap-2"
                aria-label="Designali"
              >
                <Logo className="size-6" />
              </Link>
              <span className="text-muted-foreground font-thin text-xl">/</span>
              <Link
                href="/"
                className="flex text-primary font-mono items-center text-sm font-bold gap-2"
                aria-label="Designali UI"
              >
                UI
              </Link>
            </div>

            <nav className="ml-6 hidden items-center gap-6 lg:flex">
              <Link href="/components">
                <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Components
                </p>
              </Link>
              <Link href="/templates">
                <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </p>
              </Link>
              <Link href="/blocks">
                <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Blocks
                </p>
              </Link>
            </nav>
          </div>

          {/* Center Search */}

          <div className="flex items-center gap-2">

            <Button
              size="sm"
              variant={"ghost"}
              className={"hidden md:flex"}
              nativeButton={false}
              render={
                <Link
                  href={"https://cal.com/designali/30min"}
                  rel="noopener noreferrer"
                />
              }
            >
              Book a Call
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
              Submit UI
            </Button>


          </div>
        </div>
      </nav>
    </header>
  )
}
