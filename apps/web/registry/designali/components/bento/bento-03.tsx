import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <BentoGrid rowHeight={{ base: "60px", md: "120px", lg: "120px" }}>
      <BentoGridItem rowSpan={{ base: 1, md: 3, lg: 3 }}>
        designali studio
      </BentoGridItem>
      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>Brand Identity</BentoGridItem>
      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>UI/UX Design</BentoGridItem>

      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>Design Systems</BentoGridItem>

      <BentoGridItem rowSpan={{ base: 1, md: 2, lg: 3 }}>
        Next.js Websites
      </BentoGridItem>
      <BentoGridItem colSpan={{ base: 1, lg: 3 }}>CGI, 3D & Motion</BentoGridItem>
    </BentoGrid>
  )
}
