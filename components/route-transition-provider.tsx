"use client"

import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface RouteTransitionProviderProps {
  children: React.ReactNode
}

export function RouteTransitionProvider({ children }: RouteTransitionProviderProps) {
  const pathname = usePathname()

  return (
    <LayoutGroup id="site-layout">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  )
}
