import {
  Clock as ClockIcon,
  Ellipsis as EllipsisIcon,
  FileImage as FileImageIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  Folder as FolderIcon,
  Star as StarIcon,
  Users as UsersIcon,
} from "@designali/icons"

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
      name: "Designali invoices.xlsx",
      meta: "Edited 2 min ago",
      icon: FileSpreadsheetIcon,
    },
    { name: "Designali brand guide.pdf", meta: "Edited 1 h ago", icon: FileTextIcon },
  ],
  shared: [
    {
      name: "Client brief.docx",
      meta: "Shared by Ali Imam",
      icon: FileTextIcon,
    },
    { name: "Launch assets", meta: "Shared by Designer", icon: FolderIcon },
  ],
  starred: [
    {
      name: "Designali blocks.fig",
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
