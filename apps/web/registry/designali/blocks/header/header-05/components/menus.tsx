"use client"

import * as React from "react"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/designali/blocks/header/header-05/components/navigation"

export function Menus() {
  type MenuName =
    | "design"
    | "dev"
    | "learning"
    | "community"
    | "resources"
    | "tools"
    | "services"
    | "company"
    | null

  const [activeMenu, setActiveMenu] = useState<MenuName>(null)

  const handleMouseEnter = (menuName: MenuName) => setActiveMenu(menuName)
  const handleMouseLeave = () => setActiveMenu(null)

  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {/* 1. Design */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("design")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "design"}>
              Design
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "design"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Brand Identity
                    </div>
                  </a>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      UI/UX Design
                    </div>
                  </a>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Design Systems
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 2. Development */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("dev")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "dev"}>
              Development
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "dev"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Next.js
                    </div>
                  </a>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Web Development
                    </div>
                  </a>
                  <a href="/work" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      AI Workflows
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 3. Learning */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("learning")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "learning"}>
              Templates
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "learning"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="/templates" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Portfolio
                    </div>
                  </a>
                  <a href="/templates" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Design Agency
                    </div>
                  </a>
                  <a href="/templates" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      AI Templates
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 4. Community */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("community")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "community"}>
              Community
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "community"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="https://www.instagram.com/designali.code/" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Instagram
                    </div>
                  </a>
                  <a href="https://x.com/designali_com" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      X
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/designali-com/" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      LinkedIn
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 5. Resources */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "resources"}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "resources"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="/docs" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Docs
                    </div>
                  </a>
                  <a href="/blogs" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Blogs
                    </div>
                  </a>
                  <a href="/docs/legal/terms" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Terms
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 6. Tools */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("tools")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "tools"}>
              Assets
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "tools"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="/icons" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Icons
                    </div>
                  </a>
                  <a href="/logos" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Logos
                    </div>
                  </a>
                  <a href="/illustration" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Illustration
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <div className="hidden lg:flex">
            <NavigationMenuItem
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuTrigger isActive={activeMenu === "services"}>
                Blocks
              </NavigationMenuTrigger>
              <NavigationMenuContent isOpen={activeMenu === "services"}>
                <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                  <li>
                    <a href="/blocks" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Blocks
                      </div>
                    </a>
                    <a href="/ui" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        UI Designs
                      </div>
                    </a>
                    <a href="/pricing" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Pricing
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuTrigger isActive={activeMenu === "company"}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent isOpen={activeMenu === "company"}>
                <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                  <li>
                    <a href="https://www.linkedin.com/in/aliimam-in/" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Ali Imam
                      </div>
                    </a>
                    <a href="/work" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Work
                      </div>
                    </a>
                    <a href="/contact" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Contact
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
