"use client"

import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Float,
  Html,
  PerspectiveCamera,
  RoundedBox,
  useGLTF,
} from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger)

type SceneState = {
  apartmentY: number
  apartmentRotationY: number
  cameraX: number
  cameraY: number
  cameraZ: number
  lightIntensity: number
  warmIntensity: number
  warmHue: number
  furnitureProgress: number
}

const initialSceneState = (): SceneState => ({
  apartmentY: 0.05,
  apartmentRotationY: THREE.MathUtils.degToRad(3),
  cameraX: 0,
  cameraY: 1.55,
  cameraZ: 6.4,
  lightIntensity: 1.2,
  warmIntensity: 0.15,
  warmHue: 0.08,
  furnitureProgress: 0,
})

const serviceMessages = [
  "Gestion Airbnb complete",
  "Menage & maintenance premium",
  "Experience client 5 etoiles",
]

function ApartmentShell({ hasGlb }: { hasGlb: boolean }) {
  if (hasGlb) {
    return <ApartmentModel />
  }

  return (
    <group>
      <mesh position={[0, -0.78, 0]} receiveShadow>
        <boxGeometry args={[4.8, 0.16, 4.8]} />
        <meshStandardMaterial color="#efe7dd" roughness={0.92} />
      </mesh>

      <RoundedBox args={[4.6, 2.2, 0.16]} radius={0.05} position={[0, 0.32, -2.3]} castShadow receiveShadow>
        <meshStandardMaterial color="#f6f1ea" roughness={0.95} />
      </RoundedBox>
      <RoundedBox args={[0.16, 2.2, 4.6]} radius={0.05} position={[-2.3, 0.32, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f4ede3" roughness={0.95} />
      </RoundedBox>

      <mesh position={[1.15, -0.1, -1.9]} castShadow>
        <boxGeometry args={[1.25, 1.55, 0.05]} />
        <meshStandardMaterial color="#ccd7e2" metalness={0.15} roughness={0.18} transparent opacity={0.38} />
      </mesh>

      <mesh position={[-1.4, -0.1, 1.6]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1.2, 1.4, 0.05]} />
        <meshStandardMaterial color="#d8dee7" metalness={0.08} roughness={0.22} transparent opacity={0.24} />
      </mesh>
    </group>
  )
}

function ApartmentModel() {
  const { scene } = useGLTF("/models/modern-apartment.glb")
  const model = useMemo(() => scene.clone(), [scene])

  return <primitive object={model} scale={1.25} position={[0, -0.82, 0]} />
}

function Furnishing({
  stateRef,
}: {
  stateRef: React.MutableRefObject<SceneState>
}) {
  const groupRef = useRef<THREE.Group | null>(null)
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([])

  const registerMaterial = (material: THREE.MeshStandardMaterial | null) => {
    if (!material || materialsRef.current.includes(material)) return
    material.transparent = true
    material.opacity = 0
    materialsRef.current.push(material)
  }

  useFrame((_, delta) => {
    const progress = stateRef.current.furnitureProgress
    const visibleY = THREE.MathUtils.lerp(0.45, 0, progress)

    if (groupRef.current) {
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, visibleY, 5, delta)
    }

    materialsRef.current.forEach((material) => {
      material.opacity = THREE.MathUtils.damp(material.opacity, progress, 6, delta)
    })
  })

  return (
    <group ref={groupRef} position={[0, 0.45, 0]}>
      <RoundedBox args={[1.6, 0.38, 0.82]} radius={0.08} position={[-0.85, -0.44, 0.9]} castShadow receiveShadow>
        <meshStandardMaterial ref={registerMaterial} color="#d8c8b5" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.28, 0.68, 0.82]} radius={0.08} position={[-1.55, -0.26, 0.9]} castShadow receiveShadow>
        <meshStandardMaterial ref={registerMaterial} color="#d4c3ad" roughness={0.86} />
      </RoundedBox>
      <RoundedBox args={[0.28, 0.68, 0.82]} radius={0.08} position={[-0.15, -0.26, 0.9]} castShadow receiveShadow>
        <meshStandardMaterial ref={registerMaterial} color="#d4c3ad" roughness={0.86} />
      </RoundedBox>

      <RoundedBox args={[1.3, 0.22, 1.9]} radius={0.06} position={[1.15, -0.5, -0.55]} castShadow receiveShadow>
        <meshStandardMaterial ref={registerMaterial} color="#ece1d3" roughness={0.88} />
      </RoundedBox>
      <RoundedBox args={[1.32, 0.65, 0.22]} radius={0.05} position={[1.15, -0.28, -1.38]} castShadow receiveShadow>
        <meshStandardMaterial ref={registerMaterial} color="#ddcfbf" roughness={0.83} />
      </RoundedBox>

      <mesh position={[0.5, -0.45, 1.05]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
        <meshStandardMaterial ref={registerMaterial} color="#c29a68" roughness={0.42} metalness={0.12} />
      </mesh>
      <mesh position={[0.5, -0.72, 1.05]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <meshStandardMaterial ref={registerMaterial} color="#8d7659" roughness={0.55} metalness={0.08} />
      </mesh>

      <mesh position={[-1.7, -0.05, -1.2]} castShadow>
        <sphereGeometry args={[0.14, 32, 32]} />
        <meshStandardMaterial ref={registerMaterial} color="#6d8f70" roughness={0.9} />
      </mesh>
      <mesh position={[-1.7, -0.4, -1.2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.14, 0.34, 20]} />
        <meshStandardMaterial ref={registerMaterial} color="#d1b394" roughness={0.76} />
      </mesh>
    </group>
  )
}

