import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function WidthVariantsHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>
          Compact
        </HoverCardTrigger>
        <HoverCardContent className="w-40 p-2">
          Autosave is on.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>
          Default
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">Version history</p>
          <p className="text-muted-foreground">
            We keep 30 days of versions for every file in this workspace.
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>
          Wide
        </HoverCardTrigger>
        <HoverCardContent className="grid w-80 grid-cols-2 gap-3 p-3">
          <div>
            <p className="font-medium">Drafts</p>
            <p className="text-muted-foreground">
              Only visible to you until published.
            </p>
          </div>
          <div>
            <p className="font-medium">Published</p>
            <p className="text-muted-foreground">
              Visible to everyone with the link.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
