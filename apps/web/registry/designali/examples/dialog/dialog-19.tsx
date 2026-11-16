import {
  Bug as BugIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ReportBugDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" />}>
        <BugIcon data-icon="inline-start" />
        Report a bug
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Report a bug</DialogTitle>
          <DialogDescription>
            We read every report. Thanks for helping us improve Designali.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">Severity</FieldLegend>
            <RadioGroup
              defaultValue="medium"
              className="grid grid-cols-3 gap-2"
            >
              {["low", "medium", "blocking"].map((level) => (
                <Field
                  key={level}
                  orientation="horizontal"
                  className="border p-2"
                >
                  <RadioGroupItem value={level} id={"sev-" + level} />
                  <FieldLabel htmlFor={"sev-" + level} className="capitalize">
                    {level}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field>
            <FieldLabel htmlFor="bug-steps">What happened?</FieldLabel>
            <Textarea
              id="bug-steps"
              placeholder="Steps to reproduce, what you expected, what you saw..."
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="bug-logs" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="bug-logs">Attach diagnostic logs</FieldLabel>
              <FieldDescription>
                Browser version and the last 50 console messages.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button />}>Submit report</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
