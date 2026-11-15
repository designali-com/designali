"use client"

import { MapPinIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function ShippingAddressDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            className="h-auto w-full max-w-xs justify-start py-2 text-start"
          />
        }
      >
        <MapPinIcon data-icon="inline-start" />
        <span className="flex flex-col">
          <span className="font-medium">Ship to</span>
          <span className="font-normal text-muted-foreground">
            Add a delivery address
          </span>
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shipping address</DrawerTitle>
          <DrawerDescription>We deliver to 40+ countries.</DrawerDescription>
        </DrawerHeader>
        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={(event) => event.preventDefault()}
        >
          <FieldGroup className="flex-1 overflow-y-auto p-4">
            <Field>
              <FieldLabel htmlFor="sa-name">Full name</FieldLabel>
              <Input
                id="sa-name"
                autoComplete="name"
                placeholder="Hugo Bergström"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sa-line1">Street address</FieldLabel>
              <Input
                id="sa-line1"
                autoComplete="address-line1"
                placeholder="Kungsgatan 14"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="sa-zip">Postal code</FieldLabel>
                <Input
                  id="sa-zip"
                  autoComplete="postal-code"
                  placeholder="111 43"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sa-city">City</FieldLabel>
                <Input
                  id="sa-city"
                  autoComplete="address-level2"
                  placeholder="Stockholm"
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="sa-country">Country</FieldLabel>
              <NativeSelect
                id="sa-country"
                defaultValue="SE"
                className="w-full"
              >
                <NativeSelectOption value="SE">Sweden</NativeSelectOption>
                <NativeSelectOption value="NO">Norway</NativeSelectOption>
                <NativeSelectOption value="DK">Denmark</NativeSelectOption>
                <NativeSelectOption value="FI">Finland</NativeSelectOption>
              </NativeSelect>
            </Field>
            <FieldSet>
              <FieldLegend variant="label">Delivery</FieldLegend>
              <RadioGroup defaultValue="standard">
                <Field orientation="horizontal">
                  <RadioGroupItem value="standard" id="sa-standard" />
                  <FieldLabel htmlFor="sa-standard">
                    Standard · 3–5 days · Free
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="express" id="sa-express" />
                  <FieldLabel htmlFor="sa-express">
                    Express · Next day · €9
                  </FieldLabel>
                </Field>
              </RadioGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Checkbox id="sa-billing" defaultChecked />
              <FieldLabel htmlFor="sa-billing">
                Use as billing address
              </FieldLabel>
            </Field>
          </FieldGroup>
          <DrawerFooter className="border-t pt-4">
            <Button type="submit">Save address</Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
