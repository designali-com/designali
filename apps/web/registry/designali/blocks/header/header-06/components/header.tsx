"use client"

import * as React from "react"
import type { ReactElement } from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

import {
  AArrowUp,
  AppWindow,
  BookText,
  Bot,
  Box,
  BriefcaseBusiness,
  Calendar1,
  ChartNoAxesColumnIncreasing,
  CirclePlus,
  Code,
  Component,
  Cpu,
  Globe,
  Layers,
  LayoutGrid,
  LogOut,
  Network,
  PenTool,
  ScanText,
  ScreenShare,
  Shield,
  Smile,
  Sparkle,
  Sparkles,
} from "lucide-react"

import { ThemeSwitcher } from "@/registry/designali/blocks/header/header-06/components/theme"
import { cn } from "@workspace/ui/lib/utils"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"

import { Button } from "@workspace/ui/components/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

import { Logo } from "@workspace/ui/designali/logo"

type MenuItem = {
  title: string
  icon: ReactElement
  href: string
  description: string
}

const cloud: MenuItem[] = [
  {
    title: "AI SDK",
    href: "#",
    icon: <Box strokeWidth={2} />,
    description: "The AI Toolkit for Typescript",
  },
  {
    title: "AI Gateway",
    href: "#",
    icon: <Sparkle strokeWidth={2} />,
    description: "One endpoint, all your models",
  },
  {
    title: "Vercel Agent",
    href: "#",
    icon: <AArrowUp strokeWidth={2} />,
    description: "An agent that knows your stack",
  },
]

const core: MenuItem[] = [
  {
    title: "CI/CD",
    href: "#",
    icon: <LayoutGrid strokeWidth={2} />,
    description: "Helping teams ship 6× faster",
  },
  {
    title: "Content Delivery",
    href: "#",
    icon: <Globe strokeWidth={2} />,
    description: "Fast, scalable, and reliable",
  },
  {
    title: "Fluid Compute",
    href: "#",
    icon: <Cpu strokeWidth={2} />,
    description: "Servers, in serverless form",
  },
  {
    title: "Observability",
    href: "#",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2} />,
    description: "Trace every step",
  },
]

const security: MenuItem[] = [
  {
    title: "Bot Management",
    href: "#",
    icon: <Bot strokeWidth={2} />,
    description: "Scalable bot protection",
  },
  {
    title: "BotID",
    href: "#",
    icon: <ScanText strokeWidth={2} />,
    description: "Invisible CAPTCHA",
  },
  {
    title: "Platform Security",
    href: "#",
    icon: <Shield strokeWidth={2} />,
    description: "DDOS Protection, Firewall",
  },
  {
    title: "Web Application Firewall",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Granular, custom protection",
  },
]

const company: MenuItem[] = [
  {
    title: "Customers",
    href: "#",
    icon: <Smile strokeWidth={2} />,
    description: "Trusted by the best teams",
  },
  {
    title: "Blog",
    href: "#",
    icon: <PenTool strokeWidth={2} />,
    description: "The latest posts and changes",
  },
  {
    title: "Changelog",
    href: "#",
    icon: <BookText strokeWidth={2} />,
    description: "See what shipped",
  },
  {
    title: "Press",
    href: "#",
    icon: <BriefcaseBusiness strokeWidth={2} />,
    description: "Read the latest news",
  },
  {
    title: "Events",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Join us at an event",
  },
]

const open: MenuItem[] = [
  {
    title: "Next.js",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "The native Next.js platform",
  },
  {
    title: "Nuxt",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "The progressive web framework",
  },
  {
    title: "Svelte",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "The web's efficient UI framework",
  },
  {
    title: "Turborepo",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Speed with Enterprise scale",
  },
]

const tools: MenuItem[] = [
  {
    title: "Academy",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Learn the ins and outs of Vercel",
  },
  {
    title: "Marketplace",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Extend and automate workflows",
  },
  {
    title: "Templates",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Guides",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Find help quickly",
  },
  {
    title: "Partner Finder",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Get help from solution partners",
  },
]

const cases: MenuItem[] = [
  {
    title: "AI Apps",
    href: "#",
    icon: <Sparkles strokeWidth={2} />,
    description: "Deploy at the speed of AI",
  },
  {
    title: "Composable Commerce",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Power storefronts that convert",
  },
  {
    title: "Marketing Sites",
    href: "#",
    icon: <ScreenShare strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Multi-tenant Platforms",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Scale apps with one codebase",
  },
  {
    title: "Web Apps",
    href: "#",
    icon: <AppWindow strokeWidth={2} />,
    description: "Ship features, not infrastructure",
  },
]

const users: MenuItem[] = [
  {
    title: "Platform Engineers",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Automate away repetition",
  },
  {
    title: "Design Engineers",
    href: "#",
    icon: <Layers strokeWidth={2} />,
    description: "Deploy for every idea",
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-background px-4 transition-[border-color] duration-300",
        scrolled ? "border-b" : "border-b-0"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Logo className="size-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex h-14 justify-center">
          <NavigationMenu className="ml-8 hidden lg:flex">
            <NavigationMenuList>
              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-3 pt-2 md:w-[800px]">
                    <MenuColumn title="AI Cloud" items={cloud} />
                    <MenuColumn title="Core Platform" items={core} />
                    <MenuColumn title="Security" items={security} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-3 pt-2 md:w-[800px]">
                    <MenuColumn title="Company" items={company} />
                    <MenuColumn title="Open Source" items={open} />
                    <MenuColumn title="Tools" items={tools} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-2 pt-2 md:w-[550px]">
                    <MenuColumn title="Use Cases" items={cases} />
                    <MenuColumn title="Users" items={users} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Enterprise */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#" />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Enterprise
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Docs */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#" />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#" />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground"
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Contact
          </Button>

          <Button variant="outline" size="sm">
            Dashboard
          </Button>

          {/* Account Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  aria-label="Open account menu"
                  className="outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              }
            >
              <Avatar className="border">
                <AvatarImage src="/ali.jpg" alt="Ali Imam" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              {/* My Account */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Team */}
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Team</DropdownMenuSubTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Invite users</DropdownMenuItem>

                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Invite via
                        </DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Email</DropdownMenuItem>

                            <DropdownMenuItem>Message</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* More */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More...</DropdownMenuSubTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>

                      <DropdownMenuItem>Support</DropdownMenuItem>

                      <DropdownMenuItem>API</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Logout */}
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

function MenuColumn({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div>
      <span className="block p-4 pb-2 text-sm text-muted-foreground">
        {title}
      </span>

      {items.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          href={item.href}
        >
          {item.description}
        </ListItem>
      ))}
    </div>
  )
}

function ListItem({
  title,
  icon,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon: ReactElement
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={<Link href={href} />}
        className="hover:bg-transparent"
      >
        <div className="flex items-start gap-3 rounded-md p-2">
          <div className="icon-container rounded-sm border p-2">{icon}</div>

          <div className="text-container">
            <div className="text-sm leading-none font-medium">{title}</div>

            <p className="line-clamp-2 pt-1 text-xs leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </NavigationMenuLink>

      <style jsx>{`
        li:hover .icon-container {
          background-color: var(--foreground);
          color: var(--background);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

        li:hover .text-container .text-sm {
          color: var(--foreground);
          transition: color 0.2s ease;
        }

        li:hover .text-container p {
          color: var(--foreground);
          transition: color 0.2s ease;
        }
      `}</style>
    </li>
  )
}
