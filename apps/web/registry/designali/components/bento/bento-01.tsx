import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }}>
        <BentoGridItem colSpan={2} rowSpan={2}>
          Hero Card
        </BentoGridItem>
        <BentoGridItem>Stats 1</BentoGridItem>
        <BentoGridItem>Stats 2</BentoGridItem>

        <BentoGridItem colSpan={2}>Wide Card</BentoGridItem>

        <BentoGridItem>Small</BentoGridItem>
        <BentoGridItem>Small</BentoGridItem>
        <BentoGridItem>Small</BentoGridItem>
        <BentoGridItem>Small</BentoGridItem>
      </BentoGrid>
    </div>
  )
}
