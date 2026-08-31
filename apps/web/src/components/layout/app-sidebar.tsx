"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

import {
  Blocks,
  AppWindow,
  FileText,
  Image,
  LayoutTemplate,
  Component,
  Palette,
  Shapes,
  BookOpen,
} from "lucide-react"

import { NavMain } from "./nav-main"

const data = {
  navMain: [
    {
      title: "Templates",
      url: "/templates",
      icon: AppWindow,
    },
    {
      title: "Blocks",
      url: "/blocks",
      icon: Blocks,
    },
    {
      title: "Pages",
      url: "/pages",
      icon: FileText,
    },
    {
      title: "Illustrations",
      url: "/illustrations",
      icon: Image,
    },
    {
      title: "Landing",
      url: "/landing",
      icon: LayoutTemplate,
    },
    {
      title: "Patterns",
      url: "/patterns",
      icon: Shapes,
    },
    {
      title: "Icons",
      url: "/icons",
      icon: FileText,
    },
    {
      title: "Components",
      url: "/docs/components/accordion",
      icon: Component,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
  ],
}

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
