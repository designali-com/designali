import { TemplateCard } from "@/src/components/templates/template-card"
import { templateCategories } from "@/registry/registry-categories"
import { AppWindow } from "lucide-react"

export default function Page() {
  const templates = templateCategories.filter((template) => !template.hidden)

  return (
    <main className="mx-auto my-20 w-full p-3">
      <div className="relative flex flex-col items-center pt-10 pb-20 text-center">
        <AppWindow className="mb-4 size-8 text-primary" />

        <h1 className="text-2xl font-medium md:text-4xl">Templates</h1>

        <p className="mx-auto mt-2 max-w-80 text-sm text-muted-foreground md:max-w-xl">
          A curated collection of our best templates, crafted to help you build
          beautiful interfaces faster.
        </p>
      </div>
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
