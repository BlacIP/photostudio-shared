"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { cn } from "../../lib/utils"

type IconType = ComponentType<{ size?: number; className?: string }>

type UserNavItem =
  | {
      type: "link"
      label: string
      href: string
      icon?: IconType
      variant?: "default" | "danger"
    }
  | {
      type: "action"
      label: string
      onSelect: () => void
      icon?: IconType
      variant?: "default" | "danger"
    }
  | {
      type: "separator"
    }

type UserNavProps = {
  displayName: string
  email?: string
  initials?: string
  items: UserNavItem[]
  className?: string
}

function getInitials(displayName: string, email?: string) {
  if (displayName) {
    return displayName
      .split(" ")
      .map((name) => name[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  return email ? email.substring(0, 2).toUpperCase() : "--"
}

export function UserNav({
  displayName,
  email,
  initials,
  items,
  className,
}: UserNavProps) {
  const resolvedInitials = initials ?? getInitials(displayName, email)
  const hasEmail = Boolean(email)
  const itemBase =
    "flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm cursor-pointer outline-none"

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "flex w-full items-center gap-3 rounded-xl border border-stroke-soft-200/70 bg-bg-white-0/80 p-3 text-left outline-none transition-colors hover:bg-bg-white-0 focus:ring-2 focus:ring-primary-base group",
            className
          )}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-base font-semibold shadow-sm group-hover:opacity-90">
            {resolvedInitials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-strong-950 truncate">
              {displayName}
            </p>
            {hasEmail && <p className="text-xs text-text-sub-600 truncate">{email}</p>}
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[220px] rounded-xl border border-stroke-soft-200 bg-bg-white-0 p-1 shadow-lg animate-in fade-in zoom-in-95 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          side="right"
          align="end"
          sideOffset={10}
        >
          {items.map((item, index) => {
            if (item.type === "separator") {
              return (
                <DropdownMenu.Separator
                  key={`separator-${index}`}
                  className="my-1 h-px bg-stroke-soft-200"
                />
              )
            }

            const Icon = item.icon
            const variantClass =
              item.variant === "danger"
                ? "text-error-base hover:bg-error-base/10 hover:text-error-base"
                : "text-text-strong-950 hover:bg-bg-weak-50"
            const itemClassName = cn(itemBase, variantClass)
            const iconNode = Icon ? <Icon size={16} /> : null

            if (item.type === "action") {
              return (
                <DropdownMenu.Item
                  key={`${item.label}-${index}`}
                  onSelect={item.onSelect}
                  className={itemClassName}
                >
                  {iconNode}
                  {item.label}
                </DropdownMenu.Item>
              )
            }

            return (
              <DropdownMenu.Item key={`${item.label}-${index}`} asChild>
                <Link href={item.href} className={itemClassName}>
                  {iconNode}
                  {item.label}
                </Link>
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
