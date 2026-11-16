import { Marquee } from "@/registry/designali/ui/marquee"

const columns = [
  [
    {
      name: "Noah",
      handle: "Developer",
      text: "Shipped a full landing page with Designali blocks during a lunch break. Not exaggerating.",
    },
    {
      name: "Elena",
      handle: "Product Designer",
      text: "The spacing scale is so consistent that my layouts finally line up without nudging pixels. It sounds small, but it changes how fast I can iterate.",
    },
    {
      name: "Kwame",
      handle: "Frontend Developer",
      text: "Copy a Designali block, paste, adjust tokens, done.",
    },
  ],
  [
    {
      name: "Grace",
      handle: "Studio Founder",
      text: "Designali templates were the best investment our two-person studio made this year.",
    },
    {
      name: "Omar",
      handle: "Design Engineer",
      text: "Thin borders, real typography, clean Next.js code. Exactly what I was trying to build myself, but better documented.",
    },
    {
      name: "Ali Imam",
      handle: "Founder, Designali",
      text: "Every block is designed and coded by the same hands. design se code tak.",
    },
  ],
  [
    {
      name: "Isla",
      handle: "Founder, Designali client",
      text: "People commented on how polished our new site looked. We used five Designali blocks.",
    },
    {
      name: "Ravi",
      handle: "Developer",
      text: "Light and dark mode parity is perfect.",
    },
    {
      name: "Chloe",
      handle: "Freelance Designer",
      text: "I keep the Designali gallery and media blocks bookmarked for every portfolio client.",
    },
  ],
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

export default function Testimonials05() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Word on the timeline about designali
        </h2>
        <div className="relative mt-12 grid h-[640px] gap-4 overflow-hidden md:grid-cols-3">
          {columns.map((column, i) => (
            <Marquee
              key={i}
              vertical
              pauseOnHover
              reverse={i % 2 === 1}
              repeat={3}
              gap="1rem"
              speed={30 + i * 10}
              className={i > 0 ? "hidden h-full p-0 md:flex" : "h-full p-0"}
            >
              {column.map((post) => (
                <article
                  key={post.name}
                  className="border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3">
                    {post.name === "Ali Imam" ? (
                      <img
                        src="/ali.jpg"
                        alt="Ali Imam"
                        className="size-8 rounded-full object-cover"
                      />
                    ) : (
                      <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                        {initials(post.name)}
                      </span>
                    )}
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
            </Marquee>
          ))}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
