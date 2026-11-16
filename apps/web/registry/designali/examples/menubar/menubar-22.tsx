import {
  Bot as BotIcon,
  CircleAlert as CircleAlertIcon,
  Clock as ClockIcon,
  Inbox as InboxIcon,
  Timer as TimerIcon,
  User as UserIcon,
  Workflow as WorkflowIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function MenubarWithCountBadges() {
  return (
    <div className="w-full max-w-sm">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            Tickets
            <Badge className="ms-1.5 h-4 px-1 text-[10px]">24</Badge>
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                <InboxIcon /> Unassigned
                <Badge variant="secondary" className="ms-auto">
                  12
                </Badge>
              </MenubarItem>
              <MenubarItem>
                <UserIcon /> Assigned to me
                <Badge variant="secondary" className="ms-auto">
                  7
                </Badge>
              </MenubarItem>
              <MenubarItem>
                <ClockIcon /> Awaiting reply
                <Badge variant="secondary" className="ms-auto">
                  5
                </Badge>
              </MenubarItem>
              <MenubarItem>
                <CircleAlertIcon /> SLA breached
                <Badge variant="destructive" className="ms-auto">
                  2
                </Badge>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Automation</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                <WorkflowIcon /> Triggers
              </MenubarItem>
              <MenubarItem>
                <BotIcon /> Auto-replies
                <Badge variant="outline" className="ms-auto">
                  New
                </Badge>
              </MenubarItem>
              <MenubarItem>
                <TimerIcon /> SLA policies
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
