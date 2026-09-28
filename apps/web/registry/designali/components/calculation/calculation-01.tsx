import { Calculation } from "@/registry/designali/ui/calculation"

export default function SumExample() {
  return (
    <Calculation
      defaultOperation="sum"
      defaultInput="100, 200, 300"
    />
  )
}