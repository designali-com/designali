import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function EventPosterPaper() {
  return (
    <AspectRatio
      ratio={1 / 1.414}
      className="w-full max-w-52 overflow-hidden bg-muted text-foreground shadow-md"
    >
      <div className="absolute -end-8 top-8 size-32 rounded-full bg-primary" />
      <div className="absolute -start-6 top-28 size-20 bg-chart-2" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase">
          Designali Studio
        </p>
        <p className="text-2xl leading-none font-black uppercase">
          Open Studio
        </p>
        <p className="mt-2 text-[10px]">
          Design se code tak - Free entry
        </p>
      </div>
    </AspectRatio>
  )
}
