import {
  Bookmark as BookmarkIcon,
  Heart as HeartIcon,
  MessageCircle as MessageCircleIcon,
  Ellipsis as MoreHorizontalIcon,
  Repeat as RepeatIcon,
} from "@designali/icons"

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SocialPostSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-9 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-2.5 w-16" />
        </div>
        <MoreHorizontalIcon className="size-4 text-muted-foreground/40" />
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="flex gap-6 text-muted-foreground/40">
        <HeartIcon className="size-4" />
        <MessageCircleIcon className="size-4" />
        <RepeatIcon className="size-4" />
        <BookmarkIcon className="ms-auto size-4" />
      </div>
    </div>
  )
}
