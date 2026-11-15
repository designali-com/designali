import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const options = [
  { id: "n-mentions", label: "Mentions and replies", checked: true },
  { id: "n-assign", label: "Tasks assigned to me", checked: true },
  {
    id: "n-status",
    label: "Status changes on followed issues",
    checked: false,
  },
  { id: "n-billing", label: "Billing and invoices", checked: false },
]

export default function NotificationCheckboxList() {
  return (
    <fieldset className="flex w-full max-w-sm flex-col gap-3">
      <legend className="mb-2 text-sm font-medium">Email me about</legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Checkbox id={option.id} defaultChecked={option.checked} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </fieldset>
  )
}
