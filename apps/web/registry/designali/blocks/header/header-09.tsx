import {
  Bell,
  ChevronDown,
  Search,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"

const links = [
  { label: "Dashboard", active: true },
  { label: "Projects" },
  { label: "Templates" },
  { label: "Clients" },
  { label: "Invoices" },
]

export default function Header09() {
  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-6">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-7 items-center justify-center bg-primary text-xs text-primary-foreground">
              D
            </span>
            Designali
          </a>
          <span className="hidden h-5 w-px bg-border sm:block" />
          <button
            type="button"
            className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:flex"
          >
            Designali Studio
            <ChevronDown className="size-3.5" />
          </button>

          <div className="relative ms-auto hidden w-72 md:block">
            <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search projects, templates..." className="h-9 ps-9" />
            <kbd className="absolute end-2 top-1/2 -translate-y-1/2 border px-1.5 font-mono text-[10px] text-muted-foreground">
              /
            </kbd>
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="relative ms-auto flex size-9 items-center justify-center border md:ms-0"
          >
            <Bell className="size-4" />
            <span className="absolute end-1.5 top-1.5 size-1.5 rounded-full bg-destructive" />
          </button>
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-chart-1 to-chart-3 text-xs font-medium text-white">
            AI
          </span>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? "border-b-2 border-foreground px-3 pb-2.5 text-sm font-medium"
                  : "border-b-2 border-transparent px-3 pb-2.5 text-sm text-muted-foreground hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </section>
  )
}
