"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export function Hero() {
    return (
        <div className="relative w-full flex h-[600px] flex-col items-center justify-center overflow-hidden border-b border-dotted">

            <div className="relative p-2 border-x border-dotted text-center flex flex-col items-center justify-center max-w-6xl h-full w-full mx-auto z-10">
                <div className="p-2 relative border h-full border-dotted flex flex-col w-full">
                     

                    <span className="mt-auto mx-auto border border-dotted px-3 py-1 text-xs text-muted-foreground">Accepting new projects this month</span>
                    <h1 className="mx-auto pb-2 pt-3 font-serif text-5xl md:max-w-4xl md:text-7xl">
                        Expert in Execution
                    </h1>
                    <p className="mx-auto max-w-xl text-sm text-muted-foreground">
                        Brand identity, web design, product UI/UX and development under one flat monthly subscription. Senior craft, fast delivery, no surprises.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 py-10">
                        <Button nativeButton={false} render={<Link target="_blank" href="https://cal.com/designali/30min" />}>
                            Start a Project
                        </Button>
                        <Button variant="outline" nativeButton={false} render={<Link href="#works" />}>
                            View Works
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
