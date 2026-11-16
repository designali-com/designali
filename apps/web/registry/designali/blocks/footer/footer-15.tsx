import {
  ArrowUpRight,
  Mail,
  AtSign,
  MessageSquare,
} from "@designali/icons"

const offices = [
  {
    city: "New projects",
    zone: "Brand, UI/UX and web",
    address: ["Brand identity, UI/UX design", "and Next.js development"],
    phone: "hello@designali.com",
    tone: "from-chart-1/30",
  },
  {
    city: "Support",
    zone: "Templates and blocks",
    address: ["Help with installing and", "customising Designali products"],
    phone: "support@designali.com",
    tone: "from-chart-2/30",
  },
  {
    city: "Billing",
    zone: "Plans and invoices",
    address: ["Questions about pricing,", "licences and invoices"],
    phone: "billing@designali.com",
    tone: "from-chart-4/30",
  },
]

const legal = ["Terms", "Privacy", "License", "Docs"]

export default function Footer15() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">designali</p>
            <p className="mt-2 max-w-md text-2xl font-medium tracking-tight md:text-3xl">
              Design and development for brands that want to stand out.
            </p>
          </div>
          <a href="mailto:hello@designali.com" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Mail className="size-4" />
            hello@designali.com
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offices.map((office) => (
            <a
              key={office.city}
              href={`mailto:${office.phone}`}
              className={`group flex flex-col justify-between border bg-gradient-to-br to-transparent p-6 transition-colors hover:border-foreground/40 ${office.tone}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-medium">{office.city}</p>
                  <p className="text-xs text-muted-foreground">{office.zone}</p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-10 space-y-2 text-sm text-muted-foreground">
                <p className="flex gap-2">
                  <MessageSquare className="mt-0.5 size-4 shrink-0" />
                  <span>
                    {office.address[0]}
                    <br />
                    {office.address[1]}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <AtSign className="size-4 shrink-0" />
                  {office.phone}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 Designali. Designed and built by Ali Imam. Design se code
            tak.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((item) => (
              <a key={item} href="#" className="hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
