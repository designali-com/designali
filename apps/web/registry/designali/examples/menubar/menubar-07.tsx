"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  Repeat1 as Repeat1Icon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function MusicPlayerMenubar() {
  const [playing, setPlaying] = React.useState(false)
  const [shuffle, setShuffle] = React.useState(true)
  const [repeat, setRepeat] = React.useState("off")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Controls</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem onClick={() => setPlaying((p) => !p)}>
                {playing ? <PauseIcon /> : <PlayIcon />}
                {playing ? "Pause" : "Play"}
                <MenubarShortcut>Space</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipForwardIcon /> Next track{" "}
                <MenubarShortcut>⌘→</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipBackIcon /> Previous track{" "}
                <MenubarShortcut>⌘←</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={shuffle}
                onCheckedChange={setShuffle}
              >
                Shuffle
              </MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Repeat</MenubarLabel>
              <MenubarRadioGroup value={repeat} onValueChange={setRepeat}>
                <MenubarRadioItem value="off">Off</MenubarRadioItem>
                <MenubarRadioItem value="all">All</MenubarRadioItem>
                <MenubarRadioItem value="one">One</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Library</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Add to playlist</MenubarItem>
              <MenubarItem>Show album</MenubarItem>
              <MenubarItem>Love track</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-3 border p-3">
        <div className="size-10 shrink-0 bg-gradient-to-br from-fuchsia-500 to-sky-500" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Design se code tak</p>
          <p className="truncate text-xs text-muted-foreground">
            Designali
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          {playing ? (
            <Volume2Icon className="size-4" />
          ) : (
            <VolumeXIcon className="size-4" />
          )}
          {shuffle && <ShuffleIcon className="size-4" />}
          {repeat !== "off" &&
            (repeat === "one" ? (
              <Repeat1Icon className="size-4" />
            ) : (
              <RepeatIcon className="size-4" />
            ))}
        </div>
      </div>
    </div>
  )
}
