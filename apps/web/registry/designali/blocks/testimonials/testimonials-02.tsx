import {
  Quote,
} from "@designali/icons"

export default function Testimonials02() {
  return (
    <section className="w-full border-y border-border bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Quote className="mx-auto size-8 text-muted-foreground" />
        <blockquote className="mt-8 text-2xl leading-snug font-medium tracking-tight md:text-4xl">
          &ldquo;Designali replaced three separate UI kits with one design
          system and shipped it as production-ready code. Our designers stopped
          redrawing buttons and started solving real product problems.&rdquo;
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            MY
          </span>
          <div className="text-left">
            <p className="text-sm font-medium">Maya</p>
            <p className="text-sm text-muted-foreground">
              Head of Design, Designali client
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
