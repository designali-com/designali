"use client"

import {
  CreditCard as CreditCardIcon,
  Lock as LockIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
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
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function AddPaymentMethodDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <PlusIcon data-icon="inline-start" />
        Add payment method
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add card</DialogTitle>
          <DialogDescription>
            Your card will be charged on the 1st of each month.
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field>
            <FieldLabel htmlFor="card-name">Name on card</FieldLabel>
            <Input id="card-name" placeholder="Ali Imam" />
          </Field>
          <Field>
            <FieldLabel htmlFor="card-number">Card number</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <CreditCardIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="card-number"
                inputMode="numeric"
                placeholder="4242 4242 4242 4242"
              />
            </InputGroup>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="card-expiry">Expiry</FieldLabel>
              <Input id="card-expiry" placeholder="MM / YY" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
              <Input id="card-cvc" placeholder="123" inputMode="numeric" />
            </Field>
          </div>
          <Field orientation="horizontal">
            <Checkbox id="card-default" defaultChecked />
            <FieldLabel htmlFor="card-default">
              Set as default payment method
            </FieldLabel>
          </Field>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">
              <LockIcon data-icon="inline-start" />
              Save card
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
