"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Calendar, ChevronDown, Users } from "lucide-react"

import { getDisplayPropertyTitle, type Property } from "@/lib/properties"

function formatDateLabel(value: string) {
  if (!value) return "Select date"

  const date = new Date(`${value}T12:00:00`)
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
}

function buildWhatsAppHref(baseUrl: string, propertyTitle: string, checkIn: string, checkOut: string, guests: number) {
  const text = [
    `Hello, I'm interested in ${propertyTitle}.`,
    `Check-in: ${checkIn ? formatDateLabel(checkIn) : "Not selected"}.`,
    `Check-out: ${checkOut ? formatDateLabel(checkOut) : "Not selected"}.`,
    `Guests: ${guests}.`,
    "Please confirm availability.",
  ].join(" ")

  const separator = baseUrl.includes("?") ? "&" : "?"
  return `${baseUrl}${separator}text=${encodeURIComponent(text)}`
}

interface PropertyBookingCardProps {
  property: Property
}

export function PropertyBookingCard({ property }: PropertyBookingCardProps) {
  const today = useMemo(() => new Date().toISOString().split("T")[0], [])
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(String(property.guests))

  const minCheckOut = checkIn || today
  const guestCount = Number(guests)
  const displayTitle = getDisplayPropertyTitle(property.title)
  const whatsappHref = buildWhatsAppHref(property.whatsappUrl, displayTitle, checkIn, checkOut, guestCount)

  return (
    <div className="pro-surface sticky top-28 overflow-hidden rounded-[28px] border border-[#f1e6d9] bg-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)]">
      <div className="border-b border-[#f4ede3] bg-[linear-gradient(135deg,#fffaf4_0%,#ffffff_55%,#fff2e6_100%)] p-7">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight text-brand-orange">{property.price} MAD</span>
          <span className="pb-1 text-sm font-medium text-slate-500">/ night</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Choose your stay details here, then continue to Airbnb or contact us directly on WhatsApp.
        </p>
      </div>

      <div className="p-7">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-2 border-b border-slate-200">
            <label className="border-r border-slate-200 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Check-in</p>
              <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{formatDateLabel(checkIn)}</span>
                <Calendar className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  const nextValue = event.target.value
                  setCheckIn(nextValue)

                  if (checkOut && nextValue && checkOut < nextValue) {
                    setCheckOut(nextValue)
                  }
                }}
                className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-orange focus:bg-white"
              />
            </label>

            <label className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Check-out</p>
              <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{formatDateLabel(checkOut)}</span>
                <Calendar className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="date"
                min={minCheckOut}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-orange focus:bg-white"
              />
            </label>
          </div>

          <label className="block p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Guests</p>
            <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-700">
              <span>{guestCount} guests</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Users className="h-4 w-4" />
                <ChevronDown className="h-4 w-4" />
              </span>
            </div>
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-orange focus:bg-white"
            >
              {Array.from({ length: Math.max(property.guests + 4, 12) }, (_, index) => index + 1).map((count) => (
                <option key={count} value={count}>
                  {count} guest{count > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </label>
        </div>

        <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block">
          <span className="shine-button group flex w-full items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#f7a72e,#f26522)] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-26px_rgba(242,101,34,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-20px_rgba(242,101,34,0.7)]">
            <span className="flex items-center justify-center">
              <Image src="/icons/airbnb_icon.png" alt="Airbnb" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
            </span>
            Reserve on Airbnb
          </span>
        </a>

        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 block">
          <span className="shine-button group flex w-full items-center justify-center gap-3 rounded-2xl border border-[#bfe8cf] bg-[linear-gradient(90deg,#7ce7a3,#25d366)] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-28px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-24px_rgba(37,211,102,0.6)]">
            <span className="flex items-center justify-center">
              <Image src="/icons/whatsapp-icon.png" alt="WhatsApp" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
            </span>
            Chat on WhatsApp
          </span>
        </a>

        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
          Your selected dates and guest count can be shared directly in the WhatsApp message.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Guests</p>
            <p className="mt-2 text-lg font-semibold text-slate-800">{guestCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Bedrooms</p>
            <p className="mt-2 text-lg font-semibold text-slate-800">{property.beds}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Bathrooms</p>
            <p className="mt-2 text-lg font-semibold text-slate-800">{property.bath}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Surface</p>
            <p className="mt-2 text-lg font-semibold text-slate-800">{property.sqm} m²</p>
          </div>
        </div>
      </div>
    </div>
  )
}
