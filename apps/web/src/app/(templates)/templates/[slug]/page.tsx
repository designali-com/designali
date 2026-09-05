import { notFound } from "next/navigation"

import { TemplatePreview } from "@/src/components/templates/TemplatePreview"
import { templateCategories } from "@/registry/registry-categories"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return templateCategories.map((template) => ({
    slug: template.slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const template = templateCategories.find((item) => item.slug === slug)

  if (!template) {
    notFound()
  }

  return (
    <main className="my-10 w-full">
      <div className="mx-auto w-full">
        <TemplatePreview
          templateId={template.id}
          name={template.name}
          slug={template.slug}
          description={template.description}
          url={template.url}
          downloadurl={`/api/templates/${template.slug}/download`}
          tech={template.tech}
          pages={template.pages}
          features={template.features}
          colors={template.colors}
          fonts={template.fonts}
        />
      </div>
    </main>
  )
}
