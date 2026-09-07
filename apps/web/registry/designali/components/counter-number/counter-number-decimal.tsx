import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function Component() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <CounterNumber value={123.456} size="xl" decimalPlaces={3} />
    </div>
  )
}
