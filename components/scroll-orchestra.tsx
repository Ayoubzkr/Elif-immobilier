"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollOrchestra() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      return
    }

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-cinematic-section]")

      sections.forEach((section) => {
        const animated = section.querySelectorAll<HTMLElement>("[data-animate]")
        const lamp = section.querySelector<HTMLElement>("[data-lamp]")
        const stage = section.querySelector<HTMLElement>("[data-stage]")

        gsap.set(animated, {
          autoAlpha: 0,
          y: 80,
          scale: 0.92,
          rotateX: 18,
          transformPerspective: 1200,
        })

        if (lamp) {
          gsap.set(lamp, {
            rotate: -38,
            xPercent: -10,
            y: 24,
            transformOrigin: "top center",
            force3D: true,
          })
        }

        if (stage) {
          gsap.set(stage, { yPercent: 8, scale: 0.96, transformOrigin: "center center" })
        }

        if (lamp) {
          if (lamp) {
            gsap.to(
              lamp,
              {
                rotate: -38,
                xPercent: -10,
                y: 24,
                duration: 0,
                overwrite: "auto",
              }
            )
          }

          const toggleLampState = (isOn: boolean) => {
            lamp.classList.toggle("lamp-on", isOn)

            gsap.to(lamp, {
              rotate: isOn ? 6 : -38,
              xPercent: isOn ? 0 : -10,
              y: isOn ? 0 : 24,
              duration: isOn ? 0.35 : 0.24,
              ease: isOn ? "power2.out" : "power2.inOut",
              overwrite: "auto",
            })

            const glow = lamp.querySelector<HTMLElement>("[data-lamp-glow]")
            const beam = lamp.querySelector<HTMLElement>("[data-beam]")

            if (glow) {
              gsap.to(glow, {
                autoAlpha: isOn ? 1 : 0,
                scale: isOn ? 1.12 : 0.72,
                y: isOn ? 0 : -16,
                duration: isOn ? 0.32 : 0.22,
                ease: "power2.out",
                overwrite: "auto",
              })
            }

            if (beam) {
              gsap.to(beam, {
                autoAlpha: isOn ? 0.94 : 0,
                scaleY: isOn ? 1 : 0.65,
                duration: isOn ? 0.32 : 0.22,
                ease: "power2.out",
                overwrite: "auto",
              })
            }
          }

          const lampTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            invalidateOnRefresh: true,
            onEnter: () => toggleLampState(true),
            onEnterBack: () => toggleLampState(true),
            onLeave: () => toggleLampState(false),
            onLeaveBack: () => toggleLampState(false),
            onRefresh: (self) => toggleLampState(self.isActive),
          })

          toggleLampState(lampTrigger.isActive)
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 38%",
            scrub: 0.12,
            invalidateOnRefresh: true,
          },
        })

        timeline
          .to(
            section,
            {
              "--section-tilt": "0deg",
              "--section-glow": "1",
              "--section-shift": "0px",
              ease: "none",
              duration: 1,
            },
            0
          )
          .to(
            animated,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              stagger: 0.03,
              ease: "none",
              duration: 0.35,
            },
            0.05
          )

        if (stage) {
          timeline.to(
            stage,
            {
              yPercent: 0,
              scale: 1,
              ease: "none",
              duration: 1,
            },
            0.02
          )
        }
      })
    })

    return () => {
      context.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
