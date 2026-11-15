import { ArrowUpIcon, SparklesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const models = [
  { label: "Swift", value: "swift", hint: "Fast answers" },
  { label: "Balanced", value: "balanced", hint: "Everyday tasks" },
  { label: "Deep", value: "deep", hint: "Complex reasoning" },
]

export default function ChatModelSelect() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-2">
      <textarea
        className="min-h-16 resize-none bg-transparent p-1 text-sm outline-none placeholder:text-muted-foreground"
        placeholder="Ask about your project..."
        aria-label="Message"
      />
      <div className="flex items-center justify-between">
        <Select items={models} defaultValue="balanced">
          <SelectTrigger
            size="sm"
            className="border-transparent"
            aria-label="Model"
          >
            <SparklesIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top" alignItemWithTrigger={false} align="start">
            {models.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex flex-col">
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.hint}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button size="icon-sm" aria-label="Send">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}
