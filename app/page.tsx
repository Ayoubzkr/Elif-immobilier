import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  Facebook,
  Instagram,
} from "lucide-react"

import { ImmersiveHeroShell } from "@/components/immersive-hero-shell"
import { AnimatedStat } from "@/components/animated-stat"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { PropertyCard } from "@/components/property-card"
import { Reveal } from "@/components/reveal"
import { ScrollOrchestra } from "@/components/scroll-orchestra"
import { PROPERTIES } from "@/lib/properties"
import { getDisplayPropertyTitle } from "@/lib/properties"

const stats = [
  { value: 4, suffix: "+", label: "Luxury stays ready to book" },
  { value: 24, suffix: "/7", label: "Guest assistance and owner follow-up" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Target hospitality standard" },
  { value: 100, suffix: "%", label: "Tailored support from search to check-in" },
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

const aboutHighlights = [
  {
    src: "/551524439.jpg",
    alt: "Elegant living room",
    title: "Guest standard",
    description: "Hotel feel, local warmth.",
    heightClassName: "h-72",
    offsetClassName: "pt-10",
  },
  {
    src: "/ocean-view-terrace.jpg",
    alt: "Ocean view terrace",
    title: "Sea-view mood",
    description: "Open-air calm with a premium outlook.",
    heightClassName: "h-80",
  },
  {
    src: "/626339982.jpg",
    alt: "Refined terrace seating",
    title: "Owner focus",
    description: "Operations, visibility, and guest care.",
    heightClassName: "h-80",
  },
  {
    src: "/Property-c08d227f6b33836e9de836a7c256ba38-131428511.jpg",
    alt: "Polished property interior",
    title: "Signature details",
    description: "Layered styling that feels curated and calm.",
    heightClassName: "h-72",
  },
]

export default function LandingPage() {
  const featuredProperty = PROPERTIES.find((property) => property.id === "3") || PROPERTIES[0]
  const featuredPropertyTitle = getDisplayPropertyTitle(featuredProperty.title)
  return (
    <>
      <Navbar transparent />
      <PageTransition>
        <main className="min-h-screen bg-white text-brand-navy">
          <ScrollOrchestra />
        <ImmersiveHeroShell />

      <section className="relative z-20 -mt-12 px-4 cinematic-shell" data-cinematic-section>
        <div className="container mx-auto">
          <div className="section-stage" data-stage>
            <div className="section-orb left-[8%] top-6 h-24 w-24 bg-brand-orange/20" />
            <div className="section-orb right-[10%] top-10 h-28 w-28 bg-brand-navy/12" />
            <div className="cinematic-panel grid gap-4 rounded-[2rem] border border-white/70 bg-white p-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 30} className="depth-chip rounded-[1.5rem] bg-[#faf7f2] p-5" data-animate>
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="mb-2 block font-heading text-4xl font-bold text-brand-navy"
                />
                <p className="max-w-[16rem] text-sm leading-6 text-gray-500">{stat.label}</p>
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-wash cinematic-shell relative scroll-mt-32 overflow-hidden bg-white py-24 md:py-32"
        data-cinematic-section
      >
        <div className="section-orb left-[6%] top-28 h-36 w-36 bg-brand-orange/15" />
        <div className="section-orb right-[8%] bottom-20 h-44 w-44 bg-brand-navy/10" />
        <div className="container mx-auto px-4">
          <div className="pointer-events-none absolute right-10 top-16 z-20 hidden xl:block">
            <div className="section-lamp" data-lamp>
              <div className="section-lamp-head" />
              <div className="section-lamp-arm" />
              <div className="section-lamp-base" />
              <div className="section-lamp-glow" data-lamp-glow />
              <div className="section-light-beam" data-beam />
            </div>
          </div>
          <div className="section-stage grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]" data-stage>
            <Reveal className="space-y-8" delay={80} data-animate>
              <div>
                <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
                  Why ELIF
                </span>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
                  Inspired by the best hospitality brands, shaped for your own identity.
                </h2>
              </div>

              <p className="max-w-2xl text-base font-light leading-7 text-gray-500 md:text-lg">
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

            <Reveal className="relative mx-auto w-full flex justify-center">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="grid w-full max-w-[360px] mx-auto gap-4 grid-cols-2 sm:max-w-none sm:mx-0 sm:gap-6 sm:grid-cols-2">
                {aboutHighlights.map((highlight, index) => (
                  <div
                    key={highlight.src}
                    className={[
                      "w-[170px] sm:w-[320px]",
                      index % 2 === 0 && highlight.offsetClassName === "pt-10" ? "sm:pt-10" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    data-animate
                  >
                    <div className="cinematic-panel group relative overflow-hidden rounded-[2rem] bg-white card-shadow">
                      <img
                        src={highlight.src}
                        alt={highlight.alt}
                        className={[
                          "h-44 w-full object-cover object-center transition-transform duration-[1600ms] group-hover:scale-105",
                          highlight.heightClassName === "h-72" ? "sm:h-72" : "",
                          highlight.heightClassName === "h-80" ? "sm:h-80" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3 text-center text-white sm:p-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">{highlight.title}</p>
                        <p className="mt-1 text-sm font-bold leading-tight sm:mt-2 sm:text-lg md:text-xl">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="properties"
        className="section-wash cinematic-shell relative scroll-mt-32 overflow-hidden bg-[#fbf8f3] py-24"
        data-cinematic-section
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
        <div className="section-orb left-[4%] top-32 h-40 w-40 bg-brand-orange/14" />
        <div className="section-orb right-[7%] top-16 h-32 w-32 bg-brand-navy/10" />
        <div className="container mx-auto px-4">
          <div className="pointer-events-none absolute right-10 top-20 z-10 hidden xl:block">
            <div className="section-lamp" data-lamp>
              <div className="section-lamp-head" />
              <div className="section-lamp-arm" />
              <div className="section-lamp-base" />
              <div className="section-lamp-glow" data-lamp-glow />
              <div className="section-light-beam" data-beam />
            </div>
          </div>
          <Reveal className="mb-16 text-center" data-animate>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Featured Selection
            </span>
            <h2 className="mb-4 text-3xl font-bold text-brand-navy md:text-5xl">Explore Our Collection</h2>
            <p className="mx-auto max-w-2xl text-base font-light leading-7 text-gray-500 md:text-lg">
              Discover our handpicked selection of villas and modern apartments available for a refined stay in Morocco.
            </p>
          </Reveal>

          <div className="section-stage mb-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]" data-stage>
            <Reveal className="space-y-8" delay={60} data-animate>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
                <Star className="h-4 w-4 text-brand-orange" />
                Editor&apos;s Choice
              </div>

              <div>
                <h3 className="text-3xl font-bold leading-tight text-brand-navy md:text-5xl">{featuredPropertyTitle}</h3>
                <div className="mt-4 flex items-center font-medium text-gray-500">
                  <MapPin className="mr-2 h-5 w-5 text-brand-orange" />
                  {featuredProperty.location}
                </div>
              </div>

              <p className="max-w-2xl text-base font-light leading-7 text-gray-500 md:text-lg">
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

            <Reveal className="relative" delay={180} variant="zoom" data-animate>
              <div className="cinematic-panel group relative aspect-[5/4] overflow-hidden rounded-[2rem] card-shadow">
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

              <div className="cinematic-panel depth-chip absolute -bottom-8 left-6 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)] backdrop-blur animate-float">
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

          <div className="section-stage grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4" data-stage>
            {PROPERTIES.map((property, index) => (
              <Reveal key={property.id} delay={index * 90} variant="up" data-animate>
                <PropertyCard {...property} image={property.images[0]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section-wash cinematic-shell relative scroll-mt-32 bg-white py-24"
        data-cinematic-section
      >
        <div className="section-orb left-[8%] top-14 h-32 w-32 bg-brand-orange/16" />
        <div className="section-orb right-[5%] bottom-16 h-44 w-44 bg-brand-navy/10" />
        <div className="container mx-auto px-4">
          <div className="pointer-events-none absolute left-10 top-10 z-20 hidden xl:block">
            <div className="section-lamp" data-lamp>
              <div className="section-lamp-head" />
              <div className="section-lamp-arm" />
              <div className="section-lamp-base" />
              <div className="section-lamp-glow" data-lamp-glow />
              <div className="section-light-beam" data-beam />
            </div>
          </div>
          <Reveal className="mb-16 max-w-3xl" data-animate>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Services
            </span>
            <h2 className="mb-4 text-3xl font-bold text-brand-navy md:text-5xl">More than listings, a complete premium service.</h2>
            <p className="text-base font-light leading-7 text-gray-500 md:text-lg">
              One of the strongest ideas on the reference site is that the company serves several client needs, not just
              simple bookings. This section brings that same clarity to ELIF.
            </p>
          </Reveal>

          <div className="section-stage grid gap-6 lg:grid-cols-2" data-stage>
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.title} delay={index * 80} className="group" data-animate>
                  <div className="cinematic-panel relative h-full overflow-hidden rounded-[2rem] border border-brand-navy/8 bg-white p-8 card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-orange/20 hover:shadow-[0_22px_60px_-35px_rgba(15,23,42,0.45)]">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-orange/8 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                    <div className="relative flex items-start gap-5">
                      <div className="depth-chip flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff3e5] text-brand-orange">
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

      <section className="cinematic-shell relative overflow-hidden bg-brand-navy py-24 text-white" data-cinematic-section>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,140,61,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="section-orb left-[10%] top-20 h-32 w-32 bg-brand-orange/20" />
        <div className="section-orb right-[8%] bottom-14 h-44 w-44 bg-white/8" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="section-stage grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]" data-stage>
            <Reveal data-animate>
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
                How It Works
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">A simpler journey for guests and owners.</h2>
              <p className="max-w-xl text-base font-light leading-7 text-white/75 md:text-lg">
                This new block adds the narrative flow the reference site uses well: service first, then confidence,
                then action.
              </p>
            </Reveal>

            <div className="grid gap-5">
              {journey.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={120 + index * 90}
                  className="cinematic-panel rounded-[1.5rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-6"
                  data-animate
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="depth-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 font-heading text-lg font-bold text-brand-orange sm:h-12 sm:w-12 sm:text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-xl font-bold sm:mb-2 sm:text-2xl">{step.title}</h3>
                      <p className="text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash cinematic-shell relative overflow-hidden bg-[#fcf7f1] py-24" data-cinematic-section>
        <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full border border-brand-orange/10" />
        <div className="pointer-events-none absolute right-16 top-24 h-24 w-24 rounded-full bg-brand-orange/8 blur-2xl animate-pulse-soft" />
        <div className="section-orb left-[12%] bottom-10 h-40 w-40 bg-brand-orange/16" />
        <div className="section-orb right-[10%] top-20 h-36 w-36 bg-brand-navy/10" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="section-stage" data-stage>
          <Reveal data-animate>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Reserve Or Entrust
            </span>
            <h2 className="mb-8 text-3xl font-bold text-brand-navy md:text-5xl">Reserve your stay or let us elevate your property.</h2>
          </Reveal>
          <Reveal delay={120} data-animate>
            <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-7 text-gray-500 md:text-lg">
              Whether you want to book a refined home in Tangier or discuss management for your own property, ELIF is
              ready to help with a more polished client experience.
            </p>
          </Reveal>
          <Reveal delay={220} data-animate>
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
        </div>
      </section>

      <footer
        id="contact"
        className="section-wash cinematic-shell scroll-mt-32 border-t border-gray-100 bg-white pb-10 pt-20"
        data-cinematic-section
      >
        <div className="section-orb left-[8%] top-16 h-28 w-28 bg-brand-orange/14" />
        <div className="section-orb right-[10%] bottom-12 h-36 w-36 bg-brand-navy/10" />
        <div className="container mx-auto px-4">
          <div className="section-stage mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4" data-stage>
            <Reveal delay={20} data-animate>
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
            </Reveal>

            <Reveal delay={80} data-animate>
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
            </Reveal>

            <Reveal delay={140} data-animate>
              <h4 className="mb-6 text-lg font-bold">What We Offer</h4>
              <ul className="space-y-4 text-gray-500">
                <li>Luxury rentals</li>
                <li>Owner concierge</li>
                <li>Property management</li>
                <li>Local real estate guidance</li>
              </ul>
            </Reveal>

            <Reveal delay={200} data-animate>
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
            </Reveal>
          </div>

          <Reveal
            delay={260}
            className="flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-sm text-gray-400 md:flex-row"
            data-animate
          >
            <p>© 2026 ELIF Immobilier. All rights reserved.</p>
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <Sparkles className="h-4 w-4 text-brand-orange" />
              <p>Designed for a more premium client journey</p>
            </div>
          </Reveal>
        </div>
      </footer>
        </main>
      </PageTransition>
    </>
  )
}
