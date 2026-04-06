import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const textColor = transparent ? "text-white" : "text-brand-navy"

  return (
    <nav
      className={cn(
        "z-50 w-full transition-all duration-300",
        transparent
          ? "absolute top-0 bg-transparent border-none py-6"
          : "sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-20 h-20">
              <Image
                src="/logo-01.png"
                alt="ELIF Immobilier Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Properties", "Services", "Contact"].map((item) => (
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

          <button className={cn("md:hidden", textColor)}>
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
    </nav>
  )
}

