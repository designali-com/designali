"use client"

import * as React from "react"

import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react"

import { useConfig } from "@/src/hooks/use-config"
import { copyToClipboardWithMeta } from "@/src/components/docs/copy-button"

import { Button } from "@workspace/ui/components/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@workspace/ui/components/tabs"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export function CodeBlockCommand({
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
}: React.ComponentProps<"pre"> & {
    __npm__?: string
    __yarn__?: string
    __pnpm__?: string
    __bun__?: string
}) {
    const [config, setConfig] = useConfig()
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        if (!hasCopied) return

        const timer = setTimeout(() => {
            setHasCopied(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [hasCopied])

    const packageManager = config.packageManager || "pnpm"

    const tabs = React.useMemo(
        () => ({
            pnpm: __pnpm__,
            npm: __npm__,
            yarn: __yarn__,
            bun: __bun__,
        }),
        [__npm__, __pnpm__, __yarn__, __bun__]
    )

    const copyCommand = React.useCallback(() => {
        const command = tabs[packageManager]

        if (!command) return

        copyToClipboardWithMeta(command)
        setHasCopied(true)
    }, [packageManager, tabs])

    return (
        <div className="relative mt-2 overflow-x-auto">
            <Tabs
                value={packageManager}
                className="gap-0"
                onValueChange={(value) => {
                    setConfig({
                        ...config,
                        packageManager: value as
                            | "pnpm"
                            | "npm"
                            | "yarn"
                            | "bun",
                    })
                }}
            >
                <div className="flex items-center gap-2">
                    <TabsList>
                        {Object.entries(tabs).map(([key, value]) => {
                            if (!value) return null

                            return (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    className=""
                                >
                                    {key}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                </div>

                <div className="no-scrollbar overflow-x-auto">
                    {Object.entries(tabs).map(([key, value]) => {
                        if (!value) return null

                        return (
                            <TabsContent
                                key={key}
                                value={key}
                                className="mt-2 relative border px-4 py-3.5"
                            >
                                <pre>
                                    <code
                                        className="relative font-mono text-sm leading-none"
                                        data-language="bash"
                                    >

                                        {value}
                                    </code>
                                </pre>
                                <Tooltip>
                                    <TooltipTrigger render={<Button
                                        data-slot="copy-button"
                                        size="icon"
                                        variant="ghost"
                                        className="absolute top-2.5 right-3 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
                                        onClick={copyCommand}
                                    >
                                        <span className="sr-only">Copy</span>
                                        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
                                    </Button>} />


                                    <TooltipContent>
                                        {hasCopied ? "Copied" : "Copy to Clipboard"}
                                    </TooltipContent>
                                </Tooltip>
                            </TabsContent>
                        )
                    })}
                </div>
            </Tabs> 
        </div>
    )
}