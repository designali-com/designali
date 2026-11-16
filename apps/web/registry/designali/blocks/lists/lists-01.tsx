import {
  ArrowRight,
} from "@designali/icons"

const roles = [
  { title: "UI/UX Designer", team: "Design", location: "Remote, worldwide", type: "Full-time" },
  { title: "Design Engineer", team: "Design", location: "Remote, worldwide", type: "Full-time" },
  { title: "Next.js Developer", team: "Development", location: "Remote, worldwide", type: "Full-time" },
  { title: "3D and Motion Designer", team: "CGI", location: "Remote, worldwide", type: "Contract" },
  { title: "Brand Identity Designer", team: "Brand", location: "Remote, worldwide", type: "Contract" },
  { title: "Icon and Illustration Designer", team: "Design", location: "Remote, worldwide", type: "Freelance" },
]

export default function Lists01() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Work with Designali</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Join Ali Imam and the Designali studio — design se code tak.
            </p>
          </div>
          <span className="hidden font-sans text-sm text-muted-foreground sm:block">
            {String(roles.length).padStart(2, "0")} positions
          </span>
        </div>

        <ul className="mt-12 border-t border-border">
          {roles.map((role) => (
            <li key={role.title}>
              <a
                href="#"
                className="group grid grid-cols-1 gap-2 border-b border-border py-6 transition-colors hover:bg-muted/40 md:grid-cols-[1fr_140px_180px_100px_24px] md:items-center md:gap-6 md:px-4"
              >
                <span className="text-lg font-medium">{role.title}</span>
                <span className="text-sm text-muted-foreground">{role.team}</span>
                <span className="text-sm text-muted-foreground">{role.location}</span>
                <span className="text-xs text-muted-foreground">{role.type}</span>
                <ArrowRight className="hidden size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground md:block" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
