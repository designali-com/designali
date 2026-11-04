
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, "registry", "registry-imports.json");
const REGISTRY_ROOT = path.join(ROOT, "registry");

const ALLOWED_TYPES = new Set([
  "components",
  "blocks",
  "templates",
  "sections",
  "icons",
]);

const REQUEST_TIMEOUT = 20_000;

function safePath(value) {
  if (
    typeof value !== "string" ||
    !value.trim() ||
    value === "." ||
    value === ".." ||
    value.includes("/") ||
    value.includes("\\") ||
    value.includes("\0")
  ) {
    throw new Error(`Invalid path segment: ${value}`);
  }

  return value;
}

function resolveInside(base, ...segments) {
  const resolvedBase = path.resolve(base);
  const resolvedPath = path.resolve(resolvedBase, ...segments);

  if (
    resolvedPath !== resolvedBase &&
    !resolvedPath.startsWith(resolvedBase + path.sep)
  ) {
    throw new Error(`Unsafe path: ${resolvedPath}`);
  }

  return resolvedPath;
}

function getOutputDir(source, type, name) {
  safePath(source);
  safePath(type);
  safePath(name);

  if (!ALLOWED_TYPES.has(type)) {
    throw new Error(`Unsupported registry type: ${type}`);
  }

  return resolveInside(
    REGISTRY_ROOT,
    "designali",
    source,
    type,
    name,
  );
}

function getImportJsonPath(source, type, name) {
  safePath(source);
  safePath(type);
  safePath(name);

  return resolveInside(
    REGISTRY_ROOT,
    "imports",
    source,
    type,
    `${name}.json`,
  );
}

