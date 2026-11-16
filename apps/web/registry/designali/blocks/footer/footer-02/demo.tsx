"use client"

import Link from "next/link"
import {
  Heart,
  Mail,
} from "@designali/icons"
import { Instagram, LinkedIn, X } from "@designali/logos"
import { Logo } from "@/src/components/logo"

import { Theme } from "@/registry/designali/blocks/footer/footer-02/theme"

const navigation = {
  categories: [
    {
      id: "designali",
      name: "Designali",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "Work", href: "/work" },
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Templates", href: "/templates" },
            { name: "Blocks", href: "/blocks" },
            { name: "UI Designs", href: "/ui" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Icons", href: "/icons" },
            { name: "Logos", href: "/logos" },
            { name: "Illustration", href: "/illustration" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Bento", href: "/ui" },
            { name: "Marquee", href: "/ui" },
            { name: "Device Mockups", href: "/ui" },
          ],
        },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Docs", href: "/docs" },
            { name: "Blogs", href: "/blogs" },
            { name: "21st.dev", href: "https://21st.dev/@designali-in" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Ali Imam", href: "https://www.linkedin.com/in/aliimam-in/" },
            { name: "Terms", href: "/docs/legal/terms" },
            { name: "Email", href: "mailto:hello@designali.com" },
          ],
        },
      ],
    },
  ],
}

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 flex h-full w-full flex-col items-center justify-center">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full">
            <Logo className="h-8 w-auto" />
          </p>
        </Link>
        <p className="text-center text-xs leading-4 text-muted-foreground md:text-left">
          Welcome to Designali, where creativity meets strategy to bring your
          vision to life. I am passionate about transforming ideas into
          compelling visual experiences. I specialize in crafting unique brand
          identities, immersive digital experiences, and engaging content that
          resonates with your audience. My mission is to empower businesses and
          brands to stand out in a crowded market. I believe in the power of
          design to tell stories, evoke emotions, and drive meaningful
          connections. I believe in quality, not quantity. Designali is actually
          an agency of one. This means you&apos;ll work directly with me,
          founder of Designali.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm hover:text-foreground text-muted-foreground md:text-xs "
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email Designali"
            href="mailto:hello@designali.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Designali on X"
            href="https://x.com/designali_com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Designali on Instagram"
            href="https://www.instagram.com/designali.code/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Designali on LinkedIn"
            href="https://www.linkedin.com/company/designali-com/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <LinkedIn className="h-5 w-5" />
          </Link>
        </div>
        <Theme />
      </div>

      <div className="mx-auto mt-10 mb-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-muted-foreground dark:text-muted-foreground">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="mx-1 h-4 w-4 animate-pulse text-destructive" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="https://www.linkedin.com/in/aliimam-in/"
              target="_blank"
            >
              Ali Imam {""}
            </Link>
          </span>
          -
          <span className="hover:text-ali cursor-pointer text-muted-foreground dark:text-muted-foreground dark:hover:text-destructive">
            <Link aria-label="Logo" className="" href="/">
              Designali
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
