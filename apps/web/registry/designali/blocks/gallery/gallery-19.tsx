"use client"

import { useState } from "react"
import { Grid2x2, Grid3x3, LayoutGrid } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const assets = [
  { name: "hero-banner-final.png", size: "4.2 MB", dims: "3840x2160", gradient: "linear-gradient(135deg, var(--chart-1), var(--chart-2))" },
  { name: "team-offsite-07.jpg", size: "2.8 MB", dims: "4000x3000", gradient: "linear-gradient(200deg, var(--chart-3), var(--chart-4))" },
  { name: "product-angle-left.png", size: "1.1 MB", dims: "2048x2048", gradient: "linear-gradient(60deg, var(--chart-5), var(--chart-1))" },
  { name: "office-lobby.jpg", size: "3.4 MB", dims: "5472x3648", gradient: "linear-gradient(160deg, var(--chart-2), var(--chart-5))" },
  { name: "packaging-mock-v3.png", size: "6.0 MB", dims: "3000x3000", gradient: "linear-gradient(90deg, var(--chart-4), var(--chart-3))" },
  { name: "founder-portrait.jpg", size: "2.2 MB", dims: "3200x4000", gradient: "linear-gradient(300deg, var(--chart-1), var(--chart-4))" },
  { name: "event-stage-wide.jpg", size: "5.1 MB", dims: "6000x3376", gradient: "linear-gradient(20deg, var(--chart-4), var(--chart-2))" },
  { name: "icon-set-preview.png", size: "0.8 MB", dims: "1600x1200", gradient: "linear-gradient(250deg, var(--chart-5), var(--chart-3))" },
  { name: "billboard-draft.png", size: "7.3 MB", dims: "7200x2400", gradient: "linear-gradient(110deg, var(--chart-2), var(--chart-1))" },
  { name: "newsletter-header.png", size: "0.6 MB", dims: "1200x600", gradient: "linear-gradient(180deg, var(--chart-3), var(--chart-5))" },
  { name: "store-front-night.jpg", size: "3.9 MB", dims: "4896x3264", gradient: "linear-gradient(45deg, var(--chart-1), var(--chart-3))" },
  { name: "app-screens-set.png", size: "2.5 MB", dims: "2880x1800", gradient: "linear-gradient(330deg, var(--chart-4), var(--chart-5))" },
]

const densities = [
  { id: "comfortable", label: "Large", icon: Grid2x2, cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
  { id: "default", label: "Medium", icon: LayoutGrid, cols: "grid-cols-2 lg:grid-cols-4" },
  { id: "compact", label: "Small", icon: Grid3x3, cols: "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6" },
] as const

const ratios = { Square: "aspect-square", Landscape: "aspect-[4/3]", Portrait: "aspect-[3/4]" } as const
type Ratio = keyof typeof ratios

export default function Gallery19() {
  const [density, setDensity] = useState<(typeof densities)[number]["id"]>("default")
  const [ratio, setRatio] = useState<Ratio>("Square")
  const [details, setDetails] = useState(true)
  const cols = densities.find((d) => d.id === density)!.cols

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Brand assets</h2>
            <p className="text-sm text-muted-foreground">{assets.length} files in Marketing / 2025</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex border border-border" role="group" aria-label="Aspect ratio">
              {(Object.keys(ratios) as Ratio[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRatio(r)}
                  aria-pressed={ratio === r}
                  className={cn("px-3 py-1.5 text-xs", ratio === r ? "bg-foreground text-background" : "hover:bg-muted")}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="flex border border-border" role="group" aria-label="Grid density">
              {densities.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  aria-label={d.label}
                  aria-pressed={density === d.id}
                  onClick={() => setDensity(d.id)}
                  className={cn("flex size-8 items-center justify-center", density === d.id ? "bg-foreground text-background" : "hover:bg-muted")}
                >
                  <d.icon className="size-4" />
                </button>
              ))}
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-xs">
              <input type="checkbox" checked={details} onChange={(e) => setDetails(e.target.checked)} className="accent-foreground" />
              Show details
            </label>
          </div>
        </div>
        <div className={cn("mt-6 grid gap-3", cols)}>
          {assets.map((asset) => (
            <figure key={asset.name} className="group min-w-0">
              <div
                className={cn("w-full border border-border transition-[aspect-ratio] group-hover:opacity-90", ratios[ratio])}
                style={{ background: asset.gradient }}
              />
              {details && density !== "compact" && (
                <figcaption className="mt-2 min-w-0">
                  <p className="truncate text-sm font-medium">{asset.name}</p>
                  <p className="text-xs text-muted-foreground tabular-nums">
                    {asset.dims} - {asset.size}
                  </p>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
