/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { allIcons } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import { IconControlsPanel } from "./icon-controls"
import { IconDownloadPanel } from "./icon-download"
import { useIconFilter } from "./icon-filter-context"
import { Icons } from "./icons"
import { IconGridLines } from "@/src/components/logo"
import { ExpandIcon, PanelRightClose } from "lucide-react"

interface Props {
  selectedLogo: string
  onClearSelection: () => void
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allIcons) as Record<string, any>[]) {
    Object.values(logos).forEach((e: any) => {
      if (e.metadata.baseId === baseId) {
        result.push({ id: e.metadata.id, variant: e.metadata.variant })
      }
    })
  }
  return result
}

function getInitialVariant(
  variants: { id: string; variant: string }[],
  variantTab: "outline" | "filled" | "doodle" | "rounded"
): string {
  if (variantTab === "outline") {
    return (
      variants.find(
        (v) =>
          v.variant === "default" || v.variant === "outline" || v.variant === ""
      )?.variant ??
      variants[0]?.variant ??
      "default"
    )
  }
  return (
    variants.find((v) => v.variant === variantTab)?.variant ??
    variants[0]?.variant ??
    "default"
  )
}

export function IconPreview({ selectedLogo, onClearSelection }: Props) {
  const { variantTab } = useIconFilter()

  const [size, setSize] = useState(() => variantTab === "doodle" ? 80 : 120)
  const [strokeWidth, setstrokeWidth] = useState(0.5)
  const [color, setColor] = useState("currentColor")

  const variants = getVariants(selectedLogo)
  const [activeVariant, setActiveVariant] = useState(() =>
    getInitialVariant(variants, variantTab)
  )

  useEffect(() => {
    setActiveVariant(getInitialVariant(getVariants(selectedLogo), variantTab))
    setSize(variantTab === "doodle" ? 80 : 120) // 👈 tab change hone par size reset
  }, [selectedLogo, variantTab])

  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="hidden h-full flex-col justify-between pt-10 pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="flex aspect-square h-68 w-68 items-center justify-center border">
          <Icons
            id="preview-svg"
            name={activeId}
            size={size}
            color={color}
            strokeWidth={strokeWidth}
          />
          <IconGridLines className="bg-code absolute -z-10 h-68 w-68 opacity-15" />
        </div>

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

        <div className="flex w-68 gap-3 items-center pb-6 justify-between">
          <h2 className="truncate text-center text-sm font-medium">
            {selectedLogo}
          </h2>
          <div className="flex gap-1">
            <Button
              render={
                <Link href={`/icons/${selectedLogo}`} />
              }
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size={"icon"}
            >
              <ExpandIcon />
            </Button>
            <Button
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size={"icon"}
              onClick={onClearSelection}
            >
              <PanelRightClose />
            </Button>
          </div>
        </div>

        <IconControlsPanel
          size={size}
          color={color}
          onSizeChange={setSize}
          onColorChange={setColor}
          strokeWidth={strokeWidth}
          onstrokeWidthChange={setstrokeWidth}
          activeVariant={activeVariant}
        />

        <IconDownloadPanel logoName={activeId} size={size} color={color} />

      </div>
    </div>
  )
}

export function IconPreviewPhone({ selectedLogo, onClearSelection }: Props) {
  const { variantTab } = useIconFilter()

  const [size, setSize] = useState(() => variantTab === "doodle" ? 80 : 120)
  const [strokeWidth, setstrokeWidth] = useState(0.5)
  const [color, setColor] = useState("currentColor")

  const variants = getVariants(selectedLogo)
  const [activeVariant, setActiveVariant] = useState(() =>
    getInitialVariant(variants, variantTab)
  )

  useEffect(() => {
    setActiveVariant(getInitialVariant(getVariants(selectedLogo), variantTab))
    setSize(variantTab === "doodle" ? 80 : 120) // 👈 tab change hone par size reset
  }, [selectedLogo, variantTab])

  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex aspect-square h-60 w-60 flex-1 items-center justify-center border">
        <Icons id="preview-svg" name={activeId} size={size} color={color} />
        <IconGridLines className="bg-code absolute -z-10 h-60 w-60 opacity-15" />
      </div>

      {variants.length > 1 && (
        <div className="space-y-2 mt-2">
          <ToggleGroup
            size="sm"
            variant="outline"
            value={[activeVariant]}

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
      <div className="flex items-center justify-between pt-2">
        <h2 className="w-40 truncate text-sm font-medium">{selectedLogo}</h2>
        <div className="flex flex-wrap items-center justify-between p-2">
          <Button
            className="text-muted-foreground cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
          >
            [Close]
          </Button>

          <Button
            render={
              <Link href={`/icons/${selectedLogo}`} />
            }
            className="text-muted-foreground cursor-pointer"
            variant="ghost"
            size="sm"
          >
            [Open]
          </Button>

        </div>
      </div>

      <IconControlsPanel
        size={size}
        color={color}
        onSizeChange={setSize}
        onColorChange={setColor}
        strokeWidth={strokeWidth}
        onstrokeWidthChange={setstrokeWidth}
        activeVariant={activeVariant}
      />
      <div className="mt-2">
        <IconDownloadPanel logoName={activeId} size={size} color={color} />
      </div>
    </div>
  )
}