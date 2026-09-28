import { Calculation } from "@/registry/designali/ui/calculation"

export default function LcmExample() {
  return (
    <Calculation
      defaultOperation="lcm"
      defaultInput="12, 18"
    />
  )
}