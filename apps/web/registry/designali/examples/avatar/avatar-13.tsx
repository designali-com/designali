import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

const comments = [
  {
    author: "Hana Sato",
    initials: "HS",
    time: "2h ago",
    body: "Can we move the pricing table above the FAQ? It answers most of the questions.",
  },
  {
    author: "Leo Martins",
    initials: "LM",
    time: "1h ago",
    body: "Agreed. I'll also shorten the intro paragraph so it fits above the fold.",
  },
  {
    author: "Hana Sato",
    initials: "HS",
    time: "12m ago",
    body: "Perfect, marking this as resolved once the draft is updated.",
  },
]

export default function CommentThreadAvatars() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {comments.map((comment, index) => (
        <div key={index} className="flex gap-3">
          <Avatar size="sm" className="mt-0.5">
            <AvatarFallback>{comment.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium">{comment.author}</span>
              <span className="text-xs text-muted-foreground">
                {comment.time}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
