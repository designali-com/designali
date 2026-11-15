import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function CinemaScopeStill() {
  return (
    <figure className="w-full max-w-md bg-black py-6">
      <AspectRatio
        ratio={2.39}
        className="overflow-hidden bg-linear-to-b from-orange-300 via-rose-400 to-indigo-900"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent" />
        <div className="absolute start-[20%] bottom-[30%] size-10 rounded-full bg-amber-100/90 blur-[1px]" />
        <p className="absolute inset-x-0 bottom-2 text-center text-xs text-white">
          We never made it to the coast that summer.
        </p>
      </AspectRatio>
      <figcaption className="mt-2 text-center font-mono text-[10px] tracking-widest text-white/60">
        2.39 : 1 - ANAMORPHIC
      </figcaption>
    </figure>
  )
}
