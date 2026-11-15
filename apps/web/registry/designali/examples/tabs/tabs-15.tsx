import {
  ClockIcon,
  EllipsisIcon,
  FileImageIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FolderIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const files = {
  recent: [
    {
      name: "Q3 forecast.xlsx",
      meta: "Edited 2 min ago",
      icon: FileSpreadsheetIcon,
    },
    { name: "Brand guide.pdf", meta: "Edited 1 h ago", icon: FileTextIcon },
  ],
  shared: [
    {
      name: "Hiring plan.docx",
      meta: "Shared by Ivo Marsh",
      icon: FileTextIcon,
    },
    { name: "Launch assets", meta: "Shared by Dana Ruiz", icon: FolderIcon },
  ],
  starred: [
    {
      name: "Roadmap 2027.fig",
      meta: "Starred yesterday",
      icon: FileImageIcon,
    },
  ],
}

export default function FileManagerTabs() {
  return (
    <Tabs defaultValue="recent" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="recent">
          <ClockIcon data-icon="inline-start" />
          Recent
        </TabsTrigger>
        <TabsTrigger value="shared">
          <UsersIcon data-icon="inline-start" />
          Shared
        </TabsTrigger>
        <TabsTrigger value="starred">
          <StarIcon data-icon="inline-start" />
          Starred
        </TabsTrigger>
      </TabsList>
      {Object.entries(files).map(([key, list]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {list.map((f) => (
            <div key={f.name} className="flex items-center gap-3 px-3 py-2.5">
              <f.icon className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{f.name}</p>
                <p className="text-muted-foreground">{f.meta}</p>
              </div>
              <Button variant="ghost" size="icon-xs" aria-label="More">
                <EllipsisIcon />
              </Button>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
