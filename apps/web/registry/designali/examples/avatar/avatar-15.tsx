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
  { name: "Iris Novak", initials: "IN" },
  { name: "Kofi Mensah", initials: "KM" },
  { name: "Sofia Reyes", initials: "SR" },
  { name: "Arjun Patel", initials: "AP" },
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
