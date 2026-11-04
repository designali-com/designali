"use client";

import { useEffect, useState } from "react";
import {
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

type RegistryFile = {
  path: string;
  content: string;
  type?: string;
};

type RegistryResponse = {
  item: {
    name: string;
    title: string;
    source: string;
  };
  files: RegistryFile[];
  preview: {
    files: Record<string, { code: string }>;
    dependencies: Record<string, string>;
  };
};

type Props = {
  source: string;
  name: string;
};

export default function RegistryDetailClient({
  source,
  name,
}: Props) {
  const [data, setData] = useState<RegistryResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [selectedFile, setSelectedFile] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/registry/${encodeURIComponent(source)}/${encodeURIComponent(name)}`,
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load component.");
        }

        if (!cancelled) {
          setData(result);
          setSelectedFile(result.files?.[0]?.path ?? "");
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Something went wrong.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [source, name]);

  const activeFile =
    data?.files.find((file) => file.path === selectedFile) ??
    data?.files[0];

  async function copyCode() {
    if (!activeFile) return;

    try {
      await navigator.clipboard.writeText(activeFile.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setError("Clipboard access failed. Select and copy the code manually.");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-72 items-center justify-center rounded-xl border text-sm text-muted-foreground">
        Loading registry component…
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="rounded-xl border p-6">
        <h2 className="font-medium">Could not load component</h2>
        <p className="mt-2 text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="overflow-hidden rounded-xl border">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-3">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={`rounded-md px-3 py-2 text-sm ${
              tab === "preview"
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>

          <button
            type="button"
            onClick={() => setTab("code")}
            className={`rounded-md px-3 py-2 text-sm ${
              tab === "code"
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Code ({data.files.length})
          </button>
        </div>

        {tab === "code" && (
          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Select source file"
              value={activeFile?.path ?? ""}
              onChange={(event) => setSelectedFile(event.target.value)}
              className="max-w-64 rounded-md border bg-background px-2 py-2 text-sm"
            >
              {data.files.map((file) => (
                <option key={file.path} value={file.path}>
                  {file.path}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={copyCode}
              disabled={!activeFile}
              className="rounded-md border px-3 py-2 text-sm hover:bg-muted disabled:opacity-50"
            >
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
        )}
      </div>

      {error && (
        <p className="border-b px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      {tab === "preview" ? (
        <div className="min-h-[640px] bg-white">
          <SandpackProvider
            template="vite-react-ts"
            files={data.preview.files}
            customSetup={{
              dependencies: data.preview.dependencies,
            }}
            theme="light"
            options={{
              recompileMode: "delayed",
              recompileDelay: 500,
            }}
          >
            <SandpackPreview
              showNavigator={false}
              showRefreshButton
              showOpenInCodeSandbox={false}
              style={{ height: 640 }}
            />
          </SandpackProvider>
        </div>
      ) : (
        <div className="min-h-96 bg-[#0b0b0c]">
          <div className="border-b border-white/10 px-4 py-3 text-xs text-neutral-400">
            {activeFile?.path ?? "No source file"}
          </div>

          <pre className="max-h-[720px] overflow-auto p-5 text-sm leading-6 text-neutral-100">
            <code>{activeFile?.content ?? "No source code available."}</code>
          </pre>
        </div>
      )}
    </section>
  );
}