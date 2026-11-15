import { ShieldIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
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

const resources = ["Projects", "Billing", "Members", "API keys"]
const actions = ["View", "Edit", "Delete"]

export default function RolePermissionsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShieldIcon data-icon="inline-start" />
        Edit role: Editor
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Editor role</SheetTitle>
          <SheetDescription>
            Applied to 12 members in this workspace.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <div className="grid grid-cols-[1fr_repeat(3,56px)] items-center border-b pb-2 text-muted-foreground">
            <span>Resource</span>
            {actions.map((a) => (
              <span key={a} className="text-center">
                {a}
              </span>
            ))}
          </div>
          {resources.map((r, ri) => (
            <div
              key={r}
              className="grid grid-cols-[1fr_repeat(3,56px)] items-center border-b py-2.5"
            >
              <span className="font-medium">{r}</span>
              {actions.map((a, ai) => (
                <span key={a} className="flex justify-center">
                  <Checkbox
                    aria-label={a + " " + r}
                    defaultChecked={ai === 0 || (ai === 1 && ri === 0)}
                    disabled={r === "Billing" && ai > 0}
                  />
                </span>
              ))}
            </div>
          ))}
          <p className="pt-3 text-muted-foreground">
            Billing changes are restricted to Owners.
          </p>
        </div>
        <SheetFooter className="flex-row">
          <SheetClose render={<Button variant="outline" className="flex-1" />}>
            Cancel
          </SheetClose>
          <SheetClose render={<Button className="flex-1" />}>
            Save role
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
