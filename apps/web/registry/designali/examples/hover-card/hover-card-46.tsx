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
          Designali autosave is on.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>
          Default
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">Version history</p>
          <p className="text-muted-foreground">
            We keep 30 days of versions for every file in your Designali workspace.
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
              Only visible to the Designali studio until published.
            </p>
          </div>
          <div>
            <p className="font-medium">Published</p>
            <p className="text-muted-foreground">
              Live on designali.com for everyone.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
