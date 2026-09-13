"use client";

import { useEffect, useState } from "react";

import {
    Copy,
    Check,
    Loader2,
    Maximize2,
    X,
} from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Figma } from "@designali/logos";

interface FigmaFrameCardProps {
    fileKey: string;
    nodeId: string;
}

export function FigmaFrameCard({
    fileKey,
    nodeId,
}: FigmaFrameCardProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [frameName, setFrameName] = useState<string>("Loading...");
    const [loading, setLoading] = useState<boolean>(true);
    const [copied, setCopied] = useState<boolean>(false);
    const [copyLoading, setCopyLoading] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // Safe formatter:
    // Sirf FIRST dash ko colon (:) mein badlega
    const formatFigmaNodeId = (id: string) => {
        if (!id) return "";

        // Agar pehle se colon hai toh waise hi rehne do
        if (id.includes(":")) return id;

        // Sirf pehle dash (-) ko colon (:) mein replace karo
        const firstDashIndex = id.indexOf("-");

        if (firstDashIndex !== -1) {
            return (
                id.substring(0, firstDashIndex) +
                ":" +
                id.substring(firstDashIndex + 1)
            );
        }

        return id;
    };

    const formattedNodeId = formatFigmaNodeId(nodeId);

    // Figma S3 image ko apne Next.js API ke through proxy karo.
    // Production mein direct Figma S3 URL load karne se CORS / access
    // related issues avoid honge.
    const getProxyImageUrl = (url: string) => {
        return `/api/figma/image?url=${encodeURIComponent(url)}`;
    };

    useEffect(() => {
        let cancelled = false;

        async function fetchFrame() {
            try {
                setLoading(true);

                const res = await fetch(
                    `/api/figma?fileKey=${fileKey}&nodeId=${encodeURIComponent(
                        formattedNodeId
                    )}`
                );

                if (!res.ok) {
                    throw new Error(
                        `Figma API request failed: ${res.status}`
                    );
                }

                const data = await res.json();

                if (cancelled) return;

                if (data.imageUrl) {
                    setImageUrl(data.imageUrl);
                }

                if (data.nodeName) {
                    setFrameName(data.nodeName);
                }
            } catch (err) {
                console.error(
                    "Error fetching Figma frame:",
                    err
                );
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchFrame();

        return () => {
            cancelled = true;
        };
    }, [fileKey, formattedNodeId]);

    const copyToFigmaCanvas = async () => {
        try {
            setCopyLoading(true);

            const res = await fetch(
                `/api/figma/svg?fileKey=${fileKey}&nodeId=${encodeURIComponent(
                    formattedNodeId
                )}`
            );

            if (!res.ok) {
                throw new Error(
                    `SVG API request failed: ${res.status}`
                );
            }

            const data = await res.json();

            if (!data.svgContent) {
                console.error("No SVG content returned");
                return;
            }

            await navigator.clipboard.writeText(
                data.svgContent.trim()
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error(
                "Clipboard write failed:",
                err
            );
        } finally {
            setCopyLoading(false);
        }
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    useEffect(() => {
        if (!isFullscreen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleKeyDown = (
            event: KeyboardEvent
        ) => {
            if (event.key === "Escape") {
                setIsFullscreen(false);
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow = "";

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [isFullscreen]);

    return (
        <>
            <div className="group relative h-auto w-full overflow-hidden border bg-background transition-all">
                <div className="relative flex w-full items-center justify-center bg-muted/10">
                    {loading ? (
                        <div className="flex min-h-60 items-center gap-2 text-sm text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Fetching Design...
                        </div>
                    ) : imageUrl ? (
                        <div className="relative h-full w-full overflow-hidden">
                            <img
                                src={getProxyImageUrl(imageUrl)}
                                alt={frameName}
                                className="block h-auto w-full object-contain"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Fullscreen Button */}
                            <Button
                                size="icon"
                                variant="secondary"
                                className={cn(
                                    "absolute right-2 top-2 h-7 w-7",
                                    "opacity-0 transition-opacity duration-200",
                                    "group-hover:opacity-100"
                                )}
                                onClick={openFullscreen}
                                aria-label="Expand preview"
                                title="Expand preview"
                            >
                                <Maximize2 className="h-3.5 w-3.5" />
                            </Button>

                            {/* Bottom Actions */}
                            <div
                                className={cn(
                                    "absolute inset-x-0 bottom-0",
                                    "flex items-center justify-between gap-3",
                                    "border-t bg-background/80 p-2 backdrop-blur-md",
                                    "translate-y-full transition-transform duration-300 ease-out",
                                    "group-hover:translate-y-0"
                                )}
                            >
                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate px-1 text-sm font-medium">
                                        {frameName}
                                    </h3>
                                </div>

                                <Button
                                    size="sm"
                                    className="h-7 shrink-0 px-2.5 text-xs"
                                    onClick={
                                        copyToFigmaCanvas
                                    }
                                    disabled={copyLoading}
                                >
                                    {copied ? (
                                        <>
                                            <Check className="mr-1.5 h-3.5 w-3.5" />
                                            Copied to Figma
                                        </>
                                    ) : copyLoading ? (
                                        <>
                                            <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                            Copy to Figma
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="mr-1.5 h-3.5 w-3.5" />
                                            Copy to Figma
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex min-h-60 items-center justify-center">
                            <p className="text-xs text-destructive">
                                Failed to render frame preview
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Fullscreen Preview */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/60 p-4 backdrop-blur-sm md:p-8">
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close preview"
                        onClick={closeFullscreen}
                        className="absolute inset-0 cursor-default"
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative z-10 flex h-fit max-h-[calc(100vh-64px)] w-full max-w-7xl flex-col overflow-hidden border bg-background shadow-2xl"
                    >
                        {/* Browser Header */}
                        <div className="flex h-11 shrink-0 items-center gap-3 border-b bg-background px-3">
                            <div className="flex shrink-0 items-center gap-1.5">
                                <span className="size-2.5 rounded-full bg-red-400/70" />
                                <span className="size-2.5 rounded-full bg-yellow-400/70" />
                                <span className="size-2.5 rounded-full bg-green-400/70" />
                            </div>

                            <div className="flex min-w-0 flex-1 items-center justify-center">
                                <Figma className="size-3.5 shrink-0 text-muted-foreground" />
                            </div>

                            <button
                                type="button"
                                onClick={closeFullscreen}
                                aria-label="Close preview"
                                className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <X className="size-4" />
                            </button>
                        </div>

                        {/* Fullscreen Image */}
                        <div className="min-h-0 flex-1 overflow-y-auto bg-muted/10">
                            {imageUrl && (
                                <img
                                    src={getProxyImageUrl(
                                        imageUrl
                                    )}
                                    alt={frameName}
                                    className="block h-auto w-full object-contain"
                                />
                            )}
                        </div>

                        {/* Fullscreen Bottom Actions */}
                        <div className="flex shrink-0 items-center justify-between gap-3 border-t bg-background/80 p-2">
                            <h3 className="truncate px-1 text-sm font-medium">
                                {frameName}
                            </h3>

                            <Button
                                size="sm"
                                className="h-7 shrink-0 px-2.5 text-xs"
                                onClick={
                                    copyToFigmaCanvas
                                }
                                disabled={copyLoading}
                            >
                                {copied ? (
                                    <>
                                        <Check className="mr-1.5 h-3.5 w-3.5" />
                                        Copied to Figma
                                    </>
                                ) : copyLoading ? (
                                    <>
                                        <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                        Copy to Figma
                                    </>
                                ) : (
                                    <>
                                        <Copy className="mr-1.5 h-3.5 w-3.5" />
                                        Copy to Figma
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}