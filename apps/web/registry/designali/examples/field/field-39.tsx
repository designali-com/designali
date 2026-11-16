import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function JobApplicationSections() {
  return (
    <form className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Contact</FieldLegend>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="job-name">Full name</FieldLabel>
              <Input id="job-name" placeholder="Ali Imam" />
            </Field>
            <Field>
              <FieldLabel htmlFor="job-email">Email</FieldLabel>
              <Input
                id="job-email"
                type="email"
                placeholder="ali@designali.com"
              />
            </Field>
          </div>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Role</FieldLegend>
          <Field>
            <FieldLabel htmlFor="job-role">Position</FieldLabel>
            <NativeSelect id="job-role" defaultValue="fe">
              <NativeSelectOption value="fe">
                Frontend Engineer
              </NativeSelectOption>
              <NativeSelectOption value="pd">
                Product Designer
              </NativeSelectOption>
              <NativeSelectOption value="pm">
                Product Manager
              </NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="job-remote" defaultChecked />
            <FieldLabel htmlFor="job-remote" className="font-normal">
              Open to fully remote
            </FieldLabel>
          </Field>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Links</FieldLegend>
          <Field>
            <FieldLabel htmlFor="job-portfolio">Portfolio</FieldLabel>
            <Input id="job-portfolio" type="url" placeholder="https://www.designali.com" />
            <FieldDescription>
              A site, case study, or repository.
            </FieldDescription>
          </Field>
        </FieldSet>
        <Button type="submit" className="w-fit">
          Submit application
        </Button>
      </FieldGroup>
    </form>
  )
}
