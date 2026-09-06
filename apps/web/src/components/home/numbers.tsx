"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

export function NumbersSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = sectionRef.current

        if (!element) return

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            if (!entry) return

            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        }, {
            threshold: 0.3,
        })

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto w-full border-2 max-w-5xl border-dotted p-2 mb-20"
        >
            <div className="relative h-full w-full border border-dotted">
                <div className="grid w-full grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-dotted py-10 md:border-r md:border-b-0 lg:border-r">
                        <div className="flex flex-col space-y-2 text-center text-md">
                            {isVisible && (
                                <CounterNumber
                                    value={11}
                                    suffix="M+"
                                    className="text-primary text-7xl font-bold tracking-tight"
                                />
                            )}

                            <h1 className="text-2xl font-medium">
                            Components Views 
                            </h1>

                            <Link
                                target="_blank"
                                href="https://21st.dev/@designali-in"
                                className="underline hover:text-primary"
                            >
                                21st.dev
                            </Link>
                        </div>
                    </div>

                    <div className="py-10">
                        <div className="flex flex-col space-y-2 text-center text-md">
                            {isVisible && (
                                <CounterNumber
                                    value={2000}
                                    suffix="+"
                                    className="text-primary text-7xl font-bold tracking-tight"
                                />
                            )}

                            <h1 className="text-2xl font-medium">
                                Weekly Downloads
                            </h1>

                            <Link
                                target="_blank"
                                href="https://www.npmjs.com/package/@aliimam/logos"
                                className="underline hover:text-primary"
                            >
                                npmjs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}