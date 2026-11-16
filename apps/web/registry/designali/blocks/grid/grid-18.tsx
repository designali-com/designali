"use client"

import { useState } from "react"
import {
  Anchor,
  Archive,
  Bell,
  Bike,
  Bookmark,
  Camera,
  Check,
  Cloud,
  Coffee,
  Compass,
  Feather,
  Flag,
  Flame,
  Gift,
  Headphones,
  Heart,
  Key,
  Leaf,
  Map as MapIcon,
  Moon,
  Music,
  Package,
  Search,
  Star,
  Sun,
  Umbrella,
  Zap,
} from "@designali/icons"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const icons: [string, IconComponent][] = [
  ["anchor", Anchor], ["archive", Archive], ["bell", Bell], ["bike", Bike],
  ["bookmark", Bookmark], ["camera", Camera], ["cloud", Cloud], ["coffee", Coffee],
  ["compass", Compass], ["feather", Feather], ["flag", Flag], ["flame", Flame],
  ["gift", Gift], ["headphones", Headphones], ["heart", Heart], ["key", Key],
  ["leaf", Leaf], ["map", MapIcon], ["moon", Moon], ["music", Music],
  ["package", Package], ["star", Star], ["sun", Sun], ["umbrella", Umbrella],
  ["zap", Zap],
]

export default function Grid18() {
  const [query, setQuery] = useState("")
  const [copied, setCopied] = useState<string | null>(null)
  const visible = icons.filter(([name]) => name.includes(query.trim().toLowerCase()))

  const copy = (name: string) => {
    navigator.clipboard?.writeText(name).catch(() => {})
    setCopied(name)
    window.setTimeout(() => setCopied((current) => (current === name ? null : current)), 1400)
  }

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Designali icons</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A preview of 4000+ icons in @designali/icons. Click any icon to copy its name.
            </p>
          </div>
          <label className="flex h-10 w-full items-center gap-2 border border-border bg-background px-3 focus-within:border-foreground md:w-72">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search icons"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <span className="font-sans text-[10px] text-muted-foreground">{visible.length}</span>
          </label>
        </div>

        <div className="mt-10 grid grid-cols-3 border-t border-l border-border sm:grid-cols-5 lg:grid-cols-8">
          {visible.map(([name, Icon]) => (
            <button
              key={name}
              type="button"
              onClick={() => copy(name)}
              className="group flex aspect-square flex-col items-center justify-center gap-3 border-r border-b border-border transition-colors hover:bg-muted"
            >
              {copied === name ? (
                <Check className="size-6 text-primary dark:text-primary" />
              ) : (
                <Icon className="size-6" strokeWidth={1.5} />
              )}
              <span className="font-sans text-[10px] text-muted-foreground group-hover:text-foreground">
                {copied === name ? "copied" : name}
              </span>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="border border-t-0 border-border py-16 text-center text-sm text-muted-foreground">
            No icons match &ldquo;{query}&rdquo;. Try &ldquo;sun&rdquo; or &ldquo;map&rdquo;.
          </p>
        )}
      </div>
    </section>
  )
}
