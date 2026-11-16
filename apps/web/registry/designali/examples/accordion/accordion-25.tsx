import {
  ChevronDown as ChevronDownIcon,
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

const teams = [
  {
    value: "design",
    name: "Design",
    members: [
      { name: "Ali Imam", role: "Founder & design engineer" },
      { name: "Sara Khan", role: "UI/UX designer" },
      { name: "Omar Rahman", role: "Brand designer" },
    ],
  },
  {
    value: "engineering",
    name: "Development",
    members: [
      { name: "Zaid Ahmed", role: "Next.js developer" },
      { name: "Nina Das", role: "Creative developer" },
    ],
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AccordionTeamDirectory() {
  return (
    <Accordion
      defaultValue={["design"]}
      className="w-full max-w-sm border px-3"
    >
      {teams.map((team) => (
        <AccordionItem key={team.value} value={team.value}>
          <AccordionTrigger className="items-center">
            <span className="text-sm">{team.name}</span>
            <AvatarGroup className="ms-auto me-2">
              {team.members.map((member) => (
                <Avatar key={member.name} size="sm">
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-2.5">
            {team.members.map((member) => (
              <div key={member.name} className="flex items-center gap-2.5">
                <Avatar>
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                <Button
                  size="icon-xs"
                  variant="ghost"
                  aria-label={"Message " + member.name}
                >
                  <MessageCircleIcon />
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
