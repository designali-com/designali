import {
  Calendar as CalendarIcon,
  FileText as FileTextIcon,
  Grip as GripIcon,
  HardDrive as HardDriveIcon,
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
  Sheet as SheetIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const apps = [
  { name: "Mail", icon: MailIcon, color: "text-primary" },
  { name: "Calendar", icon: CalendarIcon, color: "text-primary" },
  { name: "Drive", icon: HardDriveIcon, color: "text-primary" },
  { name: "Docs", icon: FileTextIcon, color: "text-primary" },
  { name: "Sheets", icon: SheetIcon, color: "text-primary" },
  { name: "Chat", icon: MessageSquareIcon, color: "text-primary" },
]

export default function AppLauncherGridMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" aria-label="Apps" />}
      >
        <GripIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2">
        <div className="grid grid-cols-3 gap-1">
          {apps.map((app) => (
            <DropdownMenuItem key={app.name} className="flex-col gap-1.5 py-3">
              <app.icon className={cn("size-6!", app.color)} />
              {app.name}
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="justify-center">
          See all apps
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
