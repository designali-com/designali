import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const sides = ["top", "right", "bottom", "left"] as const

export default function MenuSidePlacement() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <DropdownMenu key={side}>
          <DropdownMenuTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </DropdownMenuTrigger>
          <DropdownMenuContent side={side} sideOffset={8} className="w-36">
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  )
}
