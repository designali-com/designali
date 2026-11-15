import { ArrowUpRight, Briefcase, Building2, GraduationCap, Rocket } from "lucide-react"

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    body: "Free credits for your first year if you have raised under $5M.",
    cta: "Apply for credits",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    body: "White-label client workspaces and a 30% partner revenue share.",
    cta: "Join partner program",
  },
  {
    icon: Building2,
    title: "Enterprise",
    body: "SSO, audit logs, data residency and a named account team.",
    cta: "Contact sales",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Unlimited seats for verified students, teachers and classrooms.",
    cta: "Verify your school",
  },
]

export default function CallToAction18() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Pick the path that fits your team.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Same product, tailored terms. Choose where you are today and we
            will set you up accordingly.
          </p>
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, body, cta }) => (
            <a
              key={title}
              href="#"
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted/60 md:p-8"
            >
              <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <h3 className="mt-10 text-lg font-medium">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
              <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
                {cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
