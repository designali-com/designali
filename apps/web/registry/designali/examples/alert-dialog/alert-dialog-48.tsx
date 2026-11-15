import { GlobeLockIcon, MapPinIcon } from "lucide-react"

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
import { Button } from "@workspace/ui/components/button"

export default function DescriptionWithLearnMoreLink() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Move data to EU region
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <GlobeLockIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Migrate workspace to Frankfurt?</AlertDialogTitle>
          <AlertDialogDescription>
            Migration runs overnight and the workspace is read-only for up to 2
            hours. <a href="#">Learn how data residency works</a>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Not now</AlertDialogCancel>
          <AlertDialogAction>Schedule migration</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
