import { ZapIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const sizes = [
  { label: "Small", className: "h-4 px-1.5 text-[10px]" },
  { label: "Default", className: "" },
  { label: "Large", className: "h-6 px-2.5 text-sm [&>svg]:size-3.5!" },
  { label: "Extra large", className: "h-7 px-3 text-sm [&>svg]:size-4!" },
]

export default function BadgeSizeScale() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {sizes.map((size) => (
        <Badge key={size.label} className={size.className}>
          <ZapIcon data-icon="inline-start" />
          {size.label}
        </Badge>
      ))}
    </div>
  )
}
