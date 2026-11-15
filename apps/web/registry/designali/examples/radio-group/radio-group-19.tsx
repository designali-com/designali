import { BriefcaseIcon, UserIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function SignupAccountType() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div>
        <p className="text-base font-semibold">How will you use Brightpost?</p>
        <p className="text-sm text-muted-foreground">
          You can change this later in settings.
        </p>
      </div>
      <RadioGroup defaultValue="personal" className="grid grid-cols-2 gap-3">
        <FieldLabel htmlFor="acct-personal">
          <Field>
            <UserIcon className="size-5" />
            <FieldContent>
              <FieldTitle>Personal</FieldTitle>
              <FieldDescription>
                For side projects and newsletters.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem
              value="personal"
              id="acct-personal"
              className="sr-only"
            />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="acct-business">
          <Field>
            <BriefcaseIcon className="size-5" />
            <FieldContent>
              <FieldTitle>Business</FieldTitle>
              <FieldDescription>
                For teams, invoices, and billing.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem
              value="business"
              id="acct-business"
              className="sr-only"
            />
          </Field>
        </FieldLabel>
      </RadioGroup>
      <Button>Continue</Button>
    </div>
  )
}
