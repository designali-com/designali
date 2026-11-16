import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function RequiredFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="work-email">
        Work email
        <span className="text-destructive" aria-hidden="true">
          *
        </span>
      </Label>
      <Input
        id="work-email"
        type="email"
        placeholder="you@designali.com"
        required
      />
    </div>
  )
}
