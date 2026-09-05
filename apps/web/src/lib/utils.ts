 
import process from "process"

import type { Metadata } from "next"

import { siteConfig } from "@/src/config/site"

export const pluralize = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? "" : "s"}`

export function humanize(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/\s+/)
    //@ts-ignore
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ")
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str

  return `${str.slice(0, length - 3)}...`
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

/**
 * Capitalizes first letters of words in string.
 */
export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(
    /(?:^|\s|["'([{])+\S/g,
    (match) => match.toUpperCase()
  )

export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const calculateReadingTime = (content: string): number => {
  const words = content?.trim().split(/\s+/).filter(Boolean).length ?? 0

  return Math.max(1, Math.ceil(words / 200))
}

export const normalizeTag = (tag: unknown): string[] => {
  if (!tag) return []

  return Array.isArray(tag)
    ? tag.filter((t): t is string => typeof t === "string")
    : [String(tag)]
}

const getBaseUrl = (): string => {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim()

  if (!configuredUrl) {
    return siteConfig.url
  }

  let url = configuredUrl.replace(/\/$/, "")

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }

  try {
    new URL(url)
    return url
  } catch {
    return siteConfig.url
  }
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return new URL(normalizedPath, `${getBaseUrl()}/`).toString()
}

export function constructMetadata({
  title = "Designali - Design, UI Components & Templates",
  description = "Designali is a modern design system and creative platform for designers and developers, featuring UI components, blocks, templates, icons, illustrations, and more.",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string
  description?: string
  image?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
    title,
    description,

    keywords: [
      "Designali",
      "Design System",
      "UI Components",
      "React",
      "Next.js",
      "Tailwind CSS",
      "UI Blocks",
      "Web Design",
      "Web Development",
      "Templates",
      "Icons",
      "Illustrations",
      "Figma",
      "Design Resources",
    ],

    openGraph: {
      title,
      description,
      type: "website",
      url: getBaseUrl(),
      siteName: "Designali",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    icons: {
      icon: "/favicon.ico",
    },

    metadataBase: new URL(getBaseUrl()),

    authors: [
      {
        name: "Designali",
        url: getBaseUrl(),
      },
    ],

    creator: "Designali",
    publisher: "Designali",

    ...props,
  }
} 