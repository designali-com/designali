 
"use client"

import Link from "next/link"
import {
  AArrowUp,
  AppWindow,
  BookText,
  Bot,
  BriefcaseBusiness,
  Calendar1,
  ChartNoAxesColumnIncreasing,
  Code,
  Component,
  Cpu,
  Globe,
  Layers,
  LayoutGrid,
  Network,
  PenTool,
  ScanText,
  ScreenShare,
  Shield,
  Smile,
  Sparkle,
  Sparkles,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

type MenuItem = {
  title: string
  href: string
  icon: React.ReactNode
  description: string
}

const cloud: MenuItem[] = [
  {
    title: "AI SDK",
    href: "#",
    icon: <BoxIcon />,
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
 

function BoxIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function MenuCard({
  item,
}: {
  item: MenuItem
}) {
  return (
    <NavigationMenuLink
      render={
        <Link
          href={item.href}
          className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
        />
      }
    >
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
        {item.icon}
      </div>

      <div className="min-w-0">
        <div className="text-sm font-medium leading-none">
          {item.title}
        </div>

        <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
          {item.description}
        </p>
      </div>
    </NavigationMenuLink>
  )
}

function MenuGrid({
  items,
  className,
}: {
  items: MenuItem[]
  className?: string
}) {
  return (
    <div className={`grid grid-cols-2 gap-1 p-3 ${className ?? ""}`}>
      {items.map((item) => (
        <MenuCard key={item.title} item={item} />
      ))}
    </div>
  )
}

function SimpleMenu({
  items,
}: {
  items: MenuItem[]
}) {
  return (
    <div className="grid w-[280px] gap-1 p-3">
      {items.map((item) => (
        <MenuCard key={item.title} item={item} />
      ))}
    </div>
  )
}

export function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {/* Cloud */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cloud</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={cloud}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Core */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Core</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={core}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Security */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Security</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={security}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={company}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Open Source */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Open Source</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={open}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={tools}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Use Cases */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={cases}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

         
      </NavigationMenuList>
    </NavigationMenu>
  )
} 