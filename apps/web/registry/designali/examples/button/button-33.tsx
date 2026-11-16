import {
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function GradientHeroCta() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h3 className="text-lg font-semibold">
        Ship your next idea this weekend
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          size="lg"
          className="group bg-linear-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-90"
        >
          Start building free
          <ArrowRightIcon
            data-icon="inline-end"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Button>
        <Button size="lg" variant="ghost">
          <PlayIcon data-icon="inline-start" />
          Watch demo
        </Button>
      </div>
    </div>
  )
}
