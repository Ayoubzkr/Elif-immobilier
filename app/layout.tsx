import type { Metadata } from "next"
import { Geist, Geist_Mono, Cormorant_Garamond, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
})
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "ELIF IMMOBILIER - Luxury Real Estate Morocco",
  description: "Discover the most prestigious properties in Morocco with ELIF Immobilier.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${cormorant.variable} ${manrope.variable}`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
