"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

import { NavMain } from "./nav-main"

export function BlockSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarHeader />

      <SidebarContent className="items-end">
        <SidebarTrigger className="absolute top-6 left-2.5 z-10 opacity-60" />
        <NavMain />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
