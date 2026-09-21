import { TemplateCard, TemplateCardProgress } from "@/src/components/templates/template-card"
import { templateCategories } from "@/registry/registry-categories" 

export default function Page() {
  const templates = templateCategories.filter((template) => !template.hidden)

  return (
    <main className="mx-auto mb-20 mt-10 w-full p-3">
       
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
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {[
          {
            name: "Aurora",
            image: "/img/chat-1-light.jpg",
          },
          {
            name: "Nova",
            image: "/img/dashboard-1-dark.jpg",
          },
          {
            name: "Studio",
            image: "/img/hero-1.jpg",
          },
          {
            name: "Vertex",
            image: "/img/hero-2.jpg",
          },
          {
            name: "Mono",
            image: "/img/login-1.jpg",
          },
          {
            name: "Canvas",
            image: "/img/ask/ask1.jpg",
          },
        ].map((template) => (
          <TemplateCardProgress
            key={template.name}
            name={template.name}
            image={template.image} />
        ))}
      </div>
    </main>
  )
}
