import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AvatarUploadSpinner() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="size-16">
          <AvatarFallback className="text-lg">RN</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/60">
          <Spinner className="size-6" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Rosa Navarro</span>
        <span className="text-xs text-muted-foreground">
          Uploading new photo...
        </span>
      </div>
    </div>
  )
}
