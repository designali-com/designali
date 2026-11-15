import { CameraIcon, UploadIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function ProfilePhotoSettings() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-4 border p-4">
      <div className="relative">
        <Avatar className="size-16">
          <AvatarFallback className="text-lg font-medium">LM</AvatarFallback>
        </Avatar>
        <Button
          size="icon-xs"
          variant="outline"
          className="absolute -end-1 -bottom-1 rounded-full"
          aria-label="Change photo"
        >
          <CameraIcon />
        </Button>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">Profile photo</p>
        <p className="text-xs text-muted-foreground">
          PNG or JPG, at least 256 x 256 px.
        </p>
        <div className="mt-2 flex gap-2">
          <Button size="sm">
            <UploadIcon data-icon="inline-start" />
            Upload
          </Button>
          <Button size="sm" variant="ghost">
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
