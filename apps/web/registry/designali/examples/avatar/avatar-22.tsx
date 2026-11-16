import {
  ChevronsUpDown as ChevronsUpDownIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const workspaces = [
  { name: "Designali Studio", plan: "Pro", short: "DS" },
  { name: "Designali Clients", plan: "Team", short: "DC" },
  { name: "Dalim Works", plan: "Free", short: "DW" },
]

export default function WorkspaceSwitcherMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" className="w-56 justify-start gap-2 px-2" />
        }
      >
        <Avatar size="sm" className="rounded-none after:rounded-none">
          <AvatarFallback className="rounded-none bg-primary text-primary-foreground">
            DS
          </AvatarFallback>
        </Avatar>
        <span className="flex-1 text-left">Designali Studio</span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          {workspaces.map((workspace) => (
            <DropdownMenuItem key={workspace.name}>
              <Avatar size="sm" className="rounded-none after:rounded-none">
                <AvatarFallback className="rounded-none">
                  {workspace.short}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1">{workspace.name}</span>
              <span className="text-xs text-muted-foreground">
                {workspace.plan}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon />
          Create workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
