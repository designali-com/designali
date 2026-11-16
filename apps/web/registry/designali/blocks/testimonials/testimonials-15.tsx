import {
  ArrowRight,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const items = [
  { quote: "The only analytics tool where I trust the numbers enough to put them in a board deck.", name: "Harriet Cole", role: "CEO, Quillfeather" },
  { quote: "We cut our cloud bill by a third once we could see which features actually got used.", name: "Leo Varga", role: "Head of Platform, Tessellate" },
  { quote: "Setup was a single script tag. Our first insight arrived before lunch.", name: "Amara Nwosu", role: "Growth PM, Kindling" },
  { quote: "Privacy-friendly by default meant our DPO approved it in one meeting.", name: "Jonas Weber", role: "Data Protection, Alpenrose" },
  { quote: "Support replies in minutes and the answers come from engineers, not scripts.", name: "Sienna Park", role: "Founder, Lumo Labs" },
]

export default function Testimonials15() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-5xl">
            Rated 4.9 by the people who read the numbers.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Over 9,000 companies use Signalwise to understand their product
            without compromising their users&apos; privacy.
          </p>
          <Button className="mt-8" size="lg" nativeButton={false} render={<a href="#" />}>
            Start free
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <div className="space-y-4">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className={`border border-border p-8 ${i % 2 === 0 ? "bg-card" : "bg-muted/40"}`}
            >
              <blockquote className="text-lg leading-relaxed md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground"> &mdash; {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
