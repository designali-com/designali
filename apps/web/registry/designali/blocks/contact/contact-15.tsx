import { ArrowRight } from "lucide-react"

const topics = [
  {
    title: "Commission a piece",
    body: "Private and corporate commissions, from single sculptures to site-specific installations.",
    email: "commissions@ossianatelier.com",
  },
  {
    title: "Exhibitions & loans",
    body: "Curators and institutions requesting works, condition reports or loan agreements.",
    email: "exhibitions@ossianatelier.com",
  },
  {
    title: "Studio visits",
    body: "Collectors and students who would like to see the foundry. Visits run on Thursdays.",
    email: "visits@ossianatelier.com",
  },
  {
    title: "Press & publications",
    body: "Interviews, high-resolution photography and catalogue essays.",
    email: "press@ossianatelier.com",
  },
  {
    title: "Residencies",
    body: "Applications for the three-month summer residency open each January.",
    email: "residency@ossianatelier.com",
  },
]

export default function Contact15() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Ossian Atelier
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Write to the right desk.
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            We are a small studio. Sending your note to the right address means
            it reaches the person who can actually answer it.
          </p>
          <div className="mt-10 space-y-1 text-sm">
            <p className="font-medium">Studio</p>
            <p className="text-muted-foreground">Unit 7, Ropewalk Yard</p>
            <p className="text-muted-foreground">Bristol BS1 6XN</p>
          </div>
        </div>

        <ol className="border-t">
          {topics.map((topic, index) => (
            <li key={topic.title} className="border-b">
              <a
                href={`mailto:${topic.email}`}
                className="group grid gap-4 py-8 sm:grid-cols-[48px_1fr_auto] sm:items-start"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="space-y-2">
                  <span className="block text-2xl font-medium tracking-tight transition-transform group-hover:translate-x-1 md:text-3xl">
                    {topic.title}
                  </span>
                  <span className="block max-w-lg text-sm text-muted-foreground">
                    {topic.body}
                  </span>
                  <span className="block pt-2 text-sm break-all underline-offset-4 group-hover:underline">
                    {topic.email}
                  </span>
                </span>
                <span className="hidden size-11 items-center justify-center rounded-full border transition-colors group-hover:bg-foreground group-hover:text-background sm:flex">
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
