import { ArrowUpRight, MapPin } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const experience = [
  { role: "Design Director", company: "Fathom Studio", period: "2023 – Now" },
  { role: "Senior Product Designer", company: "Linear Health", period: "2020 – 2023" },
  { role: "Product Designer", company: "Papercraft", period: "2017 – 2020" },
]

const highlights = [
  { title: "Fieldnote", subtitle: "Research notebook app", tag: "Product" },
  { title: "Kinfolk Ceramics", subtitle: "Identity & packaging", tag: "Brand" },
  { title: "Signal 2026", subtitle: "Conference system", tag: "Event" },
]

const clients = ["Halcyon", "Northwind", "Lumen", "Atlas", "Meridian", "Folio"]

export default function Portfolio05() {
  return (
    <section className="w-full bg-background px-6 py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-px border border-border bg-border md:grid-cols-3">
        <div className="bg-background p-8 md:col-span-2 md:p-10">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              JM
            </span>
            <div>
              <p className="font-medium">Jordan Mercer</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" />
                Copenhagen, Denmark
              </p>
            </div>
          </div>
          <h2 className="mt-8 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            Designer working across brand and product, with a soft spot for tools
            people use all day.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#" />}>Get in touch</Button>
            <Button variant="outline" nativeButton={false} render={<a href="#" />}>
              Download CV
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
            Available from January 2027
          </span>
        </div>

        {highlights.map((item, i) => (
          <a key={item.title} href="#" className="group flex flex-col bg-background p-6">
            <div
              className="aspect-video w-full border border-border"
              style={{
                background: `linear-gradient(${120 + i * 40}deg, var(--chart-${i + 1}), transparent)`,
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
          <span className="text-xs tracking-widest uppercase">Worked with</span>
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
