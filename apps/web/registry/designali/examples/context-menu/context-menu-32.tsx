"use client"

import * as React from "react"
import {
  GaugeIcon,
  LinkIcon,
  PictureInPicture2Icon,
  PlayCircleIcon,
  RepeatIcon,
  SlidersHorizontalIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function VideoPlayerMenu() {
  const [loop, setLoop] = React.useState(false)
  const [speed, setSpeed] = React.useState("1")
  const [quality, setQuality] = React.useState("1080p")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="relative flex aspect-video w-full max-w-md items-center justify-center bg-linear-to-br from-slate-800 to-slate-950 text-white">
        <PlayCircleIcon className="size-12 opacity-80" />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-black/40 px-3 py-1.5 text-[11px]">
          <span>1:24 / 6:10</span>
          <div className="h-1 flex-1 bg-white/30">
            <div className="h-full w-1/4 bg-white" />
          </div>
          <span>
            {speed}× · {quality}
          </span>
          {loop ? <RepeatIcon className="size-3" /> : null}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked={loop} onCheckedChange={setLoop}>
            Loop
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <GaugeIcon />
            Playback speed
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-32">
            <ContextMenuRadioGroup value={speed} onValueChange={setSpeed}>
              {["0.5", "1", "1.25", "1.5", "2"].map((s) => (
                <ContextMenuRadioItem key={s} value={s}>
                  {s === "1" ? "Normal" : s + "×"}
                </ContextMenuRadioItem>
              ))}
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <SlidersHorizontalIcon />
            Quality
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-32">
            <ContextMenuRadioGroup value={quality} onValueChange={setQuality}>
              {["2160p", "1080p", "720p", "Auto"].map((q) => (
                <ContextMenuRadioItem key={q} value={q}>
                  {q}
                </ContextMenuRadioItem>
              ))}
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <LinkIcon />
            Copy video URL at 1:24
          </ContextMenuItem>
          <ContextMenuItem>
            <PictureInPicture2Icon />
            Picture in picture
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
