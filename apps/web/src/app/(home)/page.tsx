import { FAQSection } from "@/src/components/home/faq"
import { HeroSection } from "@/src/components/home/hero"

import { Testimonials } from "@/src/components/home/testmonials"
import { TemplateCard } from "@/src/components/templates/template-card"
import { templateCategories } from "@/registry/registry-categories"
import { UIDesignCategory } from "@/src/components/home/categories-section"
import { ComponentsSection } from "@/src/components/home/components"

export default function Page() {
  const templates = templateCategories.filter((template) => !template.hidden)
  return (
    <div className="">
      <HeroSection />
      <div className="grid gap-3 border-b border-dotted p-3 md:grid-cols-2">
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
      <ComponentsSection />
      <UIDesignCategory />
      <Testimonials />
      <FAQSection />
    </div>
  )
}
