import { cn } from "@workspace/ui/lib/utils"

import { Button } from "@workspace/ui/components/button"

import {
  ClaudeAI,
  Grok,
  Instagram,
  LinkedIn,
  OpenAI,
  XformerlyTwitter,
} from "@workspace/ui/common/logos"

import { ThemeSwitcher } from "./toggle-mode"

export function Footer() {
  return (
    <footer className={cn("relative")}>
      <div className="grid grid-cols-6 gap-3 p-6">
        <div className="col-span-6 flex flex-col gap-4 md:col-span-4">
          <p className="max-w-sm text-sm text-balance text-muted-foreground">
            A brand owned by designali.
          </p>

          <div className="flex items-center gap-1">
            <ThemeSwitcher />

            {socialLinks.map((item, index) => (
              <a
                key={`social-${item.link}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} social media`}
              >
                <Button size="icon-lg" variant="ghost">
                  {item.icon}
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* RESOURCES */}
        {/* -------------------------------- */}

        <div className="col-span-3 hidden w-full md:col-span-1 md:block">
          <span className="text-xs text-muted-foreground">Components</span>

          <div className="mt-2 flex flex-col gap-2">
            {componentLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* COMPANY */}
        {/* -------------------------------- */}

        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Company</span>

          <div className="mt-2 flex flex-col gap-2">
            {companyLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* ASK AI */}
        {/* -------------------------------- */}

        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">
            Ask AI about designali
          </span>

          <div className="mt-2 flex gap-2">
            {aiLinks.map((item, index) => (
              <a
                key={`ai-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask ${item.name} about Designali`}
              >
                <Button size="icon-lg" variant="outline" className="group">
                  <span className="opacity-60 transition-opacity group-hover:opacity-100">
                    {item.icon}
                  </span>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------- */}
      {/* COPYRIGHT */}
      {/* -------------------------------- */}

      <div className="flex items-center justify-center gap-2 border-t border-dotted py-4">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} designali, All rights reserved
        </p>
      </div>
    </footer>
  )
}

/* -------------------------------- */
/* COMPONENT LINKS */
/* -------------------------------- */

const componentLinks = [
  {
    href: "/docs/components/button",
    label: "Button",
  },
  {
    href: "/docs/components/card",
    label: "Card",
  },
  {
    href: "/docs/components/gauge",
    label: "Gauge",
  },
]

/* -------------------------------- */
/* COMPANY LINKS */
/* -------------------------------- */

const companyLinks = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/docs",
    label: "Documentation",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

/* -------------------------------- */
/* SOCIAL LINKS */
/* -------------------------------- */

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/designali.code/",
  },
  {
    name: "X",
    icon: <XformerlyTwitter />,
    link: "https://x.com/designali_com",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/company/designali-com",
  },
]

/* -------------------------------- */
/* ASK AI LINKS */
/* -------------------------------- */

const designaliPrompt = `
Tell me about Designali.

Explain:

1. What designali is
2. What products, components, and resources designali provides
3. What makes Designali different
4. Who designali is built for
5. How someone can get started

Use information from the official Designali website where possible.
`.trim()

const encodedPrompt = encodeURIComponent(designaliPrompt)

const aiLinks = [
  {
    name: "ChatGPT",
    icon: <OpenAI />,
    link: `https://chatgpt.com/?q=${encodedPrompt}`,
  },
  {
    name: "Claude",
    icon: <ClaudeAI />,
    link: `https://claude.ai/new?q=${encodedPrompt}`,
  },
  {
    name: "Grok",
    icon: <Grok />,
    link: `https://grok.com/?q=${encodedPrompt}`,
  },
]
