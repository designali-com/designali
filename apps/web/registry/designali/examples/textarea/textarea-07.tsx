import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function AutoGrowTextarea() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ta-grow">Meeting agenda</Label>
      <Textarea
        id="ta-grow"
        rows={1}
        className="max-h-40 min-h-9 resize-none"
        placeholder="Type and press Enter, the box grows with you…"
      />
      <p className="text-xs text-muted-foreground">
        Grows up to 10 lines, then scrolls.
      </p>
    </div>
  )
}
