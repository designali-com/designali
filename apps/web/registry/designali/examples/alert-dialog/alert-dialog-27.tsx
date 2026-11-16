import {
  CircleArrowDown as ArrowDownCircleIcon,
  X as XIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const losing = [
  "All 460+ Designali blocks",
  "240+ landing pages",
  "Premium templates and Figma files",
  "Priority support",
]

export default function PlanDowngradeFeatureLoss() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Downgrade to Starter
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <ArrowDownCircleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Downgrade to Starter?</AlertDialogTitle>
          <AlertDialogDescription>
            Your Designali Business plan ends on your next billing date, July 1.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 border bg-muted/40 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium">You&apos;ll lose access to</span>
            <Badge variant="destructive">{losing.length} features</Badge>
          </div>
          <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            {losing.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <XIcon className="size-3.5 text-destructive" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Business</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Downgrade</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
