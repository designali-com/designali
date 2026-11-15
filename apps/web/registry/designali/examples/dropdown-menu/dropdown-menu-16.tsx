import {
  ChevronDownIcon,
  FlaskConicalIcon,
  GitBranchIcon,
  GlobeIcon,
  RocketIcon,
  RotateCcwIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function SplitDeployButton() {
  return (
    <ButtonGroup>
      <Button>
        <RocketIcon data-icon="inline-start" />
        Deploy to production
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button size="icon" aria-label="More deploy options" />}
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Deploy target</DropdownMenuLabel>
            <DropdownMenuItem>
              <GlobeIcon />
              Production
              <DropdownMenuShortcut>⌘↵</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FlaskConicalIcon />
              Staging
            </DropdownMenuItem>
            <DropdownMenuItem>
              <GitBranchIcon />
              Preview branch
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RotateCcwIcon />
            Roll back last deploy
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
