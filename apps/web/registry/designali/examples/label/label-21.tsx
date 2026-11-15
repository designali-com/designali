import { CameraIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Label } from "@workspace/ui/components/label"

export default function AvatarUploadLabel() {
  return (
    <div className="flex items-center gap-4">
      <Label htmlFor="avatar-file" className="group relative cursor-pointer">
        <Avatar size="lg" className="size-16">
          <AvatarFallback className="bg-gradient-to-br from-sky-400 to-indigo-500 text-lg text-white">
            RK
          </AvatarFallback>
        </Avatar>
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <CameraIcon className="size-5" />
        </span>
        <input
          id="avatar-file"
          type="file"
          accept="image/*"
          className="sr-only"
        />
      </Label>
      <div className="grid gap-1">
        <span className="text-sm font-medium">Rafael Kim</span>
        <span className="text-xs text-muted-foreground">
          Click the photo to change it
        </span>
      </div>
    </div>
  )
}
