import {
  Plus,
} from "@designali/icons"

const leaders = [
  {
    name: "Ali Imam",
    role: "Founder, Design Engineer",
    since: "Founder",
    image: "/ali.jpg",
    bio: "Designs and codes. Started with Dalim, from graphics and fonts to icons and UI, and now leads Designali: brand identity, UI/UX and production-ready Next.js websites.",
  },
  {
    name: "Brand & Identity",
    role: "Studio discipline",
    since: "Design",
    image: null,
    bio: "Logos, type, color and guidelines that hold up from a favicon to a billboard. Built as a system the product and website share.",
  },
  {
    name: "UI/UX Design",
    role: "Studio discipline",
    since: "Design",
    image: null,
    bio: "Flows, wireframes and interfaces designed in Figma with real components and content, ready to be built without guesswork.",
  },
  {
    name: "Web Development",
    role: "Studio discipline",
    since: "Code",
    image: null,
    bio: "Next.js, React, TypeScript and Tailwind CSS, deployed on Vercel. The same people who designed the pages build them.",
  },
  {
    name: "CGI, 3D & Motion",
    role: "Studio discipline",
    since: "Creative",
    image: null,
    bio: "Product renders, motion design and creative development that bring a brand to life, plus AI-assisted workflows where they help.",
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 2)

export default function Sections09() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Leadership</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            The people and practices behind designali.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
            Led by Ali Imam, with every discipline needed to take a project
            from design to code.
          </p>
        </div>

        <ul className="border-t border-border">
          {leaders.map((leader) => (
            <li key={leader.name} className="border-b border-border">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="size-12 shrink-0 object-cover"
                    />
                  ) : (
                    <span className="flex size-12 shrink-0 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground">
                      {initials(leader.name)}
                    </span>
                  )}
                  <span className="grid min-w-0 flex-1 gap-0.5 sm:grid-cols-2 sm:items-center sm:gap-6">
                    <span className="truncate text-base font-medium">{leader.name}</span>
                    <span className="truncate text-sm text-muted-foreground">{leader.role}</span>
                  </span>
                  <span className="hidden font-sans text-xs text-muted-foreground md:block">{leader.since}</span>
                  <Plus className="size-4 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground sm:pl-16">
                  {leader.bio}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
