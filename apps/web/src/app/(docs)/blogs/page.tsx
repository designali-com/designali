 
import type { Metadata } from "next"
import Link from "next/link"
import type { Blog, WithContext } from "schema-dts"

import { siteConfig } from "@/src/config/site"
import { blogSource } from "@/src/lib/source"
import {
  constructMetadata,
  formatDate,
  normalizeTag,
} from "@/src/lib/utils"

const title = "Blogs"

const description =
  "Explore the latest insights from Designali on design, development, UI systems, branding, and digital experiences."

export const metadata: Metadata = constructMetadata({
  title: `${title} | ${siteConfig.name}`,
  description,
})

type PageProps = {
  searchParams: Promise<{
    tag?: string
  }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const selectedTag = params.tag?.trim() ?? ""

  // Get blog posts
  const posts = blogSource
    .getPages()
    .slice()
    .sort((a, b) => {
      const dateA = a.data.publishedOn
        ? new Date(a.data.publishedOn).getTime()
        : 0

      const dateB = b.data.publishedOn
        ? new Date(b.data.publishedOn).getTime()
        : 0

      return dateB - dateA
    })

  // Normalize tags once
  const postsWithTags = posts.map((post) => ({
    post,
    tags: normalizeTag(post.data.tag),
  }))

  // Blog tag counts
  const tagCounts = new Map<string, number>()

  for (const { tags } of postsWithTags) {
    for (const tag of tags) {
      if (!tag) continue

      tagCounts.set(
        tag,
        (tagCounts.get(tag) ?? 0) + 1
      )
    }
  }

  const tags = Array.from(tagCounts.entries())
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  // Filter posts
  const filteredPosts = selectedTag
    ? postsWithTags
        .filter(({ tags }) =>
          tags.some(
            (tag) =>
              tag.trim().toLowerCase() ===
              selectedTag.toLowerCase()
          )
        )
        .map(({ post }) => post)
    : posts

  // Structured data
  const structuredData: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",

    name: `${siteConfig.name} Blog`,

    description,

    url: `${siteConfig.url.replace(/\/$/, "")}/blogs`,

    inLanguage: "en-US",

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url.replace(/\/$/, "")}/icon.png`,
      },
    },

    blogPost: filteredPosts.slice(0, 10).map((post) => {
      const tags = normalizeTag(post.data.tag)

      return {
        "@type": "BlogPosting",

        headline: post.data.title ?? post.url,

        description:
          post.data.description ?? description,

        url: `${siteConfig.url.replace(/\/$/, "")}${post.url}`,

        ...(post.data.publishedOn
          ? {
              datePublished: post.data.publishedOn,
              dateModified: post.data.publishedOn,
            }
          : {}),

        author: {
          "@type": "Person",
          name: post.data.author || "Designali",
        },

        ...(post.data.image
          ? {
              image: [post.data.image],
            }
          : {}),

        ...(tags.length > 0
          ? {
              keywords: tags,
            }
          : {}),

        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }
    }),
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

      <div data-slot="blogs">
        <div className="mt-14 flex flex-col px-3">
          <main className="space-y-3">
            {filteredPosts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-muted-foreground text-lg">
                  {selectedTag
                    ? `No articles found for "${selectedTag}".`
                    : "No posts yet."}
                </p>

                {selectedTag && (
                  <Link
                    href="/blogs"
                    className="text-primary mt-4 inline-flex items-center hover:underline"
                  >
                    View all articles
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => {
                  const postTags = normalizeTag(
                    post.data.tag
                  )

                  return (
                    <article
                      key={post.url}
                      className="group bg-card hover:bg-accent/5 flex flex-col overflow-hidden border transition-all duration-200"
                    >
                      <div className="flex h-full flex-col">
                        {post.data.image && (
                          <div className="aspect-video overflow-hidden">
                            <Link href={post.url}>
                              <img
                                src={post.data.image}
                                alt={
                                  post.data.title ??
                                  post.url
                                }
                                width={640}
                                height={360}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              />
                            </Link>
                          </div>
                        )}

                        <div className="flex flex-1 flex-col space-y-4 p-6">
                          <div className="flex-1 space-y-2">
                            <Link href={post.url}>
                              <h2 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold transition-colors">
                                {post.data.title ??
                                  post.url}
                              </h2>
                            </Link>

                            {post.data.description && (
                              <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                                {post.data.description}
                              </p>
                            )}
                          </div>

                          <div className="text-muted-foreground flex flex-col gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              {post.data.publishedOn && (
                                <time
                                  dateTime={
                                    post.data.publishedOn
                                  }
                                >
                                  {formatDate(
                                    post.data.publishedOn
                                  )}
                                </time>
                              )}

                              {post.data.publishedOn && (
                                <span>·</span>
                              )}

                              <span>
                                Read article
                              </span>
                            </div>

                            {postTags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {postTags.map((tag) => (
                                  <Link
                                    key={tag}
                                    href={`/blogs?tag=${encodeURIComponent(
                                      tag
                                    )}`}
                                    className={`hover:bg-accent rounded-md border px-2 py-1 text-xs transition-colors ${
                                      selectedTag.toLowerCase() ===
                                      tag.toLowerCase()
                                        ? "bg-accent text-foreground"
                                        : ""
                                    }`}
                                  >
                                    {tag}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
} 