import { Calculation } from "@/registry/designali/ui/calculation"

export default function SubtractExample() {
  return (
    <Calculation
      defaultOperation="subtract"
      defaultInput="100, 35"
    />
  )
}