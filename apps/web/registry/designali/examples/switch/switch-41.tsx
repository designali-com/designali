import {
  SlidersHorizontal as SlidersHorizontalIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Switch } from "@workspace/ui/components/switch"

export default function ViewOptionsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <SlidersHorizontalIcon data-icon="inline-start" />
        View options
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Board view</PopoverTitle>
          <PopoverDescription>Choose what each card shows.</PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="view-assignee" className="font-normal">
              Assignee
            </Label>
            <Switch id="view-assignee" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-due" className="font-normal">
              Due date
            </Label>
            <Switch id="view-due" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-labels" className="font-normal">
              Labels
            </Label>
            <Switch id="view-labels" size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-empty" className="font-normal">
              Show empty columns
            </Label>
            <Switch id="view-empty" size="sm" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
