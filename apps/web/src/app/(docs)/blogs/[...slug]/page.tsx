//@ts-nocheck

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { BlogPosting, WithContext } from "schema-dts"

import { mdxComponents } from "@/mdx-components"
import { BlogTableOfContents } from "@/src/components/docs/table-of-contents"
import { siteConfig } from "@/src/config/site"
import { blogSource } from "@/src/lib/source"
import {
  absoluteUrl,
  calculateReadingTime,
  formatDate,
} from "@/src/lib/utils"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export function generateStaticParams() {
  return blogSource.generateParams()
}

async function getDocFromParams({ params }: PageProps) {
  const { slug } = await params

  const page = blogSource.getPage(slug)

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return { doc, page }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params })

  return {
    title: `${doc.title} | ${siteConfig.name}`,
    description: doc.description,

    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),

      images: doc.image
        ? [
          {
            url: doc.image,
            width: 1200,
            height: 630,
            alt: doc.title,
          },
        ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: doc.image ? [doc.image] : undefined,
    },

    authors: [
      {
        name: doc.author || siteConfig.name,
      },
    ],
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { doc, page } = await getDocFromParams({ params })

  const MDX = doc.body

  const structuredData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: doc.title,
    description: doc.description,

    url: absoluteUrl(page.url),

    datePublished: doc.publishedOn,
    dateModified: doc.publishedOn,

    author: {
      "@type": "Person",
      name: doc.author || "Designali",
    },

    image: doc.image ? [doc.image] : undefined,

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,

      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url.replace(/\/$/, "")}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(page.url),
    },

    wordCount: doc.content
      ? doc.content.split(/\s+/).length
      : 0,

    timeRequired: `PT${calculateReadingTime(doc.content || "")}M`,

    keywords: (() => {
      const docTag = doc.tag

      if (!docTag) {
        return undefined
      }

      return Array.isArray(docTag)
        ? docTag
        : [docTag]
    })(),

    inLanguage: "en-US",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div
        data-slot="blocks"
        className="flex items-stretch mt-10 xl:w-full"
      >
        <div className="flex min-w-0 flex-1 flex-col"> 
          <div className="flex min-w-0 flex-1 flex-col gap-10 px-6 pb-10 md:gap-20 lg:px-10">
            <article className="mt-6 lg:mt-10">
              {/* Hero */}
              <div>
                {doc.image && (
                  <div className="relative flex justify-center border p-1">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="h-[300px] w-full border object-cover invert-0 dark:invert"
                    />
                  </div>
                )}

                {/* Title & Description */}
                <div className="mx-auto flex flex-col items-center justify-center gap-y-2 py-6">
                  <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-2">
                    <h1 className="text-center text-3xl font-semibold tracking-tighter text-balance md:text-5xl">
                      {doc.title}
                    </h1>

                    <p className="text-secondary-foreground text-center text-balance md:text-lg">
                      {doc.description}
                    </p>

                    {doc.publishedOn && (
                      <time className="text-secondary-foreground text-sm">
                        {formatDate(doc.publishedOn)}
                      </time>
                    )}
                  </div>
                </div>

                {/* Reading Time & Tags */}
                <div className="text-secondary-foreground flex items-center justify-center gap-x-2 border p-3 text-sm">
                  <span>
                    {calculateReadingTime(doc.content)} min read
                  </span>

                  {(() => {
                    const docTag = doc.tag

                    const tags = docTag
                      ? Array.isArray(docTag)
                        ? docTag
                        : [docTag]
                      : []

                    return (
                      tags.length > 0 && (
                        <>
                          <span>·</span>

                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => (
                              <Link
                                key={tag}
                                href={`/blogs?tag=${encodeURIComponent(tag)}`}
                                className="border-border bg-primary/5 hover:bg-primary/10 rounded-full border px-2.5 py-0.5 transition-colors"
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>
                        </>
                      )
                    )
                  })()}
                </div>
              </div>

              {/* Article */}
              <div className="grid grid-cols-1 gap-x-1 pt-10 lg:grid-cols-7">
                <div className="article-content col-span-5">
                  <MDX components={mdxComponents} />
                </div>

                {/* Article Sidebar */}
                <div className="text-primary sticky top-16 col-span-2 hidden h-fit w-full flex-col items-start justify-start p-5 lg:flex">
                  <div className="h-10" />
                </div>
              </div>
            </article>
          </div>
        </div>

        <aside className="sticky top-10 hidden h-screen w-[12rem] shrink-0 border-l border-dotted xl:block">
          <div className="h-full overflow-y-auto p-4">
            <BlogTableOfContents />
          </div>
        </aside>

      </div>
    </>
  )
}