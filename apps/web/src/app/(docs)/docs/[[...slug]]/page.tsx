import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { mdxComponents } from "@/mdx-components"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { findNeighbour } from "fumadocs-core/server"

import { source } from "@/src/lib/source"
import { absoluteUrl } from "@/src/lib/utils"
import { DocsTableOfContents } from "@/src/components/docs/docs-toc"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export function generateStaticParams() {
  return source.generateParams()
}

async function getDocFromParams({ params }: DocPageProps) {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) notFound()

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return { doc, page }
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params })

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(doc.title)} `,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(doc.title)} `,
        },
      ],
    },
  }
}

export default async function DocPage({ params }: DocPageProps) {
  const { doc, page } = await getDocFromParams({ params })

  const MDX = doc.body
  const neighbours = await findNeighbour(source.pageTree, page.url)

  const links = doc.links

  return (
    <div data-slot="docs" className="mt-10 flex items-stretch xl:w-full">
      <main className="flex min-w-0 flex-1 flex-col">
        <div className="sticky top-10 z-10 flex h-10 w-full items-center border-b border-dotted bg-background/50 px-3 backdrop-blur-md md:hidden">
          <SidebarTrigger className="opacity-60" />
        </div>

        <div className="mx-auto flex w-full min-w-0 flex-1 flex-col gap-4 py-20">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-2 pb-20 text-center">
              <h1 className="scroll-m-20 text-2xl font-medium md:text-4xl">
                {doc.title}
              </h1>

              {doc.description && (
                <p className="max-w-80 text-sm text-muted-foreground md:max-w-xl">
                  {doc.description}
                </p>
              )}

              <div className="docs-nav fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t p-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                {neighbours.previous && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                    render={<Link href={neighbours.previous.url} />}
                  >
                    <ArrowLeft className="size-4" />
                    <span className="sr-only">Previous</span>
                  </Button>
                )}
                {neighbours.next && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="extend-touch-target size-8 shadow-none md:size-7"
                    render={<Link href={neighbours.next.url} />}
                  >
                    <span className="sr-only">Next</span>
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
            </div>

            {links ? (
              <div className="flex items-center space-x-2 pt-4">
                {links?.doc && (
                  <Badge variant="secondary">
                    <Link href={links.doc} target="_blank" rel="noreferrer">
                      Docs <ArrowUpRight className="ml-1 size-3" />
                    </Link>
                  </Badge>
                )}
                {links?.api && (
                  <Badge
                    render={
                      <Link href={links.api} target="_blank" rel="noreferrer" />
                    }
                    variant="secondary"
                  >
                    API Reference <ArrowUpRight className="ml-1 size-3" />
                  </Badge>
                )}
              </div>
            ) : null}
          </div>

          <div className="w-full flex-1 border-t border-dotted p-4 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
        </div>

        <div className="mx-auto hidden items-center gap-2 px-4 py-20 sm:flex md:px-0">
          {neighbours.previous && (
            <Button
              variant="secondary"
              size="sm"
              className="shadow-none"
              render={<Link href={neighbours.previous.url} />}
            >
              <ArrowLeft className="mr-1 size-4" /> {neighbours.previous.name}
            </Button>
          )}
          {neighbours.next && (
            <Button
              render={<Link href={neighbours.next.url} />}
              variant="secondary"
              size="sm"
              className="ml-auto shadow-none"
            >
              {neighbours.next.name} <ArrowRight className="ml-1 size-4" />
            </Button>
          )}
        </div>
      </main>

      {/* Right Sidebar TOC */}
      <aside className="sticky top-10 hidden h-screen w-[12rem] shrink-0 border-l border-dotted xl:block">
        <div className="h-full overflow-y-auto p-4">
          {doc.toc?.length ? <DocsTableOfContents toc={doc.toc} /> : null}
        </div>
      </aside>
    </div>
  )
}
