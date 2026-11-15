"use client"

import * as React from "react"
import { SmilePlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const emoji = {
  smileys: [
    "😀",
    "😂",
    "🥹",
    "😍",
    "🤔",
    "😴",
    "😎",
    "🥳",
    "😅",
    "🙃",
    "😇",
    "🤩",
  ],
  gestures: [
    "👍",
    "👎",
    "👏",
    "🙌",
    "🙏",
    "💪",
    "👋",
    "🤝",
    "✌️",
    "🤞",
    "👀",
    "🫶",
  ],
  objects: [
    "🔥",
    "🎉",
    "💡",
    "✅",
    "❤️",
    "⭐",
    "🚀",
    "📌",
    "🎯",
    "☕",
    "📈",
    "🧠",
  ],
}

export default function ReactionPickerDrawer() {
  const [picked, setPicked] = React.useState<string[]>(["👍", "🎉"])

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {picked.map((item) => (
          <span key={item} className="border bg-muted px-2 py-0.5">
            {item}
          </span>
        ))}
      </div>
      <Drawer showSwipeHandle>
        <DrawerTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Add reaction"
            />
          }
        >
          <SmilePlusIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerTitle className="sr-only">Add a reaction</DrawerTitle>
            <Tabs defaultValue="smileys">
              <TabsList className="w-full">
                <TabsTrigger value="smileys">Smileys</TabsTrigger>
                <TabsTrigger value="gestures">Gestures</TabsTrigger>
                <TabsTrigger value="objects">Objects</TabsTrigger>
              </TabsList>
              {(Object.keys(emoji) as (keyof typeof emoji)[]).map((group) => (
                <TabsContent
                  key={group}
                  value={group}
                  className="grid grid-cols-6 gap-1 pt-3"
                >
                  {emoji[group].map((item) => (
                    <DrawerClose
                      key={item}
                      render={<button type="button" />}
                      onClick={() =>
                        setPicked((current) =>
                          current.includes(item) ? current : [...current, item]
                        )
                      }
                      className="flex aspect-square items-center justify-center text-xl hover:bg-muted"
                      aria-label={"React with " + item}
                    >
                      {item}
                    </DrawerClose>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
