import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRightIcon,
  BracesIcon,
  ClipboardCheckIcon,
  CodeIcon,
  DownloadIcon,
  ImageIcon,
  LayoutIcon,
  LayersIcon,
  MonitorSmartphoneIcon,
  MousePointerClickIcon,
  PenToolIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TypeIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const VERSION = "0.3.0"
const DOWNLOAD_URL = "https://github.com/designali-com/designali/blob/main/tools/copycode/README.md"

export const metadata: Metadata = {
  title: "CopyCode: copy any element from any website",
  description:
    "A Chrome extension that copies any block on a web page as Next.js + shadcn/ui + Tailwind TSX, HTML, SVG or an image, ready to paste into your editor, Figma or Paper.",
  openGraph: {
    title: "CopyCode",
    description:
      "Copy any element from any website as TSX, HTML, SVG or an image.",
  },
}

const features = [
  {
    icon: BracesIcon,
    title: "Next.js + shadcn/ui TSX",
    description:
      "shadcn components are detected by data-slot and mapped to real <Button>, <Card> and <Input> imports, with only the classes the site added on top.",
  },
  {
    icon: MonitorSmartphoneIcon,
    title: "Truly responsive",
    description:
      "The page is replayed at mobile width and every breakpoint, so you get mobile-first classes like flex-col md:flex-row, not a snapshot of one screen.",
  },
  {
    icon: SparklesIcon,
    title: "Exact to your theme",
    description:
      "Classes come from computed CSS and are checked against your project's tokens. rounded-xl is used only when it means 12px in your theme too.",
  },
  {
    icon: LayoutIcon,
    title: "Paste into Figma",
    description:
      "SVG copies land in Figma as named frames, rectangles, text layers, images and vector icons.",
  },
  {
    icon: PenToolIcon,
    title: "Paste into Paper",
    description:
      "Code copies also carry inline-styled HTML, which Paper pastes as frames with their flex layout intact.",
  },
  {
    icon: TypeIcon,
    title: "Fonts and icons resolved",
    description:
      "Hashed next/font names turn back into Inter, and lucide icons become <ArrowRightIcon /> from lucide-react.",
  },
]

const formats = [
  {
    value: "tsx",
    label: "TSX",
    icon: CodeIcon,
    lines: [
      'import { Button } from "@/components/ui/button"',
      'import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"',
      "",
      "export function SignupCard() {",
      "  return (",
      '    <Card className="w-full max-w-sm">',
      "      <CardHeader>",
      "        <CardTitle>Create account</CardTitle>",
      "      </CardHeader>",
      '      <CardFooter className="flex-col gap-2 sm:flex-row sm:justify-end">',
      '        <Button variant="outline">Cancel</Button>',
      '        <Button size="lg">Continue</Button>',
      "      </CardFooter>",
      "    </Card>",
      "  )",
      "}",
    ],
  },
  {
    value: "html",
    label: "HTML",
    icon: LayersIcon,
    lines: [
      '<div style="display:flex;flex-direction:column;gap:24px;',
      '  width:384px;padding:24px;border-radius:12px;',
      '  border:1px solid #e5e5e5;background:#ffffff">',
      '  <h3 style="font-size:16px;font-weight:600">Create account</h3>',
      '  <div style="display:flex;justify-content:flex-end;gap:8px">',
      '    <button style="height:36px;padding:0 16px;border-radius:8px;',
      '      border:1px solid #e5e5e5">Cancel</button>',
      '    <button style="height:40px;padding:0 24px;border-radius:8px;',
      '      background:#171717;color:#fafafa">Continue</button>',
      "  </div>",
      "</div>",
    ],
  },
  {
    value: "svg",
    label: "SVG",
    icon: ImageIcon,
    lines: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="384" height="148">',
      '  <g id="div.card">',
      '    <rect width="384" height="148" rx="12" fill="#fff"',
      '      stroke="#e5e5e5" />',
      '    <text x="24" y="44" font-size="16" font-weight="600">',
      "      Create account",
      "    </text>",
      '    <g id="button"><rect x="196" y="88" width="80" height="36"',
      '      rx="8" fill="none" stroke="#e5e5e5" /></g>',
      "  </g>",
      "</svg>",
    ],
  },
]

const steps = [
  {
    icon: MousePointerClickIcon,
    title: "Open the toolbar",
    description: (
      <>
        Click the CopyCode icon or press{" "}
        <KbdGroup>
          <Kbd>Alt</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>{" "}
        on any page.
      </>
    ),
  },
  {
    icon: LayersIcon,
    title: "Pick a block",
    description: (
      <>
        Hover to highlight, use <Kbd>↑</Kbd> <Kbd>↓</Kbd> to move to the
        parent or child, and press <Kbd>Enter</Kbd>.
      </>
    ),
  },
  {
    icon: ClipboardCheckIcon,
    title: "Paste anywhere",
    description:
      "One copy holds several formats. Your editor, Figma and Paper each take the one they understand.",
  },
]

