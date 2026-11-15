import { CircleCheckIcon } from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"

const posts = [
  { title: "Sprint 14 retro notes", meta: "Posted by Ana - 2h" },
  { title: "New brand colors are live", meta: "Posted by Ravi - 5h" },
]

export default function FeedEndDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {posts.map((post) => (
        <div key={post.title} className="flex flex-col border p-3">
          <span className="text-sm font-medium">{post.title}</span>
          <span className="text-xs text-muted-foreground">{post.meta}</span>
        </div>
      ))}
      <div className="flex items-center gap-3 py-2">
        <Separator className="flex-1" />
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CircleCheckIcon className="size-3.5" />
          You&apos;re all caught up
        </span>
        <Separator className="flex-1" />
      </div>
    </div>
  )
}
