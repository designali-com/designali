import {
  ChevronsUpDown as ChevronsUpDownIcon,
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function AccountMenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" className="h-auto gap-2 px-2 py-1.5" />}
      >
        <Avatar size="sm">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-xs font-medium">Ali Imam</span>
          <span className="text-[10px] text-muted-foreground">Founder</span>
        </span>
        <ChevronsUpDownIcon
          data-icon="inline-end"
          className="text-muted-foreground"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
