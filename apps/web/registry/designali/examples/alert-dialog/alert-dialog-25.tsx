import { UserMinusIcon } from "lucide-react"

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
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function RemoveTeamMemberAvatar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>DK</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Daniel Kovacs</p>
        <p className="truncate text-xs text-muted-foreground">
          daniel@lumenlabs.io
        </p>
      </div>
      <Badge variant="secondary">Editor</Badge>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Remove Daniel Kovacs"
            />
          }
        >
          <UserMinusIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-transparent">
              <Avatar size="lg">
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
            </AlertDialogMedia>
            <AlertDialogTitle>Remove Daniel from Lumen Labs?</AlertDialogTitle>
            <AlertDialogDescription>
              Daniel will lose access immediately. Files he owns will be
              transferred to you.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Remove member
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
