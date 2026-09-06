import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
import { Button } from "@workspace/ui/components/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@workspace/ui/components/tabs"
import {
    PanelBottom,
    Navigation,
    User,
    RectangleHorizontal,
    BadgeDollarSign,  
} from "lucide-react"
import Link from "next/link"

export function FeaturedBlocks() {
    return (
        <section className="max-w-7xl my-3 md:my-40 px-3 mx-auto">

            <div className="overflow-hidden border bg-background shadow-2xl/10">

                <Tabs defaultValue="all" className="w-full">
                    <div className="flex items-center justify-between border-b bg-muted/30 px-1.5 py-1">
                        {/* Window Controls (Red, Yellow, Green dots) */}
                        <div className="flex items-center gap-2 pl-2">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>

                        <div className="mx-auto max-w-60 md:flex justify-center overflow-x-auto md:max-w-none">
                            <TabsList>
                                <TabsTrigger value="hero" >
                                    <RectangleHorizontal className="h-3" />
                                    Hero
                                </TabsTrigger>
                                <TabsTrigger value="header" >
                                    <Navigation className="h-3" />
                                    Header
                                </TabsTrigger>
                                <TabsTrigger value="footer" >
                                    <PanelBottom className="h-3" />
                                    Footer
                                </TabsTrigger>
                                <TabsTrigger value="pricing">
                                    <BadgeDollarSign className="h-3" />
                                    Pricing
                                </TabsTrigger>
                                <TabsTrigger value="clients">
                                    <User className="h-3" />
                                    Clients
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Button render={<Link href={"/blocks"} />} size={"sm"}>
                            All Blocks
                        </Button>
                    </div>
                    <div className="px-2 pb-2">
                        <TabsContent value="hero">
                            <BlockList blocks={["hero-1"]} />
                        </TabsContent>

                        <TabsContent value="header">
                            <BlockList blocks={["header-05"]} />
                        </TabsContent>

                        <TabsContent value="footer">
                            <BlockList blocks={["footer-01"]} />
                        </TabsContent>

                        <TabsContent value="pricing">
                            <BlockList blocks={["hero-4"]} />
                        </TabsContent>

                        <TabsContent value="clients">
                            <BlockList blocks={["logos-03"]} />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

function BlockList({ blocks }: { blocks: readonly string[] }) {
    return (
        <div className="flex flex-col gap-12 md:gap-24">
            {blocks.map((name) => (
                <BlockDisplay key={name} name={name} />
            ))}
        </div>
    )
}