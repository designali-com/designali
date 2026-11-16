import {
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

export default function AccountPopover() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Open account"
          />
        }
      >
        <Avatar>
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="flex items-center gap-2.5">
          <Avatar size="lg">
            <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <PopoverTitle>Ali Imam</PopoverTitle>
            <PopoverDescription className="truncate">
              ali@designali.com
            </PopoverDescription>
          </div>
        </div>
        <div className="flex items-center justify-between border p-2 text-xs">
          <span>Designali studio</span>
          <Badge variant="secondary">8 / 10 seats</Badge>
        </div>
        <Separator />
        <div className="flex flex-col">
          <Button variant="ghost" size="sm" className="justify-start">
            <UserIcon data-icon="inline-start" /> Profile
          </Button>
          <Button variant="ghost" size="sm" className="justify-start">
            <SettingsIcon data-icon="inline-start" /> Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start text-destructive"
          >
            <LogOutIcon data-icon="inline-start" /> Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
