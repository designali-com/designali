"use client"

import * as React from "react"

import {
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  Tablet,
  Check,
  Copy,
  Code2,
  Layers3,
  Palette,
  Type,
  Globe,
  FileText,
  Sparkles,
  ChevronDown,
  X,
  RotateCcw,
  Download,
  ArrowUpRight,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

type Device = "desktop" | "tablet" | "mobile"

export interface TemplatePreviewProps {
  name: string
  description: string
  url: string
  downloadurl: string

  tech?: string[]
  pages?: string[]
  features?: string[]
  colors?: string[]
  fonts?: string[]

  className?: string

  showDetails?: boolean
  showColors?: boolean
  showFonts?: boolean
  showCTA?: boolean

  ctaText?: string

  onUseTemplate?: () => void
}

export function TemplatePreview({
  name,
  description,
  url,
  downloadurl,
  tech = [],
  pages = [],
  features = [],
  colors = [],
  fonts = [],
  className,
  showDetails = true,
  showColors = true,
  showFonts = true,
  showCTA = true,
  ctaText = "Download This Template",
  onUseTemplate,
}: TemplatePreviewProps) {
  const [device, setDevice] = React.useState<Device>("desktop")

  const [isFullscreen, setIsFullscreen] = React.useState(false)

  const [refreshKey, setRefreshKey] = React.useState(0)

  const [copied, setCopied] = React.useState(false)

  const [showAllPages, setShowAllPages] = React.useState(false)

  const previewRef = React.useRef<HTMLDivElement>(null)

  /*
   * Copy URL
   */

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url)

      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      // Clipboard errors can be ignored
    }
  }

  /*
   * Dialog fullscreen
   */

  const toggleFullscreen = () => {
    setIsFullscreen((value) => !value)
  }

  /*
   * Close dialog
   */

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  /*
   * Escape key + body scroll lock
   */

  React.useEffect(() => {
    if (!isFullscreen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""

      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFullscreen])

  /*
   * Visible pages
   */

  const visiblePages = showAllPages ? pages : pages.slice(0, 6)

  return (
    <section className={cn("w-full overflow-hidden bg-background", className)}>
      {/* =========================================================
          HEADER
      ========================================================== */}

      <div className="border-b">
        <div className="flex flex-col justify-center gap-2 px-4 py-10 text-center md:px-6">
          <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
            {name}
          </h1>

          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <div className="border-b px-2 py-1">
        <div className="flex justify-between gap-3">
          {/* Device Switcher */}

          <div className="inline-flex w-fit items-center">
            <DeviceButton
              active={device === "desktop"}
              onClick={() => setDevice("desktop")}
              icon={
                <Monitor
                  className={cn(
                    "size-4 transition-all",
                    device === "desktop" && "fill-current"
                  )}
                />
              }
            />

            <DeviceButton
              active={device === "tablet"}
              onClick={() => setDevice("tablet")}
              icon={
                <Tablet
                  className={cn(
                    "size-4 transition-all",
                    device === "tablet" && "fill-current"
                  )}
                />
              }
            />

            <DeviceButton
              active={device === "mobile"}
              onClick={() => setDevice("mobile")}
              icon={
                <Smartphone
                  className={cn(
                    "size-4 transition-all",
                    device === "mobile" && "fill-current"
                  )}
                />
              }
            />
          </div>

          <div className="flex items-center gap-3">
            <Button
              size={"icon-sm"}
              variant={"ghost"}
              onClick={() => setRefreshKey((value) => value + 1)}
              aria-label="Refresh preview"
              title="Refresh preview"
            >
              <RotateCcw />
            </Button>
            <Button
              size={"icon-sm"}
              variant={"ghost"}
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Close preview" : "Expand preview"}
              title={isFullscreen ? "Close preview" : "Expand preview"}
            >
              {isFullscreen ? <Minimize2 /> : <Maximize2 />}
            </Button>

            <Button
              size={"icon-sm"}
              variant={"ghost"}
              render={
                <a href={url} target="_blank" rel="noopener noreferrer" />
              }
            >
              <ArrowUpRight />
              
            </Button>
            <Button
              size={"sm"}
              render={
                <a href={downloadurl} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Download />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* =========================================================
          WEBSITE PREVIEW
      ========================================================== */}

      <div
        ref={previewRef}
        className={cn(
          "relative flex min-h-[820px] items-start justify-center overflow-auto bg-muted/30 p-3 transition-all md:p-6",
          isFullscreen &&
            "fixed inset-0 z-50 min-h-0 items-center overflow-hidden bg-black/60 p-4 backdrop-blur-sm md:p-8"
        )}
      >
        {/* Backdrop */}
        {isFullscreen && (
          <button
            type="button"
            aria-label="Close preview"
            onClick={closeFullscreen}
            className="absolute inset-0 cursor-default"
          />
        )}

        {/* Dialog */}
        <div
          role={isFullscreen ? "dialog" : undefined}
          aria-modal={isFullscreen ? true : undefined}
          className={cn(
            // Normal preview
            "relative z-10 flex h-[780px] shrink-0 flex-col overflow-hidden border bg-background shadow-2xl transition-all duration-300 ease-out",

            // Devices
            device === "desktop" && "w-full",
            device === "tablet" && "w-[768px] max-w-full",
            device === "mobile" && "w-[390px] max-w-full",

            // Expanded dialog
            isFullscreen &&
              "h-[calc(100vh-64px)] w-full max-w-[1600px] shadow-2xl"
          )}
        >
          {/* Browser Header */}
          <div className="flex h-11 shrink-0 items-center gap-3 border-b bg-background px-3">
            {/* Traffic Lights */}
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
            </div>

            {/* URL */}
            <div className="flex min-w-0 flex-1 items-center justify-center">
              <div className="flex h-7 w-full max-w-60 items-center gap-2 border bg-muted/40 px-2">
                <Globe className="size-3.5 shrink-0 text-muted-foreground" />

                <span className="min-w-0 flex-1 truncate text-[11px] text-muted-foreground">
                  {url}
                </span>

                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={copyUrl}
                  className="ml-auto shrink-0"
                >
                  {copied ? <Check /> : <Copy />}
                </Button>
              </div>
            </div>

            {/* Close */}
            {isFullscreen ? (
              <button
                type="button"
                onClick={closeFullscreen}
                aria-label="Close preview"
                className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            ) : (
              <div className="w-7 shrink-0" />
            )}
          </div>

          {/* Iframe */}
          <div className="relative min-h-0 flex-1 bg-white">
            <iframe
              key={refreshKey}
              src={url}
              title={`${name} preview`}
              className="block size-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
        </div>
      </div>

      {/* =========================================================
          DETAILS
      ========================================================== */}

      {showDetails && (
        <div className="border-t">
          <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* Technology */}

            {tech.length > 0 && (
              <DetailSection
                icon={<Code2 className="size-4" />}
                title="Technology"
              >
                <div className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <Badge variant={"outline"} key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </DetailSection>
            )}

            {/* Features */}

            {features.length > 0 && (
              <DetailSection
                icon={<Sparkles className="size-4" />}
                title="Features"
              >
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        <Check className="size-3" />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}
          </div>

          {/* =====================================================
              PAGES
          ====================================================== */}

          {pages.length > 0 && (
            <div className="border-t p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="size-4" />

                  <h2 className="text-sm font-medium">Pages Included</h2>

                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {pages.length}
                  </span>
                </div>

                {pages.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setShowAllPages((value) => !value)}
                    className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    {showAllPages ? "Show Less" : "View All"}

                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        showAllPages && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {visiblePages.map((page, index) => (
                  <Badge
                    variant={"outline"}
                    key={`${page}-${index}`}
                    className="flex items-center gap-2 px-3 py-2.5"
                  >
                    <span className="flex shrink-0 items-center justify-center text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="truncate text-xs font-medium">{page}</span>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              COLORS + FONTS
          ====================================================== */}

          {(showColors && colors.length > 0) ||
          (showFonts && fonts.length > 0) ? (
            <div className="grid divide-y border-t md:divide-x md:divide-y-0">
              {/* Colors */}

              {showColors && colors.length > 0 && (
                <DetailSection
                  icon={<Palette className="size-4" />}
                  title="Color Palette"
                >
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <Badge variant={"outline"} key={color} className="pl-0">
                        <span
                          className="size-8 border-r"
                          style={{
                            backgroundColor: color,
                          }}
                        />

                        <span className="pl-1 font-mono text-xs text-muted-foreground uppercase">
                          {color}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </DetailSection>
              )}

              {/* Fonts */}

              {showFonts && fonts.length > 0 && (
                <DetailSection
                  icon={<Type className="size-4" />}
                  title="Typography"
                >
                  <div className="flex flex-wrap gap-2">
                    {fonts.map((font) => (
                      <Badge variant={"outline"} key={font} className="gap-2">
                        <span className="text-md">Aa</span>

                        <span className="text-xs font-medium">{font}</span>
                      </Badge>
                    ))}
                  </div>
                </DetailSection>
              )}
            </div>
          ) : null}
        </div>
      )}

      {/* =========================================================
          CTA
      ========================================================== */}

      {showCTA && (
        <div className="border-t bg-muted/20 p-5 md:p-6">
          <div className="flex flex-col items-center justify-between gap-4 border bg-background p-5 lg:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <Layers3 className="size-4" />

                <h3 className="text-sm font-semibold">
                  Ready to use this template?
                </h3>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                Start building with this design and customize it for your
                project.
              </p>
            </div>

            <Button
              size={"lg"}
              onClick={onUseTemplate}
              className="w-full max-w-xs"
            >
              <Sparkles className="size-4" />

              {ctaText}
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

/* ===============================================================
   DEVICE BUTTON
================================================================ */

function DeviceButton({
  active,
  onClick,
  icon,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex size-9 items-center justify-center transition-all",
        active
          ? ""
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
    </button>
  )
}

/* ===============================================================
   DETAIL SECTION
================================================================ */

function DetailSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="p-5 md:p-6">
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  )
}

/* ===============================================================
   BADGE
================================================================ */
