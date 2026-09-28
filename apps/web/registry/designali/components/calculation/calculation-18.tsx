import { Calculation } from "@/registry/designali/ui/calculation"

export default function CeilingExample() {
  return (
    <Calculation
      defaultOperation="ceil"
      defaultInput="12.01"
    />
  )
}