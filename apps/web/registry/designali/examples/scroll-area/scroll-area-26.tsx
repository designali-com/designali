import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const comments = [
  {
    name: "Hana Sato",
    text: "Can we tighten the hero copy? It feels long on mobile.",
    reply: false,
  },
  {
    name: "Victor Lund",
    text: "Agreed, I'll cut the second sentence.",
    reply: true,
  },
  {
    name: "Nadia Alvarez",
    text: "Also the CTA contrast fails AA in dark mode.",
    reply: false,
  },
  {
    name: "Hana Sato",
    text: "Good catch. Let's use the primary token there.",
    reply: true,
  },
  {
    name: "Mateo Cruz",
    text: "Pushed both fixes to the preview branch.",
    reply: false,
  },
  { name: "Nadia Alvarez", text: "Looks great now, approving.", reply: true },
]

export default function CommentThreadPanel() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-3 py-2 text-sm font-medium">
        Comments ({comments.length})
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-3 p-3">
          {comments.map((c, i) => (
            <div key={i} className={cn("flex gap-2", c.reply && "ml-8")}>
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">
                  {c.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-xs">
                <span className="font-medium">{c.name}</span>
                <p className="text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2 border-t p-2">
        <Input placeholder="Add a comment" aria-label="Add a comment" />
        <Button>Post</Button>
      </div>
    </div>
  )
}
