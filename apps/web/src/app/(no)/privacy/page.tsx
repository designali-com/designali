import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import { siteConfig } from "@/src/config/site"

const title = "Privacy Policy"
const description = `How ${siteConfig.name} and the CopyCode extension collect, use and protect your information.`
const lastUpdated = "November 18, 2026"
const contactEmail = "hello@designali.com"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          This policy explains what information {siteConfig.name} (&quot;we&quot;,
          &quot;us&quot;) collects when you use{" "}
          <Link href="/">{siteConfig.url.replace("https://", "")}</Link> (the
          &quot;Site&quot;) and the CopyCode browser extension (the
          &quot;Extension&quot;), how we use it, and the choices you have.
        </p>
        <p>
          The short version: we collect only what we need to run your account
          and deliver the resources you download. We don&apos;t sell your data,
          and the CopyCode extension doesn&apos;t collect or transmit any data
          at all.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <h3>Account information</h3>
        <p>
          When you sign in with Google or GitHub, we receive your name, email
          address and profile image from that provider. We store these to
          create and identify your account. We never see or store your Google
          or GitHub password.
        </p>
        <h3>Usage of resources</h3>
        <p>
          When you download a template or other resource, we record which item
          you downloaded, when, and any license key issued for it, so you can
          access your downloads again and we can honor your license.
        </p>
        <h3>Subscriptions and teams</h3>
        <p>
          If you subscribe to a paid plan, we store your plan, its status and
          billing period. Payments are handled by our payment provider; we do
          not store your full card details. If you join or create a team, we
          store the organization, its members and pending invitations.
        </p>
        <h3>Analytics</h3>
        <p>
          We use Vercel Analytics to understand how the Site is used (for
          example, which pages are visited and from which country or device
          type). It is privacy-friendly, does not use cookies for tracking and
          does not identify you personally.
        </p>
        <h3>Technical data</h3>
        <p>
          Like most websites, our servers and hosting provider automatically
          log standard request data such as IP address, browser type and
          timestamps, for security and to keep the Site running.
        </p>
      </>
    ),
  },
  {
    id: "copycode-extension",
    title: "CopyCode extension",
    content: (
      <>
        <p>
          CopyCode runs entirely in your browser. When you activate it on a
          tab, it reads the page you chose so it can turn the element you
          select into code or an image, and writes the result to your
          clipboard.
        </p>
        <ul>
          <li>
            <strong>No data collection.</strong> The Extension does not
            collect, store or transmit personal information, browsing history,
            page content or clipboard content.
          </li>
          <li>
            <strong>No network requests to us.</strong> Nothing you copy is
            sent to {siteConfig.name} or any third party. All processing
            happens locally on your device.
          </li>
          <li>
            <strong>Local preferences only.</strong> Your last-used tab and
            formats are saved with Chrome&apos;s local storage on your device
            so the toolbar opens the way you left it. Removing the Extension
            deletes them.
          </li>
          <li>
            <strong>No analytics, ads or tracking</strong> of any kind.
          </li>
        </ul>
        <p>The Extension requests these permissions, used only as described:</p>
        <ul>
          <li>
            <code>activeTab</code> and <code>scripting</code>: to run the
            picker on the tab where you click the CopyCode icon or press the
            shortcut, and only on that tab.
          </li>
          <li>
            <code>clipboardWrite</code>: to put the copied code or image on
            your clipboard.
          </li>
          <li>
            <code>storage</code>: to remember your tab and format
            preferences locally.
          </li>
        </ul>
        <p>
          The use of information received by the Extension complies with the
          Chrome Web Store User Data Policy, including the Limited Use
          requirements.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    content: (
      <ul>
        <li>To create, secure and maintain your account.</li>
        <li>To deliver downloads, licenses and paid-plan features.</li>
        <li>
          To send transactional emails, such as sign-in links, team
          invitations and billing notices.
        </li>
        <li>To understand usage in aggregate and improve the Site.</li>
        <li>To prevent abuse and comply with legal obligations.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and service providers",
    content: (
      <>
        <p>
          We do not sell or rent your personal information. We share it only
          with providers that help us run the Site, under their own privacy
          commitments:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong>: hosting and privacy-friendly analytics.
          </li>
          <li>
            <strong>Neon</strong>: database hosting for account and download
            records.
          </li>
          <li>
            <strong>Resend</strong>: delivery of transactional emails.
          </li>
          <li>
            <strong>Google and GitHub</strong>: sign-in, when you choose
            them.
          </li>
          <li>
            <strong>Our payment provider</strong>: processing paid plans.
          </li>
        </ul>
        <p>
          We may also disclose information if required by law or to protect
          the rights and safety of our users and the Site.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        We use essential cookies to keep you signed in and to secure your
        session. We don&apos;t use advertising or cross-site tracking cookies.
        Blocking cookies in your browser will sign you out and may stop parts
        of the Site from working.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention and security",
    content: (
      <p>
        We keep your account information for as long as your account is
        active. If you delete your account, we delete or anonymize your
        personal information, except where we must keep certain records (for
        example, billing) to meet legal obligations. Data is sent over HTTPS
        and stored with access controls, but no method of storage or
        transmission is completely secure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <p>
        Depending on where you live, you may have the right to access,
        correct, export or delete your personal information, or to object to
        or restrict certain processing. To make a request, email us at{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We&apos;ll
        respond within a reasonable time and may need to verify your identity
        first.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        The Site and the Extension are not directed to children under 13, and
        we don&apos;t knowingly collect personal information from them. If you
        believe a child has given us information, contact us and we&apos;ll
        delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we&apos;ll
        change the &quot;Last updated&quot; date above, and for significant
        changes we&apos;ll let signed-in users know by email or on the Site.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about this policy or your data? Email{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-20 pb-24 md:px-8">
      <section className="flex flex-col items-center gap-5 text-center">
        <span className="border px-3 py-1 text-xs text-muted-foreground">
          Legal
        </span>
        <h1
          className={cn(
            "max-w-3xl text-4xl tracking-tight text-balance md:text-5xl",
            "animate-in duration-500 ease-out fill-mode-backwards fade-in slide-in-from-bottom-10"
          )}
        >
          Privacy Policy
        </h1>
        <p className="max-w-xl text-sm text-balance text-muted-foreground md:text-base">
          {description}
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated {lastUpdated}
        </p>
      </section>

      <div className="mt-16 grid gap-10 md:grid-cols-[200px_1fr]">
        <nav aria-label="On this page" className="hidden md:block">
          <div className="sticky top-24 flex flex-col gap-1 text-sm">
            <p className="mb-2 text-xs text-muted-foreground uppercase">
              On this page
            </p>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <article className="flex min-w-0 flex-col border-t">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className={cn(
                "scroll-mt-24 border-b py-8",
                "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4",
                "[&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs",
                "[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_h3:first-child]:mt-0",
                "[&_li]:pl-1 [&_p+p]:mt-3 [&_p+ul]:mt-3 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul+p]:mt-3"
              )}
            >
              <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}
