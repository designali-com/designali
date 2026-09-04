"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList as BaseNavigationMenuList,
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

// Fix incorrect/stale workspace type
const NavigationMenuList = BaseNavigationMenuList as React.ComponentType<
  React.PropsWithChildren<{
    className?: string
  }>
>

export function Menus() {
  return (
    <div> 
    </div>
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
