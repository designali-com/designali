"use client"

import * as React from "react"
import { ArchiveIcon, Undo2Icon } from "lucide-react"

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

export default function ArchiveWithUndo() {
  const [archived, setArchived] = React.useState(false)

  if (archived) {
    return (
      <div className="flex w-full max-w-sm items-center justify-between gap-3 border bg-muted/40 px-3 py-2 text-sm">
        <span className="flex items-center gap-2">
          <ArchiveIcon className="size-4 text-muted-foreground" />
          &quot;Website refresh&quot; archived
        </span>
        <Button variant="link" size="sm" onClick={() => setArchived(false)}>
          <Undo2Icon data-icon="inline-start" />
          Undo
        </Button>
      </div>
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <ArchiveIcon data-icon="inline-start" />
        Archive project
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Archive &quot;Website refresh&quot;?
          </AlertDialogTitle>
          <AlertDialogDescription>
            It will be hidden from the sidebar for all members.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setArchived(true)}>
            Archive
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
