"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

const resources = [
  {
    title: "Docs",
    href: "/docs",
    description:
      "Explore our comprehensive UI design and component documentation.",
  },
  {
    title: "Colors",
    href: "/colors",
    description:
      "Explore a vibrant and accessible color system for your projects.",
  },
  {
    title: "Blocks",
    href: "/blocks",
    description: "Build faster with flexible and reusable UI blocks.",
  },
  {
    title: "UI",
    href: "/ui",
    description: "Explore beautifully crafted UI components and patterns.",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Read insights, tutorials, and ideas around modern UI design.",
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Get in touch for support, collaboration, and project inquiries.",
  },
]

export function Menus() {
  return (
    <NavigationMenu align="center">
      <NavigationMenuList className="gap-1">
        {/* Templates */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/templates" />}
            className="bg-transparent text-xs"
          >
            Templates
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Blocks */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/blocks" />}
            className="bg-transparent text-xs"
          >
            Blocks
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs">
            Resources
          </NavigationMenuTrigger>

          <NavigationMenuContent className="p-2">
            <ul className="grid w-[650px] grid-cols-3 gap-1">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Icons */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/icons" />}
            className="bg-transparent text-xs"
          >
            Icons
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Components */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs/components" />}
            className="bg-transparent text-xs"
          >
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentProps<"li"> & {
  href: string
}) {
  return (
    <li className={cn("list-none", className)} {...props}>
      <NavigationMenuLink
        render={<Link href={href} />}
        className="block rounded-md p-3 no-underline transition-colors hover:bg-accent"
      >
        <div className="text-sm leading-none font-medium">{title}</div>

        <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
}
