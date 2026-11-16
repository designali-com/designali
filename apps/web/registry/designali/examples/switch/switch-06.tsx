import {
  Lock as LockIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const features = [
  { id: "sso", label: "Single sign-on (SAML)", locked: true },
  { id: "audit", label: "Audit log export", locked: true },
  { id: "guests", label: "Guest access", locked: false },
]

export default function PlanLockedSwitches() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>
          Some controls require the Designali Pro plan.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center justify-between gap-4"
          >
            <Label
              htmlFor={feature.id}
              className={cn(feature.locked && "text-muted-foreground")}
            >
              {feature.locked && <LockIcon className="size-3.5" />}
              {feature.label}
            </Label>
            <Switch
              id={feature.id}
              disabled={feature.locked}
              defaultChecked={!feature.locked}
            />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          <SparklesIcon data-icon="inline-start" />
          Upgrade to Pro
        </Button>
      </CardFooter>
    </Card>
  )
}
