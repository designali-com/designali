import { Separator } from "@workspace/ui/components/separator"

export default function ChatDateDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <div className="max-w-[75%] self-start bg-muted px-3 py-2">
        Sending the revised brand identity tonight.
      </div>
      <div className="flex items-center gap-3 py-1">
        <Separator className="flex-1" />
        <span className="text-[11px] text-muted-foreground">Today</span>
        <Separator className="flex-1" />
      </div>
      <div className="max-w-[75%] self-start bg-muted px-3 py-2">
        Got it, the new logo mark looks great.
      </div>
      <div className="max-w-[75%] self-end bg-primary px-3 py-2 text-primary-foreground">
        Thanks! Can we move to the Next.js build by Friday?
      </div>
    </div>
  )
}
