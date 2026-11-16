import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function ProfilePageTabs() {
  return (
    <div className="w-full max-w-sm border">
      <div className="h-16 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      <div className="-mt-6 flex items-end gap-3 px-4">
        <Avatar size="lg" className="ring-4 ring-background">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="pb-1">
          <p className="text-sm font-medium">Ali Imam</p>
          <p className="text-xs text-muted-foreground">
            @designali_com · 2,481 followers
          </p>
        </div>
      </div>
      <Tabs defaultValue="posts" className="mt-3">
        <TabsList variant="line" className="w-full border-b px-2">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="px-4 pb-4">
          Shipped 40 new Designali blocks today. Design se code tak.
        </TabsContent>
        <TabsContent
          value="replies"
          className="px-4 pb-4 text-muted-foreground"
        >
          Ali hasn&apos;t replied to anyone yet.
        </TabsContent>
        <TabsContent value="likes" className="px-4 pb-4 text-muted-foreground">
          Likes are private.
        </TabsContent>
      </Tabs>
    </div>
  )
}
