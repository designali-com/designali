import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const fields = [
  {
    id: "contact-email",
    label: "Email",
    icon: MailIcon,
    placeholder: "noah@harborline.co",
  },
  {
    id: "contact-phone",
    label: "Phone",
    icon: PhoneIcon,
    placeholder: "(555) 019-3381",
  },
  {
    id: "contact-site",
    label: "Website",
    icon: GlobeIcon,
    placeholder: "harborline.co",
  },
]

export default function LabelWithLeadingIcon() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {fields.map((field) => (
        <div key={field.id} className="grid gap-2">
          <Label htmlFor={field.id}>
            <field.icon className="size-3.5 text-muted-foreground" />
            {field.label}
          </Label>
          <Input id={field.id} placeholder={field.placeholder} />
        </div>
      ))}
    </div>
  )
}
