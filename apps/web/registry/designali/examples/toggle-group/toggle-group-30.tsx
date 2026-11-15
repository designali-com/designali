import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const slots = [
  { time: "8-10 AM", full: false },
  { time: "10-12 PM", full: true },
  { time: "12-2 PM", full: false },
  { time: "2-4 PM", full: false },
  { time: "4-6 PM", full: true },
  { time: "6-8 PM", full: false },
]

export default function DeliverySlotToggleGroup() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <span className="text-sm font-medium">Delivery window - Tomorrow</span>
      <ToggleGroup
        variant="outline"
        spacing={2}
        defaultValue={["2-4 PM"]}
        className="grid w-full grid-cols-3"
      >
        {slots.map((s) => (
          <ToggleGroupItem
            key={s.time}
            value={s.time}
            disabled={s.full}
            className="h-auto flex-col py-2"
          >
            <span>{s.time}</span>
            <span className="text-[10px] font-normal text-muted-foreground">
              {s.full ? "Full" : "$2.99"}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
