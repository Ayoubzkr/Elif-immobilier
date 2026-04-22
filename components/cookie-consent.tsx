"use client"

import { useEffect, useState } from "react"
import { Cookie, X } from "lucide-react"

const COOKIE_CONSENT_KEY = "elif-cookie-consent"

export function CookieConsent() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    setIsOpen(!savedConsent)
  }, [])

  const handleChoice = (value: "accepted" | "refused") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    setIsOpen(false)
  }

  const handleClose = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "dismissed")
    setIsOpen(false)
  }

  if (!isMounted || !isOpen) {
    return null
  }

  return (
    <aside className="cookie-banner fixed inset-x-4 bottom-4 z-[70] mx-auto w-auto max-w-2xl rounded-[28px] border border-white/60 bg-white/92 p-5 text-brand-navy shadow-[0_24px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:inset-x-6 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
          <Cookie className="h-6 w-6" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Cookies</p>
              <h2 className="mt-1 text-xl font-bold">Votre confidentialite, votre choix</h2>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="rounded-full border border-slate-200 p-2 text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-brand-navy"
              aria-label="Fermer le bandeau cookies"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
            Nous utilisons des cookies pour ameliorer l&apos;experience, mesurer l&apos;audience et personnaliser le contenu.
            Vous pouvez accepter ou refuser ces usages a tout moment.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-orange px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-orange-500/20"
            >
              Accepter
            </button>
            <button
              type="button"
              onClick={() => handleChoice("refused")}
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
