import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"

export default function BlogPostCover() {
  return (
    <article className="w-full max-w-md">
      <AspectRatio ratio={2} className="overflow-hidden bg-zinc-900">
        <div className="absolute -start-10 -top-10 size-48 rounded-full bg-violet-500/60 blur-3xl" />
        <div className="absolute -end-10 -bottom-16 size-56 rounded-full bg-teal-400/50 blur-3xl" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <Badge variant="secondary" className="mb-2">
            Engineering
          </Badge>
          <h3 className="text-lg leading-tight font-semibold text-balance">
            How we cut cold starts by 70% with lazy hydration
          </h3>
        </div>
      </AspectRatio>
      <p className="mt-2 text-xs text-muted-foreground">
        Ines Moreau - 8 min read - Mar 18
      </p>
    </article>
  )
}
