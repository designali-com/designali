import { Marquee } from "@/registry/designali/ui/marquee"

const rowA = [
  { quote: "Designali rebuilt our marketing site in Next.js in record time.", name: "Lena", role: "Marketing Lead, Designali client" },
  { quote: "Our brand identity and product UI finally feel like one thing.", name: "Sam", role: "CTO, Designali client" },
  { quote: "The Figma files and the live site actually match.", name: "Mei", role: "Product Manager, Designali client" },
  { quote: "Designali blocks replaced half of our custom components.", name: "Arjun", role: "Engineering Manager" },
  { quote: "@designali/icons has an icon for everything we needed.", name: "Clara", role: "Product Designer" },
]
const rowB = [
  { quote: "Picked a Designali template on Friday, launched on Tuesday.", name: "Noah", role: "Founder, designali.com customer" },
  { quote: "Ali designs it and codes it. That changes everything.", name: "Hana", role: "VP Engineering, Designali client" },
  { quote: "Dark mode and accessibility were handled from day one.", name: "Diego", role: "Frontend Developer" },
  { quote: "Worth it for the design system handover alone.", name: "Ava", role: "Founder, Designali client" },
  { quote: "Thoughtful design and production-ready code, as promised.", name: "Felix", role: "Product Lead, Designali client" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

function Row({ items, reverse }: { items: typeof rowA; reverse?: boolean }) {
  return (
    <Marquee
      reverse={reverse}
      pauseOnHover
      repeat={2}
      gap="1rem"
      speed={45}
      className="p-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      {items.map((t) => (
        <figure key={t.name} className="w-72 shrink-0 border border-border bg-card p-5 md:w-80">
          <blockquote className="text-sm leading-6">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              {initials(t.name)}
            </span>
            <span className="text-xs">
              <span className="block font-medium">{t.name}</span>
              <span className="text-muted-foreground">{t.role}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </Marquee>
  )
}

export default function Testimonials08() {
  return (
    <section className="w-full overflow-hidden bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Loved by teams who build with designali.
        </h2>
      </div>
      <div className="mt-14 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  )
}
