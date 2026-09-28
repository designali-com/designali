import { Calculation } from "@/registry/designali/ui/calculation"

export default function FloorExample() {
  return (
    <Calculation
      defaultOperation="floor"
      defaultInput="12.99"
    />
  )
}