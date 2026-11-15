import { PinIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

export default function ToggleVariantStates() {
  return (
    <div className="grid w-full max-w-xs grid-cols-[auto_1fr_1fr] items-center gap-3 text-xs">
      <span />
      <span className="text-center text-muted-foreground">Off</span>
      <span className="text-center text-muted-foreground">On</span>
      <span className="text-muted-foreground">default</span>
      <Toggle aria-label="Pin (off)" className="justify-self-center">
        <PinIcon />
      </Toggle>
      <Toggle
        aria-label="Pin (on)"
        defaultPressed
        className="justify-self-center"
      >
        <PinIcon />
      </Toggle>
      <span className="text-muted-foreground">outline</span>
      <Toggle
        variant="outline"
        aria-label="Pin outline (off)"
        className="justify-self-center"
      >
        <PinIcon />
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Pin outline (on)"
        defaultPressed
        className="justify-self-center"
      >
        <PinIcon />
      </Toggle>
    </div>
  )
}
