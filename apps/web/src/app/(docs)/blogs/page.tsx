 
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

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const params = await searchParams

  const selectedTag = params.tag?.trim() ?? ""

  const posts = blogSource.getPages().sort((a, b) => {
    const dateA = new Date(
      a.data.publishedOn || 0
    ).getTime()

    const dateB = new Date(
      b.data.publishedOn || 0
    ).getTime()

    return dateB - dateA
  })

  /*
   * Blog Tags
   */
  const tagCounts = new Map<string, number>()

  for (const post of posts) {
    const postTags = normalizeTag(post.data.tag)

    for (const tag of postTags) {
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
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    )

  /*
   * Filter Posts
   */
  const filteredPosts = selectedTag
    ? posts.filter((post) => {
        const postTags = normalizeTag(post.data.tag)

        return postTags.some(
          (tag) =>
            tag.trim().toLowerCase() ===
            selectedTag.toLowerCase()
        )
      })
    : posts

  /*
   * Debug
   */
  console.log({
    selectedTag,
    totalPosts: posts.length,
    filteredPosts: filteredPosts.length,
  })

  /*
   * Structured Data
   */
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
        url: `${siteConfig.url.replace(
          /\/$/,
          ""
        )}/icon.png`,
      },
    },

    blogPost: filteredPosts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",

      headline: post.data.title,

      description: post.data.description,

      url: `${siteConfig.url.replace(
        /\/$/,
        ""
      )}${post.url}`,

      datePublished: post.data.publishedOn,

      dateModified: post.data.publishedOn,

      author: {
        "@type": "Person",
        name: post.data.author || "Designali",
      },

      image: post.data.image
        ? [post.data.image]
        : undefined,

      keywords:
        normalizeTag(post.data.tag).length > 0
          ? normalizeTag(post.data.tag)
          : undefined,

      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <div data-slot="blogs">
        <div className="flex mt-14 flex-col px-3">
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
              /* Blog Grid */
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.url}
                    className="group bg-card hover:bg-accent/5 flex flex-col overflow-hidden border transition-all duration-200"
                  >
                    <div className="flex h-full flex-col">

                      {/* Image */}
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

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <h2 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold transition-colors">
                            {post.data.title ??
                              post.url}
                          </h2>

                          {post.data.description && (
                            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                              {post.data.description}
                            </p>
                          )}
                        </div>

                        {/* Meta */}
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

                          {/* Post Tags */}
                          {normalizeTag(
                            post.data.tag
                          ).length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {normalizeTag(
                                post.data.tag
                              ).map((tag) => (
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
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
} 