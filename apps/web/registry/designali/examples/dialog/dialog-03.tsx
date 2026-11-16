import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

export function DialogStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Sticky Footer</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sticky Footer</DialogTitle>
          <DialogDescription>
            This dialog has a sticky footer that stays visible while the content
            scrolls.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Designali is a design and development studio where thoughtful
              design meets production-ready code. Ali Imam designs and builds
              digital experiences that look great, feel intuitive, and work
              beautifully: brand identity, UI/UX design, websites and digital
              products. Explore 460+ blocks, 240+ landing pages, 2300+ UI
              examples and 4000+ icons, all built with Next.js, React,
              TypeScript and Tailwind CSS. Design se code tak.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Close</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}