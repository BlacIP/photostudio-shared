"use client"

import * as React from "react"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { cn } from "../../lib/utils"

export function NavSecondary({
  items,
  className,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const isExternalUrl = (url: string) => url.startsWith("http") || url.startsWith("mailto:")

  return (
    <SidebarGroup
      {...props}
      className={cn(
        "rounded-xl border border-stroke-soft-200/70 bg-bg-weak-50/60 p-3",
        className
      )}
    >
      <SidebarGroupContent className="gap-1.5">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm" className="rounded-lg">
                {isExternalUrl(item.url) ? (
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
