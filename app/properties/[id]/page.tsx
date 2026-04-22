import Image from "next/image"
import Link from "next/link"
import {
  Bath,
  Bed,
  Calendar,
  Car,
  ChevronDown,
  ChevronRight,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  Wifi,
  Wind,
  Umbrella,
} from "lucide-react"
import { notFound } from "next/navigation"

import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { Reveal } from "@/components/reveal"
import { SectionRail } from "@/components/section-rail"
import { getPropertyById } from "@/lib/properties"

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

function AirbnbMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current stroke-[2.2]">
      <path
        d="M16 6.4c1.7 0 2.7 1.5 3.6 3.4l5.3 11c1.3 2.8-.4 6-3.5 6-1.5 0-2.8-.7-3.5-2l-1.9-3.1-1.9 3.1c-.8 1.3-2.1 2-3.5 2-3.1 0-4.8-3.2-3.5-6l5.3-11c.9-1.9 1.9-3.4 3.6-3.4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18.4" r="2.9" />
    </svg>
  )
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const galleryImages = property.images.slice(1, 5)
  const city = property.location.split(",")[0]
  const nightsLabel = "/ night"
  const railItems = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "details", label: "Details" },
    { id: "amenities", label: "Amenities" },
    { id: "reserve", label: "Reserve" },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-[linear-gradient(180deg,#fbf7f1_0%,#ffffff_18%,#f8f4ee_100%)]">
        <SectionRail items={railItems} />
        <Navbar />

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
          <span className="max-w-[260px] truncate text-brand-orange">{property.title}</span>
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
              {property.title}
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

            <div id="gallery" className="mt-8 scroll-mt-32 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="pro-surface relative min-h-[340px] overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] sm:min-h-[460px]">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  priority
                  className="pro-image object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.42))]" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Featured stay</p>
                    <p className="mt-2 text-2xl font-semibold">{city}</p>
                  </div>
                  <div className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-right text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">From</p>
                    <p className="mt-2 text-3xl font-bold">
                      {property.price} MAD
                      <span className="ml-2 text-sm font-medium text-white/75">{nightsLabel}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {galleryImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative min-h-[140px] overflow-hidden rounded-[24px] bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.45)]"
                  >
                    <Image
                      src={image}
                      alt={`${property.title} gallery ${index + 1}`}
                      fill
                      className="pro-image object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:pt-18">
            <div className="pro-surface sticky top-28 overflow-hidden rounded-[28px] border border-[#f1e6d9] bg-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)]">
              <div className="border-b border-[#f4ede3] bg-[linear-gradient(135deg,#fffaf4_0%,#ffffff_55%,#fff2e6_100%)] p-7">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-brand-orange">{property.price} MAD</span>
                  <span className="pb-1 text-sm font-medium text-slate-500">{nightsLabel}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Elegant booking experience inspired by premium hospitality pages, with direct Airbnb confirmation.
                </p>
              </div>

              <div className="p-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="grid grid-cols-2 border-b border-slate-200">
                    <div className="border-r border-slate-200 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Check-in</p>
                      <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-600">
                        <span>Select date</span>
                        <Calendar className="h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Check-out</p>
                      <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-600">
                        <span>Select date</span>
                        <Calendar className="h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Guests</p>
                    <div className="mt-2 flex items-center justify-between text-sm font-medium text-slate-700">
                      <span>{property.guests} guests</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        {property.beds} beds
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block"
                >
                  <span className="shine-button group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ff5a5f] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-24px_rgba(255,90,95,0.65)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff4b51] hover:shadow-[0_22px_46px_-20px_rgba(255,90,95,0.7)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                      <AirbnbMark />
                    </span>
                    Reserve on Airbnb
                  </span>
                </a>

                <a
                  href={property.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block"
                >
                  <span className="shine-button group flex w-full items-center justify-center gap-3 rounded-2xl border border-[#c9efd8] bg-[#25d366] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fc55c] hover:shadow-[0_22px_44px_-24px_rgba(37,211,102,0.65)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20">
                      <MessageCircle className="h-4.5 w-4.5 fill-white" />
                    </span>
                    Contact on WhatsApp
                  </span>
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  You will be redirected to the booking platform to complete your reservation securely.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Guests</p>
                    <p className="mt-2 text-lg font-semibold text-slate-800">{property.guests}</p>
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
              </div>
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
            Ready to experience {property.title} in style?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
            Complete your booking on Airbnb or reach out directly on WhatsApp for availability, questions, and tailored
            assistance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
              <span className="shine-button inline-flex items-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#f7a72e,#f26522)] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_48px_-26px_rgba(242,101,34,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-20px_rgba(242,101,34,0.7)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                  <AirbnbMark />
                </span>
                Reserve on Airbnb
              </span>
            </a>

            <a href={property.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <span className="shine-button inline-flex items-center gap-3 rounded-2xl border border-[#bfe8cf] bg-white px-8 py-4 text-base font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.35)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <MessageCircle className="h-4.5 w-4.5 fill-white" />
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
  )
}
