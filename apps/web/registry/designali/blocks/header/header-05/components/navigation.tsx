"use client"

import React, { ReactNode } from "react"

interface ChildrenProps {
  children: ReactNode
}

/* =========================
   Navigation Menu
========================= */

const NavigationMenu: React.FC<ChildrenProps> = ({ children }) => (
  <nav className="relative z-50 flex items-center justify-center">
    {children}
  </nav>
)

/* =========================
   Navigation Menu List
========================= */

const NavigationMenuList: React.FC<ChildrenProps> = ({ children }) => (
  <ul className="flex list-none items-center justify-center">{children}</ul>
)

/* =========================
   Navigation Menu Item
========================= */

interface NavigationMenuItemProps extends ChildrenProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
}) => (
  <li
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="relative"
  >
    {children}
  </li>
)

/* =========================
   Navigation Menu Trigger
========================= */

interface NavigationMenuTriggerProps extends ChildrenProps {
  isActive?: boolean
}

const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  isActive = false,
}) => (
  <button
    type="button"
    className={`inline-flex h-10 items-center justify-center px-4 py-2 text-xs transition-colors duration-300 focus:outline-none ${
      isActive ? "text-background" : "text-background/90 hover:text-background"
    }`}
  >
    {children}
  </button>
)

/* =========================
   Navigation Menu Content
========================= */

interface NavigationMenuContentProps extends ChildrenProps {
  isOpen?: boolean
}

const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  children,
  isOpen = false,
}) => {
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed top-12 right-0 left-0 z-40 w-screen transform-gpu overflow-hidden bg-foreground transition-[opacity,transform,visibility] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0"
      } `}
    >
      <div className="mx-auto w-full max-w-4xl px-8 py-12">{children}</div>
    </div>
  )
}

/* =========================
   Exports
========================= */

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
}
