import { Separator } from "@workspace/ui/components/separator"

const variants = [
  { label: "Hairline", className: "" },
  { label: "Medium", className: "data-horizontal:h-0.5" },
  { label: "Heavy", className: "data-horizontal:h-1 bg-foreground" },
  { label: "Subtle", className: "bg-border/50" },
  { label: "Brand", className: "data-horizontal:h-0.5 bg-primary" },
]

export default function SeparatorWeights() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant.label} className="flex items-center gap-4">
          <span className="w-16 shrink-0 text-xs text-muted-foreground">
            {variant.label}
          </span>
          <Separator className={variant.className} />
        </div>
      ))}
    </div>
  )
}
