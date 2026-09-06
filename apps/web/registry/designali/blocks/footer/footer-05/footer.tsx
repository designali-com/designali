import Link from "next/link"
import {
  Adobe,
  Facebook,
  Instagram,
  LinkedIn,
  Threads,
  X,
} from "@designali/logos"

const links = [
  {
    group: "Studio",
    items: [
      { title: "Our Work", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Services", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Process", href: "#" },
      { title: "Why Choose Us", href: "#" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Brand Identity", href: "#" },
      { title: "UI/UX Design", href: "#" },
      { title: "Web Design", href: "#" },
      { title: "Logo Design", href: "#" },
      { title: "Social Media Design", href: "#" },
      { title: "Motion Graphics", href: "#" },
      { title: "Design Systems", href: "#" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "Design Blog", href: "#" },
      { title: "Free Assets", href: "#" },
      { title: "Templates", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Help Center", href: "#" },
    ],
  },
  {
    group: "Legal",
    items: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Licensing", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="flex h-screen flex-col items-center justify-center border-b dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="#" aria-label="go home" className="block size-fit">
              <Adobe />
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
            © {2026} Ali Imam, All rights reserved
          </span>
          <div className="order-first flex flex-wrap items-center justify-center gap-8 text-sm md:order-last">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="block text-muted-foreground hover:text-primary"
            >
              <X className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="block text-muted-foreground hover:text-primary"
            >
              <LinkedIn className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block text-muted-foreground hover:text-primary"
            >
              <Facebook className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="block text-muted-foreground hover:text-primary"
            >
              <Threads className="h-5" />
            </Link>
            <Link
              href="#"
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
