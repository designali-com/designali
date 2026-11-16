import {
  ArrowRight,
  Baby,
  BookOpen,
  HeartPulse,
  Laptop,
  TreePalm as Palmtree,
  PiggyBank,
  Plane,
  Sprout,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const perks = [
  { icon: HeartPulse, title: "Full health cover", body: "Medical, dental and vision for you and dependants, 100% paid." },
  { icon: Palmtree, title: "30 days off", body: "Plus local holidays, and a mandatory week off in December." },
  { icon: Baby, title: "20 weeks parental leave", body: "Fully paid, for every parent, however your family grows." },
  { icon: Laptop, title: "$3,000 setup budget", body: "Desk, chair, screen, whatever helps you do your best work." },
  { icon: BookOpen, title: "$2,000 learning budget", body: "Courses, books and conferences. No approval needed under $200." },
  { icon: PiggyBank, title: "Pension match", body: "We match contributions up to 6% of salary from day one." },
  { icon: Plane, title: "Work from anywhere", body: "Up to 8 weeks a year from any country with good wifi." },
  { icon: Sprout, title: "Equity for everyone", body: "Meaningful stock options with a 10-year exercise window." },
]

export default function Sections20() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Benefits</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            We take care of the basics so you can focus on the work.
          </h2>
        </div>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <li key={perk.title} className="group bg-background p-6 transition-colors hover:bg-muted/50">
              <span className="flex size-10 items-center justify-center border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                <perk.icon className="size-4" />
              </span>
              <h3 className="mt-6 text-base font-semibold">{perk.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{perk.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-6 bg-foreground p-8 text-background md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-2xl font-semibold tracking-tight">12 roles open across 5 teams</p>
            <p className="mt-1 text-sm opacity-70">Remote within UTC-5 to UTC+3. Salary bands on every listing.</p>
          </div>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            nativeButton={false}
            render={<a href="#" />}
          >
            View open roles
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
