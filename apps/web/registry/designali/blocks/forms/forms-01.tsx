import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k +"]

export default function Forms01() {
  return (
    <section className="w-full border-y border-border bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            New project
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us about the thing you want to build.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            A short brief helps us come to the first call prepared. We reply to
            every inquiry within two business days.
          </p>
          <dl className="grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-background p-4">
              <dt className="text-xs text-muted-foreground">Avg. reply</dt>
              <dd className="mt-1 text-2xl font-semibold">18h</dd>
            </div>
            <div className="bg-background p-4">
              <dt className="text-xs text-muted-foreground">Projects shipped</dt>
              <dd className="mt-1 text-2xl font-semibold">240+</dd>
            </div>
          </dl>
        </div>

        <form className="space-y-6 border border-border bg-card p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="f1-name">Full name</Label>
              <Input id="f1-name" placeholder="Maya Lindqvist" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f1-email">Work email</Label>
              <Input
                id="f1-email"
                type="email"
                placeholder="maya@northwind.studio"
                className="h-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="f1-company">Company</Label>
            <Input id="f1-company" placeholder="Northwind Studio" className="h-10" />
          </div>
          <fieldset className="space-y-3">
            <legend className="text-xs">Estimated budget</legend>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {budgets.map((budget, index) => (
                <label
                  key={budget}
                  className="flex cursor-pointer items-center justify-center border border-border px-3 py-2.5 text-xs transition-colors hover:bg-muted has-checked:border-foreground has-checked:bg-foreground has-checked:text-background"
                >
                  <input
                    type="radio"
                    name="budget"
                    value={budget}
                    defaultChecked={index === 1}
                    className="sr-only"
                  />
                  {budget}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="space-y-2">
            <Label htmlFor="f1-brief">Project brief</Label>
            <Textarea
              id="f1-brief"
              rows={5}
              placeholder="We're relaunching our marketing site and need a design system that scales across three product lines…"
              className="min-h-32"
            />
          </div>
          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting you agree to our privacy policy.
            </p>
            <Button type="submit" size="lg">
              Send inquiry
              <ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
