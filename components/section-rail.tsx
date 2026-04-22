"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface SectionRailItem {
  id: string
  label: string
}

interface SectionRailProps {
  items: SectionRailItem[]
  className?: string
}

export function SectionRail({ items, className }: SectionRailProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const visibleSections = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        if (visibleSections.size === 0) {
          return
        }

        const nextActive = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]

        if (nextActive) {
          setActiveId(nextActive)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-18% 0px -45% 0px",
      }
    )

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block",
        className
      )}
    >
      <div className="relative pl-8">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-[#d9d7d2]" />
        <ul className="space-y-5">
          {items.map((item) => {
            const isActive = item.id === activeId

            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "group flex items-center text-[15px] font-semibold transition-colors",
                    isActive ? "text-[#257b57]" : "text-[#aab3c5] hover:text-brand-navy"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[-32px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors",
                      isActive ? "border-[#257b57] bg-[#257b57]" : "border-[#cfd4dc] bg-white group-hover:border-brand-orange"
                    )}
                  />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
