"use client"

import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { cn } from "../../lib/utils"

type NavMainItem = {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

type NavSecondaryItem = {
  title: string
  url: string
  icon: LucideIcon
}

type AdminSidebarProps = React.ComponentProps<typeof Sidebar> & {
  headerTitle: string
  headerSubtitle?: string
  headerIcon: LucideIcon
  navMain: NavMainItem[]
  navSecondary?: NavSecondaryItem[]
  footer?: React.ReactNode
}

export function AdminSidebar({
  headerTitle,
  headerSubtitle,
  headerIcon: HeaderIcon,
  navMain,
  navSecondary = [],
  footer,
  className,
  ...props
}: AdminSidebarProps) {
  const hasHeaderSubtitle = Boolean(headerSubtitle)
  const hasNavSecondary = navSecondary.length > 0
  const hasFooter = Boolean(footer)

  return (
    <Sidebar
      variant="sidebar"
      className={cn(
        "border-r border-stroke-soft-200/80 bg-bg-white-0/90 shadow-sm",
        className
      )}
      {...props}
    >
      <SidebarHeader className="border-b border-stroke-soft-200/80 px-3 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="rounded-xl border border-stroke-soft-200/80 bg-bg-weak-50/70 px-3 py-2"
              asChild
            >
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-primary-100 text-primary-base">
                  <HeaderIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-text-strong-950">
                    {headerTitle}
                  </span>
                  {hasHeaderSubtitle && (
                    <span className="truncate text-xs text-text-sub-600">
                      {headerSubtitle}
                    </span>
                  )}
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-3 px-2 pb-3">
        <NavMain items={navMain} />
        {hasNavSecondary && (
          <NavSecondary items={navSecondary} className="mt-auto" />
        )}
      </SidebarContent>
      {hasFooter && (
        <SidebarFooter className="border-t border-stroke-soft-200/80 px-2 py-3">
          {footer}
        </SidebarFooter>
      )}
    </Sidebar>
  )
}
