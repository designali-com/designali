import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"

const reports = [
  { name: "Ivo", role: "Brand identity", initials: "I" },
  { name: "Leah", role: "UI/UX design", initials: "L" },
  { name: "Arjun", role: "Web development", initials: "A" },
]

export default function OrgChartConnectors() {
  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div className="flex items-center gap-2 border px-3 py-2">
        <Avatar size="sm">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-xs">
          <span className="font-medium">Ali Imam</span>
          <span className="text-muted-foreground">Founder, Designali</span>
        </div>
      </div>
      <Separator orientation="vertical" className="h-4" />
      <Separator className="w-2/3" />
      <div className="grid w-full grid-cols-3">
        {reports.map((report) => (
          <div key={report.name} className="flex flex-col items-center">
            <Separator orientation="vertical" className="h-4" />
            <div className="flex flex-col items-center gap-1 border p-2 text-center text-xs">
              <Avatar size="sm">
                <AvatarFallback>{report.initials}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{report.name}</span>
              <span className="text-muted-foreground">{report.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
