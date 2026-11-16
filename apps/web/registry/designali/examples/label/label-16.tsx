import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function LabelWithBetaBadge() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-3">
      <Label htmlFor="ai-summaries">
        <SparklesIcon className="size-3.5" />
        AI meeting summaries
        <Badge variant="secondary">Beta</Badge>
      </Label>
      <Switch id="ai-summaries" />
    </div>
  )
}
