import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

const products = [
  "Templates",
  "Blocks",
  "Landing Pages",
  "UI Designs",
  "Icons",
  "Logos",
  "Illustrations",
  "Components",
]

export default function BentoExample() {
  return (
    <BentoGrid
      className="border"
      gap={0}
      cols={4}
      rowHeight={{ base: "40px", md: "90px", lg: "180px" }}
    >
      {products.map((product) => (
        <BentoGridItem colSpan={{ base: 4, md: 2, lg: 1 }} key={product}>
          {product}
        </BentoGridItem>
      ))}
    </BentoGrid>
  )
}
