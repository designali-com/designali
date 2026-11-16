import {
  Image as ImageIcon,
  Music as MusicIcon,
  Video as VideoIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

export default function IconLabelTabs() {
  return (
    <Tabs defaultValue="photos" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="photos">
          <ImageIcon data-icon="inline-start" />
          Photos
        </TabsTrigger>
        <TabsTrigger value="videos">
          <VideoIcon data-icon="inline-start" />
          Videos
        </TabsTrigger>
        <TabsTrigger value="audio">
          <MusicIcon data-icon="inline-start" />
          Audio
        </TabsTrigger>
      </TabsList>
      <TabsContent value="photos" className="grid grid-cols-3 gap-2">
        {[
          "from-sky-400 to-indigo-500",
          "from-amber-300 to-rose-500",
          "from-emerald-300 to-teal-600",
        ].map((g) => (
          <div key={g} className={cn("aspect-square bg-gradient-to-br", g)} />
        ))}
      </TabsContent>
      <TabsContent value="videos" className="text-muted-foreground">
        14 Designali motion clips, 2.3 GB total.
      </TabsContent>
      <TabsContent value="audio" className="text-muted-foreground">
        No audio uploaded yet.
      </TabsContent>
    </Tabs>
  )
}
