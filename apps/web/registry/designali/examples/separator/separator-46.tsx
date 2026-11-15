import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"

const reports = [
  { name: "Ivo Petrov", role: "Platform", initials: "IP" },
  { name: "Leah Moss", role: "Payments", initials: "LM" },
  { name: "Arjun Rao", role: "Growth", initials: "AR" },
]

export default function OrgChartConnectors() {
  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div className="flex items-center gap-2 border px-3 py-2">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-xs">
          <span className="font-medium">Selin Muller</span>
          <span className="text-muted-foreground">VP Engineering</span>
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
