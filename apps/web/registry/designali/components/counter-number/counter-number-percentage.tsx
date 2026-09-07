import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function Component() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <CounterNumber
        value={23.8}
        decimalPlaces={1}
        prefix="+"
        suffix="%"
        size="2xl"
        className="text-primary"
      />
    </div>
  )
}
