"use client"

import Link from "next/link"
import { Logo } from "@/src/components/logo"
import {
  Send,
} from "@designali/icons"

import { ThemeSwitch } from "@/registry/designali/blocks/footer/footer-04/theme"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const navLinks = [
  { label: "Templates", href: "/templates" },
  { label: "Blocks", href: "/blocks" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blogs", href: "/blogs" },
]

export default function Footer() {
  return (
    <footer className="flex min-h-svh w-full items-center justify-center">
      <div className="p-10">
        <div className="-my-6 grid gap-12 rounded-md border bg-background p-10 md:-my-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Logo className="h-8 w-auto" />
            <h2 className="mt-6 mb-2 text-2xl font-semibold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-4 text-muted-foreground">
              Join the Designali newsletter for new templates, blocks and design resources.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon-sm"
                className="absolute top-0.5 right-0.5"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute top-0 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="">
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <div className="grid space-y-2 text-muted-foreground transition-colors hover:text-foreground">
                <a href="/contact" className="hover:underline">
                  Contact page
                </a>
                <a href="mailto:hello@designali.com" className="hover:underline">
                  hello@designali.com
                </a>
                <a href="mailto:support@designali.com" className="hover:underline">
                  support@designali.com
                </a>
              </div>
            </div>

            <div className="mt-1 -ml-3">
              <Select>
                <SelectTrigger className="text-md w-40 border-0 shadow-none">
                  <SelectValue placeholder="Legal" />
                </SelectTrigger>
                <SelectContent side="top">
                  <SelectGroup>
                    <SelectItem value="contact">Contact</SelectItem>
                    <SelectItem value="terms">Terms</SelectItem>
                    <SelectItem value="privacy">Privacy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex gap-6">
              <Link
                href={"https://www.linkedin.com/company/designali-com/"}
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href={"https://x.com/designali_com"}
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                 X
              </Link>
              <Link
                href={"https://www.instagram.com/designali.code/"}
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </Link>
            </div>
            <ThemeSwitch />
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between gap-3 py-4 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Designali. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/contact" className="text-foreground/60 hover:text-foreground">
              Contact
            </Link>
            <Link href="/docs/legal/terms" className="text-foreground/60 hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
