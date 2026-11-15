"use client"

import { useState } from "react"
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  FileText,
  Layers,
  LayoutGrid,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const menus = [
  {
    label: "Product",
    items: [
      { icon: LayoutGrid, title: "Canvas", text: "An infinite board for every idea." },
      { icon: Layers, title: "Components", text: "Reusable parts, synced everywhere." },
      { icon: Sparkles, title: "AI Assist", text: "Draft layouts from a single prompt." },
      { icon: Users, title: "Multiplayer", text: "Design together in real time." },
    ],
  },
  {
    label: "Resources",
    items: [
      { icon: BookOpen, title: "Guides", text: "Step-by-step tutorials and playbooks." },
      { icon: FileText, title: "Changelog", text: "Everything we shipped this month." },
    ],
  },
]

export default function Navigation01() {
  const [open, setOpen] = useState<string | null>(null)
  const current = menus.find((menu) => menu.label === open)

  return (
    <section className="relative w-full border-b bg-background" onMouseLeave={() => setOpen(null)}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="size-5 bg-foreground" />
          Planar
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {menus.map((menu) => (
            <li key={menu.label}>
              <button
                type="button"
                onMouseEnter={() => setOpen(menu.label)}
                onClick={() => setOpen(open === menu.label ? null : menu.label)}
                className={cn(
                  "flex h-9 items-center gap-1 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  open === menu.label && "text-foreground"
                )}
              >
                {menu.label}
                <ChevronDown
                  className={cn("size-3.5 transition-transform", open === menu.label && "rotate-180")}
                />
              </button>
            </li>
          ))}
          {["Pricing", "Customers"].map((link) => (
            <li key={link}>
              <a
                href="#"
                onMouseEnter={() => setOpen(null)}
                className="flex h-9 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="ms-auto flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button>Get started</Button>
        </div>
      </nav>

      {current && (
        <div className="absolute inset-x-0 top-full z-20 border-y bg-background">
          <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-[1fr_300px]">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {current.items.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="group flex gap-4 bg-background p-6 transition-colors hover:bg-muted/50"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border">
                    <item.icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="block text-sm text-muted-foreground">{item.text}</span>
                  </span>
                </a>
              ))}
            </div>
            <a href="#" className="group flex flex-col justify-end gap-2 bg-muted p-6">
              <span className="text-xs tracking-widest text-muted-foreground uppercase">New</span>
              <span className="font-medium">Planar 3.0 is here</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Read the announcement
                <ArrowRight className="size-3.5" />
              </span>
            </a>
          </div>
        </div>
      )}
      <div className="h-72" aria-hidden />
    </section>
  )
}
