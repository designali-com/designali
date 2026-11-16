import {
  FileExclamationPoint as FileWarningIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function FileConflictResolution() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-start gap-3">
        <FileWarningIcon className="mt-0.5 size-5 text-primary" />
        <div>
          <p className="text-sm font-medium">
            &quot;designali-logos.zip&quot; already exists
          </p>
          <p className="text-xs text-muted-foreground">in Brand / Assets</p>
        </div>
      </div>
      <RadioGroup defaultValue="keep" className="gap-3">
        <Field orientation="horizontal">
          <RadioGroupItem value="replace" id="conflict-replace" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-replace">Replace</FieldLabel>
            <FieldDescription>Overwrite the existing file.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="keep" id="conflict-keep" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-keep">Keep both</FieldLabel>
            <FieldDescription>
              Save as &quot;designali-logos (1).zip&quot;.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="skip" id="conflict-skip" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-skip">Skip</FieldLabel>
            <FieldDescription>Don&apos;t copy this file.</FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Apply</Button>
      </div>
    </div>
  )
}
