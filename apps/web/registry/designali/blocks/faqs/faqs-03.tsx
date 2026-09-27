"use client"

import { Plus, X } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

interface FaqItem {
  title: string
  description: string
}

interface Faq01Props {
  label?: string
  title?: string
  description?: string
  items?: FaqItem[]
  className?: string
}

const defaultItems: FaqItem[] = [
  {
    title: "What is Designali?",
    description:
      "Designali is a UI library for designers and developers. It provides production-ready components, blocks, templates, logos, icons, and design resources that you can use to build modern interfaces faster.",
  },
  {
    title: "Is Designali free to use?",
    description:
      "Yes. Designali includes free and open-source resources that you can use in personal and commercial projects. Individual resources may have their own licensing terms.",
  },
  {
    title: "Can I customize the components?",
    description:
      "Absolutely. Designali components are designed to be copied and customized. You can change the styling, layout, typography, colors, animations, and functionality to match your project.",
  },
  {
    title: "Does Designali work with shadcn/ui?",
    description:
      "Yes. Designali is designed to work alongside modern React and Tailwind CSS workflows, including shadcn/ui. You can copy components into your project and adapt them to your existing setup.",
  },
  {
    title: "What technologies does Designali use?",
    description:
      "Designali components are built with modern web technologies including React, TypeScript, Tailwind CSS, and accessible UI primitives. Components are designed to fit naturally into modern frontend workflows.",
  },
  {
    title: "Can I use Designali for commercial projects?",
    description:
      "Yes, Designali resources can be used in commercial projects according to the applicable license for each resource. Check the specific resource or project license when needed.",
  },
]

export const Faq01 = ({
  label = "FAQ",
  title = "Questions, answered.",
  description = "Everything you need to know about Designali.",
  items = defaultItems,
  className,
}: Faq01Props) => (
  <section
    className={cn(
      "relative w-full overflow-hidden py-20 md:py-28",
      className
    )}
  >
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {label && (
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {label}
          </p>
        )}

        <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="max-w-xl text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* FAQ */}
      <Accordion 
      defaultValue={["item-0"]}
        className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-3"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group relative overflow-hidden border bg-background pl-6 transition-colors data-[state=open]:bg-muted/40"
          >
            <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline md:text-lg">
              {item.title}

              <span className="absolute right-5 flex size-7 shrink-0 items-center justify-center border bg-background">
                <Plus className="size-3.5 text-muted-foreground group-data-[state=open]:hidden" />
                <X className="hidden size-3.5 text-muted-foreground group-data-[state=open]:block" />
              </span>
            </AccordionTrigger>

            <AccordionContent className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-muted-foreground md:text-base">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
)
 