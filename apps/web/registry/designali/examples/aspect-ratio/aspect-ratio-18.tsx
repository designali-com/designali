import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function CinemaScopeStill() {
  return (
    <figure className="w-full max-w-md bg-black py-6">
      <AspectRatio
        ratio={2.39}
        className="overflow-hidden bg-linear-to-b from-chart-1 via-primary to-chart-5"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-foreground to-transparent" />
        <div className="absolute start-[20%] bottom-[30%] size-10 rounded-full bg-primary/90 blur-[1px]" />
        <p className="absolute inset-x-0 bottom-2 text-center text-xs text-white">
          A Designali CGI &amp; motion still.
        </p>
      </AspectRatio>
      <figcaption className="mt-2 text-center font-sans text-[10px] tracking-widest text-white/60">
        2.39 : 1 - DESIGNALI CGI
      </figcaption>
    </figure>
  )
}
