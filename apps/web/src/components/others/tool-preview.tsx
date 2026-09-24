"use client";

import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

type ToolPreviewProps = {
  coverImage: string | null;
  link: string;
  title: string;
};

export function ToolPreview({
  coverImage,
  link,
  title,
}: ToolPreviewProps) {
  const [status, setStatus] = useState<
    "checking" | "allowed" | "blocked"
  >("checking");

  useEffect(() => {
    let cancelled = false;

    async function checkIframe() {
      try {
        const response = await fetch(
          `/api/tools/check-iframe?url=${encodeURIComponent(link)}`
        );

        const data = await response.json();

        if (!cancelled) {
          setStatus(data.allowed ? "allowed" : "blocked");
        }
      } catch {
        if (!cancelled) {
          setStatus("blocked");
        }
      }
    }

    checkIframe();

    return () => {
      cancelled = true;
    };
  }, [link]);

  // Cover while checking / blocked
  if (status !== "allowed") {
    return (
      <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">
            <ImageIcon className="size-12 opacity-40" />
          </div>
        )}
      </div>
    );
  }

  // Iframe only when allowed
  return (
    <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
      <iframe
        src={link}
        title={title}
        className="size-full border-0"
        loading="eager"
        allowFullScreen
      />
    </div>
  );
}