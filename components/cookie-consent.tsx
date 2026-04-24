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
    <aside className="cookie-banner fixed bottom-4 left-4 right-4 z-[70] max-w-md rounded-[22px] border border-[#ebe4da] bg-white/96 p-4 text-brand-navy shadow-[0_20px_60px_-32px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:left-6 sm:right-auto sm:p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff3e5] text-brand-orange">
          <Cookie className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="pr-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-orange">Cookies</p>
              <h2 className="mt-1 text-base font-bold leading-5">Confidentialite et performance</h2>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="rounded-full border border-slate-200 p-1.5 text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-brand-navy"
              aria-label="Fermer le bandeau cookies"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="mt-2 text-sm leading-5 text-slate-600">
            Nous utilisons des cookies pour ameliorer l&apos;experience et mesurer l&apos;audience. Vous pouvez accepter
            ou refuser a tout moment.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand-orange px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-orange-500/20"
            >
              Accepter
            </button>
            <button
              type="button"
              onClick={() => handleChoice("refused")}
              className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
