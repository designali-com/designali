import { EyeIcon, EyeOffIcon, LayersIcon, LockIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

const layers = [
  { name: "Header", visible: true, locked: false },
  { name: "Hero image", visible: true, locked: true },
  { name: "Pricing table", visible: false, locked: false },
  { name: "Footer", visible: true, locked: false },
]

export default function LayerVisibilityLockToggles() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">
        Layers
      </div>
      {layers.map((l) => (
        <div
          key={l.name}
          className="flex items-center gap-1 border-b px-2 py-1 last:border-b-0"
        >
          <LayersIcon className="ms-1 size-3.5 text-muted-foreground" />
          <span className="ms-1 flex-1 text-sm">{l.name}</span>
          <Toggle
            size="sm"
            defaultPressed={l.visible}
            aria-label={"Toggle visibility of " + l.name}
            className="text-muted-foreground aria-pressed:bg-transparent aria-pressed:text-foreground"
          >
            <EyeOffIcon className="group-aria-pressed/toggle:hidden" />
            <EyeIcon className="hidden group-aria-pressed/toggle:block" />
          </Toggle>
          <Toggle
            size="sm"
            defaultPressed={l.locked}
            aria-label={"Lock " + l.name}
          >
            <LockIcon />
          </Toggle>
        </div>
      ))}
    </div>
  )
}
