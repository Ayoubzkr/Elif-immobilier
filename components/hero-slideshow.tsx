"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const HERO_IMAGES = ["/106394881.jpg", "/551524439.jpg", "/846426133.jpg"]

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="Luxury Moroccan Property"
            fill
            priority={index === 0}
            sizes="100vw"
            className="scale-105 object-cover brightness-[0.55] animate-slow-zoom"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(8,15,29,0.15),rgba(8,15,29,0.55))]" />

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((image, index) => (
          <span
            key={`${image}-indicator`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? "w-10 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
