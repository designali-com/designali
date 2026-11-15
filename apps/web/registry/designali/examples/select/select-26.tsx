import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const reasons = [
  { label: "Too expensive", value: "price" },
  { label: "Missing features I need", value: "features" },
  { label: "Switching to another tool", value: "switching" },
  { label: "Just taking a break", value: "break" },
  { label: "Other", value: "other" },
]

export default function PlaceholderSelect() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Sorry to see you go</h3>
        <p className="text-xs text-muted-foreground">
          Tell us why you&apos;re canceling so we can improve.
        </p>
      </div>
      <Select items={reasons}>
        <SelectTrigger className="w-full" aria-label="Cancellation reason">
          <SelectValue placeholder="Select a reason" />
        </SelectTrigger>
        <SelectContent>
          {reasons.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="destructive">Cancel subscription</Button>
    </div>
  )
}
