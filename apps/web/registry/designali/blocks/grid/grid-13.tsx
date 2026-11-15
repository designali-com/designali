import {
  Cpu,
  Fingerprint,
  HardDrive,
  type LucideIcon,
  Network,
  RefreshCw,
  ScanEye,
  ShieldCheck,
  Timer,
} from "lucide-react"

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "SOC 2 Type II", text: "Audited annually by an independent firm. Report available under NDA." },
  { icon: Fingerprint, title: "SSO & SCIM", text: "SAML with Okta, Entra and Google. Users provision and deprovision automatically." },
  { icon: HardDrive, title: "Data residency", text: "Pin workspaces to EU, US or APAC regions. Data never leaves its region." },
  { icon: ScanEye, title: "Audit logs", text: "Every permission change and export, streamed to your SIEM in real time." },
  { icon: Network, title: "Private networking", text: "Connect over private link. No traffic crosses the public internet." },
  { icon: RefreshCw, title: "Point-in-time restore", text: "Roll any project back to any minute in the last 35 days." },
  { icon: Cpu, title: "Dedicated compute", text: "Isolated build runners sized to your workloads, billed per minute." },
  { icon: Timer, title: "99.99% uptime SLA", text: "Financially backed, with a status page and 15-minute incident response." },
]

export default function Grid13() {
  return (
    <section className="w-full bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-background/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs text-background/60">Northwind for Enterprise</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Security your procurement team will actually sign off on.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center bg-background px-6 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Download security whitepaper
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-foreground p-6 lg:p-8">
              <feature.icon className="size-5 text-background/70" />
              <h3 className="mt-6 font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-background/60">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
