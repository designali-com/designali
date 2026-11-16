import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <BentoGrid
      cols={{ base: 2, md: 3, lg: 4 }}
      rowHeight={{ base: "60px", md: "80px", lg: "120px" }}
    >
      <BentoGridItem colSpan={2} rowSpan={2}>
        designali — design se code tak
      </BentoGridItem>
      <BentoGridItem>460+ Blocks</BentoGridItem>
      <BentoGridItem>4000+ Icons</BentoGridItem>

      <BentoGridItem rowSpan={2} colSpan={2}>
        2300+ UI Examples
      </BentoGridItem>

      <BentoGridItem>Templates</BentoGridItem>
      <BentoGridItem>Logos</BentoGridItem>
    </BentoGrid>
  )
}
