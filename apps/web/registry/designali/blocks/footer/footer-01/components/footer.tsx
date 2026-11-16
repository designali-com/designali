import Link from "next/link"
import {
  ChevronDown,
  SquareArrowOutUpRight,
} from "@designali/icons"
import { Instagram, LinkedIn, X } from "@designali/logos"
import { Logo } from "@/src/components/logo"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

import { ThemeSwitcher } from "./theme"

const linksPro = [
  {
    group: "Products",
    items: [
      {
        title: "Templates",
        href: "/templates",
      },
      {
        title: "Blocks",
        href: "/blocks",
      },
      {
        title: "Landing Pages",
        href: "/blocks",
      },
      {
        title: "UI Designs",
        href: "/ui",
      },
      {
        title: "Icons",
        href: "/icons",
      },
      {
        title: "Logos",
        href: "/logos",
      },
      {
        title: "Illustration",
        href: "/illustration",
      },
      {
        title: "Bento",
        href: "/ui",
      },
      {
        title: "Marquee",
        href: "/ui",
      },
      {
        title: "Device Mockups",
        href: "/ui",
      },
    ],
  },
]

const linksRes = [
  {
    group: "Resources",
    items: [
      {
        title: "Docs",
        href: "/docs",
      },
      {
        title: "Blogs",
        href: "/blogs",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Getting Started",
        href: "/docs",
      },
      {
        title: "Components",
        href: "/docs",
      },
      {
        title: "@designali/icons",
        href: "/icons",
      },
      {
        title: "@designali/logos",
        href: "/logos",
      },
      {
        title: "@designali/vectors",
        href: "/illustration",
      },
      {
        title: "Next.js",
        href: "/docs",
      },
      {
        title: "Tailwind CSS",
        href: "/docs",
      },
    ],
  },
]

const linksCom = [
  {
    group: "Studio",
    items: [
      {
        title: "Work",
        href: "/work",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Brand Identity",
        href: "/work",
      },
      {
        title: "UI/UX Design",
        href: "/work",
      },
      {
        title: "Web Development",
        href: "/work",
      },
      {
        title: "Design Systems",
        href: "/work",
      },
      {
        title: "CGI & Motion",
        href: "/work",
      },
      {
        title: "AI Workflows",
        href: "/work",
      },
      {
        title: "hello@designali.com",
        href: "mailto:hello@designali.com",
      },
      {
        title: "Terms",
        href: "/docs/legal/terms",
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-16 mt-auto border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-5">
            <div className="grid gap-3">
              {linksPro.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="https://21st.dev/@designali-in"
                    className="flex items-center gap-1 text-sm text-muted-foreground duration-150 hover:text-primary"
                  >
                    21st.dev
                    <SquareArrowOutUpRight strokeWidth={2} size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksRes.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  <Link
                    href="https://www.instagram.com/designali.code/"
                    className="flex items-center gap-1 text-sm text-muted-foreground duration-150 hover:text-primary"
                  >
                    Community
                    <SquareArrowOutUpRight strokeWidth={2} size={16} />
                  </Link>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                      Packages <ChevronDown strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        @designali/icons{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        @designali/logos{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        @designali/vectors{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        @workspace/ui{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksCom.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>

                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                      Legal <ChevronDown strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        Terms of Use
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        License
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Privacy Policy
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              <div className="space-y-3 text-sm">
                <span className="block font-medium">Social</span>
                <Link
                  href="https://www.instagram.com/designali.code/"
                  className="block text-muted-foreground duration-150 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <Instagram size={14} />
                    Instagram
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/designali-com/"
                  className="block text-muted-foreground duration-150 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <LinkedIn className="grayscale" size={14} />
                    LinkedIn
                  </span>
                </Link>
                <Link
                  href="https://x.com/designali_com"
                  className="block text-muted-foreground duration-150 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <X size={14} />
                    X
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aliimam-in/"
                  className="block text-muted-foreground duration-150 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <LinkedIn className="grayscale" size={14} />
                    Ali Imam
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-end">
              <Logo className="h-5 w-auto" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <Button
            className="cursor-pointer text-blue-500 hover:text-blue-500"
            variant={"ghost"}
          >
            <span className="block size-3 rounded-full border border-background bg-blue-500" />
            All Designali systems normal.
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
