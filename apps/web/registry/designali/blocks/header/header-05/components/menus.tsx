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
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      UI/UX
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Branding
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Prototypes
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
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Frontend
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Backend
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      DevOps
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
              Learning
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "learning"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Tutorials
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Courses
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Blogs
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
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Forums
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Discord
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      GitHub
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
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Documentation
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      API Reference
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Changelog
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
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "tools"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Figma
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Sketch
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                      Photoshop
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
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent isOpen={activeMenu === "services"}>
                <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                  <li>
                    <a href="#" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Consulting
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Workshops
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Support
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
                    <a href="#" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        About Us
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="mb-3 text-xl font-semibold text-background/80 hover:text-background">
                        Careers
                      </div>
                    </a>
                    <a href="#" className="group block">
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
