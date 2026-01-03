"use client"

import * as React from "react"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar"
import { Separator } from "../ui/separator"
import { cn } from "../../lib/utils"

type AdminShellProps = {
  sidebar: React.ReactNode
  guard?: React.ReactNode
  headerTitle: string
  headerBadge?: React.ReactNode
  headerActions?: React.ReactNode
  headerClassName?: string
  mainClassName?: string
  children: React.ReactNode
}

export function AdminShell({
  sidebar,
  guard,
  headerTitle,
  headerBadge,
  headerActions,
  headerClassName,
  mainClassName,
  children,
}: AdminShellProps) {
  return (
    <SidebarProvider>
      {guard}
      <div className="flex w-full min-h-screen bg-bg-weak-50 text-text-strong-950">
        <div className="flex w-full px-2 md:px-3">
          {sidebar}
          <SidebarInset className="flex flex-1 min-w-0 flex-col !m-0 !ml-0 !rounded-none !shadow-none px-0">
            <header
              className={cn(
                "sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-stroke-soft-200/80 bg-bg-white-0/90 px-4 shadow-sm backdrop-blur-md md:px-6",
                headerClassName
              )}
            >
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-2 text-sm font-semibold text-text-strong-950">
                {headerBadge}
                <span>{headerTitle}</span>
              </div>
              {headerActions ? (
                <div className="ml-auto flex items-center gap-2">
                  {headerActions}
                </div>
              ) : null}
            </header>

            <main
              className={cn(
                "flex-1 overflow-y-auto px-4 pb-8 pt-6 md:px-6 md:pb-10",
                mainClassName
              )}
            >
              {children}
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
