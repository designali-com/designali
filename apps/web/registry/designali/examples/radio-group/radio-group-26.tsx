import {
  MapPin as MapPinIcon,
  Pencil as PencilIcon,
  Plus as PlusIcon,
} from "@designali/icons"

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

const addresses = [
  { id: "home", label: "Home", line: "14 Alder Lane, Portland, OR 97205" },
  {
    id: "office",
    label: "Office",
    line: "220 Market St, Suite 4, Portland, OR 97204",
  },
]

export default function SavedAddressList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup defaultValue="home">
        {addresses.map((a) => (
          <FieldLabel key={a.id} htmlFor={"addr-" + a.id}>
            <Field orientation="horizontal">
              <RadioGroupItem value={a.id} id={"addr-" + a.id} />
              <FieldContent>
                <FieldTitle>
                  <MapPinIcon className="size-3.5" />
                  {a.label}
                </FieldTitle>
                <FieldDescription>{a.line}</FieldDescription>
              </FieldContent>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label={"Edit " + a.label}
              >
                <PencilIcon />
              </Button>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <Button variant="outline" size="sm" className="self-start">
        <PlusIcon data-icon="inline-start" />
        Add address
      </Button>
    </div>
  )
}
