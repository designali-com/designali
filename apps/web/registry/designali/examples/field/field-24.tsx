import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

const categories = [
  {
    id: "essential",
    title: "Essential",
    hint: "Required for sign-in and security.",
    locked: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    hint: "Help Designali understand how designali.com is used.",
    locked: false,
  },
  {
    id: "marketing",
    title: "Marketing",
    hint: "Updates on new Designali templates and blocks.",
    locked: false,
  },
]

export default function PrivacySwitchesWithLocked() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>designali.com cookie preferences</FieldLegend>
      <FieldGroup className="gap-4">
        {categories.map((c) => (
          <Field key={c.id} orientation="horizontal" data-disabled={c.locked}>
            <FieldContent>
              <FieldLabel htmlFor={"cookie-" + c.id}>
                {c.title}
                {c.locked && <Badge variant="outline">Always on</Badge>}
              </FieldLabel>
              <FieldDescription>{c.hint}</FieldDescription>
            </FieldContent>
            <Switch
              id={"cookie-" + c.id}
              defaultChecked={c.locked}
              disabled={c.locked}
            />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
