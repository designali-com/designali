import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const groups = [
  {
    name: "Projects",
    perms: ["View projects", "Create projects", "Archive projects"],
  },
  {
    name: "Billing",
    perms: ["View invoices", "Update payment method", "Change plan"],
  },
  {
    name: "Members",
    perms: ["Invite members", "Remove members", "Change roles"],
  },
  { name: "Integrations", perms: ["Connect apps", "Manage API keys"] },
]

export default function PermissionsChecklist() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-4 py-3">
        <p className="text-sm font-medium">Editor role</p>
        <p className="text-xs text-muted-foreground">
          Choose what editors can do.
        </p>
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-4 p-4">
          {groups.map((g) => (
            <FieldSet key={g.name} className="gap-2">
              <FieldLegend variant="label">{g.name}</FieldLegend>
              {g.perms.map((p, i) => (
                <Field key={p} orientation="horizontal">
                  <Checkbox id={p} defaultChecked={i === 0} />
                  <FieldLabel htmlFor={p} className="font-normal">
                    {p}
                  </FieldLabel>
                </Field>
              ))}
            </FieldSet>
          ))}
        </div>
      </ScrollArea>
      <div className="flex justify-end gap-2 border-t p-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save role</Button>
      </div>
    </div>
  )
}
