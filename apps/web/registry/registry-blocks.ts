import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "header-01",
    description: "A simple header section.",
    type: "registry:block",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "navigation-menu", "toggle"],
    files: [
      {
        path: "blocks/header/header-01/page.tsx",
        target: "components/header-01.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/menus.tsx",
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
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: [
      "button",
      "command",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-02/page.tsx",
        target: "components/header-02.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/search.tsx",
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
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: [
      "button",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-03/page.tsx",
        target: "components/header-03.tsx",
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
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "command", "toggle", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-04/page.tsx",
        target: "components/header-04.tsx",
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
    dependencies: ["lucide-react"],
    registryDependencies: ["command", "sheet"],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-05/page.tsx",
        target: "components/header-05.tsx",
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
    dependencies: ["@aliimam/logos", "@aliimam/icons", "next-themes"],
    registryDependencies: [
      "navigation-menu",
      "avatar",
      "dropdown-menu",
      "button",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-06/page.tsx",
        target: "components/header-06.tsx",
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
    description: "Hero 1",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-1.tsx",
        type: "registry:block",
      },
    ],
    meta: {
      iframeHeight: "400px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["hero"],
  },
]
