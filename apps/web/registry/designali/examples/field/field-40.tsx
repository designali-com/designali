import { GlobeIcon, LockIcon, UsersIcon } from "lucide-react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const options = [
  {
    value: "public",
    title: "Public",
    hint: "Anyone on the internet can see your profile.",
    icon: GlobeIcon,
  },
  {
    value: "team",
    title: "Team only",
    hint: "Only members of your workspaces.",
    icon: UsersIcon,
  },
  {
    value: "private",
    title: "Private",
    hint: "Only you. Your name still shows on comments.",
    icon: LockIcon,
  },
]

export default function ProfileVisibilityRadio() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Profile visibility</FieldLegend>
      <RadioGroup defaultValue="team" className="gap-2">
        {options.map((o) => (
          <FieldLabel key={o.value} htmlFor={"vis-" + o.value}>
            <Field orientation="horizontal">
              <o.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{o.title}</FieldTitle>
                <FieldDescription>{o.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={o.value} id={"vis-" + o.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
