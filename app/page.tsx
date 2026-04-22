import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Waves,
  Facebook,
  Instagram,
} from "lucide-react"

import { HeroSlideshow } from "@/components/hero-slideshow"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { PropertyCard } from "@/components/property-card"
import { Reveal } from "@/components/reveal"
import { SectionRail } from "@/components/section-rail"
import { PROPERTIES } from "@/lib/properties"

const stats = [
  { value: "4+", label: "Luxury stays ready to book" },
  { value: "24/7", label: "Guest assistance and owner follow-up" },
  { value: "4.9/5", label: "Target hospitality standard" },
  { value: "100%", label: "Tailored support from search to check-in" },
]

const signatureHighlights = [
  "Premium apartments and villas",
  "Concierge-ready guest experience",
  "Property management for owners",
  "Tangier market guidance",
  "Fast WhatsApp communication",
]

const services = [
  {
    title: "Short Stay Rentals",
    desc: "Handpicked apartments and seaside homes designed for travelers who want comfort, style, and a smooth arrival.",
    icon: Building2,
  },
  {
    title: "Owner Concierge",
    desc: "We can help coordinate listings, guest communication, housekeeping, and operational follow-up for your property.",
    icon: ShieldCheck,
  },
  {
    title: "Property Management",
    desc: "A more complete service for owners who want dependable oversight, maintenance coordination, and income continuity.",
    icon: Home,
  },
  {
    title: "Local Guidance",
    desc: "Need help choosing the right area in Tangier? We simplify the search with practical, market-aware advice.",
    icon: MapPin,
  },
]

const journey = [
  {
    title: "Choose the right property",
    desc: "Browse homes with clear information, curated visuals, and direct support if you need a recommendation.",
  },
  {
    title: "Confirm your stay or project",
    desc: "We align on dates, guest needs, or owner objectives so the next step is simple and friction-free.",
  },
  {
    title: "Enjoy full follow-through",
    desc: "From arrival guidance to owner coordination, the experience stays premium after the first click.",
  },
]