function SceneExperience({
  sceneState,
  hasGlb,
}: {
  sceneState: React.MutableRefObject<SceneState>
  hasGlb: boolean
}) {
  const apartmentRef = useRef<THREE.Group | null>(null)
  const warmLightRef = useRef<THREE.PointLight | null>(null)
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const targetKeyColor = useRef(new THREE.Color("#eef3ff"))
  const targetWarmColor = useRef(new THREE.Color("#f6c78a"))

  useFrame((_, delta) => {
    const target = sceneState.current

    if (apartmentRef.current) {
      apartmentRef.current.position.y = THREE.MathUtils.damp(apartmentRef.current.position.y, target.apartmentY, 9, delta)
      apartmentRef.current.rotation.y = THREE.MathUtils.damp(
        apartmentRef.current.rotation.y,
        target.apartmentRotationY,
        9,
        delta
      )
    }

    if (cameraRef.current) {
      cameraRef.current.position.x = THREE.MathUtils.damp(cameraRef.current.position.x, target.cameraX, 5.5, delta)
      cameraRef.current.position.y = THREE.MathUtils.damp(cameraRef.current.position.y, target.cameraY, 5.5, delta)
      cameraRef.current.position.z = THREE.MathUtils.damp(cameraRef.current.position.z, target.cameraZ, 5.5, delta)
      cameraRef.current.lookAt(0, -0.1, 0)
      cameraRef.current.updateProjectionMatrix()
    }

    if (keyLightRef.current) {
      keyLightRef.current.intensity = THREE.MathUtils.damp(keyLightRef.current.intensity, target.lightIntensity, 8, delta)
      targetKeyColor.current.setHSL(target.warmHue, 0.32, 0.88)
      keyLightRef.current.color.lerp(targetKeyColor.current, 1 - Math.exp(-delta * 8))
    }

    if (warmLightRef.current) {
      warmLightRef.current.intensity = THREE.MathUtils.damp(warmLightRef.current.intensity, target.warmIntensity, 8, delta)
      warmLightRef.current.color.lerp(targetWarmColor.current, 1 - Math.exp(-delta * 8))
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1.55, 6.4]} fov={34} />
      <color attach="background" args={["#07111d"]} />
      <fog attach="fog" args={["#07111d", 7, 12]} />

      <ambientLight intensity={0.25} color="#f6f3ef" />
      <hemisphereLight intensity={0.4} groundColor="#7d6c59" color="#f6f7fb" />
      <directionalLight
        ref={keyLightRef}
        castShadow
        position={[4.5, 6, 3.5]}
        intensity={1.2}
        color="#eef3ff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <pointLight ref={warmLightRef} position={[-1.2, 1.6, 1.8]} intensity={0.1} distance={8} color="#f6c78a" />

      <group ref={apartmentRef}>
        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.08}>
          <ApartmentShell hasGlb={hasGlb} />
          <Furnishing stateRef={sceneState} />
        </Float>
      </group>

      <ContactShadows position={[0, -0.86, 0]} opacity={0.38} scale={7} blur={2.4} far={2.8} />
    </>
  )
}

