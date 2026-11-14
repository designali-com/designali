import { cn } from "@workspace/ui/lib/utils"

import { Button } from "@workspace/ui/components/button"

import {
  ClaudeAI,
  Grok,
  Instagram,
  LinkedIn,
  OpenAI,
  GitHub,
  XformerlyTwitter,
} from "@workspace/ui/common/logos"

import { ThemeSwitcher } from "./toggle-mode"

export function Footer() {
  return (
    <footer className={cn("relative max-w-6xl mx-auto border-x border-dotted")}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 p-6">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-4 lg:col-span-2">
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
          <a href="mailto:hello@designali.com" className="text-sm hover:underline hover:text-primary">
            hello@designali.com
          </a>
        </div>

        {/* -------------------------------- */}
        {/* RESOURCES */}
        {/* -------------------------------- */}

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Design</span>

          <div className="mt-2 flex flex-col gap-2">
            {componentLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Code</span>

          <div className="mt-2 flex flex-col gap-2">
            {designLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Company</span>

          <div className="mt-2 flex flex-col gap-2">
            {companyLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Projects</span>

          <div className="mt-2 flex flex-col gap-2">
            {projectLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="col-span-1 w-full md:col-span-1">
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

      <div className="flex items-center justify-center gap-2 border-t border-dotted py-4">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} designali, All rights reserved
        </p>

        <span className="text-xs text-muted-foreground">·</span>

        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">❤</span> by{" "}
          <a
            href="https://www.linkedin.com/in/aliimam-in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:underline"
          >
            Ali Imam
          </a>
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
    href: "https://designali.com/templates",
    label: "Templates",
  },
  {
    href: "https://designali.com/blocks",
    label: "Blocks",
  },
  {
    href: "https://designali.com/ui",
    label: "UI Designs",
  },
  {
    href: "https://designali.com/icons",
    label: "Icons",
  },
  {
    href: "https://designali.com/logos",
    label: "Logos",
  },
  {
    href: "https://designali.com/illustration",
    label: "Illustration",
  },
  {
    href: "https://designali.com/vectors",
    label: "Vectors",
  },
  {
    href: "https://designali.com/patterns",
    label: "Patterns",
  },
  {
    href: "https://designali.com/tools/gradient",
    label: "Gradient Tool",
  },
]

/* -------------------------------- */
/* COMPANY LINKS */
/* -------------------------------- */

const companyLinks = [
  {
    href: "https://designali.com/pricing",
    label: "Pricing",
  },
  {
    href: "https://designali.com/docs",
    label: "Documentation",
  },
  {
    href: "https://designali.com/blogs",
    label: "Blogs",
  },
  {
    href: "https://aliimam.designali.com/works",
    label: "Work",
  }, 
  {
    href: "https://cal.com/designali/30min",
    label: "Book a Call",
  },
  {
    href: "https://designali.com/docs/legal/terms",
    label: "Terms",
  },
]

/* -------------------------------- */
/* PROJECT LINKS */
/* -------------------------------- */

const projectLinks = [
  { href: "https://designali.com", label: "Designali" },
  { href: "https://aliimam.designali.com", label: "Ali Imam" },
  { href: "https://portfolio-simple.designali.com", label: "Portfolio Simple" },
  { href: "https://design-agency.designali.com", label: "Design Agency" },
  { href: "https://vercel.designali.com", label: "Vercel Template" },
  { href: "https://predict.designali.com", label: "Predict" },
  { href: "https://predict-web.designali.com", label: "Predict Web" },
  { href: "https://predict-clinic.designali.com", label: "Predict Clinic" },
  { href: "https://predict-automation.designali.com", label: "Predict Automation" },
  { href: "https://predict.fit", label: "predict.fit" },
  { href: "https://optmhealthcare.in", label: "OPTM Healthcare" },
  { href: "https://landing.optmhealthcare.in", label: "OPTM Landing" },
  { href: "https://agewell.optmhealthcare.in", label: "Agewell" },
  { href: "https://apurba.optmhealthcare.in", label: "Apurba" },
  { href: "https://dalim-ui.vercel.app", label: "Dalim UI" },
  { href: "https://dalim-icons.vercel.app", label: "Dalim Icons" },
  { href: "https://dalim-fonts.vercel.app", label: "Dalim Fonts" },
  { href: "https://dalim-tools.vercel.app", label: "Dalim Tools" },
  { href: "https://dalim-works.vercel.app", label: "Dalim Works" },
  { href: "https://dalim-agency.vercel.app", label: "Dalim Agency" },
  { href: "https://dalim-graphic.vercel.app", label: "Dalim Graphic" },
  { href: "https://dalim-visuals.vercel.app", label: "Dalim Visuals" },
]

const designLinks = [
  {
    href: "https://designali.com/docs/components/bento",
    label: "Bento",
  },
  {
    href: "https://designali.com/docs/components/number-counter",
    label: "Number Counter",
  },
  {
    href: "https://designali.com/docs/components/gauge",
    label: "Gauge",
  },
  {
    href: "https://designali.com/docs/components/dot-pattern",
    label: "Dot Pattern",
  },
  {
    href: "https://designali.com/docs/components/grid-pattern",
    label: "Grid Pattern",
  },
  {
    href: "https://designali.com/docs/components/marquee",
    label: "Marquee",
  },
  {
    href: "https://designali.com/docs/components/typewriter",
    label: "Typewriter",
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
  {
    name: "GitHub",
    icon: <GitHub />,
    link: "https://github.com/designali-com",
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
