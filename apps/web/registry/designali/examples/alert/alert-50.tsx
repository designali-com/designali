import { LogOutIcon, UserRoundCogIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertImpersonationBanner() {
  return (
    <div className="w-full max-w-md border">
      <Alert variant="warning" className="border-x-0 border-t-0">
        <UserRoundCogIcon />
        <AlertTitle>Viewing as Sofia Marquez</AlertTitle>
        <AlertDescription>
          Actions you take are logged and attributed to you.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            <LogOutIcon data-icon="inline-start" />
            Exit
          </Button>
        </AlertAction>
      </Alert>
      <div className="space-y-2 p-3">
        <div className="h-3 w-1/3 bg-muted" />
        <div className="h-16 bg-muted/60" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 bg-muted/60" />
          <div className="h-10 bg-muted/60" />
        </div>
      </div>
    </div>
  )
}
