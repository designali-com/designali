const columns = [
  [
    {
      name: "Noah Kim",
      handle: "@noahbuilds",
      text: "Shipped a full landing page during a lunch break. Not exaggerating.",
    },
    {
      name: "Elena Rossi",
      handle: "@elenadesigns",
      text: "The spacing scale is so consistent that my layouts finally line up without nudging pixels. It sounds small, but it changes how fast I can iterate.",
    },
    {
      name: "Kwame Asante",
      handle: "@kwame.dev",
      text: "Copy, paste, adjust tokens, done.",
    },
  ],
  [
    {
      name: "Grace Liu",
      handle: "@graceliu",
      text: "Best investment our two-person studio made this year.",
    },
    {
      name: "Omar Haddad",
      handle: "@omarh",
      text: "Square corners, thin borders, real typography. Exactly the aesthetic I was trying to build myself, but better documented.",
    },
  ],
  [
    {
      name: "Isla Murphy",
      handle: "@islamakes",
      text: "Our investors commented on how polished the new site looked. We used five blocks.",
    },
    {
      name: "Ravi Shankar",
      handle: "@ravi_s",
      text: "Light and dark mode parity is perfect.",
    },
    {
      name: "Chloe Martin",
      handle: "@chloem",
      text: "I keep the gallery and media sections bookmarked for every portfolio client.",
    },
  ],
]

export default function Testimonials05() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Word on the timeline
        </h2>
        <div className="relative mt-12 grid max-h-[640px] gap-4 overflow-hidden md:grid-cols-3">
          {columns.map((column, i) => (
            <div key={i} className="flex flex-col gap-4">
              {column.map((post) => (
                <article
                  key={post.handle}
                  className="border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                      {post.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-medium">{post.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.handle}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6">{post.text}</p>
                </article>
              ))}
            </div>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
