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
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function KeyboardShortcutHints() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Close tab
        <KbdGroup className="ms-1">
          <Kbd>Ctrl</Kbd>
          <Kbd>W</Kbd>
        </KbdGroup>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Close with unsaved changes?</AlertDialogTitle>
          <AlertDialogDescription>
            &quot;onboarding-copy.md&quot; has edits that haven&apos;t been
            saved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel <Kbd className="ms-1">Esc</Kbd>
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive" autoFocus>
            Close anyway <Kbd className="ms-1">Enter</Kbd>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
