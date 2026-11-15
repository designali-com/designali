import { MicIcon, SearchIcon, SlidersHorizontalIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function InputGroupActionTooltips() {
  return (
    <TooltipProvider>
      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search customers" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton size="icon-xs" aria-label="Voice search" />
              }
            >
              <MicIcon />
            </TooltipTrigger>
            <TooltipContent>Voice search</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<InputGroupButton size="icon-xs" aria-label="Filters" />}
            >
              <SlidersHorizontalIcon />
            </TooltipTrigger>
            <TooltipContent>Advanced filters</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </TooltipProvider>
  )
}
