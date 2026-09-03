import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function BentoExample() {
  return (
    <BentoGrid
      className="border"
      gap={0}
      cols={4}
      rowHeight={{ base: "40px", md: "90px", lg: "180px" }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <BentoGridItem colSpan={{ base: 4, md: 2, lg: 1 }} key={i}>
          Card {i + 1}
        </BentoGridItem>
      ))}
    </BentoGrid>
  )
}
