"use client"

import * as React from "react"
import {
  LayoutGridIcon,
  ListIcon,
  Rows3Icon,
  SlidersHorizontalIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function DashboardViewOptions() {
  const [layout, setLayout] = React.useState("grid")
  const [density, setDensity] = React.useState("comfortable")
  const [showSparklines, setShowSparklines] = React.useState(true)
  const [showTargets, setShowTargets] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <SlidersHorizontalIcon data-icon="inline-start" />
        View
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuRadioGroup value={layout} onValueChange={setLayout}>
          <DropdownMenuLabel>Layout</DropdownMenuLabel>
          <DropdownMenuRadioItem value="grid">
            <LayoutGridIcon />
            Grid
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="list">
            <ListIcon />
            List
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Rows3Icon />
            Density
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
              <DropdownMenuRadioItem value="compact">
                Compact
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="comfortable">
                Comfortable
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="spacious">
                Spacious
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Widgets</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showSparklines}
            onCheckedChange={setShowSparklines}
          >
            Sparklines
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showTargets}
            onCheckedChange={setShowTargets}
          >
            Goal targets
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
