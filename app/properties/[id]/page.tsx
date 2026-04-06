import { Navbar } from "@/components/navbar"
import {
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Waves,
  ChevronRight,
  Home,
  Car,
  Wind,
  MessageCircle,
  Umbrella,
  Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPropertyById } from "@/lib/properties"
import { notFound } from "next/navigation"

interface PropertyPageProps {
  params: {
    id: string
  }
}

const iconMap: Record<string, any> = {
  Wind: Wind,
  Waves: Waves,
  Umbrella: Umbrella,
  Car: Car,
  Wifi: Wifi,
  Home: Home,
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs text-gray-400 mb-8 font-medium">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link href="/#properties" className="hover:text-brand-orange transition-colors">Properties</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-brand-navy truncate font-bold">{property.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-10">
              <MapPin className="w-5 h-5 mr-2 text-brand-orange" />
              <span className="font-semibold text-lg">{property.location}</span>
            </div>

            {/* Gallery Section - Design Match */}
            <div className="flex flex-col md:flex-row gap-4 mb-14">
              <div className="flex-[2.5] aspect-[16/10] relative rounded-[40px] overflow-hidden shadow-2xl group">
                <Image
                  src={property.images[0]}
                  alt="Main view"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex-1 flex md:flex-col gap-4">
                {property.images.slice(1, 4).map((img, i) => (
                  <div key={i} className="flex-1 aspect-[4/3] relative rounded-[28px] overflow-hidden shadow-lg group">
                    <Image
                      src={img}
                      alt={`Gallery view ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Stunning {property.title}</h2>
              <p className="text-gray-600 leading-relaxed text-xl mb-10 font-light font-sans whitespace-pre-line">
                {property.description}
              </p>

              {/* Property Specs Tags - Design Match */}
              <div className="flex flex-wrap gap-4 mb-14 pb-10 border-b border-gray-100">
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <Home className="w-4 h-4 mr-3 text-brand-orange" /> Whole Apartment
                </div>
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <Users className="w-4 h-4 mr-3 text-brand-orange" /> {property.guests} Guests
                </div>
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <Bed className="w-4 h-4 mr-3 text-brand-orange" /> {property.beds} Beds
                </div>
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <Bath className="w-4 h-4 mr-3 text-brand-orange" /> {property.bath} Bath
                </div>
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center text-[10px] bg-brand-orange text-white rounded-lg font-black italic">M²</div>
                  {property.sqm} m²
                </div>
                <div className="flex items-center bg-gray-50/80 px-6 py-4 rounded-[20px] text-sm font-bold border border-gray-100 text-brand-navy shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <Wifi className="w-4 h-4 mr-3 text-brand-orange" /> AC & Wi-Fi
                </div>
              </div>

              {/* Main Airbnb Button - Design Match */}
              <div className="mb-14">
                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <button className="w-full flex items-center justify-center bg-[#FF5A5F] hover:bg-[#FF4449] text-white px-10 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-red-100 transition-all hover:-translate-y-1.5 active:scale-[0.98]">
                    <Image src="/airbnb-logo-white.jpg" alt="" width={24} height={24} className="mr-4 brightness-0 invert" />
                    Reserve on Airbnb
                  </button>
                </a>
                <p className="mt-4 text-center text-gray-400 font-medium">You will be redirected to Airbnb to complete your reservation.</p>
              </div>

              {/* Content Sections */}
              <div className="grid md:grid-cols-2 gap-16 pt-16 border-t border-gray-100">
                <div className="space-y-6">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-orange">Description</label>
                  <h3 className="text-3xl font-extrabold text-brand-navy">The Space</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-xl">
                    {property.mainFeatures.space}
                  </p>
                </div>
                <div className="space-y-6">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-orange">Accessibility</label>
                  <h3 className="text-3xl font-extrabold text-brand-navy">Guest Access</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-xl">
                    {property.mainFeatures.access}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[450px]">
            <div className="sticky top-28 bg-white border border-gray-100 rounded-[40px] p-10 card-shadow shadow-2xl shadow-brand-navy/5">
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl font-extrabold text-brand-orange tracking-tighter">{property.price} MAD</span>
                <span className="text-gray-400 font-bold text-lg tracking-tight">/ night</span>
              </div>

              {/* Date Selection Shell - Design Match */}
              <div className="space-y-4 mb-10">
                <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-inner">
                  <div className="bg-white p-5 hover:bg-gray-50/50 transition-colors cursor-pointer">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Check-In</p>
                    <div className="flex items-center text-sm font-bold text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add date
                    </div>
                  </div>
                  <div className="bg-white p-5 hover:bg-gray-50/50 transition-colors cursor-pointer border-l border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Check-Out</p>
                    <div className="flex items-center text-sm font-bold text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add date
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 border border-gray-100 rounded-[20px] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-all hover:shadow-md">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Guests</p>
                    <p className="text-base font-bold text-brand-navy">{property.guests} Guests</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                  <div className="text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Beds</p>
                    <p className="text-base font-bold text-brand-navy">{property.beds} Beds</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Booking Button */}
              <div className="space-y-4 mb-10 pb-10 border-b border-gray-100">
                <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full bg-[#FF5A5F] hover:bg-[#FF4449] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-xl shadow-red-50 hover:-translate-y-1">
                    <Image src="/airbnb-logo-white.jpg" alt="" width={20} height={20} className="mr-3 brightness-0 invert" />
                    Reserve on Airbnb
                  </button>
                </a>
                <a href={property.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-xl shadow-green-50 hover:-translate-y-1">
                    <MessageCircle className="w-6 h-6 mr-3 fill-white" />
                    Chat on WhatsApp
                  </button>
                </a>
              </div>

              {/* Quick Perks Icons - Design Match */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[18px] bg-orange-50 flex items-center justify-center text-brand-orange border border-orange-100/50 shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{property.guests}</p>
                    <span className="text-sm font-extrabold text-brand-navy">Guests</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[18px] bg-orange-50 flex items-center justify-center text-brand-orange border border-orange-100/50 shadow-sm">
                    <Bed className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{property.beds}</p>
                    <span className="text-sm font-extrabold text-brand-navy">Beds</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[18px] bg-orange-50 flex items-center justify-center text-brand-orange border border-orange-100/50 shadow-sm">
                    <Bath className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{property.bath}</p>
                    <span className="text-sm font-extrabold text-brand-navy">Baths</span>
                  </div>
                </div>
                {property.amenities.map((amenity, i) => {
                  const Icon = iconMap[amenity.icon] || Home
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-[18px] bg-orange-50 flex items-center justify-center text-brand-orange border border-orange-100/50 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Included</p>
                        <span className="text-sm font-extrabold text-brand-navy whitespace-nowrap">{amenity.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section - Design Match */}
      <section className="py-24 bg-gray-50/50 mt-12 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 max-w-xl">
              <label className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-orange mb-4 block">Neighborhood</label>
              <h3 className="text-5xl font-black text-brand-navy mb-8 tracking-tighter">Prime Location</h3>
              <p className="text-gray-500 leading-relaxed text-xl mb-12 font-light">
                Located in a sought-after area of {property.location.split(',')[0]}, our property offers both tranquility and proximity to the city's highlights.
              </p>
              <div className="p-10 bg-white rounded-[40px] card-shadow flex items-center gap-8 border border-gray-100 transition-all hover:scale-[1.02]">
                <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center text-brand-orange shadow-inner">
                  <MapPin className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-2xl font-black text-brand-navy mb-1">{property.location}</p>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Luxury Residential Area</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl relative border-8 border-white/50">
              <img src="/google-maps-morocco.jpg" alt="Map Location" className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-orange rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white animate-bounce-slow">
                <MapPin className="w-10 h-10 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-28 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md text-xs font-black tracking-widest uppercase mb-10 border border-white/20">
            Secure Your Booking
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-16 max-w-4xl mx-auto tracking-tighter leading-tight">
            Ready to experience this extraordinary space?
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#FF5A5F] px-12 py-7 rounded-[24px] font-black text-2xl transition-all hover:scale-110 shadow-2xl shadow-black/30 flex items-center group">
                <Image src="/airbnb-logo-white.jpg" alt="" width={28} height={28} className="mr-4 brightness-0 invert group-hover:rotate-12 transition-transform" />
                Reserve on Airbnb
              </button>
            </a>
            <a href={property.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#25D366] px-12 py-7 rounded-[24px] font-black text-2xl transition-all hover:scale-110 shadow-2xl shadow-black/30 flex items-center group">
                <MessageCircle className="w-8 h-8 mr-4 fill-white group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </button>
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-orange rounded-full blur-[200px]" />
        </div>
      </section>
    </main>
  )
}

