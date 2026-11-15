"use client"

import * as React from "react"
import { GlobeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
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
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const formats = [
  { value: "mdy", label: "11/15/2026" },
  { value: "dmy", label: "15/11/2026" },
  { value: "iso", label: "2026-11-15" },
]

export default function LanguageRegionDialog() {
  const [format, setFormat] = React.useState("dmy")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" />}>
        <GlobeIcon data-icon="inline-start" />
        English (UK)
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Language & region</DialogTitle>
          <DialogDescription>
            Applies to the interface and exported reports.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="locale-lang">Language</FieldLabel>
            <NativeSelect
              id="locale-lang"
              defaultValue="en-GB"
              className="w-full"
            >
              <NativeSelectOption value="en-US">
                English (US)
              </NativeSelectOption>
              <NativeSelectOption value="en-GB">
                English (UK)
              </NativeSelectOption>
              <NativeSelectOption value="de">Deutsch</NativeSelectOption>
              <NativeSelectOption value="es">Español</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="locale-tz">Time zone</FieldLabel>
            <NativeSelect id="locale-tz" defaultValue="lon" className="w-full">
              <NativeSelectOption value="lon">
                (GMT+0) London
              </NativeSelectOption>
              <NativeSelectOption value="ber">
                (GMT+1) Berlin
              </NativeSelectOption>
              <NativeSelectOption value="nyc">
                (GMT-5) New York
              </NativeSelectOption>
            </NativeSelect>
          </Field>
          <FieldSet>
            <FieldLegend variant="label">Date format</FieldLegend>
            <RadioGroup
              value={format}
              onValueChange={(value) => setFormat(String(value))}
              className="flex flex-wrap gap-4"
            >
              {formats.map((item) => (
                <Field
                  key={item.value}
                  orientation="horizontal"
                  className="w-auto"
                >
                  <RadioGroupItem
                    value={item.value}
                    id={"date-" + item.value}
                  />
                  <FieldLabel
                    htmlFor={"date-" + item.value}
                    className="font-mono"
                  >
                    {item.label}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button />}>Apply</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
