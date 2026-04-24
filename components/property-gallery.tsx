"use client"

import Image from "next/image"
import { useState } from "react"
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

  return (
    <>
      <div id="gallery" className="mt-8 scroll-mt-32 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="relative">
          <PropertyShowcase3D images={images} />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Featured stay</p>
              <p className="mt-2 text-2xl font-semibold">{city}</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-right text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">From</p>
              <p className="mt-2 text-3xl font-bold">
                {price} MAD
                <span className="ml-2 text-sm font-medium text-white/75">{nightsLabel}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {galleryImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className="relative min-h-[140px] overflow-hidden rounded-[24px] bg-white text-left shadow-[0_22px_60px_-42px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image src={image} alt={`${title} gallery ${index + 1}`} fill className="pro-image object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[160] flex items-center justify-center bg-[rgba(255,255,255,0.94)] px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative overflow-hidden rounded-[32px] border border-[#efe3d6] bg-white p-4 shadow-[0_40px_120px_-48px_rgba(15,23,42,0.35)] sm:p-6">
              <div className="relative aspect-[16/10] w-full rounded-[24px] bg-[#f8f4ee]">
                <Image src={activeImage} alt={`${title} large view`} fill className="object-contain" sizes="100vw" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
