"use client"

import * as React from "react"
import {
  MapPin as MapPinIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { InputGroupAddon } from "@workspace/ui/components/input-group"

type Address = { id: string; street: string; locality: string }

const addresses: Address[] = [
  { id: "1", street: "14 Harbour View Road", locality: "Brighton, BN2 1TL" },
  { id: "2", street: "14 Harrow Lane", locality: "Leeds, LS6 2QD" },
  { id: "3", street: "140 Harcourt Street", locality: "Dublin, D02 XY45" },
  { id: "4", street: "14A Hartfield Close", locality: "Bristol, BS7 9PE" },
]

export default function AddressAutocomplete() {
  const [address, setAddress] = React.useState<Address | null>(null)
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="address">Billing address for your Designali invoice</FieldLabel>
      <Combobox
        items={addresses}
        value={address}
        onValueChange={setAddress}
        itemToStringLabel={(a: Address) => a.street + ", " + a.locality}
      >
        <ComboboxInput
          id="address"
          placeholder="Start typing your address"
          showTrigger={false}
          showClear
          className="w-full"
        >
          <InputGroupAddon>
            <MapPinIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No addresses found. Enter it manually.</ComboboxEmpty>
          <ComboboxList>
            {(a: Address) => (
              <ComboboxItem key={a.id} value={a}>
                <MapPinIcon className="text-muted-foreground" />
                <div className="flex flex-col">
                  <span>{a.street}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {a.locality}
                  </span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {address && (
        <FieldDescription>
          Estimated delivery: Tuesday, 18 November
        </FieldDescription>
      )}
    </Field>
  )
}
