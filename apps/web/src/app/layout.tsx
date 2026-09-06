import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { Provider } from "@/src/components/common/provider"
import { siteConfig } from "../config/site"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "designali — Design & Code",
  description:
    "Where thoughtful design meets production-ready code. I design and build digital experiences that look great, feel intuitive, and work beautifully.",
  keywords: [
    "UI UX Design",
    "Web Design",
    "Frontend Development",
    "React",
    "Next.js",
    "Design Engineering",
  ],
  authors: [{ name: "Ali Imam" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  creator: "Ali Imam",
  openGraph: {
    title: "designali — Design & Code",
    description:
      "Where thoughtful design meets production-ready code. I design and build digital experiences that look great, feel intuitive, and work beautifully.",
    url: process.env.NEXT_PUBLIC_SITE_URL!,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og.jpg`,
        width: 1920,
        height: 1080,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og.jpg`],
    creator: "@designali-com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <Provider>
          <div className="bg-white dark:bg-black">{children}</div>
        </Provider>
      </body>
    </html>
  )
}