export default function LandingPage() {
  const featuredProperty = PROPERTIES.find((property) => property.id === "3") || PROPERTIES[0]
  const railItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "properties", label: "Properties" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-white text-brand-navy">
        <SectionRail items={railItems} />
        <Navbar transparent />

      <section id="home" className="section-wash relative flex min-h-screen scroll-mt-32 items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(223,140,61,0.12))]" />
        <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-drift" />
        <div className="pointer-events-none absolute bottom-24 right-0 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute right-18 top-28 h-8 w-8 rounded-full border border-white/30 animate-orbit-soft" />

        <div className="container relative z-10 px-4 pb-14 pt-28 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <Reveal delay={50}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-brand-orange" />
                Premium Stays In Tangier
              </span>
            </Reveal>

            <Reveal delay={150}>
              <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold tracking-tight text-balance md:text-7xl xl:text-8xl">
                A more elegant way to <span className="text-brand-orange">book, host, and manage</span> property.
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <p className="mx-auto mb-10 max-w-3xl text-lg font-light leading-relaxed text-white/80 md:text-2xl">
                ELIF Immobilier brings together refined vacation rentals, attentive property care, and trusted local
                guidance for clients who expect more than a basic real estate service.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center gap-2 rounded-[32px] border border-white/60 bg-white/95 p-2 pl-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.75)] backdrop-blur md:flex-row">
                <div className="flex w-full flex-1 items-center border-b border-gray-100 px-4 py-3 md:border-b-0 md:border-r md:py-2">
                  <Search className="mr-3 h-5 w-5 text-gray-400" />
                  <div className="w-full text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</p>
                    <input
                      type="text"
                      placeholder="Tangier, beachfront, city center..."
                      className="w-full bg-transparent font-semibold text-brand-navy outline-none placeholder:font-normal placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-1 items-center border-b border-gray-100 px-4 py-3 md:border-b-0 md:border-r md:py-2">
                  <Calendar className="mr-3 h-5 w-5 text-gray-400" />
                  <div className="-ml-1 w-full rounded-lg p-1 text-left transition-colors hover:bg-gray-50/50">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Date</p>
                    <p className="font-semibold text-brand-navy">Select your dates</p>
                  </div>
                </div>

                <div className="flex w-full flex-1 items-center px-4 py-3 md:py-2">
                  <Users className="mr-3 h-5 w-5 text-gray-400" />
                  <div className="-ml-1 w-full rounded-lg p-1 text-left transition-colors hover:bg-gray-50/50">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Guests</p>
                    <p className="font-semibold text-brand-navy">Add guests</p>
                  </div>
                </div>

                <Link
                  href="#properties"
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-8 font-bold text-white shadow-lg shadow-brand-orange/20 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-xl hover:shadow-brand-orange/25 md:w-auto"
                >
                  Search
                  <div className="rounded-full bg-white/20 p-1 transition-colors group-hover:bg-white/30">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {signatureHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-black/15 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.45)] md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} className="rounded-[1.5rem] bg-[#faf7f2] p-5">
                <p className="mb-2 font-heading text-4xl font-bold text-brand-navy">{stat.value}</p>
                <p className="max-w-[16rem] text-sm leading-6 text-gray-500">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-wash scroll-mt-32 overflow-hidden bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="space-y-8" delay={80}>
              <div>
                <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
                  Why ELIF
                </span>
                <h2 className="max-w-3xl text-4xl font-bold leading-tight text-brand-navy md:text-6xl">
                  Inspired by the best hospitality brands, shaped for your own identity.
                </h2>
              </div>

              <p className="max-w-2xl text-lg font-light leading-8 text-gray-500">
                The reference site is strong because it mixes trust, service clarity, and premium atmosphere. We bring
                the same strengths here with a cleaner ELIF presentation: more proof, more structure, and more elegant
                visual rhythm.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "A clearer value proposition above the fold",
                  "Trust-building numbers directly under the hero",
                  "Service positioning for both guests and owners",
                  "A smoother premium look through soft motion and layered backgrounds",
                ].map((item, index) => (
                  <Reveal
                    key={item}
                    delay={140 + index * 70}
                    className="flex items-start gap-3 rounded-2xl border border-[#f1ebe2] bg-[#fffaf3] p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                    <p className="text-sm font-medium leading-6 text-brand-navy">{item}</p>
                  </Reveal>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-xl bg-brand-orange px-7 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-hover"
                >
                  Explore Services
                </Link>
                <a
                  href="https://wa.me/212661662984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-brand-navy/10 px-7 py-4 font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  Talk on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal className="relative" delay={220} variant="right">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5 pt-10">
                  <div className="overflow-hidden rounded-[2rem] card-shadow">
                    <img
                      src="/551524439.jpg"
                      alt="Elegant living room"
                      className="h-72 w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                    />
                  </div>
                  <div className="rounded-[2rem] bg-brand-navy p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/60">Guest standard</p>
                    <p className="mt-3 text-3xl font-bold">Hotel feel, local warmth.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[2rem] border border-[#f1ebe2] bg-[#fffaf3] p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Owner focus</p>
                    <p className="mt-3 text-2xl font-bold text-brand-navy">Operations, visibility, and guest care.</p>
                  </div>
                  <div className="overflow-hidden rounded-[2rem] card-shadow">
                    <img
                      src="/modern-villa-dusk-morocco.jpg"
                      alt="Luxury villa exterior"
                      className="h-80 w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="properties" className="section-wash relative scroll-mt-32 overflow-hidden bg-[#fbf8f3] py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Featured Selection
            </span>
            <h2 className="mb-4 text-4xl font-bold text-brand-navy md:text-5xl">Explore Our Collection</h2>
            <p className="mx-auto max-w-2xl text-lg font-light leading-8 text-gray-500">
              Discover our handpicked selection of villas and modern apartments available for a refined stay in Morocco.
            </p>
          </Reveal>

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal className="space-y-8" delay={60}>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
                <Star className="h-4 w-4 text-brand-orange" />
                Editor&apos;s Choice
              </div>

              <div>
                <h3 className="text-4xl font-bold leading-tight text-brand-navy md:text-6xl">{featuredProperty.title}</h3>
                <div className="mt-4 flex items-center font-medium text-gray-500">
                  <MapPin className="mr-2 h-5 w-5 text-brand-orange" />
                  {featuredProperty.location}
                </div>
              </div>

              <p className="max-w-2xl text-lg font-light leading-8 text-gray-500">
                {featuredProperty.description.split(".")[0]}. A standout choice for guests who want space, style, and
                a memorable coastal atmosphere.
              </p>

              <div className="grid grid-cols-2 gap-4 border-y border-brand-navy/8 py-6 md:grid-cols-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Guests</p>
                  <p className="mt-2 text-xl font-bold text-brand-navy">{featuredProperty.guests}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Beds</p>
                  <p className="mt-2 text-xl font-bold text-brand-navy">{featuredProperty.beds}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Baths</p>
                  <p className="mt-2 text-xl font-bold text-brand-navy">{featuredProperty.bath}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Area</p>
                  <p className="mt-2 text-xl font-bold text-brand-navy">{featuredProperty.sqm} m²</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href={`/properties/${featuredProperty.id}`}
                  className="inline-flex items-center rounded-xl bg-brand-orange px-8 py-4 font-bold text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 hover:bg-brand-orange-hover"
                >
                  View Details
                </Link>
                <span className="font-heading text-3xl font-bold text-brand-navy">
                  {featuredProperty.price} MAD{" "}
                  <span className="font-sans text-sm font-normal text-gray-400">/ night</span>
                </span>
              </div>
            </Reveal>

            <Reveal className="relative" delay={180} variant="zoom">
              <div className="group relative aspect-[5/4] overflow-hidden rounded-[2rem] card-shadow">
                <img
                  src={featuredProperty.images[0]}
                  alt={featuredProperty.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent opacity-80" />
                <div className="absolute right-6 top-6 rounded-full bg-white/90 px-6 py-3 font-bold text-brand-navy shadow-sm backdrop-blur">
                  Featured
                </div>
              </div>

              <div className="absolute -bottom-8 left-6 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)] backdrop-blur animate-float">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#fff3e5] p-3 text-brand-orange">
                    <Waves className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">Signature atmosphere</p>
                    <p className="text-sm text-gray-500">Sea view, premium comfort, curated details</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {PROPERTIES.map((property, index) => (
              <Reveal key={property.id} delay={index * 90} variant="up">
                <PropertyCard {...property} image={property.images[0]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-wash scroll-mt-32 bg-white py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 max-w-3xl">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Services
            </span>
            <h2 className="mb-4 text-4xl font-bold text-brand-navy md:text-5xl">More than listings, a complete premium service.</h2>
            <p className="text-lg font-light leading-8 text-gray-500">
              One of the strongest ideas on the reference site is that the company serves several client needs, not just
              simple bookings. This section brings that same clarity to ELIF.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.title} delay={index * 80} className="group">
                  <div className="relative h-full overflow-hidden rounded-[2rem] border border-brand-navy/8 bg-white p-8 card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-orange/20 hover:shadow-[0_22px_60px_-35px_rgba(15,23,42,0.45)]">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-orange/8 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                    <div className="relative flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff3e5] text-brand-orange">
                        <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange/80">
                          0{index + 1}
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-brand-navy">{service.title}</h3>
                        <p className="max-w-xl leading-7 text-gray-500">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,140,61,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
                How It Works
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">A simpler journey for guests and owners.</h2>
              <p className="max-w-xl text-lg font-light leading-8 text-white/75">
                This new block adds the narrative flow the reference site uses well: service first, then confidence,
                then action.
              </p>
            </Reveal>

            <div className="grid gap-5">
              {journey.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={120 + index * 90}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 font-heading text-xl font-bold text-brand-orange">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                      <p className="leading-7 text-white/70">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash relative overflow-hidden bg-[#fcf7f1] py-24">
        <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full border border-brand-orange/10" />
        <div className="pointer-events-none absolute right-16 top-24 h-24 w-24 rounded-full bg-brand-orange/8 blur-2xl animate-pulse-soft" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Reveal>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Reserve Or Entrust
            </span>
            <h2 className="mb-8 text-4xl font-bold text-brand-navy md:text-6xl">Reserve your stay or let us elevate your property.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-light leading-8 text-gray-500">
              Whether you want to book a refined home in Tangier or discuss management for your own property, ELIF is
              ready to help with a more polished client experience.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/212661662984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-brand-orange px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] hover:bg-brand-orange-hover"
              >
                Contact on WhatsApp
              </a>
              <Link
                href="#properties"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-navy/10 px-10 py-4 text-lg font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                Browse Properties
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="section-wash scroll-mt-32 border-t border-gray-100 bg-white pb-10 pt-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center">
                <img src="/logo-02.png" alt="ELIF" className="h-24 w-24 object-contain" />
              </div>
              <p className="mb-6 leading-relaxed text-gray-500">
                ELIF Immobilier helps guests book refined stays in Morocco while offering owners a more premium and
                structured property service.
              </p>
              <div className="flex space-x-4">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 text-brand-navy transition-colors hover:bg-brand-orange hover:text-white">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 text-brand-navy transition-colors hover:bg-brand-orange hover:text-white">
                  <Facebook className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#about" className="transition-colors hover:text-brand-orange">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#properties" className="transition-colors hover:text-brand-orange">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-brand-orange">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-brand-orange">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold">What We Offer</h4>
              <ul className="space-y-4 text-gray-500">
                <li>Luxury rentals</li>
                <li>Owner concierge</li>
                <li>Property management</li>
                <li>Local real estate guidance</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-500">
                  <MapPin className="mr-3 mt-1 h-5 w-5 text-brand-orange" />
                  <span>Tanger, Morocco</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <Phone className="mr-3 h-5 w-5 text-brand-orange" />
                  <span>+212 6 61 66 29 84</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <Mail className="mr-3 h-5 w-5 text-brand-orange" />
                  <span>elifimmobilier@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-sm text-gray-400 md:flex-row">
            <p>© 2026 ELIF Immobilier. All rights reserved.</p>
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <Sparkles className="h-4 w-4 text-brand-orange" />
              <p>Designed for a more premium client journey</p>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </PageTransition>
  )
}