async function writeJson(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  await fs.writeFile(
    filePath,
    JSON.stringify(data, null, 2) + "\n",
    "utf8",
  );
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function fetchJson(urlString) {
  const url = new URL(urlString);

  if (url.protocol !== "https:") {
    throw new Error(`Only HTTPS URLs are allowed: ${urlString}`);
  }

  const response = await fetch(url, {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    headers: {
      Accept: "application/json",
      "User-Agent": "Designali-Registry-Importer",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Request failed (${response.status} ${response.statusText}): ${urlString}`,
    );
  }

  return response.json();
}

async function fetchRegistry(url) {
  const data = await fetchJson(url);

  if (!data || typeof data !== "object" || !Array.isArray(data.files)) {
    throw new Error(`Invalid registry JSON: ${url}`);
  }

  return data;
}

function getFolderType(registryType) {
  const type = String(registryType ?? "")
    .replace(/^registry:/, "");

  switch (type) {
    case "block":
      return "blocks";

    case "page":
      return "templates";

    case "registry":
    case "component":
    case "ui":
    case "example":
    case "lib":
    case "file":
    default:
      return "components";
  }
}

function getFileOutputPath(file) {
  // Prefer target, for example:
  // @components/hero-section-1.tsx -> hero-section-1.tsx
  if (typeof file.target === "string" && file.target.trim()) {
    const normalizedTarget = file.target
      .replace(/\\/g, "/")
      .replace(/^@components\//, "")
      .replace(/^@\/components\//, "")
      .replace(/^@\//, "");

    const basename = path.posix.basename(normalizedTarget);
    return safePath(basename);
  }

  // Fall back to the basename of the source path.
  if (typeof file.path === "string" && file.path.trim()) {
    const basename = path.posix.basename(
      file.path.replace(/\\/g, "/"),
    );

    return safePath(basename);
  }

  throw new Error("Registry file has neither a valid target nor path");
}

function rewriteContent(content, rewriteImports = {}) {
  if (typeof content !== "string") {
    return content;
  }

  let result = content;

  for (const [from, to] of Object.entries(rewriteImports)) {
    if (from) {
      result = result.split(from).join(to);
    }
  }

  return result;
}

function getDependencyInfo(dependency, source) {
  if (typeof dependency !== "string") {
    return null;
  }

  // Example:
  // @tailark-oss/mist-button -> mist-button
  const match = dependency.match(/^@tailark-oss\/([a-zA-Z0-9._-]+)$/);

  if (!match) {
    return null;
  }

  const name = match[1];

  if (source === "tailark") {
    return {
      name,
      source: "tailark",
      type: "components",
      url: `https://oss.tailark.com/r/${encodeURIComponent(name)}.json`,
      title: name,
      description: `Tailark dependency: ${name}`,
      category: "dependency",
      tags: ["tailark", "dependency"],
      author: "Tailark",
      githubUrl: null,
      rewriteImports: {},
      isDependency: true,
    };
  }

  return null;
}

async function getGitHubMetadata(githubUrl) {
  if (!githubUrl) {
    return null;
  }

  try {
    const url = new URL(githubUrl);
    if (url.hostname !== "github.com") {
      return null;
    }

    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) {
      return null;
    }

    const [owner, repo] = parts;
    const data = await fetchJson(
      `https://api.github.com/repos/${owner}/${repo}`,
    );

    return {
      name: data.full_name,
      description: data.description,
      url: data.html_url,
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      license: data.license?.spdx_id ?? null,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.warn(`GitHub metadata unavailable: ${error.message}`);
    return null;
  }
}

async function saveRegistryItem(item, registryItem, overwrite) {
  const type = item.isDependency
    ? getFolderType(registryItem.type)
    : item.type;

  const outputDir = getOutputDir(item.source, type, item.name);
  const rawJsonPath = getImportJsonPath(item.source, type, item.name);

  const alreadyExists = await exists(
    path.join(outputDir, "metadata.json"),
  );

  if (alreadyExists && !overwrite) {
    console.log(`  Already exists, skipping files: ${item.name}`);
    return {
      type,
      outputDir,
      skipped: true,
    };
  }

  await fs.mkdir(outputDir, { recursive: true });

  const fileMappings = [];
  const writtenFiles = [];

  for (const file of registryItem.files) {
    if (!file || typeof file !== "object") {
      console.warn(`  Skipping invalid file entry in ${item.name}`);
      continue;
    }

    if (typeof file.content !== "string") {
      console.warn(
        `  Skipping ${file.path ?? file.target ?? "unknown file"}: no inline content`,
      );
      continue;
    }

    const outputFile = getFileOutputPath(file);
    const outputPath = resolveInside(outputDir, outputFile);

    const content = rewriteContent(
      file.content,
      item.rewriteImports ?? {},
    );

    await fs.writeFile(outputPath, content, "utf8");

    writtenFiles.push(outputFile);

    fileMappings.push({
      sourcePath: file.path ?? null,
      target: file.target ?? null,
      outputPath: outputFile,
      type: file.type ?? null,
    });

    console.log(`  Saved: ${path.relative(ROOT, outputPath)}`);
  }

  // Keep a copy of the original registry JSON.
  await writeJson(rawJsonPath, registryItem);

  const githubMetadata = await getGitHubMetadata(item.githubUrl);

  const metadata = {
    name: item.name,
    source: item.source,
    type,
    title: item.title ?? registryItem.title ?? item.name,
    description:
      item.description ??
      registryItem.description ??
      "",
    category: item.category ?? null,
    tags: item.tags ?? [],
    author: item.author ?? null,
    url: item.url,
    githubUrl: item.githubUrl ?? null,
    github: githubMetadata,
    registryType: registryItem.type ?? null,
    registryDependencies: registryItem.registryDependencies ?? [],
    files: writtenFiles,
    fileMappings,
    importedAt: new Date().toISOString(),
  };

  await writeJson(path.join(outputDir, "metadata.json"), metadata);

  console.log(`  Metadata: ${path.relative(ROOT, path.join(outputDir, "metadata.json"))}`);

  return {
    type,
    outputDir,
    skipped: false,
  };
}

async function importItem(item, overwrite, visited, depth = 0) {
  const key = `${item.source}/${item.name}`;

  if (visited.has(key)) {
    console.log(`${"  ".repeat(depth)}Already processed: ${key}`);
    return;
  }

  visited.add(key);

  const indent = "  ".repeat(depth);
  console.log(`\n${indent}Importing: ${key}`);

  try {
    const registryItem = await fetchRegistry(item.url);

    const resolvedType = item.isDependency
      ? getFolderType(registryItem.type)
      : item.type;

    const normalizedItem = {
      ...item,
      type: resolvedType,
    };

    await saveRegistryItem(normalizedItem, registryItem, overwrite);

    const dependencies = Array.isArray(registryItem.registryDependencies)
      ? registryItem.registryDependencies
      : [];

    if (dependencies.length === 0) {
      return;
    }

    console.log(
      `${indent}Dependencies: ${dependencies.length}`,
    );

    for (const dependency of dependencies) {
      const dependencyInfo = getDependencyInfo(
        dependency,
        item.source,
      );

      if (!dependencyInfo) {
        console.warn(
          `${indent}  Skipping unsupported dependency: ${dependency}`,
        );
        continue;
      }

      await importItem(
        dependencyInfo,
        overwrite,
        visited,
        depth + 1,
      );
    }
  } catch (error) {
    console.error(`${indent}Failed: ${key} — ${error.message}`);
  }
}

async function main() {
  if (!(await exists(CONFIG_PATH))) {
    throw new Error(
      `Config file not found: ${path.relative(ROOT, CONFIG_PATH)}`,
    );
  }

  const config = JSON.parse(
    await fs.readFile(CONFIG_PATH, "utf8"),
  );

  const items = Array.isArray(config)
    ? config
    : config.items;

  if (!Array.isArray(items)) {
    throw new Error(
      "registry-imports.json must contain an items array or be an array itself",
    );
  }

  const overwrite = process.argv.includes("--overwrite");
  const visited = new Set();

  console.log(`Registry items: ${items.length}`);
  console.log(`Overwrite: ${overwrite ? "enabled" : "disabled"}`);

  for (const item of items) {
    if (!item || typeof item !== "object") {
      console.warn("Skipping invalid config item");
      continue;
    }

    if (!item.name || !item.source || !item.type || !item.url) {
      console.warn(
        "Skipping item: name, source, type and url are required",
      );
      continue;
    }

    await importItem(
      {
        ...item,
        source: safePath(item.source),
        name: safePath(item.name),
        type: safePath(item.type),
        rewriteImports: item.rewriteImports ?? {},
      },
      overwrite,
      visited,
    );
  }

  console.log("\nRegistry import complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
