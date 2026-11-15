import { LockIcon, ShieldCheckIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const policies = [
  { label: "Require SSO", value: "sso" },
  { label: "Password or SSO", value: "any" },
]

export default function ReadOnlySelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="auth-policy">Sign-in method</FieldLabel>
      <Select items={policies} defaultValue="sso" readOnly>
        <SelectTrigger id="auth-policy" className="w-full bg-muted/50">
          <ShieldCheckIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {policies.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Managed by your organization admin.
      </FieldDescription>
    </Field>
  )
}
