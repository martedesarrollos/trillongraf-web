"use client"

import Link from "next/link"
import React from "react"
import { trackWhatsAppClick } from "@/lib/fpixel"

interface TrackedWhatsAppLinkProps {
  href: string
  source: string
  details?: Record<string, any>
  className?: string
  target?: string
  children: React.ReactNode
}

export function TrackedWhatsAppLink({
  href,
  source,
  details,
  className,
  target = "_blank",
  children,
}: TrackedWhatsAppLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={className}
      onClick={() => trackWhatsAppClick(source, details)}
    >
      {children}
    </Link>
  )
}
