import { Calculation } from "@/registry/designali/ui/calculation"

export default function AverageExample() {
  return (
    <Calculation
      defaultOperation="average"
      defaultInput="10, 20, 30, 40, 50"
    />
  )
}