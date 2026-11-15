import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

function Mock({ dark }: { dark: boolean }) {
  return (
    <div
      className={cn(
        "flex h-24 gap-2 border p-2",
        dark ? "bg-zinc-900" : "bg-white"
      )}
    >
      <div className={cn("w-1/4", dark ? "bg-zinc-800" : "bg-zinc-100")} />
      <div className="flex flex-1 flex-col gap-1.5">
        <div
          className={cn("h-2 w-2/3", dark ? "bg-zinc-700" : "bg-zinc-200")}
        />
        <div
          className={cn("h-2 w-1/2", dark ? "bg-zinc-700" : "bg-zinc-200")}
        />
        <div className="mt-auto h-4 w-12 bg-indigo-500" />
      </div>
    </div>
  )
}

export default function ThemePreviewTabs() {
  return (
    <Tabs defaultValue="system" className="w-full max-w-xs">
      <TabsList className="w-full">
        <TabsTrigger value="light">
          <SunIcon data-icon="inline-start" />
          Light
        </TabsTrigger>
        <TabsTrigger value="dark">
          <MoonIcon data-icon="inline-start" />
          Dark
        </TabsTrigger>
        <TabsTrigger value="system">
          <MonitorIcon data-icon="inline-start" />
          System
        </TabsTrigger>
      </TabsList>
      <TabsContent value="light">
        <Mock dark={false} />
      </TabsContent>
      <TabsContent value="dark">
        <Mock dark />
      </TabsContent>
      <TabsContent value="system" className="grid grid-cols-2 gap-2">
        <Mock dark={false} />
        <Mock dark />
      </TabsContent>
    </Tabs>
  )
}
