import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Blocks } from "lucide-react"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = [
    "header-01",
    "hero-1",
]

export default async function BlocksPage() {
    return (
      <div className="my-20 px-3">
            <div className="flex relative flex-col items-center pb-20 pt-10 text-center">
            
                <Blocks className="mb-4 size-8 text-primary" />
                
                <h1 className="text-2xl md:text-4xl font-medium">
                    Featured
                </h1>

                <p className="mt-2 mx-auto max-w-80 md:max-w-xl text-sm text-muted-foreground">
                    A curated collection of our best blocks, crafted to help
                    you build beautiful interfaces faster.
                </p>
            </div>

            <div className="flex flex-col gap-12 md:gap-24">
                {FEATURED_BLOCKS.map((name) => (
                    <BlockDisplay
                        name={name}
                        key={name}
                    />
                ))}
            </div>
        </div>
    )
}