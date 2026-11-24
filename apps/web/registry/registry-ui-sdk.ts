import type { Registry } from "shadcn/schema"

// UI SDK (ui-sdk.dev) components and demos.
// Generated from registry/designali/{ui,components}/ui-sdk and
// src/content/docs/ui-sdk frontmatter. Regenerate instead of editing by hand.
export const uiSdk: Registry["items"] = [
  {
    "name": "ui-sdk-dialog",
    "type": "registry:ui",
    "title": "Dialog (UI SDK)",
    "description": "A focused task over the page, built on UI SDK with focus, Escape, outside-press and sheet presentation handled for you.",
    "dependencies": [
      "@ui-sdk/core",
      "@ui-sdk/react",
      "lucide-react"
    ],
    "registryDependencies": [
      "button"
    ],
    "files": [
      {
        "path": "ui/ui-sdk/dialog.tsx",
        "type": "registry:ui",
        "target": "components/ui-sdk/dialog.tsx"
      }
    ]
  },
  {
    "name": "ui-sdk-dialog-demo-sheet",
    "type": "registry:component",
    "title": "Dialog (UI SDK)",
    "description": "Dialog demo built on UI SDK.",
    "dependencies": [],
    "registryDependencies": [
      "button",
      "https://designali.com/r/ui-sdk-dialog.json",
      "input",
      "label"
    ],
    "files": [
      {
        "path": "components/ui-sdk/dialog/dialog-demo-sheet.tsx",
        "type": "registry:component",
        "target": "components/ui-sdk/dialog/dialog-demo-sheet.tsx"
      }
    ]
  },
  {
    "name": "ui-sdk-dialog-demo",
    "type": "registry:component",
    "title": "Dialog (UI SDK)",
    "description": "Dialog demo built on UI SDK.",
    "dependencies": [],
    "registryDependencies": [
      "button",
      "https://designali.com/r/ui-sdk-dialog.json",
      "input",
      "label"
    ],
    "files": [
      {
        "path": "components/ui-sdk/dialog/dialog-demo.tsx",
        "type": "registry:component",
        "target": "components/ui-sdk/dialog/dialog-demo.tsx"
      }
    ]
  }
]
