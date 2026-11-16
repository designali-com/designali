import Link from "next/link"
import { Instagram, LinkedIn, X } from "@designali/logos"
import { Logo } from "@/src/components/logo"

const links = [
  {
    group: "Studio",
    items: [
      { title: "Work", href: "/work" },
      { title: "Case Studies", href: "/work" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/contact" },
      { title: "Ali Imam", href: "https://www.linkedin.com/in/aliimam-in/" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Brand Identity", href: "/work" },
      { title: "UI/UX Design", href: "/work" },
      { title: "Web Design", href: "/work" },
      { title: "Web Development", href: "/work" },
      { title: "Design Systems", href: "/work" },
      { title: "CGI & Motion", href: "/work" },
      { title: "AI Workflows", href: "/work" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "Templates", href: "/templates" },
      { title: "Blocks", href: "/blocks" },
      { title: "UI Designs", href: "/ui" },
      { title: "Icons", href: "/icons" },
      { title: "Logos", href: "/logos" },
      { title: "Illustration", href: "/illustration" },
    ],
  },
  {
    group: "Legal",
    items: [
      { title: "Terms", href: "/docs/legal/terms" },
      { title: "Docs", href: "/docs" },
      { title: "Blogs", href: "/blogs" },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="flex h-screen flex-col items-center justify-center border-b dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="Designali home" className="block size-fit">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
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
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="order-last block text-center text-sm text-muted-foreground md:order-first">
            © {2026} Designali by Ali Imam. All rights reserved
          </span>
          <div className="order-first flex flex-wrap items-center justify-center gap-8 text-sm md:order-last">
            <Link
              href="https://x.com/designali_com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="block text-muted-foreground hover:text-primary"
            >
              <X className="h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/designali-com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="block text-muted-foreground hover:text-primary"
            >
              <LinkedIn className="h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/designali.code/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="block text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
