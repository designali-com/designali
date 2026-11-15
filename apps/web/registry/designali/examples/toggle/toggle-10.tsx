import {
  CaptionsIcon,
  HandIcon,
  MonitorUpIcon,
  PhoneOffIcon,
  VideoIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { Toggle } from "@workspace/ui/components/toggle"

const controls = [
  { id: "camera", label: "Camera", icon: VideoIcon, on: true },
  { id: "share", label: "Share screen", icon: MonitorUpIcon, on: false },
  { id: "captions", label: "Captions", icon: CaptionsIcon, on: false },
  { id: "hand", label: "Raise hand", icon: HandIcon, on: false },
]

export default function CallControlBar() {
  return (
    <div className="flex items-center gap-1 border bg-background p-1.5 shadow-sm">
      {controls.map((c) => (
        <Toggle
          key={c.id}
          size="lg"
          defaultPressed={c.on}
          aria-label={c.label}
          title={c.label}
        >
          <c.icon />
        </Toggle>
      ))}
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button variant="destructive" size="icon-lg" aria-label="Leave call">
        <PhoneOffIcon />
      </Button>
    </div>
  )
}
