import {
  Headphones as HeadphonesIcon,
  Keyboard as KeyboardIcon,
  Mouse as MouseIcon,
} from "@designali/icons"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const devices = [
  { name: "Wireless keyboard", icon: KeyboardIcon, level: 82 },
  { name: "Trackpad", icon: MouseIcon, level: 46 },
  { name: "Earbuds", icon: HeadphonesIcon, level: 12 },
]

export default function DeviceBatteryLevels() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {devices.map((device) => (
        <div key={device.name} className="flex items-center gap-3 p-3">
          <device.icon className="size-4 shrink-0 text-muted-foreground" />
          <Progress
            value={device.level}
            className={cn(
              "flex-1",
              device.level < 20 &&
                "[&_[data-slot=progress-indicator]]:bg-destructive"
            )}
          >
            <ProgressLabel className="text-sm">{device.name}</ProgressLabel>
            <ProgressValue
              className={cn(device.level < 20 && "text-destructive")}
            />
          </Progress>
        </div>
      ))}
    </div>
  )
}
