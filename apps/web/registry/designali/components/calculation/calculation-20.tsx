import { Calculation } from "@/registry/designali/ui/calculation"

export default function GcdExample() {
  return (
    <Calculation
      defaultOperation="gcd"
      defaultInput="48, 18"
    />
  )
}