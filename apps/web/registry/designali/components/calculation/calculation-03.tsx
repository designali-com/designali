import { Calculation } from "@/registry/designali/ui/calculation"

export default function MinimumExample() {
  return (
    <Calculation
      defaultOperation="min"
      defaultInput="45, 12, 89, 23, 67"
    />
  )
}