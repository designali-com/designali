import {
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function SupportAgentWidget() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <AvatarGroup className="mb-2">
          <Avatar size="lg">
            <AvatarFallback className="bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1">
              AI
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1">
              SA
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1">
              OM
            </AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <CardTitle>Questions? Chat with Designali</CardTitle>
        <CardDescription>
          Ali, Sara, and Omar typically reply in under 5 minutes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">
          <MessageCircleIcon data-icon="inline-start" />
          Start a conversation
        </Button>
      </CardContent>
    </Card>
  )
}
