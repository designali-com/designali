import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"

const replies = [
  {
    name: "Elif",
    initials: "ED",
    text: "Agreed, the contrast on hover is too low.",
  },
  {
    name: "Tom",
    initials: "TB",
    text: "I'll bump it to the 600 shade and re-check.",
  },
]

export default function CommentThreadLine() {
  return (
    <div className="flex w-full max-w-sm gap-3 text-sm">
      <div className="flex flex-col items-center">
        <Avatar size="sm">
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" className="my-2" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium">Julia</span>
          <span className="text-muted-foreground">
            Should the secondary buttons in the Designali blocks darken on hover?
          </span>
        </div>
        {replies.map((reply) => (
          <div key={reply.name} className="flex gap-2">
            <Avatar size="sm">
              <AvatarFallback>{reply.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{reply.name}</span>
              <span className="text-muted-foreground">{reply.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
