import {
  Lock as LockIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function BrowserWindowPreview() {
  return (
    <div className="w-full max-w-md overflow-hidden border shadow-sm">
      <div className="flex items-center gap-2 border-b bg-muted px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-destructive" />
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="size-2.5 rounded-full bg-primary" />
        </div>
        <div className="mx-auto flex items-center gap-1 bg-background px-3 py-0.5 text-[10px] text-muted-foreground">
          <LockIcon className="size-2.5" />
          designali.com
        </div>
      </div>
      <AspectRatio ratio={16 / 10} className="bg-background">
        <div className="absolute inset-0 flex flex-col gap-3 p-4">
          <div className="flex justify-between">
            <div className="h-2 w-12 bg-foreground/80" />
            <div className="flex gap-2">
              <div className="h-2 w-8 bg-muted" />
              <div className="h-2 w-8 bg-muted" />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="h-3 w-3/5 bg-foreground/80" />
            <div className="h-2 w-2/5 bg-muted-foreground/40" />
            <div className="mt-1 h-4 w-16 bg-primary" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-10 bg-muted" />
            ))}
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}
