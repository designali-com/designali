import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const sides = [
  { side: "top", icon: ArrowUpIcon },
  { side: "right", icon: ArrowRightIcon },
  { side: "bottom", icon: ArrowDownIcon },
  { side: "left", icon: ArrowLeftIcon },
] as const

export default function PopoverSides() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {sides.map(({ side, ...item }) => (
        <Popover key={side}>
          <PopoverTrigger
            render={
              <Button variant="outline" size="sm" className="capitalize" />
            }
          >
            <item.icon data-icon="inline-start" />
            {side}
          </PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            <PopoverTitle className="capitalize">{side}</PopoverTitle>
            <PopoverDescription>
              Positioned on the {side} side of the trigger.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
