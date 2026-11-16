import {
  UserMinus as UserMinusIcon,
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
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function RemoveTeamMemberAvatar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>SK</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Sara Khan</p>
        <p className="truncate text-xs text-muted-foreground">
          sara@designali.com
        </p>
      </div>
      <Badge variant="secondary">Editor</Badge>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Remove Sara Khan"
            />
          }
        >
          <UserMinusIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-transparent">
              <Avatar size="lg">
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </AlertDialogMedia>
            <AlertDialogTitle>Remove Sara from the Designali studio?</AlertDialogTitle>
            <AlertDialogDescription>
              Sara will lose access immediately. Files she owns will be
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
