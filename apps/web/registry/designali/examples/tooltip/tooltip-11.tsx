import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const people = [
  { name: "Noor Haddad", role: "Owner" },
  { name: "Elias Berg", role: "Editor" },
  { name: "Mina Park", role: "Editor" },
  { name: "Owen Clarke", role: "Viewer" },
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
          <TooltipContent>Ravi, Sofia and Theo</TooltipContent>
        </Tooltip>
      </AvatarGroup>
    </TooltipProvider>
  )
}
