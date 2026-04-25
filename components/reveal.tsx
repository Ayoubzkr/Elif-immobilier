"use client"

import type { HTMLAttributes } from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: "up" | "down" | "left" | "right" | "zoom" | "blur"
}

export function Reveal({ children, className, delay = 0, variant = "up", ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const isNearViewport = rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08

      if (isNearViewport) {
        setIsVisible(true)
        return true
      }

      return false
    }

    if (revealIfInView()) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -4% 0px",
      }
    )

    observer.observe(node)

    const frame = window.requestAnimationFrame(() => {
      if (revealIfInView()) {
        observer.disconnect()
      }
    })

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
