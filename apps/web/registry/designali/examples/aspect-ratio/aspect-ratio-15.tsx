import {
  ImageUp as ImageUpIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function UploadDropzoneWide() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="border-2 border-dashed bg-muted/30 transition-colors hover:bg-muted/60"
      >
        <label className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 p-4 text-center">
          <div className="flex size-10 items-center justify-center bg-background ring-1 ring-border">
            <ImageUpIcon className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium">Drop a Designali project cover here</p>
          <p className="text-xs text-muted-foreground">
            PNG or JPG, 1600 x 900 recommended
          </p>
          <input type="file" accept="image/*" className="sr-only" />
        </label>
      </AspectRatio>
    </div>
  )
}
