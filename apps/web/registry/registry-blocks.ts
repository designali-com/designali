import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "header-01",
    description: "A simple header section.",
    type: "registry:block",

    registryDependencies: ["button", "navigation-menu", "toggle"],

    files: [
      {
        path: "blocks/header/header-01/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/header.tsx",
        target: "components/header.tsx",  
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/theme-switch.tsx",
        target: "components/theme-switch.tsx", 
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/menus.tsx",
        target: "components/menus.tsx",  
        type: "registry:component",
      },
    ],

    categories: ["header"],

    meta: {
      iframeHeight: "500px",
    },
  },

  {
    name: "header-02",
    description: "A simple header section.",
    type: "registry:block",

    dependencies: ["next-themes"],

    registryDependencies: [
      "button",
      "command",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],

    files: [
      {
        path: "blocks/header/header-02/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/header.tsx",
        target: "components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/theme-switch.tsx",
        target: "components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/search.tsx",
        target: "components/search.tsx",
        type: "registry:component",
      },
    ],

    categories: ["header"],

    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-03",
    description: "A simple header section.",
    type: "registry:block",
    registryDependencies: [
      "button",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],
    files: [
      {
        path: "blocks/header/header-03/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-03/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-03/components/theme-switch.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-04",
    description: "A simple header section.",
    type: "registry:block",
    registryDependencies: ["button", "command", "toggle", "separator"],
    files: [
      {
        path: "blocks/header/header-04/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/search.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-05",
    description: "A simple header section.",
    type: "registry:block",
    registryDependencies: ["command", "sheet"],
    files: [
      {
        path: "blocks/header/header-05/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/menus.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/phone-menus.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/navigation.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/search.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-06",
    description: "A simple header section.",
    type: "registry:block",
    dependencies: ["next-themes"],
    registryDependencies: [
      "navigation-menu",
      "avatar",
      "dropdown-menu",
      "button",
    ],
    files: [
      {
        path: "blocks/header/header-06/page.tsx",
        target: "header/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-06/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-06/components/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "hero-1",
    description: "A split-screen hero section with branding, theme toggle, video, work, and contact cards.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
      container: "",
      mobile: "component",
    },
  },
  {
    name: "hero-2",
    description: "A split-screen hero section with branding, theme toggle, video, work, and contact cards.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
      container: "",
      mobile: "component",
    },
  },
  {
    name: "hero-3",
    description: "A split-screen hero section with branding, theme toggle, video, work, and contact cards.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
      container: "",
      mobile: "component",
    },
  },
  {
    name: "hero-4",
    description: "A split-screen hero section with branding, theme toggle, video, work, and contact cards.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
      container: "",
      mobile: "component",
    },
  },
  {
    name: "hero-5",
    description: "A split-screen hero section with branding, theme toggle, video, work, and contact cards.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
      container: "",
      mobile: "component",
    },
  },
  {
    name: "footer-01",
    description: "A simple footer.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "blocks/footer/footer-01/page.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/footer.tsx",
        target: "layout/footer/footer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "footer-02",
    description: "A simple footer.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/footer/footer-02/demo.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-02/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-03",
    description: "A simple footer.",
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-03/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "400px",
    },
  },
  {
    name: "footer-04",
    description: "A simple footer.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    registryDependencies: ["button", "switch", "select", "input"],
    files: [
      {
        path: "blocks/footer/footer-04/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-04/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-05",
    description: "A simple footer.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/footer/footer-05/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-06",
    description: "A simple footer.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/footer/footer-06/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "logos-01",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/logos/logos-01/page.tsx",
        target: "components/logos-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos", "clients"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-02",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/logos/logos-02/page.tsx",
        target: "components/logos-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos", "clients"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-03",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/logos/logos-03/page.tsx",
        target: "components/logos-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos", "clients"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-04",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/logos/logos-04/page.tsx",
        target: "components/logos-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos", "clients"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "logos-05",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/logos/logos-05/page.tsx",
        target: "components/logos-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos", "clients"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "call-to-action-01",
    description: "A simple call-to-action section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/call-to-action/call-to-action-01.tsx",
        target: "components/call-to-action-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["call-to-action"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "feature-01",
    description: "A simple feature section.",
    type: "registry:block",
    dependencies: ["@designali/logos"],
    files: [
      {
        path: "blocks/feature/feature-01/page.tsx",
        target: "components/feature-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature", "features"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "faqs-01",
    description: "A simple pricing section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/faqs/faqs-01.tsx",
        target: "components/faqs-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "pricing-01",
    description: "A simple pricing section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/pricing/pricing-01.tsx",
        target: "components/pricing-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "testimonial-01",
    description: "A simple pricing section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/testimonials/testimonial-01.tsx",
        target: "components/testimonial-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials", "testimonial"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "gallery-01",
    description: "A simple gallery section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/gallery/gallery-01.tsx",
        target: "components/gallery-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["gallery"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "gallery-02",
    description: "A simple gallery section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/gallery/gallery-02.tsx",
        target: "components/gallery-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["gallery"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "media-01",
    description: "A simple media section.",
    type: "registry:block", 
    files: [
      {
        path: "blocks/media/media-01.tsx",
        target: "components/media-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["media"],
    meta: {
      iframeHeight: "800px",
    },
  },
]
