import {
  Cookie as CookieIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Switch } from "@workspace/ui/components/switch"

const categories = [
  {
    id: "necessary",
    label: "Strictly necessary",
    hint: "Required for sign-in and security.",
    locked: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    hint: "Helps us understand which pages are used.",
  },
  {
    id: "marketing",
    label: "Marketing",
    hint: "Personalized offers on partner sites.",
  },
]

export default function CookieConsentSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <CookieIcon data-icon="inline-start" />
        Cookie preferences
      </SheetTrigger>
      <SheetContent side="bottom">
        <div className="mx-auto w-full max-w-2xl">
          <SheetHeader>
            <SheetTitle>Your privacy choices</SheetTitle>
            <SheetDescription>
              Choose which cookies we can use. You can change this anytime.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-3 px-4">
            {categories.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-4 border p-3"
              >
                <Label
                  htmlFor={"cookie-" + c.id}
                  className="flex flex-col items-start gap-0.5"
                >
                  {c.label}
                  <span className="font-normal text-muted-foreground">
                    {c.hint}
                  </span>
                </Label>
                <Switch
                  id={"cookie-" + c.id}
                  defaultChecked={c.locked}
                  disabled={c.locked}
                />
              </div>
            ))}
          </div>
          <SheetFooter className="sm:flex-row sm:justify-end">
            <SheetClose render={<Button variant="outline" />}>
              Save choices
            </SheetClose>
            <SheetClose render={<Button />}>Accept all</SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
