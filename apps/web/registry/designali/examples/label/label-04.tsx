import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function OptionalHintLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="company">
        Company
        <span className="font-normal text-muted-foreground">(optional)</span>
      </Label>
      <Input id="company" placeholder="Designali" />
    </div>
  )
}
