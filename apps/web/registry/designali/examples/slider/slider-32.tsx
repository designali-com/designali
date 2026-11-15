import { Slider } from "@workspace/ui/components/slider"

const sizes = [
  {
    label: "Small",
    className:
      "[&_[data-slot=slider-thumb]]:size-2.5 [&_[data-slot=slider-track]]:h-0.5!",
  },
  { label: "Default", className: "" },
  {
    label: "Large",
    className:
      "[&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-track]]:h-2!",
  },
]

export default function SliderSizes() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">{size.label}</span>
          <Slider
            aria-label={size.label + " slider"}
            className={size.className}
            defaultValue={[55]}
          />
        </div>
      ))}
    </div>
  )
}
