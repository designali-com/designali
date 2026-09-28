import { Calculation } from "@/registry/designali/ui/calculation"

export default function RoundExample() {
  return (
    <Calculation
      defaultOperation="round"
      defaultInput="12.67"
    />
  )
}