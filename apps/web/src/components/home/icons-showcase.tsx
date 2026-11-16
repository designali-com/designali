// The tiles are picked ahead of time by scripts/build-showcase.mts, so this
// page imports only the 60 components it shows instead of every icon, logo and
// vector. Re-run `pnpm --filter web showcase:build` after regenerating them.
import Link from "next/link"

import { Marquee } from "@/registry/designali/ui/marquee"
import { CounterNumber } from "@/registry/designali/ui/counter-number"
import { IconGlyph } from "@/src/components/templates/(icons)/icons/icon-glyph"
import { LogoGlyph } from "@/src/components/templates/(icons)/logos/logo-glyph"
import { VectorGlyph } from "@/src/components/templates/(icons)/vectors/vector-glyph"

import {
  showcaseIcons,
  showcaseLogos,
  showcaseVectors,
} from "./icons-showcase-items"

type ShowcaseItem = {
  id: string
  entry: {
    // Icons, logos and vectors differ slightly in their other props.
    Component: React.ComponentType<{ size?: number }>
    metadata: { viewBox: string; variant?: string }
  }
}

export function IconsShowcase() {
  return (
    <section className="border-t py-2">
      <div className=" text-center">
        <div className="my-10">
          <CounterNumber
            className="font-bold tracking-tighter"
            suffix="+"
            value={5000}
            size="2xl"
          />
          <h2 className="py-4 text-2xl font-medium uppercase font-mono">
            icons, logos, and vector
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Ready to use, SVG logos with multiple variants — copy, download, or
            drop into your project.
          </p>
        </div>
      </div>

      <Marquee pauseOnHover speed="slow" fade>
        <div className="flex gap-2 last:pr-2">
          {showcaseIcons.map((item) => (
            <IconTile key={item.id} item={item} />
          ))}
        </div>
      </Marquee>

      <Marquee pauseOnHover reverse speed="slow" fade>
        <div className="flex gap-2 last:pr-2">
          {showcaseVectors.map((item) => (
            <VectorTile key={item.id} item={item} />
          ))}
        </div>
      </Marquee>

      <Marquee pauseOnHover speed="slow" fade>
        <div className="flex gap-2 last:pr-2">
          {showcaseLogos.map((item) => (
            <LogoTile key={item.id} item={item} />
          ))}
        </div>
      </Marquee>
    </section>
  )
}

function LogoTile({ item }: { item: ShowcaseItem }) {
  return (
    <Link href={`/logos/${item.id}`}>
      <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-30 w-30">
        <LogoGlyph entry={item.entry} size={40} />
      </div>
    </Link>
  )
}

function IconTile({ item }: { item: ShowcaseItem }) {
  return (
    <Link href={`/icons/${item.id}`}>
      <div className="border-border/40 hover:bg-code flex  shrink-0 items-center justify-center border transition-colors duration-200 h-20 w-20">
        <IconGlyph entry={item.entry} size={24} />
      </div>
    </Link>
  )
}

function VectorTile({ item }: { item: ShowcaseItem }) {
  return (
    <Link href={`/vectors/${item.id}`}>
      <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-60 w-60">
        <VectorGlyph entry={item.entry} size={100} />
      </div>
    </Link>
  )
}
