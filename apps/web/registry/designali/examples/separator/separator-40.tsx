import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

export default function AuthorBioSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <p className="text-sm text-muted-foreground">
        ...and that is why we now ship every interface change behind a quiet
        beta flag first. Thanks for reading.
      </p>
      <Separator />
      <div className="flex items-start gap-3">
        <Avatar size="lg">
          <AvatarFallback>CW</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-sm font-medium">Clara Whitfield</span>
          <span className="text-xs text-muted-foreground">
            Design engineer writing about interfaces, motion and calm software.
          </span>
        </div>
        <Button variant="outline" size="sm">
          Follow
        </Button>
      </div>
    </div>
  )
}
