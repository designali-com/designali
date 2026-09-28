import { Calculation } from "@/registry/designali/ui/calculation"

export default function FactorialExample() {
  return (
    <Calculation
      defaultOperation="factorial"
      defaultInput="5"
    />
  )
}