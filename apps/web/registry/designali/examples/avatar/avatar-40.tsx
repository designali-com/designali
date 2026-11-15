import { MessageCircleIcon } from "lucide-react"

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
            <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              LN
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300">
              PK
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              DY
            </AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <CardTitle>Questions? Chat with us</CardTitle>
        <CardDescription>
          Lina, Pedro, and Dana typically reply in under 5 minutes.
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
