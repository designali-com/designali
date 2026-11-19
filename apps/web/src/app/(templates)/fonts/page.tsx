import type { Metadata } from "next"
import { Download } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { CopyBlock, FontTester } from "@/src/components/others/font-tester"
import {
  DESIGNALI_MONO_WEIGHTS,
  designaliMono,
} from "@/src/lib/fonts/designali-mono"

export const metadata: Metadata = {
  title: "Designali Mono — Free Monospace Font",
  description:
    "Designali Mono is a free, open-source monospace font for design and code. 8 weights, variable font, webfonts and a terminal build.",
}

const GITHUB_URL = "https://github.com/designali-com/fonts"
const DOWNLOAD_URL = "/downloads/designali-mono.zip"

const GLYPHS = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!@#$%^&*()_+-=[]{}|;':\",./<>?`~\\",
]

const CODE_SAMPLE = `// designali — design se code tak
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const ok = slugify("Hello World") === "hello-world" // true
if (count >= 10 && count !== 0) { /* 0O 1lI */ }`

const CSS_SNIPPET = `@font-face {
  font-family: "Designali Mono";
  src: url("DesignaliMono[wght].woff2") format("woff2-variations");
  font-weight: 100 800;
  font-display: swap;
}

code, pre {
  font-family: "Designali Mono", ui-monospace, monospace;
}`

const NEXT_SNIPPET = `import localFont from "next/font/local"

const designaliMono = localFont({
  src: "./DesignaliMono[wght].woff2",
  weight: "100 800",
  variable: "--font-mono",
})`

const FORMATS = [
  { name: "TTF", detail: "8 static weights" },
  { name: "OTF", detail: "8 static weights" },
  { name: "Variable", detail: "wght 100 – 800" },
  { name: "WOFF2", detail: "Web fonts" },
  { name: "Term", detail: "Strict mono for terminals" },
]

export default function FontsPage() {
  return (
    <div className={cn("mt-10 w-full", designaliMono.variable)}>
      {/* Hero */}
      <section className="flex flex-col gap-6 border-b px-3 py-16 md:py-24">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Free · Open Source · OFL 1.1
        </p>
        <h1 className="font-(family-name:--font-designali-mono) text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          Designali Mono
        </h1>
        <p className="max-w-xl text-muted-foreground">
          A beautiful monospace font for design and code. Available in 8
          weights, as a variable font, webfonts and a strictly monospaced Term
          build for your terminal.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            size="md"
            render={<a href={DOWNLOAD_URL} download />}
            nativeButton={false}
          >
            <Download />
            Download Font
          </Button>
          <Button
            size="md"
            variant="outline"
            render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}
            nativeButton={false}
          >
            View on GitHub
          </Button>
        </div>
      </section>

      {/* Type tester */}
      <SectionTitle>Type Tester</SectionTitle>
      <FontTester />

      {/* Weights */}
      <SectionTitle>Weights</SectionTitle>
      <div className="grid border-b sm:grid-cols-2 lg:grid-cols-4">
        {DESIGNALI_MONO_WEIGHTS.map((w) => (
          <div
            key={w.value}
            className="flex flex-col gap-6 border-r border-b p-4 last:border-r-0"
          >
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{w.name}</span>
              <span>{w.value}</span>
            </div>
            <p
              className="font-(family-name:--font-designali-mono) text-5xl"
              style={{ fontWeight: w.value }}
            >
              Aa
            </p>
            <p
              className="truncate font-(family-name:--font-designali-mono) text-sm"
              style={{ fontWeight: w.value }}
            >
              The quick brown fox jumps
            </p>
          </div>
        ))}
      </div>

      {/* Code */}
      <SectionTitle>In Code</SectionTitle>
      <div className="border-b p-3">
        <CopyBlock code={CODE_SAMPLE} />
      </div>

      {/* Glyphs */}
      <SectionTitle>Characters</SectionTitle>
      <div className="flex flex-col gap-4 border-b p-3 md:p-6">
        {GLYPHS.map((row) => (
          <p
            key={row}
            className="font-(family-name:--font-designali-mono) text-2xl tracking-wide break-all md:text-4xl"
          >
            {row}
          </p>
        ))}
      </div>

      {/* Formats */}
      <SectionTitle>What&apos;s Included</SectionTitle>
      <div className="grid grid-cols-2 border-b md:grid-cols-5">
        {FORMATS.map((f) => (
          <div key={f.name} className="border-r border-b p-4 md:border-b-0">
            <p className="font-(family-name:--font-designali-mono) text-xl font-semibold">
              {f.name}
            </p>
            <p className="text-xs text-muted-foreground">{f.detail}</p>
          </div>
        ))}
      </div>

      {/* Usage */}
      <SectionTitle>Use on the Web</SectionTitle>
      <div className="grid gap-3 border-b p-3 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">CSS</p>
          <CopyBlock code={CSS_SNIPPET} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">Next.js</p>
          <CopyBlock code={NEXT_SNIPPET} />
        </div>
      </div>

      {/* License */}
      <section className="flex flex-col gap-2 px-3 py-10 text-sm text-muted-foreground">
        <p>
          Designali Mono is licensed under the{" "}
          <a
            href="https://openfontlicense.org"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            SIL Open Font License 1.1
          </a>
          . Free for personal and commercial use.
        </p>
      </section>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b p-3">
      <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
    </div>
  )
}
