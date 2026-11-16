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

const artworks = [
  {
    id: "dawn",
    title: "Colorful Spheres",
    image: "/img/ask/ask1.jpg",
    size: "4000 × 3000",
  },
  {
    id: "tide",
    title: "Abstract Fluid",
    image: "/img/ask/ask2.jpg",
    size: "3600 × 2400",
  },
  {
    id: "dusk",
    title: "Brand Identity",
    image: "/img/ask/ask3.jpg",
    size: "5120 × 2880",
  },
  {
    id: "moss",
    title: "Dalim Visuals",
    image: "/img/ask/ask4.jpg",
    size: "3000 × 3000",
  },
]

export default function GalleryPreviewDialog() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-2">
      {artworks.map((art) => (
        <Dialog key={art.id}>
          <DialogTrigger
            className="aspect-square overflow-hidden bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={"Preview " + art.title}
          >
            <img src={art.image} alt={art.title} className="size-full object-cover" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <img
              src={art.image}
              alt={art.title}
              className="aspect-[4/3] w-full bg-muted object-cover"
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