export function ImmersiveHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const sceneState = useRef<SceneState>(initialSceneState())
  const [hasGlb, setHasGlb] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const updateViewport = () => setIsMobile(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener("change", updateViewport)

    return () => mediaQuery.removeEventListener("change", updateViewport)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const context = gsap.context(() => {
      if (isMobile) {
        gsap.set(sceneState.current, initialSceneState())

        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })

        mobileTimeline
          .to(
            sceneState.current,
            {
              apartmentY: -0.08,
              apartmentRotationY: THREE.MathUtils.degToRad(6),
              cameraY: 1.5,
              cameraZ: 6.05,
              lightIntensity: 1.1,
              warmIntensity: 0.45,
              duration: 1,
              ease: "none",
            },
            0
          )
          .to(
            sceneState.current,
            {
              apartmentY: -0.2,
              apartmentRotationY: THREE.MathUtils.degToRad(10),
              cameraX: 0.12,
              cameraY: 1.4,
              cameraZ: 5.75,
              lightIntensity: 1.45,
              warmIntensity: 0.8,
              warmHue: 0.1,
              furnitureProgress: 0.55,
              duration: 1,
              ease: "none",
            },
            1
          )
          .to(
            sceneState.current,
            {
              apartmentY: -0.3,
              apartmentRotationY: THREE.MathUtils.degToRad(13),
              cameraX: 0.2,
              cameraY: 1.32,
              cameraZ: 5.45,
              lightIntensity: 1.75,
              warmIntensity: 1.05,
              warmHue: 0.12,
              furnitureProgress: 1,
              duration: 1,
              ease: "none",
            },
            2
          )

        return
      }

      gsap.set(".hero-text", { autoAlpha: 0, y: 36 })
      gsap.set(stageRefs.current, { autoAlpha: 0.18, y: 30 })
      gsap.set(ctaRef.current, { autoAlpha: 0, y: 40 })
      gsap.set(stageRefs.current[0], { autoAlpha: 1, y: 0 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })

      timeline
        .to(".hero-text", { autoAlpha: 1, y: 0, duration: 0.85, ease: "power2.out" }, 0.08)
        .to(
          sceneState.current,
          {
            apartmentY: -0.08,
            apartmentRotationY: THREE.MathUtils.degToRad(5),
            cameraZ: 6,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(stageRefs.current[0], { autoAlpha: 1, y: 0, duration: 0.4 }, 0)
        .to(stageRefs.current[0], { autoAlpha: 0.28, duration: 0.4 }, 0.9)
        .to(stageRefs.current[1], { autoAlpha: 1, y: 0, duration: 0.45 }, 1)
        .to(
          sceneState.current,
          {
            apartmentY: -0.22,
            apartmentRotationY: THREE.MathUtils.degToRad(9),
            lightIntensity: 1.6,
            warmIntensity: 0.8,
            warmHue: 0.11,
            cameraY: 1.42,
            cameraZ: 5.75,
            duration: 1,
            ease: "none",
          },
          1
        )
        .to(stageRefs.current[1], { autoAlpha: 0.3, duration: 0.4 }, 1.9)
        .to(stageRefs.current[2], { autoAlpha: 1, y: 0, duration: 0.45 }, 2)
        .to(
          sceneState.current,
          {
            apartmentY: -0.34,
            apartmentRotationY: THREE.MathUtils.degToRad(13),
            furnitureProgress: 1,
            lightIntensity: 1.95,
            warmIntensity: 1.25,
            cameraX: 0.18,
            cameraY: 1.35,
            cameraZ: 5.45,
            duration: 1.25,
            ease: "none",
          },
          2
        )
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, 2.35)
    }, sectionRef)

    return () => context.revert()
  }, [isMobile])

  if (isMobile) {
    return (
      <section ref={sectionRef} id="home" className="relative scroll-mt-24 overflow-hidden bg-[#07111d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,140,61,0.22),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(115,149,182,0.18),transparent_24%),linear-gradient(180deg,#07111d_0%,#0b1725_52%,#07111d_100%)]" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 h-[60vh] sm:h-[70vh]">
            <Canvas shadows dpr={[1, 1.2]} gl={{ antialias: true, alpha: true }} className="h-full w-full">
              <Suspense
                fallback={
                  <Html center>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur">
                      Loading scene
                    </div>
                  </Html>
                }
              >
                <SceneExperience sceneState={sceneState} hasGlb={hasGlb} />
              </Suspense>
            </Canvas>
          </div>
          <div className="pointer-events-none absolute inset-0 h-[60vh] bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,17,29,0.14)_58%,rgba(7,17,29,0.9)_100%)]" />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 pb-10 pt-24">
            <div className="mx-auto max-w-xl">
            <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur">
              Elif Immobilier
            </div>
            <h1 className="max-w-2xl font-heading text-[2rem] font-semibold leading-[0.98] text-white">
              L&apos;excellence de la conciergerie immobiliere, au service de votre bien.
            </h1>
            <p className="mt-3 max-w-lg text-[12px] leading-5 text-white/72">
              Nous creons des experiences uniques pour vos locataires tout en optimisant la rentabilite de votre
              propriete.
            </p>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-brand-orange via-white/40 to-transparent" />
          </div>

            <div className="h-[40vh]" />

            <div className="mx-auto mt-2 w-full max-w-[21rem] space-y-2">
              {serviceMessages.map((message, index) => (
                <div key={message} className="rounded-[1.1rem] border border-white/12 bg-white/8 p-3 backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-orange">Etape 0{index + 1}</p>
                  <p className="mt-1 text-[0.95rem] font-semibold text-white">{message}</p>
                  <p className="mt-1 text-[10px] leading-4 text-white/65">
                    {index === 0
                      ? "Optimisation, reservations et communication client."
                      : index === 1
                        ? "Un standard hotelier a chaque sejour."
                        : "Des sejours memorables, des avis positifs."}
                  </p>
                </div>
              ))}

              <div className="rounded-[1.25rem] border border-brand-orange/30 bg-brand-orange/14 p-3.5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">Final</p>
                <h2 className="mt-2 font-heading text-[1.55rem] font-semibold leading-tight text-white">Confiez-nous votre bien</h2>
                <p className="mt-2 text-[12px] leading-5 text-white/72">
                  Maximisez vos revenus sans contraintes. On s&apos;occupe de tout, de A a Z.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/212661662984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center rounded-full bg-brand-orange px-3.5 py-2 text-[12px] font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-brand-orange-hover"
                  >
                    Confiez-nous votre bien
                  </a>
                  <Link
                    href="#services"
                    className="pointer-events-auto inline-flex items-center rounded-full border border-white/18 px-3.5 py-2 text-[12px] font-semibold text-white/90 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Decouvrir nos services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[300vh] bg-[#07111d] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,140,61,0.22),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(115,149,182,0.18),transparent_24%),linear-gradient(180deg,#07111d_0%,#0b1725_52%,#07111d_100%)]" />

        <div className="absolute inset-0 z-0">
          <Canvas
            shadows
            dpr={isMobile ? [1, 1.2] : [1, 1.75]}
            gl={{ antialias: true, alpha: true }}
            className="h-full w-full"
          >
            <Suspense
              fallback={
                <Html center>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur">
                    Loading scene
                  </div>
                </Html>
              }
            >
              <SceneExperience sceneState={sceneState} hasGlb={hasGlb} />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 flex h-screen items-center">
          <div className="container mx-auto grid min-h-full grid-cols-1 px-4 pb-8 pt-24 md:h-full md:pb-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(390px,0.8fr)] lg:items-center lg:gap-8 lg:px-6">
            <div className="hero-text pointer-events-none flex max-w-xl flex-col justify-center pt-6 lg:mx-auto lg:pt-0 lg:text-center">
              <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur">
                Elif Immobilier
              </div>
              <h1 className="max-w-2xl font-heading text-[2rem] font-semibold leading-[0.98] text-white md:text-[3.25rem] xl:text-[3.9rem]">
                L&apos;excellence de la conciergerie immobiliere, au service de votre bien.
              </h1>
              <p className="mt-3 max-w-lg text-[12px] leading-5 text-white/72 md:text-[14px]">
                Nous creons des experiences uniques pour vos locataires tout en optimisant la rentabilite de votre
                propriete.
              </p>
              <div className="mt-5 h-px w-32 bg-gradient-to-r from-brand-orange via-white/40 to-transparent" />
            </div>

            <div className="mt-8 flex items-end justify-center pb-6 md:mt-auto md:pb-2 lg:pb-2">
              <div className="w-full max-w-[21rem] space-y-2 sm:max-w-[23rem]">
                {serviceMessages.map((message, index) => (
                  <div
                    key={message}
                    ref={(node) => {
                      stageRefs.current[index] = node
                    }}
                    className="rounded-[1.1rem] border border-white/12 bg-white/8 p-2.5 backdrop-blur-xl md:rounded-[1.25rem] md:p-3.5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-orange">Etape 0{index + 1}</p>
                    <p className="mt-1 text-[0.95rem] font-semibold text-white md:mt-1.5 md:text-[1.12rem]">{message}</p>
                    <p className="mt-1 text-[10px] leading-4 text-white/65 md:text-[12px]">
                      {index === 0
                        ? "Optimisation, reservations et communication client."
                        : index === 1
                          ? "Un standard hotelier a chaque sejour."
                          : "Des sejours memorables, des avis positifs."}
                    </p>
                  </div>
                ))}

                <div
                  ref={ctaRef}
                  className="rounded-[1.25rem] border border-brand-orange/30 bg-brand-orange/14 p-3.5 backdrop-blur-xl md:rounded-[1.45rem] md:p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">Final</p>
                  <h2 className="mt-2 font-heading text-[1.55rem] font-semibold leading-tight text-white md:mt-2.5 md:text-[2.1rem]">Confiez-nous votre bien</h2>
                  <p className="mt-2 text-[12px] leading-5 text-white/72 md:mt-2.5 md:text-[14px]">
                    Maximisez vos revenus sans contraintes. On s&apos;occupe de tout, de A a Z.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/212661662984"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center rounded-full bg-brand-orange px-3.5 py-2 text-[12px] font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-brand-orange-hover md:px-4 md:text-[13px]"
                    >
                      Confiez-nous votre bien
                    </a>
                    <Link
                      href="#services"
                      className="pointer-events-auto inline-flex items-center rounded-full border border-white/18 px-3.5 py-2 text-[12px] font-semibold text-white/90 transition-colors hover:border-white/40 hover:text-white md:px-4 md:text-[13px]"
                    >
                      Decouvrir nos services
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
