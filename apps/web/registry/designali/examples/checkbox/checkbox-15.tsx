import {
  ShieldCheck as ShieldCheckIcon,
} from "@designali/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

const controls = [
  { label: "Data encrypted at rest", done: true },
  { label: "SSO enforced for all members", done: true },
  { label: "Quarterly access review", done: false },
  { label: "Vendor risk assessment", done: true },
]

export default function ReadOnlyComplianceSummary() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4" />
          Compliance status
        </CardTitle>
        <CardDescription>Managed by the Designali workspace admin.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3">
          {controls.map((control, index) => (
            <Field key={control.label} orientation="horizontal">
              <Checkbox
                id={"control-" + index}
                checked={control.done}
                readOnly
              />
              <FieldLabel
                htmlFor={"control-" + index}
                className={cn(
                  "font-normal",
                  !control.done && "text-muted-foreground"
                )}
              >
                {control.label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
