import Image from "next/image"
import { Bed, Users, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

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

export function PropertyCard({ id, title, location, price, guests, beds, image, airbnbUrl, bookingUrl, whatsappUrl }: PropertyProps) {
  const whatsappLink = whatsappUrl || "https://wa.me/212661662984"

  return (
    <div className="group bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Link href={`/properties/${id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-navy shadow-sm">
            {price} MAD / night
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/properties/${id}`} className="block">
          <div className="flex items-center text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
            {location}
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-4 line-clamp-1 group-hover:text-brand-orange transition-colors">{title}</h3>
        </Link>

        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 border-b border-gray-100 pb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-2 text-brand-navy/70" />
            <span className="font-medium">{beds} Bed</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-brand-navy/70" />
            <span className="font-medium">{guests} Guests</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          <div className="flex gap-2">
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2.5 px-2 bg-[#FF5A5F] text-white text-xs font-bold rounded-xl hover:bg-[#FF5A5F]/90 transition-all shadow-sm hover:shadow-md"
            >
              <Image src="/airbnb-logo-white.jpg" alt="" width={14} height={14} className="mr-2 brightness-0 invert" />
              Airbnb
            </a>
            <a
              href={bookingUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2.5 px-2 bg-[#003580] text-white text-xs font-bold rounded-xl hover:bg-[#003580]/90 transition-all shadow-sm hover:shadow-md"
            >
              <span className="mr-2 text-sm font-black">B.</span>
              Booking
            </a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#25D366]/90 transition-all shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-white" />
            Reserve via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

