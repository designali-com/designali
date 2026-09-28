import { Calculation } from "@/registry/designali/ui/calculation"

export default function RemainderExample() {
  return (
    <Calculation
      defaultOperation="remainder"
      defaultInput="17, 5"
    />
  )
}