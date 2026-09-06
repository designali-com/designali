"use client";

import Link from "next/link";

import {
  ArrowDown,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logo } from "@/src/components/logo";

export function HeroSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen w-full bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        <div className="relative flex min-h-screen flex-col border-r border-border">

          <div className="relative flex h-[150px] items-center overflow-hidden border-b border-border px-8 sm:px-12 lg:px-16">

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-40
                dark:opacity-20
              "
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />


            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background" />

            {/* Logo */}
            <div className="relative z-10">
              <Link
                href="/"
                className="uppercase
                  text-4xl 
                  font-medium
                  flex gap-4
                  items-center
                "
              >
                <Logo className="h-8 w-full" />
                designali
              </Link>
            </div>

            {/* Theme Button */}
            <div className="relative z-10 ml-auto">
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )}

                  <span className="sr-only">
                    Toggle theme
                  </span>
                </Button>
              )}
            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* CONTENT */}
          {/* --------------------------------------------- */}

          <div className="flex flex-1 flex-col justify-end px-8 py-12 sm:px-12 lg:px-16 lg:pb-14">

            <div className="max-w-[760px]">

              {/* Heading */}
              <h1
                className="
                  text-3xl
                  md:text-4xl
                  xl:text-5xl
                  font-medium  
                "
              >
                We are a study of production creative
                for CGI, 3D, motion and development web.
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8  
                  text-muted-foreground 
                "
              >
                Designali combines art direction, CGI, motion
                design, web development, and integrated AI
                workflows with ongoing R&D, experimentation,
                and production-ready execution for brands
                and agencies.
              </p>

              {/* Scroll */}
              <Button
                variant="outline"
                className="
                  mt-7 
                  gap-3  
                  text-xs
                  uppercase  
                "
              >
                Scroll to explore
                <ArrowDown className="size-4" />
              </Button>
            </div>
          </div>
        </div>


        <div className="grid min-h-screen grid-rows-[1fr_auto]">

          <div className="relative min-h-[500px] overflow-hidden bg-muted">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/vid/colorful-spheres.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="grid grid-cols-2">

            {/* WORK */}
            <Card
              className="
                group
                min-h-[280px]
                rounded-none
                border-0
                border-t 
                p-7 
                bg-background  
                text-foreground
              "
            >
              <Link
                href="/work"
                className="
                  flex
                  h-full
                  flex-col
                  justify-between
                "
              >

                <div className="flex justify-end">
                  <ArrowRight
                    className="
                      size-5
                      text-muted-foreground
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-foreground
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                       text-xl
                      md:text-3xl
                    "
                  >
                    Work
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Explore the portfolio
                  </p>
                </div>

              </Link>
            </Card>

            {/* CONTACT */}
            <Card
              className="
                group
                min-h-[280px]
                rounded-none
                border-0
                border-l
                border-t
                border-border
                bg-foreground
                p-7
                text-background 
              "
            >
              <Link
                href="/contact"
                className="
                  flex
                  h-full
                  flex-col
                  justify-between
                "
              >

                <div className="flex justify-end">
                  <ArrowRight
                    className="
                      size-5
                      opacity-60
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                    text-xl
                      md:text-3xl
                      font-medium
                    "
                  >
                    Contact us
                  </h2>

                  <p className="mt-2 text-sm opacity-60 sm:text-base">
                    Start your project
                  </p>
                </div>

              </Link>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}