import {
  ArrowUpRight,
  MapPin,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const experience = [
  { role: "Founder, Design Engineer", company: "Designali", period: "Now" },
  { role: "Designer and Developer", company: "Dalim Agency", period: "Before" },
  { role: "Creator", company: "Dalim UI, Icons and Fonts", period: "Side projects" },
]

const highlights = [
  { title: "Dalim UI", subtitle: "Component library", tag: "Product", image: "/images/templates/dalim-ui-old.jpg" },
  { title: "Dalim Agency", subtitle: "Identity & website", tag: "Brand", image: "/images/templates/dalim-agency-old.jpg" },
  { title: "Ali Imam portfolio", subtitle: "Personal site in Next.js", tag: "Web", image: "/images/templates/aliimam-comp.jpg" },
]

const clients = ["Dalim", "Dalim Agency", "Dalim Fonts", "Dalim Graphic", "Dalim Icons", "Dalim Visuals"]

export default function Portfolio05() {
  return (
    <section className="w-full bg-background px-6 py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-px border border-border bg-border md:grid-cols-3">
        <div className="bg-background p-8 md:col-span-2 md:p-10">
          <div className="flex items-center gap-4">
            <img
              src="/ali.jpg"
              alt="Ali Imam"
              className="size-14 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Ali Imam</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" />
                Remote · Worldwide
              </p>
            </div>
          </div>
          <h2 className="mt-8 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            Design engineer working across brand, UI/UX and code — design se
            code tak.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="mailto:ali@designali.com" />}>Get in touch</Button>
            <Button variant="outline" nativeButton={false} render={<a href="/work" />}>
              View work
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-background p-8">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Experience
          </p>
          <ul className="mt-6 space-y-5">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="text-sm font-medium">{job.role}</p>
                <p className="text-xs text-muted-foreground">
                  {job.company} · {job.period}
                </p>
              </li>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 text-xs">
            <span className="size-2 rounded-full bg-emerald-500" />
            Available for selected projects
          </span>
        </div>

        {highlights.map((item, i) => (
          <a key={item.title} href="#" className="group flex flex-col bg-background p-6">
            <div
              className="aspect-video w-full border border-border"
              style={{
                background: `url(${item.image}) center / cover, linear-gradient(${120 + i * 40}deg, var(--chart-${i + 1}), transparent)`,
              }}
            />
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 bg-background p-6 text-sm text-muted-foreground md:col-span-3">
          <span className="text-xs tracking-widest uppercase">Projects</span>
          {clients.map((client) => (
            <span key={client} className="font-medium">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
