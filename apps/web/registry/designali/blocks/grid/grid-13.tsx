import {
  Cpu,
  FingerprintPattern as Fingerprint,
  HardDrive,
  Network,
  RefreshCw,
  ScanEye,
  ShieldCheck,
  Timer,
} from "@designali/icons"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const features: { icon: IconComponent; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Accessible by default", text: "Every Designali block is checked for keyboard, focus and contrast before release." },
  { icon: Fingerprint, title: "Unique brand identity", text: "Logos, type and colour systems that make your product instantly recognisable." },
  { icon: HardDrive, title: "Own your code", text: "Copy blocks straight into your repo. No lock-in, no runtime dependency." },
  { icon: ScanEye, title: "Pixel-perfect review", text: "Ali Imam reviews every screen in light and dark mode before it ships." },
  { icon: Network, title: "Modern stack", text: "Next.js, React, TypeScript and Tailwind CSS, deployed on Vercel." },
  { icon: RefreshCw, title: "Regular updates", text: "New blocks, templates and icons land on designali.com every month." },
  { icon: Cpu, title: "Built for performance", text: "Lightweight components optimised for Core Web Vitals." },
  { icon: Timer, title: "Direct support", text: "Questions go straight to the studio at support@designali.com." },
]

export default function Grid13() {
  return (
    <section className="w-full bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-background/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-sans text-xs text-background/60">Designali for Teams</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Quality your whole team will actually sign off on.
            </h2>
          </div>
          <a
            href="/docs"
            className="inline-flex h-11 items-center justify-center bg-background px-6 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Read the Designali docs
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-foreground p-6 lg:p-8">
              <feature.icon className="size-5 text-background/70" />
              <h3 className="mt-6 font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-background/60">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
