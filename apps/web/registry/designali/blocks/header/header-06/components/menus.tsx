 
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
  LayoutGrid,
  Network,
  PenTool,
  ScanText,
  ScreenShare,
  Shield,
  Smile,
  Sparkle,
  Sparkles,
} from "@designali/icons"

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
    title: "Bento",
    href: "/ui",
    icon: <BoxIcon />,
    description: "Bento grid layouts for any product",
  },
  {
    title: "Number Counter",
    href: "/ui",
    icon: <Sparkle strokeWidth={2} />,
    description: "Animated stats that count up",
  },
  {
    title: "Marquee",
    href: "/ui",
    icon: <AArrowUp strokeWidth={2} />,
    description: "Infinite scrolling logos and cards",
  },
]

const core: MenuItem[] = [
  {
    title: "Templates",
    href: "/templates",
    icon: <LayoutGrid strokeWidth={2} />,
    description: "Next.js templates ready to ship",
  },
  {
    title: "Blocks",
    href: "/blocks",
    icon: <Globe strokeWidth={2} />,
    description: "460+ copy-and-paste sections",
  },
  {
    title: "UI Designs",
    href: "/ui",
    icon: <Cpu strokeWidth={2} />,
    description: "2300+ real-world UI examples",
  },
  {
    title: "Landing Pages",
    href: "/blocks",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2} />,
    description: "240+ complete page layouts",
  },
]

const security: MenuItem[] = [
  {
    title: "Icons",
    href: "/icons",
    icon: <Bot strokeWidth={2} />,
    description: "4000+ icons in @designali/icons",
  },
  {
    title: "Logos",
    href: "/logos",
    icon: <ScanText strokeWidth={2} />,
    description: "Brand logos in @designali/logos",
  },
  {
    title: "Illustration",
    href: "/illustration",
    icon: <Shield strokeWidth={2} />,
    description: "Vectors in @designali/vectors",
  },
  {
    title: "Device Mockups",
    href: "/ui",
    icon: <Calendar1 strokeWidth={2} />,
    description: "iPhone, iPad, MacBook and iMac",
  },
]

const company: MenuItem[] = [
  {
    title: "Work",
    href: "/work",
    icon: <Smile strokeWidth={2} />,
    description: "Projects designed by Designali",
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: <PenTool strokeWidth={2} />,
    description: "The latest posts and updates",
  },
  {
    title: "Ali Imam",
    href: "https://www.linkedin.com/in/aliimam-in/",
    icon: <BookText strokeWidth={2} />,
    description: "Founder and design engineer",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <BriefcaseBusiness strokeWidth={2} />,
    description: "hello@designali.com",
  },
  {
    title: "Support",
    href: "mailto:support@designali.com",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Get help quickly",
  },
]

const open: MenuItem[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/designali.code/",
    icon: <Code strokeWidth={2} />,
    description: "Follow @designali.code",
  },
  {
    title: "X",
    href: "https://x.com/designali_com",
    icon: <Component strokeWidth={2} />,
    description: "Follow @designali_com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/designali-com/",
    icon: <Component strokeWidth={2} />,
    description: "Designali on LinkedIn",
  },
  {
    title: "21st.dev",
    href: "https://21st.dev/@designali-in",
    icon: <Network strokeWidth={2} />,
    description: "Designali components on 21st.dev",
  },
]

const tools: MenuItem[] = [
  {
    title: "Docs",
    href: "/docs",
    icon: <Code strokeWidth={2} />,
    description: "Install and customise Designali",
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: <Component strokeWidth={2} />,
    description: "Plans for every project",
  },
  {
    title: "Terms",
    href: "/docs/legal/terms",
    icon: <Component strokeWidth={2} />,
    description: "Licensing and terms of use",
  },
  {
    title: "Dalim",
    href: "/work",
    icon: <Network strokeWidth={2} />,
    description: "Earlier projects by Ali Imam",
  },
  {
    title: "Components",
    href: "/docs",
    icon: <Network strokeWidth={2} />,
    description: "Component APIs and usage",
  },
]

const cases: MenuItem[] = [
  {
    title: "Brand Identity",
    href: "/work",
    icon: <Sparkles strokeWidth={2} />,
    description: "Logos, type and colour systems",
  },
  {
    title: "UI/UX Design",
    href: "/work",
    icon: <Component strokeWidth={2} />,
    description: "Intuitive product interfaces",
  },
  {
    title: "Web Development",
    href: "/work",
    icon: <ScreenShare strokeWidth={2} />,
    description: "Production-ready Next.js sites",
  },
  {
    title: "Design Systems",
    href: "/work",
    icon: <Network strokeWidth={2} />,
    description: "Tokens and components in sync",
  },
  {
    title: "CGI & Motion",
    href: "/work",
    icon: <AppWindow strokeWidth={2} />,
    description: "3D, CGI and motion design",
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
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={cloud}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Core */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={core}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Security */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Assets</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={security}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Studio</NavigationMenuTrigger>

          <NavigationMenuContent>
            <MenuGrid
              items={company}
              className="w-[560px]"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Open Source */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Social</NavigationMenuTrigger>

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
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>

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