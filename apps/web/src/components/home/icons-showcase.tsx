/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useMemo } from "react"
import { Marquee } from "@/registry/designali/ui/marquee"
import { Logos } from "@/src/components/templates/(icons)/logos/logos"
import { Icons } from "@/src/components/templates/(icons)/icons/icons"
import { Vectors } from "@/src/components/templates/(icons)/vectors/vectors"

import { allLogos } from "@designali/logos"
import { allIcons } from "@designali/icons"
import { allVectors } from "@designali/vectors"

import Link from "next/link"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

// ─────────────────────────────────────────────
// Utility: Fisher–Yates Shuffle
// ─────────────────────────────────────────────
function seededShuffle<T>(array: T[], seed = 42): T[] {
    const arr = [...array]
    let value = seed
  
    for (let i = arr.length - 1; i > 0; i--) {
      value = (value * 9301 + 49297) % 233280
      const j = Math.floor((value / 233280) * (i + 1))
  //@ts-ignore
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  
    return arr
  }


export function IconsShowcase() {
    const idsLogos = useMemo(() => getUniqueBaseIds(allLogos, 40, false), [])
    const idsIcons = useMemo(() => getUniqueBaseIds(allIcons, 40, false), [])

    const idsVectors = useMemo(() => getUniqueBaseIds(allVectors, 40, true), [])

    const rowIcons = idsIcons.slice(0, Math.ceil(idsIcons.length / 2))
    const rowVectors = idsVectors.slice(0, Math.ceil(idsVectors.length / 2))
    const rowLogos = idsLogos.slice(Math.ceil(idsLogos.length / 2))

    return (
        <section className="border-t py-2">
            <div className=" text-center">
                <div className="my-10">
                    <CounterNumber
                        className="font-bold tracking-tighter"
                        suffix="+"
                        value={5000}
                        size="2xl"
                    />
                    <h2 className="py-4 text-2xl font-medium uppercase font-mono">
                        icons, logos, and vector
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                        Ready to use, SVG logos with multiple variants — copy,
                        download, or drop into your project.
                    </p>
                </div>
            </div>



            <Marquee pauseOnHover speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowIcons.map((id) => (
                        <IconTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>


            <Marquee pauseOnHover reverse speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowVectors.map((id) => (
                        <VectorTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>


            <Marquee pauseOnHover speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowLogos.map((id) => (
                        <LogoTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>
        </section>
    )
}

// ─────────────────────────────────────────────
// Generic Unique BaseId Extractor
// firstOccurrence = true  → first entry per baseId (safe for vectors)
// firstOccurrence = false → prefer "default" variant only
// ─────────────────────────────────────────────
function getUniqueBaseIds(
    source: Record<string, any>,
    limit = 40,
    firstOccurrence = false
  ): string[] {
    const seen = new Set<string>()
    const ids: string[] = []
  
    for (const group of Object.values(source)) {
      for (const entry of Object.values(group as Record<string, any>)) {
        const metadata = (entry as any)?.metadata
  
        if (!metadata?.baseId) continue
  
        const { baseId, variant } = metadata
  
        if (seen.has(baseId)) continue
  
        if (firstOccurrence) {
          seen.add(baseId)
          ids.push(baseId)
        } else {
          if (!variant || variant === "default") {
            seen.add(baseId)
            ids.push(baseId)
          }
        }
      }
    }
  
    return seededShuffle(ids).slice(0, limit)
  }

// ─────────────────────────────────────────────
// Tiles
// ─────────────────────────────────────────────
function LogoTile({ id }: { id: string }) {
    return (
        <Link href={`/logos/${id}`}>
            <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-30 w-30">
                <Logos name={id} size={40} />
            </div>
        </Link>
    )
}

function IconTile({ id }: { id: string }) {
    return (
        <Link href={`/icons/${id}`}>
            <div className="border-border/40 hover:bg-code flex  shrink-0 items-center justify-center border transition-colors duration-200 h-20 w-20">
                <Icons name={id} size={24} />
            </div>
        </Link>
    )
}

function VectorTile({ id }: { id: string }) {
    return (
        <Link href={`/vectors/${id}`}>
            <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-60 w-60">
                <Vectors name={id} size={100} />
            </div>
        </Link>
    )
}

