import { ArrowUp, BookOpen } from "lucide-react"

const sections = [
  {
    id: "faq-accounts",
    title: "Accounts and access",
    items: [
      {
        q: "Who can create a Harbor workspace?",
        a: "Anyone with a work email can create a workspace. The person who creates it becomes the owner and can transfer ownership later from Settings.",
      },
      {
        q: "Can I belong to more than one workspace?",
        a: "Yes. Switch between workspaces from the menu in the top left. Each workspace has its own billing, members and permissions.",
      },
      {
        q: "How do I reset two-factor authentication?",
        a: "Use one of your backup codes to sign in, then set up a new device under Security. If you've lost your codes, a workspace owner can reset 2FA for you.",
      },
    ],
  },
  {
    id: "faq-projects",
    title: "Projects and files",
    items: [
      {
        q: "Is there a limit on file size?",
        a: "Single uploads can be up to 5 GB on paid plans and 250 MB on the free plan. Large video files are streamed, so reviewers don't have to download them.",
      },
      {
        q: "Can I restore an earlier version?",
        a: "Every file keeps a full version history. Open the file, choose History and restore any version. The current version is kept, so nothing is lost.",
      },
      {
        q: "How do I share a project with someone outside my company?",
        a: "Create a guest link with view or comment access. You can add a password, an expiry date and turn off downloads for sensitive work.",
      },
    ],
  },
  {
    id: "faq-billing",
    title: "Plans and billing",
    items: [
      {
        q: "What counts as a paid seat?",
        a: "Members who can create or edit projects. Guests and viewers are always free, no matter how many you invite.",
      },
      {
        q: "Can I pay by invoice?",
        a: "Annual plans of ten seats or more can pay by bank transfer with 30-day terms. Contact sales and we'll set it up the same day.",
      },
    ],
  },
  {
    id: "faq-security",
    title: "Security and compliance",
    items: [
      {
        q: "Where is my data stored?",
        a: "Workspaces are hosted in the US or the EU, chosen when you create the workspace. Files are encrypted at rest and replicated across three availability zones.",
      },
      {
        q: "Do you support single sign-on?",
        a: "SAML SSO and SCIM provisioning are available on the Enterprise plan, along with audit logs and custom data retention policies.",
      },
    ],
  },
]

export default function Faqs18() {
  return (
    <section id="faq-top" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl border-b border-border pb-10">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <BookOpen className="size-3.5" />
            Harbor help guide
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Everything about accounts, files, billing and security in one
            place. Last updated 3 November 2026.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav
            aria-label="FAQ sections"
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
              On this page
            </p>
            <ol className="mt-4 grid gap-1 border-s border-border sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ms-px flex gap-3 border-s border-transparent py-1.5 ps-4 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    <span className="font-mono text-xs leading-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="#faq-top"
              className="mt-6 hidden items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground lg:inline-flex"
            >
              <ArrowUp className="size-3.5" />
              Back to top
            </a>
          </nav>
          <div className="min-w-0 space-y-16">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <dl className="mt-6 space-y-8">
                  {section.items.map((item) => (
                    <div key={item.q}>
                      <dt className="text-base font-medium">{item.q}</dt>
                      <dd className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
            <div className="border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
              Still stuck? Email{" "}
              <a
                href="#"
                className="text-foreground underline underline-offset-4"
              >
                help@harbor.app
              </a>{" "}
              and we&apos;ll reply within one working day.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
