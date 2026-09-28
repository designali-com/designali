import { Calculation } from "@/registry/designali/ui/calculation"

export default function SquareRootExample() {
  return (
    <Calculation
      defaultOperation="sqrt"
      defaultInput="144"
    />
  )
}