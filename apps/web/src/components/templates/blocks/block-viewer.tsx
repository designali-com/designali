"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  ChevronRight,
  Clipboard,
  Code,
  Eye,
  File,
  Folder,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"

import { trackEvent } from "@/src/lib/events"
import {
  createFileTreeForRegistryItemFiles,
  FileTree,
} from "@/src/lib/registry"

import { useCopyToClipboard } from "@/src/hooks/use-copy"

import { Button } from "@workspace/ui/components/button"

import {
  Collapsible,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible"

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { cn } from "@workspace/ui/lib/utils"
import { OpenInV0Button } from "./open-in-v0-button"

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type RegistryFile = {
  path: string
  target?: string
  content?: string
  type?: string
}

type RegistryMeta = {
  iframeHeight?: number | string
  mobile?: string
  container?: string
  containerClassName?: string
}

type RegistryItem = {
  name: string
  description?: string
  files?: RegistryFile[]
  meta?: RegistryMeta
}

type HighlightedFile = RegistryFile & {
  highlightedContent: string
}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

type BlockViewerContext = {
  item: RegistryItem

  view: "code" | "preview"

  setView: (view: "code" | "preview") => void

  activeFile: string | null

  setActiveFile: (file: string) => void

  previewWidth: number

  setPreviewWidth: (width: number) => void

  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null

  highlightedFiles: HighlightedFile[] | null

  iframeKey: number

  setIframeKey: React.Dispatch<React.SetStateAction<number>>
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)

  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }

  return context
}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: {
  item: RegistryItem

  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null

  highlightedFiles: HighlightedFile[] | null

  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")

  const [activeFile, setActiveFile] = React.useState<string | null>(() => {
    const firstFile = highlightedFiles?.[0]

    if (!firstFile) {
      return null
    }

    return firstFile.target || firstFile.path
  })

  const [previewWidth, setPreviewWidth] = React.useState<number>(100)

  const [iframeKey, setIframeKey] = React.useState(0)

  const value = React.useMemo<BlockViewerContext>(
    () => ({
      item,
      view,
      setView,
      activeFile,
      setActiveFile,
      previewWidth,
      setPreviewWidth,
      tree,
      highlightedFiles,
      iframeKey,
      setIframeKey,
    }),
    [item, view, activeFile, previewWidth, tree, highlightedFiles, iframeKey]
  )

  return (
    <BlockViewerContext.Provider value={value}>
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-2 overflow-hidden md:flex-col"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

/* -------------------------------------------------------------------------- */
/* Toolbar                                                                    */
/* -------------------------------------------------------------------------- */

function BlockViewerToolbar() {
  const { setView, view, item, setIframeKey, previewWidth, setPreviewWidth } =
    useBlockViewer()

  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const handleViewChange = (val: unknown) => {
    const nextView = Array.isArray(val) ? val[0] : val
    if (nextView === "preview" || nextView === "code") {
      if (nextView !== view) {
        setView(nextView)
      }
    }
  }

  const handleWidthChange = (val: unknown) => {
    const selectedValue = Array.isArray(val) ? val[0] : val
    if (!selectedValue || typeof selectedValue !== "string") return

    setView("preview")

    const size = Number(selectedValue)
    if (!Number.isNaN(size)) {
      setPreviewWidth(size)
    }
  }

  return (
    <div className="hidden w-full items-center gap-4 lg:flex">
      {/* Preview / Code */}
      <Tabs value={view} onValueChange={handleViewChange}>
        <TabsList variant={"line"}>
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-1">
        <Button
          size="icon-sm"
          variant="ghost"
          title="Mobile"
          aria-label="Mobile preview"
          onClick={() => handleWidthChange(["30"])}
        >
          <Smartphone fill={previewWidth === 30 ? "currentColor" : "none"} />
        </Button>

        <Button
          size="icon-sm"
          variant="ghost"
          title="Tablet"
          aria-label="Tablet preview"
          onClick={() => handleWidthChange(["60"])}
        >
          <Tablet fill={previewWidth === 60 ? "currentColor" : "none"} />
        </Button>

        <Button
          size="icon-sm"
          variant="ghost"
          title="Desktop"
          aria-label="Desktop preview"
          onClick={() => handleWidthChange(["100"])}
        >
          <Monitor fill={previewWidth === 100 ? "currentColor" : "none"} />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button 
            nativeButton={false}
            size="icon-sm"
            variant="ghost"
            render={
              <Link
                target="_blank"
                href={`/view/${item.name}`}
                rel="noopener noreferrer"
              />
            }
          >
            <Fullscreen />
          </Button>

          <Button
            size="icon-sm"
            variant="ghost"
            onClick={() => {
              setIframeKey((key) => key + 1)
            }}
          >
            <RotateCw />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            copyToClipboard(
              `npx @designali/cli@latest components add ${item.name}`
            )
          }}
        >
          {isCopied ? <Check /> : <Terminal />}

          <span>add @designali/{item.name}</span>
        </Button>
        <OpenInV0Button name={item.name} />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* View & Drag Resizer                                                        */
/* -------------------------------------------------------------------------- */

function BlockViewerView() {
  const { item, iframeKey, previewWidth, setPreviewWidth } = useBlockViewer()
  const [isResizing, setIsResizing] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true) // <-- New State
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Jab bhi iframeKey change ho (refresh button click par), loading phir se true kar dein
  React.useEffect(() => {
    setIsLoading(true)
  }, [iframeKey])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const newWidth = ((moveEvent.clientX - rect.left) / rect.width) * 100
      setPreviewWidth(Math.min(Math.max(newWidth, 30), 100))
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
      <div ref={containerRef} className="relative grid h-full w-full gap-4">
        {/* Background Grid Style (Same as before) */}
        <div className="absolute inset-0 z-0 border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 0.5px, transparent 0)",
              backgroundSize: "8px 8px",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="relative z-10 flex h-full w-full items-stretch">
          {/* Preview */}
          <div
            className="relative z-10 h-full min-w-0 overflow-hidden border bg-background shadow-2xl/20 transition-[width] duration-75 ease-out"
            style={{
              width: `${previewWidth}%`,
            }}
          >
            {/* Jab tak iframe load ho raha hai, Skeleton/Loader dikhayein */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm animate-pulse">
                <div className="w-3/4 h-8 bg-muted rounded-md" />
                <div className="w-1/2 h-4 bg-muted rounded-md" />
                <div className="w-5/6 h-64 bg-muted/50 rounded-md mt-4" />
              </div>
            )}

            <iframe
              key={iframeKey}
              src={`/view/${item.name}`}
              height={item.meta?.iframeHeight ?? 930}
              loading="lazy"
              onLoad={() => setIsLoading(false)} // <-- Load hone par false kar dein
              className={cn(
                "block h-full w-full border-0 bg-background transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100",
                isResizing && "pointer-events-none"
              )}
            />
          </div>

          <div
            onMouseDown={handleMouseDown}
            className="relative z-20 hidden shrink-0 cursor-col-resize items-center justify-center bg-transparent md:flex"
          >
            <div className="absolute w-3">
              <div className="h-8 w-[6px] rounded-full bg-border transition-all hover:h-10" />
            </div>
          </div>

          {/* Spacer */}
          <div
            className="min-w-0 flex-1"
            style={{
              width: `${100 - previewWidth}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Mobile                                                                     */
/* -------------------------------------------------------------------------- */

function BlockViewerMobile({
  children,
}: {
  children: React.ReactNode
}) {
  const { item } = useBlockViewer()

  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-medium">
          {item.description}
        </div>

        <div className="ml-auto shrink-0 font-mono text-xs text-muted-foreground">
          {item.name}
        </div>
      </div>

      <div className="overflow-hidden border border-dotted bg-background">
        <img
          src={`/r/blocks/${item.name}/light.webp`}
          alt={item.name}
          data-block={item.name}
          width={1440}
          height={900}
          className="block h-auto w-full object-cover dark:hidden"
        />

        <img
          src={`/r/blocks/${item.name}/dark.webp`}
          alt={item.name}
          data-block={item.name}
          width={1440}
          height={900}
          className="hidden h-auto w-full object-cover dark:block"
        />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Code                                                                       */
/* -------------------------------------------------------------------------- */

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer()

  const file = React.useMemo(() => {
    if (!highlightedFiles || !activeFile) {
      return null
    }

    return (
      highlightedFiles.find(
        (file) => (file.target || file.path) === activeFile
      ) ?? null
    )
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  const language = file.path.split(".").pop() ?? "tsx"

  return (
    <div className="bg-code text-code-foreground mr-[14px] flex overflow-hidden border border-dotted group-data-[view=preview]/block-view-wrapper:hidden md:h-(--height)">
      <div className="w-60">
        <BlockViewerFileTree />
      </div>

      <figure
        data-rehype-pretty-code-figure=""
        className="!mx-0 mt-0 flex min-w-0 flex-1 flex-col"
      >
        <figcaption
          className="text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {file.target || file.path}

          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </figcaption>

        <div
          key={file.target || file.path}
          dangerouslySetInnerHTML={{
            __html: file.highlightedContent ?? "",
          }}
          className="no-scrollbar overflow-y-auto"
        />
      </figure>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* File Tree                                                                  */
/* -------------------------------------------------------------------------- */

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  if (!tree) {
    return null
  }

  return (
    <SidebarProvider className="flex !min-h-full flex-col border-r">
      <Sidebar collapsible="none" className="w-full flex-1">
        <SidebarGroupLabel className="h-12 rounded-none border-b px-4 text-sm">
          Files
        </SidebarGroupLabel>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.map((file, index) => (
                <Tree key={`${file.path}-${index}`} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

/* -------------------------------------------------------------------------- */
/* Tree                                                                       */
/* -------------------------------------------------------------------------- */

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()

  const [open, setOpen] = React.useState(true)

  // File
  if (!item.children) {
    if (!item.path) {
      return null
    }

    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => setActiveFile(item.path!)}
          className={cn(
            "rounded-none pl-(--index) whitespace-nowrap",
            "hover:bg-muted-foreground/15",
            item.path === activeFile &&
            "bg-foreground text-background hover:text-background hover:bg-foreground/80"
          )}
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-4 w-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  // Folder
  return (
    <SidebarMenuItem>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="group/collapsible"
      >
        <SidebarMenuButton
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
          style={
            {
              "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight
            className={cn(
              "transition-transform duration-200",
              open && "rotate-90"
            )}
          />

          <Folder className="h-4 w-4" />

          {item.name}
        </SidebarMenuButton>

        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree
                key={`${subItem.path}-${key}`}
                item={subItem}
                index={index + 1}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

/* -------------------------------------------------------------------------- */
/* Copy                                                                       */
/* -------------------------------------------------------------------------- */

function BlockCopyCodeButton() {
  const { activeFile, highlightedFiles, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    if (!activeFile || !highlightedFiles) {
      return null
    }

    return (
      highlightedFiles.find(
        (file) => (file.target || file.path) === activeFile
      ) ?? null
    )
  }, [activeFile, highlightedFiles])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-7"
      onClick={() => {
        copyToClipboard(content)

        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file?.path ?? file?.target,
          },
        })
      }}
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}

/* -------------------------------------------------------------------------- */
/* Main                                                                       */
/* -------------------------------------------------------------------------- */

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  children,
}: {
  item: RegistryItem

  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null

  highlightedFiles: HighlightedFile[] | null

  children: React.ReactNode
}) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
    >
      <BlockViewerToolbar />

      <BlockViewerView />

      <BlockViewerCode />

      <BlockViewerMobile>
        {children}
      </BlockViewerMobile>
    </BlockViewerProvider>
  )
}

export { BlockViewer }
