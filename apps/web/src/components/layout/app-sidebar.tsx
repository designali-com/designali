"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
 
import { NavMain } from "./nav-main"
import { data } from "@/registry/registry-categories"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarHeader />

      <SidebarContent>
        <SidebarTrigger className="absolute top-6 right-2.5 z-10 opacity-60" />
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
