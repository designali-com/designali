import {
  Archive as ArchiveIcon,
  Clock as ClockIcon,
  FolderOpen as FolderOpenIcon,
  HardDrive as HardDriveIcon,
  Trash2 as Trash2Icon,
  Users as UsersIcon,
} from "@designali/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const drives = [
  { name: "My files", used: 62, total: "100 GB", icon: HardDriveIcon },
  { name: "Shared with me", used: 18, total: "Team", icon: UsersIcon },
  { name: "Archive", used: 91, total: "50 GB", icon: ArchiveIcon },
]

export default function FileBrowserNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <FolderOpenIcon className="me-1.5 size-3.5" /> Locations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {drives.map((d) => (
                <li key={d.name}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <d.icon className="mt-0.5 text-muted-foreground" />
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="flex justify-between">
                        <span className="font-medium">{d.name}</span>
                        <span className="text-muted-foreground">{d.total}</span>
                      </span>
                      <span className="h-1 w-full bg-muted">
                        <span
                          className={cn(
                            "block h-full",
                            d.used > 85 ? "bg-red-500" : "bg-primary"
                          )}
                          style={{ width: d.used + "%" }}
                        />
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <ClockIcon /> Recent
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <Trash2Icon /> Trash
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
