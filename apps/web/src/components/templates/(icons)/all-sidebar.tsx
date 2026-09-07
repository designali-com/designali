"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

import { NavLogo } from "./nav-logo"
import { NavIcon } from "./nav-icon"
import { NavVector } from "./nav-vector"

export function IconSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarHeader />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-20 bg-gradient-to-t from-background to-transparent" />

      <SidebarContent className="items-end pb-20">
        <SidebarTrigger className="absolute top-6 left-2.5 z-10 opacity-60" />

        <NavIcon />
      </SidebarContent>
    </Sidebar>
  )
}

export function LogoSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarHeader />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-20 bg-gradient-to-t from-background to-transparent" />

      <SidebarContent className="items-end pb-20">
        <SidebarTrigger className="absolute top-6 left-2.5 z-10 opacity-60" />

        <NavLogo />
      </SidebarContent>
    </Sidebar>
  )
}

export function VectorSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarHeader />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-20 bg-gradient-to-t from-background to-transparent" />

      <SidebarContent className="items-end pb-20">
        <SidebarTrigger className="absolute top-6 left-2.5 z-10 opacity-60" />

        <NavVector />
      </SidebarContent>
    </Sidebar>
  )
}

