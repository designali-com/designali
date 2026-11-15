import { HashIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const dms = [
  { name: "Priya Anand", last: "Sounds good, ship it!", online: true },
  { name: "Tomas Berg", last: "Can we sync at 3?", online: false },
  { name: "Lea Fournier", last: "Uploaded the new mocks", online: true },
]

export default function ChatSidebarTabs() {
  return (
    <Tabs defaultValue="direct" className="w-full max-w-xs border p-2">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="direct">Direct</TabsTrigger>
        <TabsTrigger value="channels">Channels</TabsTrigger>
        <TabsTrigger value="mentions">Mentions</TabsTrigger>
      </TabsList>
      <TabsContent value="direct" className="flex flex-col">
        {dms.map((dm) => (
          <button
            key={dm.name}
            type="button"
            className="flex items-center gap-2 px-1 py-2 text-start hover:bg-muted"
          >
            <Avatar size="sm">
              <AvatarFallback>
                {dm.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
              {dm.online && <AvatarBadge className="bg-emerald-500" />}
            </Avatar>
            <div className="min-w-0">
              <p className="font-medium">{dm.name}</p>
              <p className="truncate text-muted-foreground">{dm.last}</p>
            </div>
          </button>
        ))}
      </TabsContent>
      <TabsContent value="channels" className="flex flex-col gap-1 px-1 py-1">
        {["general", "design", "releases"].map((c) => (
          <span key={c} className="flex items-center gap-1.5">
            <HashIcon className="size-3.5 text-muted-foreground" />
            {c}
          </span>
        ))}
      </TabsContent>
      <TabsContent value="mentions" className="px-1 py-2 text-muted-foreground">
        No new mentions.
      </TabsContent>
    </Tabs>
  )
}
