import {
  Kanban as KanbanIcon,
  LayoutGrid as LayoutGridIcon,
  List as ListIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const projects = ["Templates", "Blocks", "Icons", "Logos"]

export default function IconOnlyViewSwitcher() {
  return (
    <Tabs defaultValue="grid" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Projects</span>
        <TabsList>
          <TabsTrigger value="grid" aria-label="Grid view">
            <LayoutGridIcon />
          </TabsTrigger>
          <TabsTrigger value="list" aria-label="List view">
            <ListIcon />
          </TabsTrigger>
          <TabsTrigger value="board" aria-label="Board view">
            <KanbanIcon />
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="grid" className="grid grid-cols-2 gap-2">
        {projects.map((p) => (
          <div key={p} className="border p-3 font-medium">
            {p}
          </div>
        ))}
      </TabsContent>
      <TabsContent value="list" className="divide-y border">
        {projects.map((p) => (
          <div key={p} className="px-3 py-2">
            {p}
          </div>
        ))}
      </TabsContent>
      <TabsContent value="board" className="grid grid-cols-3 gap-2">
        {["To do", "Doing", "Done"].map((col, i) => (
          <div key={col} className="bg-muted p-2">
            <p className="mb-2 font-medium">{col}</p>
            <div className="border bg-background p-2">{projects[i]}</div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
