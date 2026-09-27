import { ArrowUpRight } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

interface FeatureItem {
  img?: string
  title: string
  description: string
  link?: {
    text: string
    url: string
  }
}

interface Feature01Props {
  title?: string
  description?: string
  features?: FeatureItem[]
  className?: string
}

export const Feature02 = ({
  title = "You need to build faster",
  description = "Production-ready components and resources designed for modern Design Engineers.",
  features = [
    {
      img: "/img/ask/ask7.jpg",
      title: "Production-ready components",
      description:
        "Build polished interfaces faster with reusable components designed for modern React and Tailwind workflows.",
      link: {
        text: "Explore Components",
        url: "/blocks",
      },
    },
    {
      img: "/img/ask/ask14.jpg",
      title: "Beautiful templates",
      description:
        "Start with carefully crafted layouts and templates that you can copy, customize, and ship.",
      link: {
        text: "Explore Templates",
        url: "/templates",
      },
    },
    {
      img: "/img/ask/ask12.jpg",
      title: "Design resources",
      description:
        "Access logos, icons, vectors, and other resources built to speed up your design and development workflow.",
      link: {
        text: "Explore Resources",
        url: "/logos",
      },
    },
  ],
  className,
}: Feature01Props) => {
  return (
    <section
      className={cn(
        "max-w-6xl mx-auto h-screen flex flex-col justify-center px-4 py-10",
        className
      )}
    >
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* Features */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group flex flex-col gap-0 overflow-hidden  p-2 shadow-none transition-colors"
          >
            <CardHeader className="gap-0 p-0">
              {feature.img && (
                <div className="overflow-hidden  border bg-muted">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>

              <p className="flex-1 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>

              {feature.link && (
                <Button
                  variant="outline"
                  render={ <a href={feature.link.url}/>}
                  className="mt-2 w-full" >
                   {feature.link.text}
                    <ArrowUpRight className="size-4" />
                   
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 