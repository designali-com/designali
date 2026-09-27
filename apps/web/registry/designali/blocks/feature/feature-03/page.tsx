import { cn } from "@workspace/ui/lib/utils"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Copy,
  Sparkles,
  Code2,
  LayoutTemplate,
  Gauge,
} from "lucide-react"

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  featured?: boolean
}

interface Feature08Props {
  label?: string
  title?: string
  description?: string
  features?: FeatureItem[]
  className?: string
}

const FeatureCard = ({
  icon,
  title,
  description,
  featured,
}: FeatureItem) => (
  <Card
    className={cn(
      "overflow-hidden shadow-none",
      featured
        ? "border-0 bg-foreground text-background md:col-span-2 lg:col-span-1 lg:row-span-2"
        : "bg-muted/50",
    )}
  >
    <CardContent
      className={cn(
        "flex flex-col p-6",
        featured ? "h-full min-h-[360px]" : "gap-5",
      )}
    >
      <div
        className={cn(
          "flex size-11 items-center justify-center border",
          featured
            ? "border-background/15 bg-background/10"
            : "border-border bg-background",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center",
            !featured && "text-foreground",
          )}
        >
          {icon}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2",
          featured && "mt-auto gap-3 pt-10",
        )}
      >
        <h3
          className={cn(
            "font-medium tracking-tight",
            featured && "text-xl",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-sm leading-6",
            !featured && "text-muted-foreground",
            featured && "text-background/70",
          )}
        >
          {description}
        </p>
      </div>
    </CardContent>
  </Card>
)

export const Feature08 = ({
  label = "Features",
  title = "You need to build faster",
  description = "A modern toolkit of components, templates, and resources built for Design Engineers.",
  features = [
    {
      icon: <Copy className="size-5" />,
      title: "Copy & paste ready",
      description:
        "Production-ready components you can copy directly into your project and customize to fit your needs.",
      featured: true,
    },
    {
      icon: <Sparkles className="size-5" />,
      title: "Fully customizable",
      description:
        "Built with Tailwind CSS so you can easily adapt every component to your product and brand.",
    },
    {
      icon: <Code2 className="size-5" />,
      title: "TypeScript first",
      description:
        "Written with TypeScript for type safety, better developer experience, and reliable code.",
    },
    {
      icon: <LayoutTemplate className="size-5" />,
      title: "Ready-made templates",
      description:
        "Start projects faster with polished templates and layouts designed for real-world products.",
    },
    {
      icon: <Gauge className="size-5" />,
      title: "Built for performance",
      description:
        "Lightweight components and clean code designed to keep your interfaces fast and responsive.",
    },
  ],
  className,
}: Feature08Props) => (
  <section
    className={cn(
      "w-full h-screen flex flex-col justify-center px-4 py-10",
      className,
    )}
  >
    {/* Header */}
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      {label && (
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </p>
      )}

      <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>

    {/* Features */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </section>
)
 