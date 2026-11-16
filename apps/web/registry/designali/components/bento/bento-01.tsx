import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }}>
        <BentoGridItem colSpan={2} rowSpan={2}>
          designali — design se code tak
        </BentoGridItem>
        <BentoGridItem>460+ Blocks</BentoGridItem>
        <BentoGridItem>4000+ Icons</BentoGridItem>

        <BentoGridItem colSpan={2}>240+ Landing Pages</BentoGridItem>

        <BentoGridItem>Templates</BentoGridItem>
        <BentoGridItem>Logos</BentoGridItem>
        <BentoGridItem>Vectors</BentoGridItem>
        <BentoGridItem>Mockups</BentoGridItem>
      </BentoGrid>
    </div>
  )
}
