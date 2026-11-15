import { HeartIcon, MessageSquareIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const comments = [
  {
    name: "Ines Laurent",
    time: "2h",
    text: "The color grading in the last shot is unreal.",
    likes: 48,
  },
  {
    name: "Kwame Asante",
    time: "1h",
    text: "What lens did you use for the street scenes?",
    likes: 12,
  },
  {
    name: "Hana Kobayashi",
    time: "54m",
    text: "Saving this for my Lisbon trip next month!",
    likes: 9,
  },
  {
    name: "Mateo Silva",
    time: "20m",
    text: "The tram at 0:42 is perfectly timed.",
    likes: 5,
  },
  {
    name: "Zoe Fischer",
    time: "4m",
    text: "Need a part two of this series.",
    likes: 2,
  },
]

export default function CommentsBottomSheet() {
  return (
    <Drawer snapPoints={[0.5, 1]} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        128 comments
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Comments</DrawerTitle>
          <DrawerDescription className="sr-only">
            Comments on Lisbon in motion
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 overflow-y-auto p-4">
          {comments.map((comment) => (
            <div key={comment.name} className="flex gap-3">
              <Avatar size="sm">
                <AvatarFallback>
                  {comment.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p>
                  <span className="font-medium">{comment.name}</span>{" "}
                  <span className="text-muted-foreground">{comment.time}</span>
                </p>
                <p>{comment.text}</p>
              </div>
              <button
                type="button"
                className="flex flex-col items-center text-muted-foreground"
                aria-label="Like"
              >
                <HeartIcon className="size-3.5" />
                {comment.likes}
              </button>
            </div>
          ))}
        </div>
        <DrawerFooter className="mx-auto w-full max-w-md border-t pt-4">
          <InputGroup>
            <InputGroupInput placeholder="Add a comment..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Post</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
