import {
  ArrowRight,
  BookOpen,
  Code,
  Figma as FigmaIcon,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  Wand,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const perks = [
  { icon: Palette, title: "Brand identity", body: "Logo, type, color and guidelines designed as one system." },
  { icon: FigmaIcon, title: "UI/UX design", body: "Every screen and breakpoint designed in Figma with real content." },
  { icon: Code, title: "Next.js development", body: "Production-ready React, TypeScript and Tailwind CSS code." },
  { icon: Layers, title: "Design system", body: "Tokens and components your team can keep building with." },
  { icon: Sparkles, title: "CGI, 3D & motion", body: "Renders and motion design that bring the brand to life." },
  { icon: Wand, title: "AI workflows", body: "AI-assisted tools where they genuinely speed up the work." },
  { icon: Rocket, title: "Vercel launch", body: "Deployed, tested and handed over, ready for real traffic." },
  { icon: BookOpen, title: "Designali library", body: "Access to 460+ blocks, 4000+ icons and logos to keep shipping." },
]

export default function Sections20() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">What you get</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything a product needs, design se code tak.
          </h2>
        </div>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <li key={perk.title} className="group bg-background p-6 transition-colors hover:bg-muted/50">
              <span className="flex size-10 items-center justify-center border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                <perk.icon className="size-4" />
              </span>
              <h3 className="mt-6 text-base font-semibold">{perk.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{perk.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-6 bg-foreground p-8 text-background md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Start a project with Designali</p>
            <p className="mt-1 text-sm opacity-70">Tell Ali Imam about your brand or product at hello@designali.com.</p>
          </div>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            nativeButton={false}
            render={<a href="mailto:hello@designali.com" />}
          >
            Start a project
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
