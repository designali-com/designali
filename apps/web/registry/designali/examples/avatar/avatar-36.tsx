import {
  FileText as FileTextIcon,
  Share2 as Share2Icon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const viewers = [
  { initials: "AI", ring: "ring-primary", name: "Ali" },
  { initials: "SA", ring: "ring-primary", name: "Sara" },
  { initials: "OM", ring: "ring-primary", name: "Omar" },
]

export default function LiveCollaboratorsBar() {
  return (
    <div className="flex w-full max-w-md items-center justify-between border px-3 py-2">
      <div className="flex items-center gap-2 text-sm">
        <FileTextIcon className="size-4 text-muted-foreground" />
        <span className="font-medium">Designali Launch Plan</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-1.5">
          {viewers.map((viewer) => (
            <Avatar
              key={viewer.initials}
              size="sm"
              title={viewer.name + " is viewing"}
              className={cn("ring-2", viewer.ring)}
            >
              <AvatarFallback>{viewer.initials}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button size="sm">
          <Share2Icon data-icon="inline-start" />
          Share
        </Button>
      </div>
    </div>
  )
}
