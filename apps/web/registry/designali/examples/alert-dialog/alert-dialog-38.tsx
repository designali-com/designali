import { CircleAlertIcon, CircleCheckIcon, RocketIcon } from "lucide-react"

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
import { cn } from "@workspace/ui/lib/utils"

const checks = [
  { label: "All 248 tests passed", ok: true },
  { label: "Changelog updated", ok: true },
  { label: "2 open issues tagged for this release", ok: false },
]

export default function PublishReleaseChecklist() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        <RocketIcon data-icon="inline-start" />
        Publish v2.4.0
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish v2.4.0 to npm?</AlertDialogTitle>
          <AlertDialogDescription>
            Published versions can be deprecated but never overwritten.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ul className="flex flex-col gap-2 text-sm">
          {checks.map((check) => (
            <li key={check.label} className="flex items-center gap-2">
              {check.ok ? (
                <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <CircleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />
              )}
              <span className={cn(!check.ok && "text-muted-foreground")}>
                {check.label}
              </span>
            </li>
          ))}
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel>Not yet</AlertDialogCancel>
          <AlertDialogAction>Publish release</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
