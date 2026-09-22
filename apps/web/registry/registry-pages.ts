import { type Registry } from "shadcn/schema"

export const pages: Registry["items"] = [
  {
    name: "landing-01",
    description: "A simple header section.",
    type: "registry:page", 
    registryDependencies: ["button", "navigation-menu", "toggle"], 
    files: [
      {
        path: "pages/landing-01/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing-01/components/hero.tsx",
        target: "components/header.tsx",  
        type: "registry:component",
      }, 
    ], 
    categories: ["pages"], 
    meta: {
        
    },
  },
 
]
