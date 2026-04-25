"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useMemo, useRef } from "react"

interface PropertyShowcase3DProps {
  propertyId: string
  images: string[]
}

export function PropertyShowcase3D({ propertyId, images }: PropertyShowcase3DProps) {
  const sceneImages = useMemo(() => {
    const fallback = images[0]
    return [images[0] ?? fallback, images[1] ?? fallback, images[2] ?? fallback]
  }, [images])
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  })
  const leftY = useTransform(scrollYProgress, [0, 1], [18, -18])
  const rightY = useTransform(scrollYProgress, [0, 1], [10, -12])
  const centerY = useTransform(scrollYProgress, [0, 1], [0, -14])

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,#fff8f1_0%,#f6ecdf_55%,#fff5eb_100%)] shadow-[0_24px_64px_-36px_rgba(15,23,42,0.28)]"
    >
      <div className="sm:hidden">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
          <motion.div layoutId={`property-image-${propertyId}`} className="absolute inset-0">
            <Image src={sceneImages[0]} alt="Property showcase" fill className="object-cover" sizes="100vw" priority />
          </motion.div>
        </div>
      </div>

      <div className="relative hidden min-h-[460px] sm:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,101,34,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.18),transparent_28%)]" />
        <div className="absolute inset-0 [perspective:1800px]">
          <div className="absolute inset-0 scale-[1.02]">
            <motion.div
              style={{ y: leftY }}
              className="absolute left-[-2%] top-[6%] h-[46%] w-[48%] rotate-[-8deg] overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_26px_80px_-38px_rgba(15,23,42,0.4)] [transform:rotateX(10deg)_rotateY(24deg)_translateZ(-10px)]"
            >
              <Image src={sceneImages[0]} alt="3D showcase left" fill className="object-cover" sizes="50vw" />
            </motion.div>
            <motion.div
              style={{ y: rightY }}
              className="absolute right-[-3%] top-[10%] h-[42%] w-[44%] rotate-[8deg] overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_26px_80px_-38px_rgba(15,23,42,0.4)] [transform:rotateX(10deg)_rotateY(-24deg)_translateZ(-14px)]"
            >
              <Image src={sceneImages[1]} alt="3D showcase right" fill className="object-cover" sizes="44vw" />
            </motion.div>
            <motion.div
              layoutId={`property-image-${propertyId}`}
              style={{ y: centerY }}
              className="absolute left-[11%] top-[32%] h-[56%] w-[78%] overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_38px_120px_-48px_rgba(15,23,42,0.52)] [transform:rotateX(4deg)_translateZ(24px)]"
            >
              <Image src={sceneImages[2]} alt="3D showcase center" fill className="object-cover" sizes="78vw" priority />
            </motion.div>
            <div className="absolute inset-x-[16%] bottom-[4%] h-[14%] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.26),transparent_68%)] blur-2xl" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  )
}
