import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function Component() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <CounterNumber
        value={85.5}
        decimalPlaces={1}
        suffix="%"
        size="xl"
        color="success"
      />
    </div>
  )
}
