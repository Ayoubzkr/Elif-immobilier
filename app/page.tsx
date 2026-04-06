import { Navbar } from "@/components/navbar"
import { PropertyCard } from "@/components/property-card"
import { Search, Calendar, Users, Home, ArrowRight, Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react"
import { PROPERTIES } from "@/lib/properties"
import Link from "next/link"

export default function LandingPage() {
  const featuredProperty = PROPERTIES.find(p => p.id === "3") || PROPERTIES[0]

  return (
    <main className="min-h-screen">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-villa-dusk-morocco.jpg"
            alt="Luxury Moroccan Property"
            className="w-full h-full object-cover brightness-[0.6] scale-105 animate-slow-zoom"
          />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 border border-white/30">
            Exclusive Rentals
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight font-heading animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Experience the <span className="text-brand-orange">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed">
            Discover a curated collection of the most prestigious properties in Morocco.
          </p>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto bg-white rounded-full p-2 pl-6 card-shadow flex flex-col md:flex-row items-center gap-2 transform transition-all hover:scale-[1.01]">
            <div className="flex-1 flex items-center px-4 py-3 md:py-2 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <div className="text-left w-full">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full bg-transparent outline-none text-brand-navy font-semibold placeholder:text-gray-300 placeholder:font-normal"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 md:py-2 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <Calendar className="w-5 h-5 text-gray-400 mr-3" />
              <div className="text-left w-full cursor-pointer hover:bg-gray-50/50 rounded-lg transition-colors p-1 -ml-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Date</p>
                <p className="text-brand-navy font-semibold">Select Dates</p>
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 md:py-2 w-full border-gray-100">
              <Users className="w-5 h-5 text-gray-400 mr-3" />
              <div className="text-left w-full cursor-pointer hover:bg-gray-50/50 rounded-lg transition-colors p-1 -ml-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Guests</p>
                <p className="text-brand-navy font-semibold">Add Guests</p>
              </div>
            </div>
            <button className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-bold h-14 px-8 rounded-full transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 group">
              Search
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Property Preview (Design Match) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Editor's Choice</span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-navy leading-tight">
                {featuredProperty.title}
              </h2>
              <div className="flex items-center text-gray-500 font-medium">
                <MapPin className="w-5 h-5 mr-2 text-brand-orange" />
                {featuredProperty.location}
              </div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                {featuredProperty.description.split('.')[0]}. Escape the city in style at our luxury beachfront apartment.
                Wake up to breathtaking panoramic sea views and relax with the sound of the waves just steps away.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-brand-orange"><Users className="w-5 h-5" /></div>
                  <span className="font-heading font-bold text-brand-navy">{featuredProperty.guests} Guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-brand-orange"><Home className="w-5 h-5" /></div>
                  <span className="font-heading font-bold text-brand-navy">{featuredProperty.sqm} m²</span>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link href={`/properties/${featuredProperty.id}`}>
                  <button className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1">
                    View Details
                  </button>
                </Link>
                <span className="text-2xl font-bold text-brand-navy font-heading">{featuredProperty.price} MAD <span className="text-sm text-gray-400 font-sans font-normal">/ night</span></span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative card-shadow group">
                <img src={featuredProperty.images[0]} alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-brand-navy shadow-sm">
                  Featured
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl card-shadow hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200" />
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-300" />
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-navy text-white flex items-center justify-center text-xs font-bold">50+</div>
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">Happy Guests</p>
                    <div className="flex text-brand-orange text-xs"><span className="text-black font-bold mr-1">4.9</span> ★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 font-heading">Explore Our Collection</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
              Discover our handpicked selection of luxurious villas and modern apartments available for your ideal stay
              in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} image={property.images[0]} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-orange-hover transition-colors group">
              Browse More Properties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 font-heading">Comprehensive Real Estate Services</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Buying & Selling",
                    desc: "Expert guidance for residential and commercial transactions across Morocco.",
                  },
                  {
                    title: "Long-term Rentals",
                    desc: "Secure and verified long-term housing solutions for expats and locals.",
                  },
                  {
                    title: "Seasonal & Airbnb Management",
                    desc: "Maximize your property income with our full-service hospitality management.",
                  },
                  {
                    title: "Property Management",
                    desc: "Complete maintenance, legal, and administrative care for your investments.",
                  },
                ].map((service, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white card-shadow border border-gray-50">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Home className="text-brand-orange w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">{service.title}</h4>
                      <p className="text-gray-500">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative">
                <img
                  src="/luxury-building-facade.jpg"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-navy p-8 rounded-2xl text-white hidden lg:block">
                <p className="text-3xl font-bold mb-1">10+ Years</p>
                <p className="text-sm opacity-70">Of Excellence in Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading">Reserve Your Dream Stay</h2>
          <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-light">
            Found the perfect property? Click the button below to reserve it now through our partner Airbnb and enjoy.
          </p>
          <button className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-12 py-4 rounded-xl text-lg transition-transform hover:scale-105">
            Book Your Stay Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/logo-02.png"
                  alt="ELIF"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Leading real estate agency in Morocco, specializing in luxury seasonal rentals and premium property
                management.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-500">
                  <MapPin className="w-5 h-5 text-brand-orange mr-3 mt-1" />
                  <span>
                    Tanger, Morocco
                  </span>
                </li>
                <li className="flex items-center text-gray-500">
                  <Phone className="w-5 h-5 text-brand-orange mr-3" />
                  <span>+212 6 61 66 29 84</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <Mail className="w-5 h-5 text-brand-orange mr-3" />
                  <span>elifimmobilier@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 ELIF Immobilier. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p>Designed for Excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
