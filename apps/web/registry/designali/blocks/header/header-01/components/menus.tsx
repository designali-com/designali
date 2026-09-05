"use client"

import * as React from "react"
import Link from "next/link"

import {
  ArrowUpRightIcon,
  BlocksIcon,
  Code2Icon,
  ComponentIcon,
  SwatchBookIcon,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const designResources = [
  {
    title: "UI Components",
    href: "/ui",
    description:
      "Explore reusable and beautifully crafted interface components.",
  },
  {
    title: "Blocks",
    href: "/blocks",
    description:
      "Build complete sections and interfaces with flexible UI blocks.",
  },
  {
    title: "Colors",
    href: "/colors",
    description:
      "Explore accessible colors, gradients, and modern color combinations.",
  },
  {
    title: "Design System",
    href: "/docs",
    description:
      "Learn how Designali approaches scalable design systems.",
  },
]

const developmentResources = [
  {
    title: "Documentation",
    href: "/docs",
    description:
      "Learn how to install, customize, and use Designali components.",
  },
  {
    title: "Components",
    href: "/docs/components",
    description:
      "Browse the component library and explore implementation details.",
  },
  {
    title: "Templates",
    href: "/templates",
    description:
      "Start your next project with production-ready templates.",
  },
  {
    title: "GitHub",
    href: "https://github.com/designali-com",
    description:
      "Explore the source code, components, and projects on GitHub.",
  },
]


export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-2 gap-2 p-2">
              {designResources.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Development */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Development</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-2 gap-2 p-2">
              {developmentResources.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  external={item.href.startsWith("http")}
                >
                  {item.description}
                </ListItem>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Components */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>
            Components
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-2 gap-2 p-2">
              <IconListItem
                href="/ui"
                icon={<ComponentIcon />}
                title="UI Components"
              >
                Reusable components for modern web interfaces.
              </IconListItem>

              <IconListItem
                href="/blocks"
                icon={<BlocksIcon />}
                title="Blocks"
              >
                Complete sections for landing pages and applications.
              </IconListItem>

              <IconListItem
                href="/docs"
                icon={<Code2Icon />}
                title="Developer Docs"
              >
                Component APIs, installation, and implementation guides.
              </IconListItem>

              <IconListItem
                href="/colors"
                icon={<SwatchBookIcon />}
                title="Color System"
              >
                Colors, gradients, and accessible design foundations.
              </IconListItem>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Quick Links */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/showcase">Showcase</Link>}
          />
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/contact">Contact</Link>}
          />
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
  external = false,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  title: string
  href: string
  external?: boolean
}) {
  const linkProps = external
    ? {
      target: "_blank",
      rel: "noopener noreferrer",
    }
    : {}

  return (
    <li
      {...props}
      className={cn(
        "list-none",
        className
      )}
    >
      <NavigationMenuLink
      className={"text-start grid"}
        render={
          <Link
            href={href}
            {...linkProps}
            className="group block w-full rounded-lg p-3 text-left no-underline outline-none transition-colors hover:bg-accent focus:bg-accent"
          >
            <div className="flex items-center justify-start gap-2">
              <span className="text-sm font-medium leading-none">
                {title}
              </span>

              {external && (
                <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </div>

            <p className="mt-1.5 line-clamp-2 text-left text-xs leading-relaxed text-muted-foreground">
              {children}
            </p>
          </Link>
        }
      />
    </li>
  )
}

function IconListItem({
  title,
  children,
  href,
  icon,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  title: string
  href: string
  icon: React.ReactNode
}) {
  return (
    <li
      {...props}
      className={cn(
        "list-none",
        className
      )}
    >
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="group flex items-start gap-3 rounded-lg p-3 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
              {React.isValidElement(icon)
                ? React.cloneElement(
                  icon as React.ReactElement<{
                    className?: string
                  }>,
                  {
                    className: "size-4",
                  }
                )
                : icon}
            </div>

            <div className="min-w-0 flex flex-col">
              <div className="text-sm font-medium leading-none">
                {title}
              </div>

              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {children}
              </p>
            </div>
          </Link>
        }
      />
    </li>
  )
}