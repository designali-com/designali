import { Calculation } from "@/registry/designali/ui/calculation"

export default function PercentageChangeExample() {
  return (
    <Calculation
      defaultOperation="percentage-change"
      defaultInput="100, 125"
    />
  )
}