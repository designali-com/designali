import { Input } from "@workspace/ui/components/input"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const priorities = [
  { value: "low", label: "Low", dot: "bg-muted-foreground" },
  { value: "medium", label: "Medium", dot: "bg-primary" },
  { value: "high", label: "High", dot: "bg-primary" },
  { value: "urgent", label: "Urgent", dot: "bg-primary" },
]

export default function TaskPriorityToggleGroup() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Input placeholder="Task title" defaultValue="Ship new Designali blocks" />
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Priority
        </span>
        <ToggleGroup
          variant="outline"
          spacing={0}
          size="sm"
          defaultValue={["high"]}
          className="flex-wrap"
        >
          {priorities.map((p) => (
            <ToggleGroupItem key={p.value} value={p.value}>
              <span className={cn("size-2 rounded-full", p.dot)} />
              {p.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}
