import {
  Ban as BanIcon,
  Key as KeyIcon,
  Mail as MailIcon,
  User as UserIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const stats = [
  { label: "Projects", value: "14" },
  { label: "Seats", value: "6" },
  { label: "MRR", value: "$420" },
]

export default function AdminUserProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        View user
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center gap-2 border-b p-6 text-center">
          <Avatar size="lg">
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          <SheetTitle>Tomas</SheetTitle>
          <SheetDescription>
            tomas@example.com · joined Jan 2024
          </SheetDescription>
          <div className="flex gap-1">
            <Badge>Pro plan</Badge>
            <Badge variant="outline">2FA enabled</Badge>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x border-b">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-3">
              <span className="text-base font-semibold">{s.value}</span>
              <span className="text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 p-4">
          <Button variant="ghost" className="justify-start">
            <MailIcon data-icon="inline-start" />
            Send email
          </Button>
          <Button variant="ghost" className="justify-start">
            <KeyIcon data-icon="inline-start" />
            Reset password
          </Button>
          <Button variant="ghost" className="justify-start">
            <UserIcon data-icon="inline-start" />
            Impersonate
          </Button>
        </div>
        <SheetFooter>
          <Button variant="destructive">
            <BanIcon data-icon="inline-start" />
            Suspend account
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
