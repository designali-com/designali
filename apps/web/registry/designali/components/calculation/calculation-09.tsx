import { Calculation } from "@/registry/designali/ui/calculation"

export default function DivideExample() {
  return (
    <Calculation
      defaultOperation="divide"
      defaultInput="100, 4"
    />
  )
}