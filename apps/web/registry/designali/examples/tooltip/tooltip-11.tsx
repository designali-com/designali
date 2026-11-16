import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const people = [
  { name: "Ali Imam", role: "Owner", src: "/ali.jpg" },
  { name: "Studio Designer", role: "Editor" },
  { name: "Studio Developer", role: "Editor" },
  { name: "Designali Client", role: "Viewer" },
]

export default function AvatarStackTooltips() {
  return (
    <TooltipProvider>
      <AvatarGroup>
        {people.map((p) => (
          <Tooltip key={p.name}>
            <TooltipTrigger
              render={
                <Avatar className="ring-2 ring-background">
                  {"src" in p && p.src ? (
                    <AvatarImage src={p.src} alt={p.name} />
                  ) : null}
                  <AvatarFallback>
                    {p.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              }
            />
            <TooltipContent>
              {p.name} · {p.role}
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger render={<AvatarGroupCount />}>+3</TooltipTrigger>
          <TooltipContent>3 more Designali clients</TooltipContent>
        </Tooltip>
      </AvatarGroup>
    </TooltipProvider>
  )
}
