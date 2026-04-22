import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

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
      <body className={`font-sans antialiased ${playfair.variable} ${lato.variable}`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
