import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function SocialSharePreview() {
  return (
    <div className="w-full max-w-sm overflow-hidden border">
      <AspectRatio
        ratio={1.91}
        className="bg-linear-to-br from-zinc-950 to-zinc-800"
      >
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="size-4 bg-linear-to-br from-lime-300 to-emerald-500" />
            Fieldnote
          </div>
          <p className="text-xl leading-tight font-semibold text-balance">
            Ship your changelog in five minutes
          </p>
        </div>
      </AspectRatio>
      <div className="border-t bg-muted/40 p-3">
        <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
          fieldnote.dev
        </p>
        <p className="truncate text-sm font-medium">
          Changelogs your users actually read
        </p>
        <p className="truncate text-xs text-muted-foreground">
          Write once, publish to email, in-app and your site.
        </p>
      </div>
    </div>
  )
}
