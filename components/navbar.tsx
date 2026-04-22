"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const textColor = transparent ? "text-white" : "text-brand-navy"
  const logoSrc = transparent ? "/logo-01.png" : "/logo-02.png"
  const links = ["Home", "About", "Properties", "Services", "Contact"]

  return (
    <nav
      className={cn(
        "z-50 w-full transition-all duration-300",
        transparent
          ? "absolute top-0 border-none bg-transparent py-6"
          : "sticky top-0 border-b border-gray-100 bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-20">
              <Image src={logoSrc} alt="ELIF Immobilier Logo" fill className="object-contain" />
            </div>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {links.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className={cn("text-sm font-semibold hover:text-brand-orange transition-colors", textColor)}
              >
                {item}
              </Link>
            ))}
            <a
              href="https://wa.me/212661662984"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg px-6 py-2.5 text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all"
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
                  className="text-sm font-semibold transition-colors hover:text-brand-orange"
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
