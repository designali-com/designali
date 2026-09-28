import { Calculation } from "@/registry/designali/ui/calculation"

export default function AddExample() {
  return (
    <Calculation
      defaultOperation="add"
      defaultInput="25, 15"
    />
  )
}