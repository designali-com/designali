import {
  Blocks,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
} from "@designali/icons"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const cells: {
  icon: IconComponent
  title: string
  description: string
  className: string
}[] = [
  {
    icon: Gauge,
    title: "Production-ready blocks",
    description:
      "Designali ships 460+ copy-and-paste blocks built with Next.js, React and Tailwind CSS.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: GitBranch,
    title: "Templates",
    description: "Launch-ready Next.js templates for any brand.",
    className: "",
  },
  {
    icon: KeyRound,
    title: "Icons",
    description: "4000+ icons in @designali/icons.",
    className: "",
  },
  {
    icon: Globe,
    title: "Deploy on Vercel",
    description: "Ship your site in minutes.",
    className: "",
  },
  {
    icon: Layers,
    title: "Design systems",
    description: "Semantic tokens for light and dark.",
    className: "",
  },
  {
    icon: Blocks,
    title: "Logos and vectors",
    description:
      "Brand logos from @designali/logos and abstract shapes from @designali/vectors, ready for any page.",
    className: "md:col-span-2",
  },
]

export default function Grid01() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Everything you need to ship with Designali, design se code tak.
        </h2>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-px border border-border bg-border md:grid-cols-4">
          {cells.map((cell, index) => (
            <article
              key={cell.title}
              className={`flex flex-col justify-between bg-background p-6 ${cell.className}`}
            >
              <cell.icon className="size-5 text-muted-foreground" />
              {index === 0 && (
                <div className="my-8 flex items-end gap-2">
                  <span className="text-7xl font-semibold tracking-tighter md:text-8xl">
                    460+
                  </span>
                  <span className="mb-3 text-sm text-muted-foreground">Designali blocks</span>
                </div>
              )}
              <div>
                <h3 className="text-base font-medium">{cell.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {cell.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
