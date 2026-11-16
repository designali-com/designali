import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const links = ["Templates", "Blocks", "Icons", "Pricing", "Docs", "Blogs"]

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
                Your next website is a copy away.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 opacity-70">
                Start from 460+ Designali blocks and 240+ landing pages, or work
                with Ali Imam on a custom design and build.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" variant="secondary" nativeButton={false} render={<a href="#" />}>
                Browse blocks
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                Start a project
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-6 items-center justify-center border-2 border-foreground text-[10px]">
              D
            </span>
            designali
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {links.map((link) => (
              <a key={link} href="#" className="hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 Designali</p>
        </div>
      </div>
    </footer>
  )
}
