 
"use client"

import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { LogoCode } from "@/src/components/templates/(icons)/logos/logo-code"
 import { LogoDownloadPanel } from "@/src/components/templates/(icons)/logos/logo-download"
 import { LogoViewControlsPanel } from "@/src/components/templates/(icons)/logos/logo-controls"
import { Logos } from "@/src/components/templates/(icons)/logos/logos"

import { allLogos } from "@designali/logos"

import { Button } from "@workspace/ui/components/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { IconGridLines } from "@/src/components/logo"

function getAllEntries() {
  const entries: { baseId: string; category: string; tags: string[] }[] = []
  const seen = new Set<string>()
  Object.entries(allLogos).forEach(([cat, logos]) => {
    Object.values(logos).forEach((entry: any) => {
      const { baseId, tags } = entry.metadata
      if (!seen.has(baseId)) {
        seen.add(baseId)
        entries.push({ baseId, category: cat, tags: tags ?? [] })
      }
    })
  })
  return entries
}

function getMetadata(name: string) {
  let fallback = null
  for (const logos of Object.values(allLogos)) {
    for (const entry of Object.values(logos)) {
      const e = entry as any
      if (e.metadata.baseId === name) {
        if (e.metadata.variant === "default") return e.metadata
        if (!fallback) fallback = e.metadata
      }
    }
  }
  return fallback
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allLogos) as Record<string, any>[]) {
    Object.values(logos).forEach((e: any) => {
      if (e.metadata.baseId === baseId) {
        result.push({ id: e.metadata.id, variant: e.metadata.variant })
      }
    })
  }
  return result
}

function toPascalCase(name: string) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

export default function LogoDetailPage() {
  const params = useParams()
  const name = typeof params.name === "string" ? params.name : ""
  const router = useRouter()

  const allEntries = useMemo(() => getAllEntries(), [])
  const currentIndex = allEntries.findIndex((e) => e.baseId === name)

  const [size, setSize] = useState(260)
  const [color, setColor] = useState("currentColor")

  const variants = getVariants(name)
  const [activeVariant, setActiveVariant] = useState(
    variants.find(
      (v) =>
        v.variant === "default" || v.variant === "outline" || v.variant === ""
    )?.variant ??
    variants[0]?.variant ??
    "default"
  )

  const activeId = variants.find((v) => v.variant === activeVariant)?.id ?? name

  const metadata = getMetadata(name)

  if (!metadata) {
    return (
      <div className="text-muted-foreground flex h-[80vh] items-center justify-center p-4 text-sm">
        No logo found
      </div>
    )
  }

  const category = metadata.category ?? "Uncategorized"
  const tagsArray: string[] = metadata.tags ?? []
  const componentName = toPascalCase(name)

  const goNext = () => {
    if (allEntries.length === 0) return

    const nextIndex = (currentIndex + 1) % allEntries.length
    const nextEntry = allEntries[nextIndex]

    if (!nextEntry) return

    router.replace(`/logos/${nextEntry.baseId}`)
  }

  const goPrev = () => {
    if (allEntries.length === 0) return

    const prevIndex =
      (currentIndex - 1 + allEntries.length) % allEntries.length

    const prevEntry = allEntries[prevIndex]

    if (!prevEntry) return

    router.replace(`/logos/${prevEntry.baseId}`)
  }

  return (
    <div className="flex h-full mx-auto w-full flex-col my-10 gap-2 p-2">
      <div className="grid lg:grid-cols-2 gap-3 h-full items-end w-full">
        <div className="relative flex aspect-square h-full w-full items-center justify-center border border">
          <Logos className="z-10" id="preview-svg" name={activeId} size={size} color={color} />
          <IconGridLines className=" absolute z-0 h-80 w-full opacity-10 aspect-square h-full w-full" />
        </div>

        <div className="w-full items-end flex-1 justify-between lg:pt-20 space-y-2">
          <div className="flex justify-between gap-2 pb-4 lg:pb-6">
            <h1 className="text-lg font-medium">{componentName}</h1>
            
            {variants.length > 1 && (
              <div className="space-y-2">
                <ToggleGroup
                  size="sm"
                  variant="outline"
                  value={[activeVariant]}
                  onValueChange={(val) => {
                    const variant = val[0]
                  
                    if (variant !== undefined) {
                      setActiveVariant(variant)
                    }
                  }}
                  className="w-full flex-wrap"
                >
                  {variants.map((v) => (
                    <ToggleGroupItem
                      key={v.id}
                      value={v.variant}
                      className="flex-1 text-xs"
                    >
                      {v.variant}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            )}
          </div>

          <div className="flex items-center pb-4 gap-2">
              <Button
                size="sm"
                className="cursor-pointer"
                variant="secondary"
                onClick={() => {
                  window.location.href = `/vectors#${category}`
                }}
              >
                {category}
              </Button><p className="text-sm text-muted-foreground">
                {tagsArray.length > 0 ? tagsArray.join(" • ") : "No tags"}
              </p>
            </div>

          <LogoViewControlsPanel
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />

          <LogoDownloadPanel logoName={activeId} size={size} color={color} />
          <LogoCode iconName={name} size={size} color={color} />
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <Button size="sm" variant="outline" className="cursor-pointer" onClick={goPrev}>
          Back
        </Button>
        <Button size="sm" variant="outline" className="cursor-pointer" onClick={goNext}>
          Next
        </Button>
      </div>

    </div>
  )
}
