import { BlockDisplayFrame } from "@/src/components/templates/blocks/block-display-frame"
// Imported directly (not looked up in the registry index) so the homepage only
// compiles these 8 blocks.
import { HeroSection as Hero1 } from "@/registry/designali/blocks/hero/hero-1"
import Header05 from "@/registry/designali/blocks/header/header-05/page"
import Footer01 from "@/registry/designali/blocks/footer/footer-01/page"
import Feature01 from "@/registry/designali/blocks/feature/feature-01/page"
import { HeroSection as Hero4 } from "@/registry/designali/blocks/hero/hero-4"
import { Pricing as Pricing01 } from "@/registry/designali/blocks/pricing/pricing-01"
import Logos03 from "@/registry/designali/blocks/logos/logos-03/page"
import { TestimonialsSection as Testimonial01 } from "@/registry/designali/blocks/testimonials/testimonial-01"
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
    RectangleHorizontal,
    BadgeDollarSign,
    LayoutTemplate,
    Quote,
    Sparkles,
    Users,
} from "lucide-react"
import Link from "next/link"

// Config Data for Tabs to eliminate code repetition
const TAB_ITEMS = [
    { value: "hero", label: "Hero", icon: RectangleHorizontal, block: "hero-1", component: Hero1 },

    { value: "header", label: "Header", icon: Navigation, block: "header-05", component: Header05 },

    { value: "footer", label: "Footer", icon: PanelBottom, block: "footer-01", component: Footer01 },

    { value: "feature", label: "Feature", icon: Sparkles, block: "feature-01", component: Feature01 },

    { value: "secondary-hero", label: "Secondary Hero", icon: LayoutTemplate, block: "hero-4", component: Hero4 },

    { value: "pricing", label: "Pricing", icon: BadgeDollarSign, block: "pricing-01", component: Pricing01 },

    { value: "clients", label: "Clients", icon: Users, block: "logos-03", component: Logos03 },

    { value: "testimonial", label: "Testimonials", icon: Quote, block: "testimonial-01", component: Testimonial01 },
] as const

export function FeaturedBlocks() {
    return (
        <section className="max-w-7xl my-3 md:my-40 px-3 mx-auto">
            <div className="overflow-hidden border bg-background shadow-2xl/10">
                <Tabs defaultValue="hero" className="w-full">
                    <div className="flex items-center justify-between border-b bg-muted/30 px-1.5 py-1">

                        {/* Window Controls (Mac Style Dots) */}
                        <div className="hidden md:flex items-center gap-2 pl-2">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>

                        {/* Navigation Tabs */}
                        <div className="mx-auto md:flex justify-center scrollbar-hide overflow-x-auto md:max-w-none">
                            <TabsList>
                                {TAB_ITEMS.map(({ value, label, icon: Icon }) => (
                                    <TabsTrigger key={value} value={value}>
                                        <Icon className="h-3" />
                                        {label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <Button
                            nativeButton={false} 
                            className="hidden md:flex" render={<Link href="/blocks" />} size="sm">
                            All Blocks
                        </Button>
                    </div>

                    {/* Tab Panels */}
                    <div className="px-2 pb-2">
                        {TAB_ITEMS.map(({ value, block, component }) => (
                            <TabsContent key={value} value={value}>
                                <BlockDisplayFrame name={block} component={component} />
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}