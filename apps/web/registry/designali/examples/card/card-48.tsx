import {
  KeyRoundIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const methods = [
  {
    icon: SmartphoneIcon,
    name: "Authenticator app",
    detail: "Added Sep 3",
    enabled: true,
  },
  {
    icon: KeyRoundIcon,
    name: "Security key",
    detail: "Use a hardware key like a USB token",
    enabled: false,
  },
  {
    icon: MessageSquareIcon,
    name: "SMS backup",
    detail: "+44 •••• ••• 482",
    enabled: true,
  },
]

export default function TwoFactorSecurityCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4 text-emerald-500" />
          Two-factor authentication
        </CardTitle>
        <CardDescription>
          Your account is protected with 2 methods.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        {methods.map((m) => (
          <div key={m.name} className="flex items-center gap-3 border p-3">
            <m.icon className="size-4 shrink-0 text-muted-foreground" />
            <div className="grid min-w-0 flex-1">
              <span className="font-medium">{m.name}</span>
              <span className="truncate text-muted-foreground">{m.detail}</span>
            </div>
            {m.enabled ? (
              <Badge variant="secondary">On</Badge>
            ) : (
              <Button size="xs" variant="outline">
                Set up
              </Button>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm" className="px-0">
          View recovery codes
        </Button>
      </CardFooter>
    </Card>
  )
}
