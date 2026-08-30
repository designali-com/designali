"use client"

import React from "react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { Logo } from "@workspace/ui/designali/logo"

import { Search } from "./search"

const navLinks = [
    { name: "Templates", href: "/templates" },
    { name: "Blocks", href: "/blocks" },
    { name: "Illustration", href: "/illustration" },
    { name: "Components", href: "/docs" },
    { name: "Icons", href: "/icons" },
]

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-dotted bg-background/50 backdrop-blur-md">
            <nav className="w-full">
                <div className="relative mx-auto flex h-10 w-full items-center justify-between px-2">

                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2 ml-2"
                        >
                            <Logo className="size-6" />
                        </Link>

                        <nav className="hidden items-center gap-6 ml-6 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs text-muted-foreground transition hover:text-foreground"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Search />
                    </div>

                    <Button
                        size="sm"
                        render={
                            <Link target="_blank" href="https://cal.com/designali-com/designali">
                                Book a call
                            </Link>
                        }
                    />
                </div>
            </nav>
        </header>
    )
}

export function TemplateHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-dotted bg-background/50 backdrop-blur-md">
            <nav className="w-full">
                <div className="relative mx-auto flex h-10 w-full items-center justify-between px-2">

                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2 ml-2"
                        >
                            <Logo className="size-6" />
                        </Link>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Search />
                    </div>

                    <Button
                        size="sm"
                        render={
                            <Link target="_blank" href="https://cal.com/designali-com/designali">
                                Book a call
                            </Link>
                        }
                    />
                </div>
            </nav>
        </header>
    )
}