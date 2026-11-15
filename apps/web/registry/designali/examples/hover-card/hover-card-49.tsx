import { UserXIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function EmptyProfileHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Originally created by{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="text-muted-foreground line-through hover:text-foreground"
        >
          @former-contractor
        </HoverCardTrigger>
        <HoverCardContent className="flex w-56 flex-col items-center gap-2 py-4 text-center">
          <span className="flex size-10 items-center justify-center rounded-full bg-muted">
            <UserXIcon className="size-5 text-muted-foreground" />
          </span>
          <p className="font-medium">Account deactivated</p>
          <p className="text-muted-foreground">
            This user no longer has access to the workspace.
          </p>
        </HoverCardContent>
      </HoverCard>{" "}
      in 2023.
    </p>
  )
}
