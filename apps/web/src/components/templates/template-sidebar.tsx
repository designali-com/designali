"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarTrigger,
} from "@workspace/ui/components/sidebar"

import { NavMain } from "./nav-main"

export function TemplateSidebar(
    props: React.ComponentProps<typeof Sidebar>
) {
    return (
        <Sidebar
            collapsible="icon"
            className="mt-6"
            {...props}
        >
            <SidebarHeader />

            <SidebarContent className="items-end">
                <SidebarTrigger className="absolute left-2.5 top-6 z-10 opacity-60" /> 
                <NavMain />
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}