import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const sizes = [
  { label: "Small", className: "size-3.5 [&_svg]:size-3", text: "text-xs" },
  { label: "Default", className: "", text: "text-sm" },
  { label: "Large", className: "size-5 [&_svg]:size-4", text: "text-sm" },
  { label: "Touch", className: "size-6 [&_svg]:size-5", text: "text-base" },
]

export default function CheckboxSizeScale() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {sizes.map((size) => (
        <label
          key={size.label}
          className={cn("flex items-center gap-2", size.text)}
        >
          <Checkbox defaultChecked className={size.className} />
          {size.label}
        </label>
      ))}
    </div>
  )
}
