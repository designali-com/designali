import {
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant previews",
    body: "Every pull request gets a live URL in under 20 seconds, ready to share.",
  },
  {
    icon: GitBranch,
    title: "Branch environments",
    body: "Isolated databases and secrets per branch, torn down automatically on merge.",
  },
  {
    icon: Globe,
    title: "Edge delivery",
    body: "Static assets and functions served from 90 regions close to your users.",
  },
  {
    icon: Lock,
    title: "Access controls",
    body: "SSO, role-based permissions and audit logs included on every plan.",
  },
  {
    icon: Gauge,
    title: "Performance budgets",
    body: "Fail a build when bundle size or Core Web Vitals regress beyond limits.",
  },
  {
    icon: Layers,
    title: "Composable stacks",
    body: "Bring any framework. We detect it and configure the build for you.",
  },
]

export default function Features05() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Platform
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Everything you need to go from commit to production.
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
