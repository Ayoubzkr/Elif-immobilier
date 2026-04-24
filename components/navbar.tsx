"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const textColor = transparent && !isScrolled ? "text-white" : "text-brand-navy"
  const desktopLinkClass = transparent
    ? isScrolled
      ? "border border-white/18 bg-white/10 text-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.75)] backdrop-blur-md hover:bg-white/18 hover:text-white"
      : "text-white hover:bg-white/10 hover:text-white"
    : "text-brand-navy hover:bg-brand-orange/10 hover:text-brand-orange"
  const logoSrc = transparent && !isScrolled ? "/logo-01.png" : "/logo-02.png"
  const links = ["Home", "About", "Properties", "Services", "Contact"]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300",
        transparent
          ? cn(
              "py-3",
              isScrolled
                ? "border-b border-white/10 bg-[rgba(7,17,29,0.72)] shadow-[0_18px_45px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                : "border-none bg-transparent"
            )
          : "border-b border-gray-100 bg-white/95 py-3 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.22)] backdrop-blur-xl"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-16">
              <Image src={logoSrc} alt="ELIF Immobilier Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {links.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300",
                  textColor,
                  desktopLinkClass
                )}
              >
                {item}
              </Link>
            ))}
            <a
              href="https://wa.me/212661662984"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>

          <button
            className={cn("md:hidden", textColor)}
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {isOpen ? (
          <div className="rounded-3xl border border-white/20 bg-white/95 p-5 text-brand-navy shadow-[0_20px_50px_-30px_rgba(15,23,42,0.55)] backdrop-blur md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-brand-orange/10 hover:text-brand-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://wa.me/212661662984"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex justify-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-hover"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
