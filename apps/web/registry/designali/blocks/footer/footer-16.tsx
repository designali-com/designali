import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const links = ["Product", "Templates", "Pricing", "Security", "Docs", "Status"]

export default function Footer16() {
  return (
    <footer className="w-full bg-background px-6 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden bg-foreground px-6 py-14 text-background sm:px-12 md:py-20">
          <div
            aria-hidden
            className="absolute -end-24 -top-24 size-80 rounded-full bg-gradient-to-br from-chart-1 to-chart-3 opacity-40 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                Your next form is two minutes away.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 opacity-70">
                Start from 400 templates or a blank page. Free for up to 1,000
                responses a month, forever.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" variant="secondary" nativeButton={false} render={<a href="#" />}>
                Create a form
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                Contact sales
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-6 items-center justify-center border-2 border-foreground text-[10px]">
              F
            </span>
            Formwell
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {links.map((link) => (
              <a key={link} href="#" className="hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 Formwell Inc.</p>
        </div>
      </div>
    </footer>
  )
}
