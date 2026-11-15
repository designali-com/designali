import { SearchIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function CompactSmallFields() {
  return (
    <FieldGroup className="w-full max-w-md flex-row flex-wrap items-end gap-2 border p-2">
      <Field className="w-auto flex-1">
        <FieldLabel htmlFor="flt-search" className="sr-only">
          Search orders
        </FieldLabel>
        <InputGroup className="h-7">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput id="flt-search" placeholder="Order # or customer" />
        </InputGroup>
      </Field>
      <Field className="w-auto">
        <FieldLabel htmlFor="flt-status" className="sr-only">
          Status
        </FieldLabel>
        <NativeSelect id="flt-status" size="sm" defaultValue="all">
          <NativeSelectOption value="all">All statuses</NativeSelectOption>
          <NativeSelectOption value="paid">Paid</NativeSelectOption>
          <NativeSelectOption value="pending">Pending</NativeSelectOption>
          <NativeSelectOption value="refunded">Refunded</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field className="w-auto">
        <FieldLabel htmlFor="flt-channel" className="sr-only">
          Channel
        </FieldLabel>
        <NativeSelect id="flt-channel" size="sm" defaultValue="any">
          <NativeSelectOption value="any">Any channel</NativeSelectOption>
          <NativeSelectOption value="web">Web store</NativeSelectOption>
          <NativeSelectOption value="pos">In person</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Button size="sm" variant="ghost">
        Reset
      </Button>
    </FieldGroup>
  )
}
