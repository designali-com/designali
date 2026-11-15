import { ServerOffIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"

const impact = [
  { label: "Deployments", value: "126" },
  { label: "Domains", value: "3" },
  { label: "Env variables", value: "42" },
  { label: "Cron jobs", value: "5" },
]

export default function EnvironmentImpactSummary() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <ServerOffIcon data-icon="inline-start" />
        Delete staging
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete the staging environment?</AlertDialogTitle>
          <AlertDialogDescription>
            The following resources will be destroyed and cannot be restored.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-2 gap-px border bg-border">
          {impact.map((item) => (
            <div key={item.label} className="bg-popover p-3">
              <p className="text-lg font-semibold tabular-nums">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Delete environment
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
