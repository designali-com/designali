import { TemplateCard } from "@/src/components/templates/template-card"
import { templateCategories } from "@/registry/registry-categories"

export default function Page() {
  const templates = templateCategories.filter((template) => !template.hidden)

  return (
    <main className="mx-auto my-20 w-full p-3">
      <div className="grid gap-3 md:grid-cols-2">
        {templates.map((template) => (
          <TemplateCard
            key={template.slug}
            name={template.name}
            url={template.url}
            slug={template.slug}
            image={template.image}
            video={template.video}
          />
        ))}
      </div>
    </main>
  )
}
