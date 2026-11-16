import {
  Monitor as MonitorIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function ThemeModeToggleGroup() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Appearance</span>
      <ToggleGroup variant="outline" defaultValue={["system"]}>
        <ToggleGroupItem value="light">
          <SunIcon data-icon="inline-start" />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem value="dark">
          <MoonIcon data-icon="inline-start" />
          Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="system">
          <MonitorIcon data-icon="inline-start" />
          System
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
