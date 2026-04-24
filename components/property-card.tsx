import Image from "next/image"
import Link from "next/link"
import { Bed, Users, MapPin } from "lucide-react"

import { getDisplayPropertyTitle } from "@/lib/properties"

interface PropertyProps {
  id: string
  title: string
  location: string
  price: number
  guests: number
  beds: number
  image: string
  airbnbUrl: string
  bookingUrl?: string
  whatsappUrl?: string
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  guests,
  beds,
  image,
  airbnbUrl,
  bookingUrl,
  whatsappUrl,
}: PropertyProps) {
  const whatsappLink = whatsappUrl || "https://wa.me/212661662984"
  const displayTitle = getDisplayPropertyTitle(title)
  const actionButtonClassName =
    "group/button shine-button relative flex items-center justify-center overflow-hidden rounded-2xl border px-3 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"

  return (
    <div className="group pro-surface relative overflow-hidden rounded-[26px] border border-white/70 bg-white card-shadow">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <Link href={`/properties/${id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="pro-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-brand-navy shadow-sm backdrop-blur-sm">
            {price} MAD / night
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/properties/${id}`} className="block">
          <div className="mb-2 flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500">
            <MapPin className="mr-1.5 h-3.5 w-3.5 text-brand-orange" />
            {location}
          </div>
          <h3 className="mb-4 line-clamp-1 text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-orange">
            {displayTitle}
          </h3>
        </Link>

        <div className="mb-6 flex items-center space-x-6 border-b border-gray-100 pb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="mr-2 h-4 w-4 text-brand-navy/70" />
            <span className="font-medium">{beds} Bed</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-brand-navy/70" />
            <span className="font-medium">{guests} Guests</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          <div className="flex gap-2">
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionButtonClassName} flex-1 border-[#FFB8BC] bg-gradient-to-br from-[#FF6A70] to-[#FF385C] text-white hover:border-[#FF9AA0] hover:shadow-[#FF385C]/25`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100" />
              <span className="relative mr-2 flex items-center justify-center">
                <Image src="/icons/airbnb_icon.png" alt="Airbnb" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
              </span>
              <span className="relative tracking-[0.02em]">Airbnb</span>
            </a>
            <a
              href={bookingUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionButtonClassName} flex-1 border-[#8BB7FF] bg-gradient-to-br from-[#0B4DBB] to-[#003580] text-white hover:border-[#A9C7FF] hover:shadow-[#003580]/25`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100" />
              <span className="relative mr-2 flex items-center justify-center">
                <Image src="/icons/booking-icon.png" alt="Booking" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
              </span>
              <span className="relative tracking-[0.02em]">Booking</span>
            </a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionButtonClassName} w-full border-[#87E3AD] bg-gradient-to-r from-[#1FB85A] to-[#25D366] text-white hover:border-[#A4EBBF] hover:shadow-[#25D366]/25`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100" />
            <span className="relative mr-2 flex items-center justify-center">
              <Image src="/icons/whatsapp-icon.png" alt="WhatsApp" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
            </span>
            <span className="relative tracking-[0.02em]">Reserve via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
