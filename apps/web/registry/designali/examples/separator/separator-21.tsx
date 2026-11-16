import * as React from "react"
import {
  ChartPie as ChartPieIcon,
  CircleCheck as CircleCheckIcon,
  Folder as FolderIcon,
  Inbox as InboxIcon,
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

const sections = [
  [
    { label: "Inbox", icon: InboxIcon },
    { label: "My tasks", icon: CircleCheckIcon },
  ],
  [
    { label: "Projects", icon: FolderIcon },
    { label: "Reports", icon: ChartPieIcon },
    { label: "Team", icon: UsersIcon },
  ],
  [
    { label: "Settings", icon: SettingsIcon },
    { label: "Log out", icon: LogOutIcon },
  ],
]

export default function SidebarNavGroups() {
  return (
    <nav className="flex w-full max-w-52 flex-col border p-2">
      {sections.map((links, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator className="my-2" />}
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
            >
              <link.icon className="size-4 text-muted-foreground" />
              {link.label}
            </a>
          ))}
        </React.Fragment>
      ))}
    </nav>
  )
}
