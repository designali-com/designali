import { Calculation } from "@/registry/designali/ui/calculation"

export default function MaximumExample() {
  return (
    <Calculation
      defaultOperation="max"
      defaultInput="45, 12, 89, 23, 67"
    />
  )
}