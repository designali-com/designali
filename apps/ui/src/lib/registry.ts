import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

export type RegistryConfigItem = {
  name: string;
  source: string;
  type: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  author?: string;
  url: string;
  githubUrl?: string | null;
};

type RegistryFile = {
  path?: string;
  target?: string;
  type?: string;
  content?: string;
};

type RegistryJson = {
  name?: string;
  type?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
};

const MAX_DEPENDENCIES = 80;
const MAX_DEPTH = 6;

async function getConfigPath() {
  const candidates = [
    process.env.REGISTRY_CONFIG_PATH,
    path.join(process.cwd(), "registry/registry-imports.json"),
    path.join(process.cwd(), "../../registry/registry-imports.json"),
  ].filter(Boolean) as string[];

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // Try the next known location.
    }
  }

  throw new Error(
    "registry-imports.json not found. Set REGISTRY_CONFIG_PATH if needed.",
  );
}

export async function getRegistryItems(): Promise<RegistryConfigItem[]> {
  const configPath = await getConfigPath();
  const raw = await fs.readFile(configPath, "utf8");
  const config = JSON.parse(raw);

  const items = Array.isArray(config) ? config : config.items;

  if (!Array.isArray(items)) {
    throw new Error("Registry config must contain an items array.");
  }

  return items;
}

export async function getRegistryConfigItem(
  source: string,
  name: string,
) {
  const items = await getRegistryItems();

  return (
    items.find(
      (item) => item.source === source && item.name === name,
    ) ?? null
  );
}

async function fetchRegistryJson(urlString: string): Promise<RegistryJson> {
  const url = new URL(urlString);

  if (url.protocol !== "https:") {
    throw new Error("Registry URLs must use HTTPS.");
  }

  const response = await fetch(url, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(15_000),
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Registry request failed: ${response.status} ${url.hostname}`,
    );
  }

  const data = (await response.json()) as RegistryJson;

  if (!Array.isArray(data.files)) {
    throw new Error(`Invalid registry response from ${url.hostname}`);
  }

  return data;
}

function getDependencyUrl(
  dependency: string,
  source: string,
  parentUrl: string,
): string | null {
  // Some registries provide a full URL directly.
  if (/^https:\/\//i.test(dependency)) {
    return dependency;
  }

  // shadcn registry dependencies are usually IDs such as "sidebar".
  if (source === "shadcn") {
    const parent = new URL(parentUrl);

    if (parent.hostname !== "ui.shadcn.com") {
      return null;
    }

    const style =
      parent.pathname.match(/\/r\/styles\/([^/]+)\//)?.[1] ??
      "default";

    if (!/^[a-zA-Z0-9_-]+$/.test(dependency)) {
      return null;
    }

    return `https://ui.shadcn.com/r/styles/${style}/${dependency}.json`;
  }

  // Tailark registry dependencies use package IDs.
  if (source === "tailark") {
    const match = dependency.match(
      /^@tailark-oss\/([a-zA-Z0-9._-]+)$/,
    );

    if (!match) return null;

    return `https://oss.tailark.com/r/${match[1]}.json`;
  }

  return null;
}

function safeRelativePath(value: string) {
  const normalized = value.replace(/\\/g, "/").replace(/^\/+/, "");

  if (
    !normalized ||
    normalized.split("/").some((part) => part === "..") ||
    normalized.includes("\0")
  ) {
    return null;
  }

  return normalized;
}

