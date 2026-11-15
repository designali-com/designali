import { Star } from "lucide-react"

const reviews = [
  {
    name: "Daniel Okafor",
    role: "Founder, Driftwave",
    initials: "DO",
    text: "The blocks are thoughtfully built. We launched our marketing site in four days instead of four weeks.",
  },
  {
    name: "Lena Fischer",
    role: "Product Designer, Tessel",
    initials: "LF",
    text: "Dark mode just works. Every token maps cleanly, which is rare in component libraries.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, Quanta AI",
    initials: "AM",
    text: "Clean TSX, no magic. My engineers can read and extend everything without a learning curve.",
  },
  {
    name: "Sofia Alvarez",
    role: "Creative Director, Corvid",
    initials: "SA",
    text: "Finally a library with editorial taste. It feels designed, not assembled.",
  },
  {
    name: "Tom Becker",
    role: "Freelance Developer",
    initials: "TB",
    text: "I reuse the pricing and FAQ sections on nearly every client project. Huge time saver.",
  },
  {
    name: "Priya Nair",
    role: "Design Lead, Orbital Health",
    initials: "PN",
    text: "Accessible defaults out of the box meant our audit came back with almost nothing to fix.",
  },
]

export default function Testimonials03() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Loved by people who ship
          </h2>
          <p className="mt-3 text-muted-foreground">
            Rated 4.9 out of 5 by more than 3,000 designers and developers.
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
