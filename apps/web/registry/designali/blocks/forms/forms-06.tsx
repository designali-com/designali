import {
  ArrowRight,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const topics = [
  { id: "craft", title: "New blocks and templates", cadence: "Weekly", checked: true },
  { id: "teardowns", title: "Design se code tak notes", cadence: "Biweekly", checked: true },
  { id: "jobs", title: "Icons, logos and vectors drops", cadence: "Monthly", checked: false },
]

export default function Forms06() {
  return (
    <section className="w-full bg-foreground py-20 text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-end">
        <div>
          <div className="flex size-10 items-center justify-center border border-background/20">
            <Mail className="size-4" />
          </div>
          <h2 className="mt-8 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            The Designali Letter
          </h2>
          <p className="mt-6 max-w-md text-sm leading-6 opacity-70">
            Short notes from Ali Imam on design and code, plus the newest
            Designali templates, blocks and resources. No sponsors, ever.
          </p>
        </div>

        <form className="space-y-6">
          <fieldset className="divide-y divide-background/15 border border-background/15">
            <legend className="sr-only">Choose what you receive</legend>
            {topics.map((topic) => (
              <Label
                key={topic.id}
                className="flex cursor-pointer items-center gap-4 p-4 hover:bg-background/5"
              >
                <Checkbox
                  defaultChecked={topic.checked}
                  className="border-background/40 data-checked:border-background data-checked:bg-background data-checked:text-foreground dark:data-checked:bg-background"
                />
                <span className="flex-1 text-sm">{topic.title}</span>
                <span className="font-sans text-[10px] tracking-wider uppercase opacity-60">
                  {topic.cadence}
                </span>
              </Label>
            ))}
          </fieldset>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Label htmlFor="f6-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="f6-email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 border-background/20 bg-transparent text-background placeholder:text-background/50 dark:bg-transparent"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Subscribe
              <ArrowRight />
            </Button>
          </div>
          <p className="text-xs opacity-60">
            One click to unsubscribe. We never share your address.
          </p>
        </form>
      </div>
    </section>
  )
}
