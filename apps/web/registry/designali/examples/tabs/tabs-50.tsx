import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const sizes = [
  {
    label: "Small",
    list: "group-data-horizontal/tabs:h-6",
    trigger: "text-[11px] px-1",
  },
  { label: "Default", list: "", trigger: "" },
  {
    label: "Large",
    list: "group-data-horizontal/tabs:h-10",
    trigger: "text-sm px-3",
  },
]

export default function TabsSizeScale() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {sizes.map((s) => (
        <div key={s.label} className="flex items-center justify-between gap-4">
          <span className="w-14 text-xs text-muted-foreground">{s.label}</span>
          <Tabs defaultValue="code" className="flex-1">
            <TabsList className={cn("w-full", s.list)}>
              <TabsTrigger value="code" className={s.trigger}>
                Code
              </TabsTrigger>
              <TabsTrigger value="issues" className={s.trigger}>
                Issues
              </TabsTrigger>
              <TabsTrigger value="wiki" className={s.trigger}>
                Wiki
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      ))}
    </div>
  )
}
