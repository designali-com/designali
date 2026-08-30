"use client";

import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
    }[];
}) {
    const pathname = usePathname();

    return (
        <SidebarGroup >
            <SidebarGroupLabel>designali</SidebarGroupLabel>
            <SidebarMenu className="pt-8">
                {items.map((item) => {
                    const isActive =
                        pathname === item.url ||
                        pathname.startsWith(`${item.url}/`);

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                render={<a href={item.url} className="flex gap-2 items-center">
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </a>}
                                tooltip={item.title}
                                className={`
                                    transition-opacity hover:text-primary duration-200
                                    ${isActive
                                        ? "opacity-100 text-primary"
                                        : "opacity-70 hover:opacity-100"
                                    }
                                `}
                            /> 
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}