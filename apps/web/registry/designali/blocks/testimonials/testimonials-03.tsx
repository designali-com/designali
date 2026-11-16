import {
  Star,
} from "@designali/icons"

const reviews = [
  {
    name: "Daniel",
    role: "Founder, Designali client",
    initials: "DA",
    text: "Designali blocks are thoughtfully built. We launched our marketing site in days instead of weeks.",
  },
  {
    name: "Lena",
    role: "Product Designer",
    initials: "LE",
    text: "Dark mode just works. Every token maps cleanly, which is rare in component libraries.",
  },
  {
    name: "Arjun",
    role: "CTO, Designali client",
    initials: "AR",
    text: "Clean TSX, no magic. My engineers can read and extend every Designali block without a learning curve.",
  },
  {
    name: "Sofia",
    role: "Creative Director",
    initials: "SO",
    text: "Ali Imam's work has real editorial taste. It feels designed, not assembled.",
  },
  {
    name: "Tom",
    role: "Freelance Developer",
    initials: "TO",
    text: "I reuse the Designali pricing and FAQ blocks on nearly every client project. Huge time saver.",
  },
  {
    name: "Priya",
    role: "Design Lead, Designali client",
    initials: "PR",
    text: "@designali/icons and accessible defaults out of the box meant our audit came back with almost nothing to fix.",
  },
]

export default function Testimonials03() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Loved by people who ship with designali
          </h2>
          <p className="mt-3 text-muted-foreground">
            Designers and developers building with 460+ Designali blocks.
          </p>
        </div>
        <div className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between gap-8 border-r border-b border-border p-6"
            >
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-6">
                  {review.text}
                </blockquote>
              </div>
              <figcaption className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
