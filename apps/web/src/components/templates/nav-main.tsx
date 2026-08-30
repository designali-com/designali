"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    Blocks,
} from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import { templateCategories } from "@/registry/registry-categories"

export function NavMain() {
    const pathname = usePathname()

    return (
        <SidebarGroup>
            {/* Category Heading */}
            <SidebarGroupLabel
                className="
                    justify-end
                    group-data-[collapsible=icon]:hidden
                "
            >
                Categories
            </SidebarGroupLabel>

            {/* All Blocks */}
            <SidebarMenu className="pt-8">
                <SidebarMenuItem>
                    <SidebarMenuButton
                        render={
                            <Link href="/templates">
                                <span className="group-data-[collapsible=icon]:hidden">
                                    All Templates
                                </span>

                                <Blocks className="size-4 shrink-0" />
                            </Link>
                        }
                        tooltip="All Templates"
                        className={`
                            justify-end
                            hover:text-primary
                            group-data-[collapsible=icon]:justify-center
                            ${
                                pathname === "/templates"
                                    ? "text-primary opacity-100"
                                    : "opacity-70 hover:opacity-100"
                            }
                        `}
                    />
                </SidebarMenuItem>
            </SidebarMenu>

            {/* Categories */}
            <SidebarMenu>
                {templateCategories.map((category) => {
                    if (category.hidden) return null

                    const href = `/templates/${category.slug}`

                    const isActive =
                        pathname === href ||
                        pathname.startsWith(`${href}/`)

                    const Icon = category.icon

                    return (
                        <SidebarMenuItem key={category.slug}>
                            <SidebarMenuButton
                                render={
                                    <Link href={href}>
                                        <span className="group-data-[collapsible=icon]:hidden">
                                            {category.name}
                                        </span>

                                        <Icon className="size-4 shrink-0" />
                                    </Link>
                                }
                                tooltip={category.name}
                                className={`
                                    justify-end
                                    hover:text-primary
                                    group-data-[collapsible=icon]:justify-center
                                    ${
                                        isActive
                                            ? "text-primary opacity-100"
                                            : "opacity-70 hover:opacity-100"
                                    }
                                `}
                            />
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}