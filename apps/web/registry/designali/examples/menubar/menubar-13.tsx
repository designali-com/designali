import {
  ChartPieIcon,
  ChevronRightIcon,
  FolderIcon,
  UsersIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const menus = [
  {
    label: "Projects",
    icon: FolderIcon,
    items: ["Northwind redesign", "Billing revamp", "Mobile v3"],
  },
  {
    label: "Reports",
    icon: ChartPieIcon,
    items: ["Weekly summary", "Burn-down", "Velocity"],
  },
  { label: "Team", icon: UsersIcon, items: ["Members", "Invites", "Roles"] },
]

export default function VerticalSidebarMenubar() {
  return (
    <Menubar
      orientation="vertical"
      className="h-auto w-40 flex-col items-stretch"
    >
      {menus.map((menu) => (
        <MenubarMenu key={menu.label}>
          <MenubarTrigger className="gap-2 py-1.5">
            <menu.icon className="size-4" />
            {menu.label}
            <ChevronRightIcon className="ms-auto size-3.5 text-muted-foreground" />
          </MenubarTrigger>
          <MenubarContent
            side="right"
            align="start"
            sideOffset={6}
            alignOffset={0}
          >
            <MenubarGroup>
              <MenubarLabel>{menu.label}</MenubarLabel>
              {menu.items.map((item) => (
                <MenubarItem key={item}>{item}</MenubarItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
