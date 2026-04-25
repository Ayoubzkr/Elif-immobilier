"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const textColor = "text-white"
  const desktopLinkClass =
    "group relative text-sm font-medium text-white/70 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
  const logoSrc = "/logo-01.png"
  const isPropertyPage = pathname.startsWith("/properties/")
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: isPropertyPage ? "/#about" : "#about" },
    { label: "Properties", href: isPropertyPage ? "/#properties" : "#properties" },
    { label: "Services", href: isPropertyPage ? "/#services" : "#services" },
    { label: "Contact", href: isPropertyPage ? "/#contact" : "#contact" },
  ]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300",
        isScrolled
          ? "py-1.5 bg-[#07111d]/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
          : "py-2 backdrop-blur-xl bg-white/5 border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setIsOpen(false)}>
            <div className="relative h-14 w-14 sm:h-16 sm:w-16">
              <Image src={logoSrc} alt="ELIF Immobilier Logo" fill className="object-contain" priority />
            </div>
            <div className="min-w-0">
              <p className={cn("text-[11px] font-semibold uppercase tracking-[0.3em]", textColor)}>ELIF</p>
              <p className={cn("text-sm font-semibold sm:text-base", textColor)}>Immobilier</p>
            </div>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-0 py-2",
                  desktopLinkClass
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/212661662984"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03] hover:bg-brand-orange-hover hover:shadow-xl"
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

      </div>
      {isOpen ? (
        <div className="fixed inset-0 z-[95] bg-[rgba(7,17,29,0.82)] backdrop-blur-xl md:hidden">
          <div className="flex min-h-screen flex-col px-4 pb-8 pt-24 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/96 p-5 text-brand-navy shadow-[0_28px_70px_-36px_rgba(15,23,42,0.55)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-orange">Navigation</p>
                  <p className="mt-1 text-lg font-bold">ELIF Immobilier</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 p-2 text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-brand-navy"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-slate-200/80 px-4 py-3 text-base font-semibold transition-colors hover:border-brand-orange/25 hover:bg-brand-orange/10 hover:text-brand-orange"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/212661662984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex justify-center rounded-2xl bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-hover"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
