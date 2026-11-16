import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <BentoGrid rowHeight={{ base: "70px", md: "120px", lg: "120px" }}>
      <BentoGridItem colSpan={{ base: 1, md: 3, lg: 5 }}>
        designali — design se code tak
      </BentoGridItem>
      <BentoGridItem colSpan={{ base: 1, lg: 2 }}>Brand Identity</BentoGridItem>
      <BentoGridItem>UI/UX Design</BentoGridItem>

      <BentoGridItem colSpan={{ base: 1, lg: 2 }}>Web Development</BentoGridItem>

      <BentoGridItem colSpan={{ base: 1, md: 3, lg: 5 }}>
        Where thoughtful design meets production-ready code
      </BentoGridItem>
    </BentoGrid>
  )
}
