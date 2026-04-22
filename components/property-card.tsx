import Image from "next/image"
import Link from "next/link"
import { Bed, Users, MapPin, MessageCircle } from "lucide-react"

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
            {title}
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
              <span className="relative mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/18 ring-1 ring-white/25 backdrop-blur-sm">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current stroke-[2.2]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 6.4c1.7 0 2.7 1.5 3.6 3.4l5.3 11c1.3 2.8-.4 6-3.5 6-1.5 0-2.8-.7-3.5-2l-1.9-3.1-1.9 3.1c-.8 1.3-2.1 2-3.5 2-3.1 0-4.8-3.2-3.5-6l5.3-11c.9-1.9 1.9-3.4 3.6-3.4Z"
                  />
                  <circle cx="16" cy="18.4" r="2.9" />
                </svg>
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
              <span className="relative mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20 backdrop-blur-sm">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
                  <path d="M10 6h7.9c4 0 6.3 2.1 6.3 5.3 0 2.1-1.1 3.8-3 4.5 2.5.6 4 2.5 4 5.2 0 3.5-2.5 5.9-6.7 5.9H10V6Zm4.6 8h2.4c1.7 0 2.7-.9 2.7-2.3 0-1.4-1-2.2-2.7-2.2h-2.4V14Zm0 9.1h3c1.9 0 3-.9 3-2.5s-1.1-2.5-3-2.5h-3v5Z" />
                </svg>
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
            <span className="relative mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20 backdrop-blur-sm">
              <MessageCircle className="h-4.5 w-4.5 fill-white" />
            </span>
            <span className="relative tracking-[0.02em]">Reserve via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
