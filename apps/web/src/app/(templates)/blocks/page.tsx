import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
import { Blocks } from "lucide-react"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = ["hero-4", "feature-01", "hero-1", "header-01", "logos-01"]

export default function BlocksPage() {
  return (
    <div className="my-20 px-3">
      <div className="relative flex flex-col items-center pt-10 pb-20 text-center">
        <Blocks className="mb-4 size-8 text-primary" />

        <h1 className="text-2xl font-medium md:text-4xl">Featured</h1>

        <p className="mx-auto mt-2 max-w-80 text-sm text-muted-foreground md:max-w-xl">
          A curated collection of our best blocks, crafted to help you build
          beautiful interfaces faster.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-24">
        {FEATURED_BLOCKS.map((name) => (
          <BlockDisplay key={name} name={name} />
        ))}
      </div>
    </div>
  )
}