function rewriteAliases(content: string) {
  return content
    .replace(
      /(["'])@\/([^"']+)\1/g,
      (_match, quote: string, rest: string) =>
        `${quote}/src/${rest}${quote}`,
    )
    .replace(
      /(["'])@components\/([^"']+)\1/g,
      (_match, quote: string, rest: string) =>
        `${quote}/src/components/${rest}${quote}`,
    );
}

function toTargetPath(target: string) {
  let value = target.replace(/\\/g, "/");

  value = value.replace(/^@components\//, "components/");
  value = value.replace(/^@\//, "");

  return safeRelativePath(value);
}

function packageNameAndVersion(dependency: string) {
  // Handles @tanstack/react-table@^8.0.0 and ordinary package@version.
  const versionSeparator = dependency.lastIndexOf("@");

  if (versionSeparator > 0) {
    return {
      name: dependency.slice(0, versionSeparator),
      version: dependency.slice(versionSeparator + 1),
    };
  }

  return {
    name: dependency,
    version: "latest",
  };
}

export async function buildRegistryPreview(
  item: RegistryConfigItem,
) {
  const visited = new Set<string>();
  const allItems: RegistryJson[] = [];
  const packageDependencies: Record<string, string> = {};

  async function collect(
    url: string,
    depth: number,
  ): Promise<RegistryJson> {
    if (depth > MAX_DEPTH) {
      throw new Error("Registry dependency depth limit reached.");
    }

    if (visited.has(url)) {
      const existing = allItems.find(
        (entry) => (entry as any).__registryUrl === url,
      );

      if (existing) return existing;

      throw new Error("Circular registry dependency detected.");
    }

    if (visited.size >= MAX_DEPENDENCIES) {
      throw new Error("Registry dependency limit reached.");
    }

    visited.add(url);

    const data = await fetchRegistryJson(url);

    // Internal-only marker for avoiding duplicate fetches.
    Object.defineProperty(data, "__registryUrl", {
      value: url,
      enumerable: false,
    });

    allItems.push(data);

    for (const dependency of data.dependencies ?? []) {
      const parsed = packageNameAndVersion(dependency);

      packageDependencies[parsed.name] = parsed.version;
    }

    for (const dependency of data.registryDependencies ?? []) {
      const dependencyUrl = getDependencyUrl(
        dependency,
        item.source,
        url,
      );

      if (!dependencyUrl) {
        console.warn(
          `[registry] Unsupported dependency for ${item.source}: ${dependency}`,
        );
        continue;
      }

      try {
        await collect(dependencyUrl, depth + 1);
      } catch (error) {
        console.warn(
          `[registry] Could not load ${dependency}:`,
          error instanceof Error ? error.message : error,
        );
      }
    }

    return data;
  }

  const root = await collect(item.url, 0);

  const previewFiles: Record<string, { code: string }> = {};
  const sourceFiles: {
    path: string;
    content: string;
    type?: string;
  }[] = [];

  for (const registryItem of allItems) {
    for (const file of registryItem.files ?? []) {
      if (typeof file.content !== "string") continue;

      const content = rewriteAliases(file.content);

      if (file.path) {
        const sourcePath = safeRelativePath(file.path);

        if (sourcePath) {
          const sandboxPath = `/src/registry/default/${sourcePath}`;

          previewFiles[sandboxPath] = { code: content };

          if (registryItem === root) {
            sourceFiles.push({
              path: file.path,
              content: file.content,
              type: file.type,
            });
          }
        }
      }

      if (file.target?.trim()) {
        const target = toTargetPath(file.target);

        if (target) {
          previewFiles[`/src/${target}`] = { code: content };
        }
      }
    }
  }

  const entryFile = root.files.find(
    (file) =>
      typeof file.content === "string" &&
      file.content.includes("export default") &&
      (file.type === "registry:page" ||
        file.path?.endsWith(".tsx") ||
        file.path?.endsWith(".jsx")),
  );

  if (!entryFile?.path) {
    throw new Error(
      "Could not find a default-exported React page to preview.",
    );
  }

  const entryPath = safeRelativePath(entryFile.path);

  if (!entryPath) {
    throw new Error("Invalid preview entry path.");
  }

  packageDependencies.react ??= "latest";
  packageDependencies["react-dom"] ??= "latest";
  packageDependencies["lucide-react"] ??= "latest";
  packageDependencies["tailwindcss"] ??= "latest";
  packageDependencies["@tailwindcss/vite"] ??= "latest";
  packageDependencies.vite ??= "latest";

  previewFiles["/src/index.css"] = {
    code: `
@import "tailwindcss";

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.625rem;
}

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
}

* { box-sizing: border-box; }
html, body, #root { min-height: 100%; margin: 0; }
body { background: hsl(var(--background)); color: hsl(var(--foreground)); }
`,
  };

  previewFiles["/vite.config.ts"] = {
    code: `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`,
  };

  packageDependencies["@vitejs/plugin-react"] ??= "latest";
  packageDependencies["class-variance-authority"] ??= "latest";
  packageDependencies.clsx ??= "latest";
  packageDependencies["tailwind-merge"] ??= "latest";

  previewFiles["/src/App.tsx"] = {
    code: `
import "/src/index.css";
import Page from "/src/registry/default/${entryPath.replace(/\.(tsx|jsx)$/, "")}";

export default function App() {
  return <div className="min-h-screen w-full"><Page /></div>;
}
`,
  };

  return {
    item,
    files: sourceFiles,
    preview: {
      files: previewFiles,
      dependencies: packageDependencies,
    },
  };
}