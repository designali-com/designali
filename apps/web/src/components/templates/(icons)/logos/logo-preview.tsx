
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Link2, PanelRightClose } from "lucide-react"
import { allLogos } from "@designali/logos"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import { Button } from "@workspace/ui/components/button"

import { LogoControlsPanel } from "./logo-controls"
import { LogoDownloadPanel } from "./logo-download"
import { useLogoFilter } from "./logo-filter-context"
import { Logos } from "./logos"
import { IconGridLines } from "@/src/components/logo"

interface Props {
  selectedLogo: string
  onClearSelection: () => void
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

function getInitialVariant(
  variants: { id: string; variant: string }[],
  variantTab: "icon" | "wordmark" | "symbols"
): string {
  const match =
    variantTab === "icon"
      ? variants.find(
        (v) =>
          v.variant === "default" ||
          v.variant === "icon" ||
          v.variant === ""
      )
      : variants.find((v) => v.variant === variantTab)

  return match?.id ?? variants[0]?.id ?? ""
}

export function LogoPreview({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")
  const variants = getVariants(selectedLogo)

  const { variantTab } = useLogoFilter()
  const [activeVariant, setActiveVariant] = useState(() =>
    getInitialVariant(variants, variantTab)
  )

  useEffect(() => {
    setActiveVariant(
      getInitialVariant(getVariants(selectedLogo), variantTab)
    )
  }, [selectedLogo, variantTab])


  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="hidden h-full flex-col justify-between pt-10 pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="flex aspect-square h-68 w-68 items-center justify-center border">
          <Logos id="preview-svg" name={activeId} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-68 w-68 opacity-15" />
        </div>

        {variants.length > 1 && (
          <div className="space-y-2">
            <ToggleGroup
              size="sm"
              variant="outline"
              value={[activeVariant]}
              onValueChange={(value) => {
                if (value[0]) {
                  setActiveVariant(value[0])
                }
              }}
              className="w-full flex-wrap"
            >
              {variants.map((v) => (
                <ToggleGroupItem
                  key={v.id}
                  value={v.id}
                  className="flex-1 text-xs"
                >
                  {v.variant || "default"}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        )}

        <div className="flex flex-wrap items-center pb-6 justify-between">
          <h2 className="truncate text-center text-sm font-medium">
            {selectedLogo}
          </h2>
          <Button
            className="cursor-pointer text-muted-foreground"
            variant="ghost"
            size={"icon"}
            onClick={onClearSelection}
          >
            <PanelRightClose />
          </Button>
        </div>



        <LogoControlsPanel
          size={size}
          color={color}
          onSizeChange={setSize}
          onColorChange={setColor}
        />
        <LogoDownloadPanel logoName={activeId} size={size} color={color} />
      </div>
    </div>
  )
}

export function LogoPreviewPhone({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")
  const [activeVariant, setActiveVariant] = useState("default")

  const variants = getVariants(selectedLogo)
  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex aspect-square h-60 w-60 flex-1 items-center justify-center border">
        <Logos id="preview-svg" name={activeId} size={size} color={color} />
      </div>

      {variants.length > 1 && (
        <div className="mt-2 space-y-2">
          <ToggleGroup
            size="sm"
            variant="outline"
             
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
            className="cursor-pointer text-muted-foreground"
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
          >
            [Close]
          </Button>
          <Link href={`/logos/${selectedLogo}`}>
            <Button
              className="cursor-pointer text-muted-foreground"
              variant="ghost"
              size="sm"
            >
              [Open]
            </Button>
          </Link>
        </div>
      </div>

      <LogoControlsPanel
        size={size}
        color={color}
        onSizeChange={setSize}
        onColorChange={setColor}
      />
      <div className="mt-2">
        <LogoDownloadPanel logoName={activeId} size={size} color={color} />
      </div>
    </div>
  )
}
