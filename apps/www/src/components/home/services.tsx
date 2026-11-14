import Image from "next/image"

import { Badge } from "@workspace/ui/components/badge"
import {
  AppWindow,
  Code2,
  Layers,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react"

import { Section } from "./section-shell"

const pillars = [
  { img: "strategy", label: "Strategy" },
  { img: "design", label: "Design" },
  { img: "development", label: "Development" },
]

const services = [
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Logos, visual systems and guidelines that make your brand instantly recognisable.",
    tags: ["Logo", "Guidelines", "Print"],
  },
  {
    icon: AppWindow,
    title: "Web Design",
    desc: "Conversion-focused websites and landing pages, designed with clarity and craft.",
    tags: ["Landing", "Marketing", "Portfolio"],
  },
  {
    icon: Smartphone,
    title: "Product & UI/UX",
    desc: "Research-led interfaces for SaaS, dashboards and mobile apps people enjoy using.",
    tags: ["SaaS", "Dashboard", "Mobile"],
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, accessible Next.js builds that ship exactly what was designed.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Reusable component libraries and tokens so your team ships consistently, faster.",
    tags: ["Components", "Tokens", "Docs"],
  },
  {
    icon: Sparkles,
    title: "Motion & Social",
    desc: "Launch visuals, social creatives and subtle motion that bring the brand to life.",
    tags: ["Motion", "Social", "Ads"],
  },
]

export function Services() {
  return (
    <Section id="services" title="What we do" eyebrow="Design + build, under one roof">
       
      <div className="grid border border-dotted md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group flex flex-col gap-3 border-b border-dotted p-6 transition-colors hover:bg-muted/40 md:border-r lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:max-lg:border-r-0"
          >
            <s.icon className="size-5 text-primary" />
            <h3 className="font-serif text-2xl">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-auto flex flex-wrap gap-1 pt-2">
              {s.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
