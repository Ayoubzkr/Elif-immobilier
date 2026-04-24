"use client"

import dynamic from "next/dynamic"

export const ImmersiveHeroShell = dynamic(
  () => import("@/components/immersive-hero").then((mod) => mod.ImmersiveHero),
  {
    ssr: false,
    loading: () => (
      <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#07111d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,140,61,0.22),transparent_22%),linear-gradient(180deg,#07111d_0%,#0b1725_52%,#07111d_100%)]" />
        <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur">
              Elif Immobilier
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-[0.92] text-white md:text-7xl">
              Une conciergerie immobiliere qui prend vie au fil du scroll.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
              Chargement de l&apos;experience immersive...
            </p>
          </div>
        </div>
      </section>
    ),
  }
)
