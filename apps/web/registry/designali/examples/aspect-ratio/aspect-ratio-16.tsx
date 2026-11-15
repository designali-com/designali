import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

export default function CropFrameThirds() {
  return (
    <div className="w-full max-w-sm bg-zinc-900 p-4">
      <AspectRatio
        ratio={4 / 5}
        className="bg-linear-to-br from-teal-500 via-sky-600 to-indigo-800"
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 border border-white/80">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="border border-white/25" />
          ))}
        </div>
        {[
          "start-0 top-0 border-s-4 border-t-4",
          "end-0 top-0 border-e-4 border-t-4",
          "start-0 bottom-0 border-s-4 border-b-4",
          "end-0 bottom-0 border-e-4 border-b-4",
        ].map((pos) => (
          <span key={pos} className={cn("absolute size-5 border-white", pos)} />
        ))}
      </AspectRatio>
      <p className="mt-3 text-center font-mono text-xs text-white/70">
        4:5 - 1080 x 1350
      </p>
    </div>
  )
}
