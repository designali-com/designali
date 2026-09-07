"use client"
 
import type { BundledLanguage } from "@/src/components/templates/(icons)/code-block"
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/src/components/templates/(icons)/code-block"
 
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

interface IconCodeProps {
  iconName: string
  size?: number
  color?: string
  strokeWidth?: number
  variant?: "outline" | "filled" | "pixel"
}

export function LogoCode({
  iconName,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  variant,
}: IconCodeProps) {
  function toPascalCase(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  }

  const componentName = toPascalCase(iconName)
  const packageName = "@designali/logos" 

  const reactContent =
    variant === "outline"
      ? `import { ${componentName} } from '${packageName}';

const App = () => {
  return (
    <${componentName}
      size={${size}}
      color="${color}"
      strokeWidth={${strokeWidth}}
    />
  );
};

export default App;`
      : `import { ${componentName} } from '${packageName}';

const App = () => {
  return (
    <${componentName}
      size={${size}}
      color="${color}"
    />
  );
};

export default App;`

  const tabs = [
    {
      value: "react",
      label: "React",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: reactContent,
    },
    {
      value: "vanilla",
      label: "Vanilla",
      language: "html",
      filename: `${iconName}.html`,
      content: `<script>
import { createIcons, ${componentName} } from '${packageName}';

createIcons({
  icons: {
    ${componentName}
  }
});
</script>

<i data-icon="${iconName}"></i>`,
    },
    {
      value: "vue",
      label: "Vue",
      language: "vue",
      filename: `${iconName}.vue`,
      content: `<script setup>
import { ${componentName} } from '${packageName}';
</script>

<template>
  <${componentName} />
</template>`,
    },
    {
      value: "svelte",
      label: "Svelte",
      language: "svelte",
      filename: `${iconName}.svelte`,
      content: `<script>
import { ${componentName} } from '${packageName}';
</script>

<${componentName} />`,
    },
    {
      value: "preact",
      label: "Preact",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: `import { ${componentName} } from '${packageName}';

const App = () => {
  return (
    <${componentName} />
  );
};

export default App;`,
    },
    {
      value: "solid",
      label: "Solid",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: `import { ${componentName} } from '${packageName}';

const App = () => {
  return (
    <${componentName} />
  );
};

export default App;`,
    },
    {
      value: "angular",
      label: "Angular",
      language: "ts",
      filename: `app.module.ts`,
      content: `// app.module.ts
import { AliImamAngularModule, ${componentName} } from '${packageName}';

@NgModule({
  imports: [
    AliImamAngularModule.pick({ ${componentName} })
  ],
})

// app.component.html
<aliimam name="${iconName}"></aliimam>`,
    },
    {
      value: "icon-font",
      label: "Icon Font",
      language: "html",
      filename: `${iconName}.html`,
      content: `<div class="icon-${iconName}"></div>`,
    },
  ]

  return (
    <Tabs defaultValue="react" className="h-full w-full">
      <div className="flex justify-between gap-2">
        <TabsList className="no-scrollbar w-full overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList> 
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="relative h-60 w-full">
            <CodeBlock
              data={[
                {
                  language: tab.language,
                  filename: tab.filename,
                  code: tab.content,
                },
              ]}
              defaultValue={tab.language}
            >
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename key={item.language} value={item.language}>
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton
                  onCopy={() => console.log("Copied")}
                  onError={() => console.error("Failed to copy")}
                />
              </CodeBlockHeader>
              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent language={item.language as BundledLanguage}>
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
 