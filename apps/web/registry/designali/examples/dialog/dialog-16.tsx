import { CookieIcon } from "lucide-react"

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
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

const categories = [
  {
    id: "necessary",
    title: "Strictly necessary",
    description: "Required for sign-in and security.",
    locked: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Helps us understand how pages are used.",
    locked: false,
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Personalizes offers on other sites.",
    locked: false,
  },
]

export default function CookiePreferencesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="link" />}>
        <CookieIcon data-icon="inline-start" />
        Cookie settings
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie preferences</DialogTitle>
          <DialogDescription>
            Choose which cookies Fernway can store on this device.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup className="gap-3">
          {categories.map((category) => (
            <Field
              key={category.id}
              orientation="horizontal"
              className="border p-3"
            >
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + category.id}>
                  {category.title}
                </FieldLabel>
                <FieldDescription>{category.description}</FieldDescription>
              </FieldContent>
              <Switch
                id={"cookie-" + category.id}
                defaultChecked={category.locked}
                disabled={category.locked}
              />
            </Field>
          ))}
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Save preferences
          </DialogClose>
          <DialogClose render={<Button />}>Accept all</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
