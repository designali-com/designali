import {
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Zap,
} from "@designali/icons"

const features = [
  {
    icon: Zap,
    title: "Production-ready code",
    body: "Every Designali design ships as clean Next.js, React and TypeScript you can deploy today.",
  },
  {
    icon: GitBranch,
    title: "460+ blocks",
    body: "Copy-and-paste sections for heroes, pricing, footers and dashboards, built with Tailwind CSS.",
  },
  {
    icon: Globe,
    title: "Fast on Vercel",
    body: "Lightweight pages optimised for Core Web Vitals and deployed on Vercel in minutes.",
  },
  {
    icon: Lock,
    title: "Brand identity",
    body: "Logos, type and colour systems that give your product a clear and confident voice.",
  },
  {
    icon: Gauge,
    title: "4000+ icons",
    body: "Lucide-compatible icons from @designali/icons, tree-shakable and ready for any project.",
  },
  {
    icon: Layers,
    title: "Design systems",
    body: "Tokens, components and Figma libraries that keep design and code in sync.",
  },
]

export default function Features05() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Designali
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Everything you need to go from design to code.
          </h2>
        </div>
        <div className="mt-14 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border-r border-b border-border p-8 transition-colors hover:bg-muted/50"
            >
              <Icon className="size-5 text-muted-foreground" />
              <h3 className="mt-6 text-base font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
