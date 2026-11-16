import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"

export default function ArticleMetaInline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <h3 className="text-lg leading-tight font-semibold">
        From Figma to production: how I ship blocks
      </h3>
      <div className="flex h-4 flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span>Ali Imam</span>
        <Separator orientation="vertical" />
        <span>May 4, 2026</span>
        <Separator orientation="vertical" />
        <span>6 min read</span>
        <Separator orientation="vertical" />
        <Badge variant="secondary">Design engineering</Badge>
      </div>
    </div>
  )
}
