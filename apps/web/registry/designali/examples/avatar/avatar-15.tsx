import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const collaborators = [
  { name: "Ali Imam", initials: "AI" },
  { name: "Sara · Designer", initials: "SA" },
  { name: "Omar · Developer", initials: "OM" },
  { name: "Zara · Motion", initials: "ZA" },
]

export default function AvatarGroupWithTooltips() {
  return (
    <TooltipProvider>
      <AvatarGroup>
        {collaborators.map((person) => (
          <Tooltip key={person.name}>
            <TooltipTrigger
              render={
                <Avatar className="ring-2 ring-background">
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              }
            />
            <TooltipContent>{person.name}</TooltipContent>
          </Tooltip>
        ))}
      </AvatarGroup>
    </TooltipProvider>
  )
}
