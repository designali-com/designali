import {
  Download as DownloadIcon,
  Heart as HeartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { cn } from "@workspace/ui/lib/utils"

const artworks = [
  {
    id: "dawn",
    title: "Colorful Spheres",
    gradient: "from-amber-300 via-rose-400 to-violet-500",
    size: "4000 × 3000",
  },
  {
    id: "tide",
    title: "Abstract Fluid",
    gradient: "from-sky-300 via-cyan-400 to-emerald-500",
    size: "3600 × 2400",
  },
  {
    id: "dusk",
    title: "Brand Identity",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    size: "5120 × 2880",
  },
  {
    id: "moss",
    title: "Dalim Visuals",
    gradient: "from-lime-300 via-green-500 to-teal-600",
    size: "3000 × 3000",
  },
]

export default function GalleryPreviewDialog() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-2">
      {artworks.map((art) => (
        <Dialog key={art.id}>
          <DialogTrigger
            className={cn(
              "aspect-square bg-gradient-to-br outline-none focus-visible:ring-2 focus-visible:ring-ring",
              art.gradient
            )}
            aria-label={"Preview " + art.title}
          />
          <DialogContent className="sm:max-w-lg">
            <div
              className={cn(
                "aspect-[4/3] w-full bg-gradient-to-br",
                art.gradient
              )}
            />
            <DialogHeader>
              <DialogTitle>{art.title}</DialogTitle>
              <DialogDescription>
                {art.size} px · Uploaded by Ali Imam
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">
                <HeartIcon data-icon="inline-start" />
                Favorite
              </Button>
              <Button>
                <DownloadIcon data-icon="inline-start" />
                Download
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
