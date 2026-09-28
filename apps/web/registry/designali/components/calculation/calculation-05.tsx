import { Calculation } from "@/registry/designali/ui/calculation"

export default function CountExample() {
  return (
    <Calculation
      defaultOperation="count"
      defaultInput="10, 20, 30, 40, 50"
    />
  )
}