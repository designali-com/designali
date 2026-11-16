import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function NativeSelectLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="country">Designali billing country</Label>
      <NativeSelect id="country" defaultValue="ca" className="w-full">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="ca">Canada</NativeSelectOption>
        <NativeSelectOption value="gb">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
