import { Badge } from "@workspace/ui/components/badge"

const versions = [
  { version: "v3.2.0", tag: "latest", note: "Released Oct 2" },
  { version: "v3.3.0-rc.1", tag: "next", note: "Release candidate" },
  { version: "v2.9.4", tag: "deprecated", note: "Security fixes only" },
]

export default function PackageVersionBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {versions.map((item) => (
        <div
          key={item.version}
          className="flex items-center gap-2 border p-2.5"
        >
          <Badge variant="outline" className="font-mono">
            {item.version}
          </Badge>
          <span className="flex-1 text-xs text-muted-foreground">
            {item.note}
          </span>
          <Badge
            variant={
              item.tag === "latest"
                ? "default"
                : item.tag === "deprecated"
                  ? "destructive"
                  : "secondary"
            }
          >
            {item.tag}
          </Badge>
        </div>
      ))}
    </div>
  )
}
