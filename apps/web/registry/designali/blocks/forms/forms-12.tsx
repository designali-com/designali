import {
  Link2,
  Upload,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const facts = [
  { label: "Studio", value: "Designali" },
  { label: "Location", value: "Remote" },
  { label: "Engagement", value: "Project-based contract" },
  { label: "Process", value: "Portfolio review + call with Ali Imam" },
]

export default function Forms12() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              &larr; Back to Designali
            </a>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Design Engineer, Designali Studio
            </h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="text-muted-foreground">{fact.label}</dt>
                  <dd className="text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <form className="space-y-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="f12-name">Full name</Label>
                <Input id="f12-name" placeholder="Your name" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f12-email">Email</Label>
                <Input id="f12-email" type="email" placeholder="you@example.com" className="h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium">Resume / CV</span>
              <label
                htmlFor="f12-resume"
                className="flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted/40 px-6 py-10 text-center transition-colors hover:bg-muted"
              >
                <span className="flex size-10 items-center justify-center border border-border bg-background">
                  <Upload className="size-4" />
                </span>
                <span className="text-sm">
                  <span className="font-medium underline underline-offset-4">Upload a file</span>{" "}
                  or drag it here
                </span>
                <span className="text-xs text-muted-foreground">PDF or DOCX, up to 10 MB</span>
                <input id="f12-resume" type="file" accept=".pdf,.docx" className="sr-only" />
              </label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="f12-portfolio">Portfolio link</Label>
              <div className="relative">
                <Link2 className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="f12-portfolio" type="url" placeholder="https://your-portfolio.com" className="h-10 pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="f12-why">Tell us about a project you designed and built</Label>
              <Textarea
                id="f12-why"
                rows={6}
                placeholder="I designed the brand in Figma and shipped the site with Next.js and Tailwind CSS..."
              />
              <p className="text-right text-xs text-muted-foreground">0 / 1,500</p>
            </div>

            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                Ali Imam reviews every application by hand. Questions? Write to
                hello@designali.com.
              </p>
              <Button type="submit" size="lg">Submit application</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
