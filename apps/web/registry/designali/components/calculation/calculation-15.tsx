import { Calculation } from "@/registry/designali/ui/calculation"

export default function AbsoluteExample() {
  return (
    <Calculation
      defaultOperation="absolute"
      defaultInput="-250"
    />
  )
}