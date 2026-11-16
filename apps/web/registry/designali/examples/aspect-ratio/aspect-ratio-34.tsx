import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

const swatches = [
  { name: "Designali Ink", hex: "#1E1B4B" },
  { name: "Designali Blue", hex: "#00A8FF" },
  { name: "Mint", hex: "#34D399" },
  { name: "Sand", hex: "#FDE68A" },
  { name: "Coral", hex: "#FB7185" },
]

export default function ColorSwatchPalette() {
  return (
    <div className="grid w-full max-w-md grid-cols-5 gap-2">
      {swatches.map((swatch) => (
        <div key={swatch.hex} className="flex min-w-0 flex-col gap-1">
          <AspectRatio
            ratio={1}
            className="ring-1 ring-foreground/10"
            style={{ backgroundColor: swatch.hex }}
          />
          <span className="truncate text-xs font-medium">{swatch.name}</span>
          <span className="truncate font-mono text-[10px] text-muted-foreground">
            {swatch.hex}
          </span>
        </div>
      ))}
    </div>
  )
}
