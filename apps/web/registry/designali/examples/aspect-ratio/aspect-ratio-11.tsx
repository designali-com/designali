import { SendIcon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

export default function StoryCardPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-44 overflow-hidden bg-linear-to-b from-orange-400 via-rose-500 to-purple-700"
    >
      <div className="absolute inset-x-2 top-2 flex gap-1">
        {[100, 60, 0].map((value, index) => (
          <div key={index} className="h-0.5 flex-1 bg-white/40">
            <div className="h-full bg-white" style={{ width: value + "%" }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-2 top-5 flex items-center gap-2 text-white">
        <Avatar size="sm">
          <AvatarFallback>LP</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">lena.paints</span>
        <span className="text-[10px] text-white/70">2h</span>
      </div>
      <p className="absolute inset-x-3 top-1/2 -translate-y-1/2 text-center text-lg font-semibold text-white">
        Studio open day this Saturday
      </p>
      <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 border border-white/50 px-2 py-1.5 text-[10px] text-white/80">
        Send message
        <SendIcon className="ms-auto size-3" />
      </div>
    </AspectRatio>
  )
}