const pasteTargets = [
  { copy: "Code · TSX / HTML", editor: "The code", paper: "Frames and text layers", figma: "Code as text" },
  { copy: "Code · SVG, Image · SVG", editor: "SVG code", paper: "SVG", figma: "Vector layers" },
  { copy: "Image · PNG / JPG", editor: "—", paper: "Image", figma: "Image" },
]

const installSteps = [
  "Download and unzip copycode.zip.",
  "Open chrome://extensions in Chrome, Arc, Brave or Edge.",
  "Turn on Developer mode (top right).",
  "Click Load unpacked and choose the unzipped folder.",
  "Pin CopyCode to your toolbar.",
]

export default function CopyCodePage() {
  return (
    <div className="mt-10 flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top,black,transparent_70%)] bg-size-[32px_32px] opacity-60"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center md:py-24">
          <Image
            src="/downloads/copycode-icon.png"
            alt="CopyCode"
            width={64}
            height={64}
            className="rounded-2xl shadow-sm"
            priority
          />
          <Badge variant="outline" className="gap-1.5">
            <ShieldCheckIcon />
            Chrome extension · v{VERSION}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Copy any element from any website
          </h1>
          <p className="max-w-2xl text-base text-pretty text-muted-foreground md:text-lg">
            Select a block on a page and get it back as responsive{" "}
            <span className="text-foreground">Next.js + shadcn/ui + Tailwind</span>{" "}
            code, HTML, SVG or an image. Paste it into your editor, Figma or
            Paper.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              size="lg"
              render={<a href={DOWNLOAD_URL} download />}
              nativeButton={false}
            >
              <DownloadIcon />
              Download for Chrome
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#how-it-works" />}
              nativeButton={false}
            >
              How it works
              <ArrowRightIcon />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Free · Works offline · Only reads the tab you activate it on
          </p>
        </div>
      </section>

      <section className="relative border mx-auto w-full max-w-6xl aspect-video overflow-hidden">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/giPQ8kFGU7Y?si=GpQn_rEU2D7alnrr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>

      {/* Format preview */}
      <section className="border-b px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              One click, the format you need
            </h2>
            <p className="text-muted-foreground">
              Choose <strong className="text-foreground">Code</strong> for TSX,
              HTML or SVG, or <strong className="text-foreground">Image</strong>{" "}
              for PNG, JPG or SVG. Switch with <Kbd>C</Kbd> / <Kbd>I</Kbd> and{" "}
              <Kbd>1</Kbd>–<Kbd>3</Kbd> without leaving the page.
            </p>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">TSX</span> — shadcn components,
                next/link, next/image, lucide icons
              </li>
              <li>
                <span className="text-foreground">HTML</span> — inline styles,
                exactly as rendered
              </li>
              <li>
                <span className="text-foreground">SVG</span> — vector layers for
                Figma and Paper
              </li>
            </ul>
          </div>

          <Tabs defaultValue="tsx" className="min-w-0">
            <TabsList>
              {formats.map((f) => (
                <TabsTrigger key={f.value} value={f.value}>
                  <f.icon />
                  {f.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {formats.map((f) => (
              <TabsContent key={f.value} value={f.value}>
                <div className="overflow-hidden rounded-xl border bg-muted/40">
                  <div className="flex items-center gap-1.5 border-b px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      signup-card.{f.value}
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed md:text-[13px]">
                    <code>{f.lines.join("\n")}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="border-b px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Not a screenshot. Real, reusable code.
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              CopyCode reads the browser&apos;s computed styles and rebuilds the
              block the way you would have written it.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-3 bg-background p-6">
                <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
                  <f.icon className="size-4" />
                </div>
                <h3 className="font-medium">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-16 border-b px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight md:text-3xl">
            How it works
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-3 rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {i + 1}
                  </span>
                  <s.icon className="size-4 text-muted-foreground" />
                </div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">You copy</th>
                  <th className="px-4 py-3 font-medium">Code editor</th>
                  <th className="px-4 py-3 font-medium">Paper</th>
                  <th className="px-4 py-3 font-medium">Figma</th>
                </tr>
              </thead>
              <tbody>
                {pasteTargets.map((row) => (
                  <tr key={row.copy} className="border-t">
                    <td className="px-4 py-3 font-medium">{row.copy}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.editor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.paper}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.figma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-2xl border bg-muted/30 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Install in under a minute
            </h2>
            <p className="text-muted-foreground">
              No account, no build step. CopyCode only asks for access to the
              tab you activate it on and the clipboard.
            </p>
            <div>
              <Button
                size="lg"
                render={<a href={DOWNLOAD_URL} download />}
                nativeButton={false}
              >
                <DownloadIcon />
                Download copycode.zip
              </Button>
            </div>
          </div>
          <ol className="grid gap-3">
            {installSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs font-medium">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-muted-foreground">
          HTML, SVG and images capture the current width; TSX is responsive.
          Cross-origin iframes, closed shadow roots and chrome:// pages
          can&apos;t be read.
        </p>
      </section>
    </div>
  )
}
