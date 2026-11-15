import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function TabletReadingView() {
  return (
    <div className="w-full max-w-60 rounded-2xl border-8 border-zinc-800 dark:border-zinc-700">
      <AspectRatio ratio={3 / 4} className="bg-amber-50 dark:bg-zinc-900">
        <div className="absolute inset-0 flex flex-col p-4 font-serif text-amber-950 dark:text-amber-100">
          <p className="text-[10px] tracking-widest uppercase opacity-60">
            Chapter 4
          </p>
          <p className="mt-1 text-sm font-semibold">The Lighthouse Keeper</p>
          <p className="mt-2 text-[10px] leading-relaxed opacity-80">
            The fog arrived before the boats did, rolling in from the north like
            a slow tide of wool. Marit lit the lamp an hour early and waited.
          </p>
          <div className="mt-auto flex items-center justify-between text-[9px] opacity-60">
            <span>Page 82 of 310</span>
            <span>26%</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}
