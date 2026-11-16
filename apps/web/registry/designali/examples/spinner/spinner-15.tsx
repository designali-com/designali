import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AssistantThinkingMessage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="ml-auto max-w-[80%] bg-primary px-3 py-2 text-sm text-primary-foreground">
        Can you summarize last week&apos;s designali.com support tickets?
      </div>
      <div className="flex items-start gap-2">
        <Avatar className="size-7">
          <AvatarFallback className="text-[10px]">AI</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
          <Spinner className="size-3.5" />
          Reading 214 tickets...
        </div>
      </div>
    </div>
  )
}
