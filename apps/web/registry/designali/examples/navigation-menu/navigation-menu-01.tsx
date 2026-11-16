"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlert as CircleAlertIcon,
  CircleCheck as CircleCheckIcon,
  CircleDashed as CircleDashedIcon,
} from "@designali/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Bento",
    href: "/docs/components/bento",
    description:
      "A Designali bento grid for showcasing products, features and work.",
  },
  {
    title: "Number Counter",
    href: "/docs/components/number-counter",
    description:
      "Animated counters for stats like 460+ blocks and 4000+ icons.",
  },
  {
    title: "Gauge",
    href: "/docs/components/gauge",
    description:
      "A radial gauge for showing progress, scores and metrics in Designali dashboards.",
  },
  {
    title: "Dot Pattern",
    href: "/docs/components/dot-pattern",
    description: "A subtle dot background for heroes and sections.",
  },
  {
    title: "Marquee",
    href: "/docs/components/marquee",
    description:
      "An infinite scrolling row for logos, testimonials and Designali work.",
  },
  {
    title: "Typewriter",
    href: "/docs/components/typewriter",
    description:
      "Types out headlines letter by letter, like design se code tak.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Designali blocks and components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/icons" title="Icons">
                4000+ icons from @designali/icons.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/docs">Docs</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}