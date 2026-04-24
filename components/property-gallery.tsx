"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

import { PropertyShowcase3D } from "@/components/property-showcase-3d"

interface PropertyGalleryProps {
  title: string
  city: string
  price: number
  nightsLabel: string
  images: string[]
}

export function PropertyGallery({ title, city, price, nightsLabel, images }: PropertyGalleryProps) {
  const galleryImages = images.slice(1, 5)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    if (!activeImage) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [activeImage])

  return (
    <>
      <div id="gallery" className="mt-8 scroll-mt-32 grid gap-5 xl:grid-cols-[minmax(0,1fr)_240px]">
        <div className="relative">
          <div className="relative">
            <PropertyShowcase3D images={images} />
            <button
              type="button"
              onClick={() => setActiveImage(images[0] ?? null)}
              className="absolute inset-0 z-10 block w-full cursor-zoom-in rounded-[30px]"
              aria-label={`Open large view of ${title}`}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className="rounded-[24px] border border-[#efe3d6] bg-white px-5 py-4 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Featured stay</p>
              <p className="mt-2 text-2xl font-semibold text-slate-800 sm:text-[1.9rem]">{city}</p>
            </div>

            <div className="rounded-[24px] border border-[#efe3d6] bg-[linear-gradient(135deg,#fff7ef_0%,#ffffff_52%,#fff1e2_100%)] px-5 py-4 text-left shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)] md:min-w-[240px] md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">From</p>
              <p className="mt-2 text-3xl font-bold text-brand-orange sm:text-[2.1rem]">
                {price} MAD
                <span className="ml-2 block text-sm font-medium text-slate-500 sm:inline">{nightsLabel}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {galleryImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className="relative min-h-[180px] overflow-hidden rounded-[24px] border border-[#efe3d6] bg-white text-left shadow-[0_22px_60px_-42px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:scale-[1.02] xl:min-h-[148px]"
            >
              <Image src={image} alt={`${title} gallery ${index + 1}`} fill className="pro-image object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-full bg-white/88 px-4 py-2 text-center text-sm font-semibold text-slate-800 backdrop-blur">
                Tap to enlarge
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[160] flex items-center justify-center bg-[rgba(15,23,42,0.82)] px-3 py-6 backdrop-blur-md sm:px-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative flex w-full max-w-7xl items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-3 top-3 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100 sm:right-5 sm:top-5"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/6 p-2 shadow-[0_40px_120px_-48px_rgba(15,23,42,0.7)] sm:rounded-[36px] sm:p-4">
              <div className="flex min-h-[72vh] items-center justify-center rounded-[24px] bg-[linear-gradient(180deg,rgba(248,244,238,0.98)_0%,rgba(255,255,255,0.94)_100%)] p-3 sm:min-h-[80vh] sm:rounded-[30px] sm:p-6">
                <img
                  src={activeImage}
                  alt={`${title} large view`}
                  className="block max-h-[66vh] w-auto max-w-full object-contain sm:max-h-[74vh]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
