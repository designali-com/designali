import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function Component() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <CounterNumber value={99.99} currency="USD" decimalPlaces={2} size="xl" />
    </div>
  )
}
