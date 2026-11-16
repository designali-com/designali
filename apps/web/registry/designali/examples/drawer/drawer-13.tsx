import {
  CreditCard as CreditCardIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function NestedStackedDrawers() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Checkout</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Payment</DrawerTitle>
            <DrawerDescription>Total due today: $129.00</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            <RadioGroup defaultValue="visa">
              <FieldLabel htmlFor="pay-visa">
                <Field orientation="horizontal">
                  <CreditCardIcon className="size-4" />
                  <FieldContent>
                    <FieldTitle>Visa •••• 4417</FieldTitle>
                    <FieldDescription>Expires 08/28</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="visa" id="pay-visa" />
                </Field>
              </FieldLabel>
            </RadioGroup>
            <Drawer>
              <DrawerTrigger render={<Button variant="outline" />}>
                <PlusIcon data-icon="inline-start" />
                Add new card
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto flex w-full max-w-sm flex-col">
                  <DrawerHeader>
                    <DrawerTitle>New card</DrawerTitle>
                    <DrawerDescription>
                      Swipe down to go back to payment.
                    </DrawerDescription>
                  </DrawerHeader>
                  <FieldGroup className="p-4">
                    <Field>
                      <FieldLabel htmlFor="nc-number">Card number</FieldLabel>
                      <Input
                        id="nc-number"
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field>
                        <FieldLabel htmlFor="nc-exp">Expiry</FieldLabel>
                        <Input id="nc-exp" placeholder="MM/YY" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="nc-cvc">CVC</FieldLabel>
                        <Input id="nc-cvc" placeholder="123" />
                      </Field>
                    </div>
                  </FieldGroup>
                  <DrawerFooter>
                    <DrawerClose render={<Button />}>Save card</DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Pay $129.00</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
