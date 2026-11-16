import {
  Blocks,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
} from "@designali/icons"

import type * as React from "react"

import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const cells: {
  icon: IconComponent
  title: string
  description: string
  colSpan?: 1 | 2
  rowSpan?: 1 | 2
}[] = [
  {
    icon: Gauge,
    title: "Production-ready blocks",
    description:
      "Designali ships 460+ copy-and-paste blocks built with Next.js, React and Tailwind CSS.",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    icon: GitBranch,
    title: "Templates",
    description: "Launch-ready Next.js templates for any brand.",
  },
  {
    icon: KeyRound,
    title: "Icons",
    description: "4000+ icons in @designali/icons.",
  },
  {
    icon: Globe,
    title: "Deploy on Vercel",
    description: "Ship your site in minutes.",
  },
  {
    icon: Layers,
    title: "Design systems",
    description: "Semantic tokens for light and dark.",
  },
  {
    icon: Blocks,
    title: "Logos and vectors",
    description:
      "Brand logos from @designali/logos and abstract shapes from @designali/vectors, ready for any page.",
    colSpan: 2,
  },
]

export default function Grid01() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Everything you need to ship with Designali, design se code tak.
        </h2>

        <BentoGrid
          cols={{ base: 1, md: 4 }}
          gap={2}
          rowHeight="minmax(180px,auto)"
          className="mt-14 h-auto"
        >
          {cells.map((cell, index) => (
            <BentoGridItem
              key={cell.title}
              colSpan={{ base: 1, md: cell.colSpan ?? 1 }}
              rowSpan={{ base: 1, md: cell.rowSpan ?? 1 }}
              className="flex flex-col justify-between p-6"
            >
              <cell.icon className="size-5 text-muted-foreground" />
              {index === 0 && (
                <div className="my-8 flex items-end gap-2">
                  <CounterNumber
                    value={460}
                    suffix="+"
                    size="2xl"
                    className="font-semibold tracking-tighter md:text-8xl"
                  />
                  <span className="mb-3 text-sm text-muted-foreground">Designali blocks</span>
                </div>
              )}
              <div>
                <h3 className="text-base font-medium">{cell.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {cell.description}
                </p>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
