import { Calculation } from "@/registry/designali/ui/calculation"

export default function PercentageExample() {
  return (
    <Calculation
      defaultOperation="percentage"
      defaultInput="20, 500"
    />
  )
}