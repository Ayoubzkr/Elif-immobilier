import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Car, ChevronRight, Home, MapPin, ShieldCheck, Sparkles, Users, Waves, Wifi, Wind, Umbrella } from "lucide-react"
import { notFound } from "next/navigation"

import { Navbar } from "@/components/navbar"
import { PropertyGallery } from "@/components/property-gallery"
import { PageTransition } from "@/components/page-transition"
import { PropertyBookingCard } from "@/components/property-booking-card"
import { Reveal } from "@/components/reveal"
import { getDisplayPropertyTitle, getPropertyById } from "@/lib/properties"

interface PropertyPageProps {
  params: Promise<{
    id: string
  }>
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Waves,
  Umbrella,
  Car,
  Wifi,
  Home,
}

const propertyHighlights = [
  { label: "Whole apartment", icon: Home },
  { label: "Premium stay", icon: Sparkles },
  { label: "Secure booking flow", icon: ShieldCheck },
]

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const city = property.location.split(",")[0]
  const nightsLabel = "/ night"
  const displayTitle = getDisplayPropertyTitle(property.title)

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen bg-[linear-gradient(180deg,#fbf7f1_0%,#ffffff_18%,#f8f4ee_100%)] pt-28 sm:pt-30">
          <div className="section-wash mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <nav className="mb-6 flex flex-wrap items-center text-xs font-medium tracking-wide text-slate-400">
              <Link href="/" className="transition-colors hover:text-brand-orange">
                Home
              </Link>
              <ChevronRight className="mx-2 h-3.5 w-3.5" />
              <Link href="/#properties" className="transition-colors hover:text-brand-orange">
                Properties
              </Link>
              <ChevronRight className="mx-2 h-3.5 w-3.5" />
              <span className="max-w-[260px] truncate text-brand-orange">{displayTitle}</span>
            </nav>

            <Reveal variant="blur">
              <section
                id="overview"
                className="mb-10 scroll-mt-32 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_390px]"
              >
                <div>
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    {propertyHighlights.map((item) => {
                      const Icon = item.icon

                      return (
                        <span
                          key={item.label}
                          className="inline-flex items-center gap-2 rounded-full border border-[#f0e4d6] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm"
                        >
                          <Icon className="h-3.5 w-3.5 text-brand-orange" />
                          {item.label}
                        </span>
                      )
                    })}
                  </div>

                  <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-[3.6rem]">
                    {displayTitle}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500">
                    <span className="inline-flex items-center gap-2 text-base font-medium">
                      <MapPin className="h-4.5 w-4.5 text-brand-orange" />
                      {property.location}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-slate-400" />
                      {property.guests} guests
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm">
                      <Bed className="h-4 w-4 text-slate-400" />
                      {property.beds} beds
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm">
                      <Bath className="h-4 w-4 text-slate-400" />
                      {property.bath} baths
                    </span>
                  </div>

                  <PropertyGallery
                    propertyId={property.id}
                    title={displayTitle}
                    city={city}
                    price={property.price}
                    nightsLabel={nightsLabel}
                    images={property.images}
                  />
                </div>

                <aside className="lg:pt-18">
                  <PropertyBookingCard property={property} />

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {property.amenities.slice(0, 4).map((amenity) => {
                      const Icon = iconMap[amenity.icon] || Home

                      return (
                        <div
                          key={amenity.name}
                          className="flex min-h-[76px] items-center gap-3 rounded-2xl border border-[#f1e8dc] bg-[#fffaf4] px-4 py-3"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-sm">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <span className="text-sm font-medium leading-5 text-slate-700">{amenity.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </aside>
              </section>
            </Reveal>

            <Reveal delay={60}>
              <section id="details" className="mb-10 scroll-mt-32 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[26px] border border-[#efe3d6] bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)]">
                  <h2 className="text-3xl font-bold text-slate-800">Stunning {city} Stay</h2>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{property.description}</p>
                </div>

                <div className="rounded-[26px] border border-[#efe3d6] bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)]">
                  <h3 className="text-2xl font-bold text-slate-800">The Space</h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{property.mainFeatures.space}</p>
                </div>

                <div className="rounded-[26px] border border-[#efe3d6] bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)]">
                  <h3 className="text-2xl font-bold text-slate-800">Guest Access</h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{property.mainFeatures.access}</p>
                </div>

                <div className="rounded-[26px] border border-[#efe3d6] bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)]">
                  <h3 className="text-2xl font-bold text-slate-800">Location</h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    If you&apos;re looking for a refined base in {city}, this address places you close to the best local
                    experiences while keeping the calm, comfort, and privacy expected from a premium stay.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={120}>
              <section
                id="amenities"
                className="scroll-mt-32 rounded-[34px] border border-[#eedfce] bg-[linear-gradient(135deg,#fffaf3_0%,#fff_46%,#fff3e6_100%)] p-6 shadow-[0_26px_90px_-54px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10"
              >
                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">Curated Amenities</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Everything you need for a premium stay</h2>
                  </div>
                  <p className="max-w-2xl text-[15px] leading-7 text-slate-600">
                    Every detail of this apartment is designed to balance comfort, function, and style, whether you are
                    travelling for leisure, a short city break, or an extended stay.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {property.amenities.map((amenity) => {
                    const Icon = iconMap[amenity.icon] || Home

                    return (
                      <div
                        key={amenity.name}
                        className="group rounded-[24px] border border-white/70 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-50px_rgba(15,23,42,0.45)]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-800">{amenity.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Thoughtfully included to elevate the comfort and quality of your stay.
                        </p>
                      </div>
                    )
                  })}
                </div>
              </section>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <section
              id="reserve"
              className="relative scroll-mt-32 overflow-hidden border-t border-[#f1e4d5] bg-[linear-gradient(180deg,#fff7ef_0%,#f7efe6_100%)] py-16"
            >
              <div className="absolute inset-0 opacity-50">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[120px]" />
              </div>
              <div className="relative mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">Reserve Your Stay</p>
                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-800 sm:text-5xl">
                  Ready to experience {displayTitle} in style?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                  Complete your booking on Airbnb or reach out directly on WhatsApp for availability, questions, and tailored
                  assistance.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
                    <span className="shine-button inline-flex items-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#f7a72e,#f26522)] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-26px_rgba(242,101,34,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-20px_rgba(242,101,34,0.7)]">
                      <span className="flex items-center justify-center">
                        <Image src="/icons/airbnb_icon.png" alt="Airbnb" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                      </span>
                      Reserve on Airbnb
                    </span>
                  </a>

                  <a href={property.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <span className="shine-button inline-flex items-center gap-3 rounded-2xl border border-[#bfe8cf] bg-[linear-gradient(90deg,#7ce7a3,#25d366)] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-28px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-24px_rgba(37,211,102,0.6)]">
                      <span className="flex items-center justify-center">
                        <Image src="/icons/whatsapp-icon.png" alt="WhatsApp" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                      </span>
                      Chat on WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        </main>
      </PageTransition>
    </>
  )
}
