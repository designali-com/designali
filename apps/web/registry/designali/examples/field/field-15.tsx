import { LockIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function DisabledLockedField() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field data-disabled="true">
        <FieldLabel htmlFor="locked-domain">
          <LockIcon className="size-3.5" />
          Workspace domain
        </FieldLabel>
        <Input
          id="locked-domain"
          defaultValue="northwind.fieldnote.app"
          disabled
        />
        <FieldDescription>
          Domains are managed by your organization admin.{" "}
          <a href="#">Request a change</a>
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
