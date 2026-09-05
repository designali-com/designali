import { db } from "@/src/db/drizzle"
import { template } from "@/src/db/schema"
import { templateCategories } from "@/registry/registry-categories"

async function seed() {
  console.log("Seeding templates...")

  for (const t of templateCategories) {
    await db
      .insert(template)
      .values({
        id: t.id,
        title: t.name,                     
        slug: t.slug,
        description: t.description,
        thumbnail: t.image || "",           
        previewUrl: t.url,                  
        downloadUrl: t.downloadurl,         
        category: "Landing Page",           
        isPro: false,                       
      })
      .onConflictDoUpdate({
        target: template.id,
        set: {
          title: t.name,
          slug: t.slug,
          description: t.description,
          thumbnail: t.image || "",
          previewUrl: t.url,
          downloadUrl: t.downloadurl,
          updatedAt: new Date(),
        },
      })
  }

  console.log("Seeding completed successfully!")
  process.exit(0)
}

seed().catch((err) => {
  console.error("Error seeding templates:", err)
  process.exit(1)
})