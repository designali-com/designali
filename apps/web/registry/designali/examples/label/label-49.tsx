import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function WrappingLabelImplicit() {
  return (
    <form className="flex w-full max-w-sm flex-col gap-4">
      <Label className="flex-col items-start gap-2">
        Display name
        <Input defaultValue="Wren Abbott" />
      </Label>
      <Label className="flex-col items-start gap-2">
        Pronouns
        <Input placeholder="they/them" />
      </Label>
      <Label className="gap-2">
        <Checkbox defaultChecked />
        Show pronouns on my profile
      </Label>
    </form>
  )
}
