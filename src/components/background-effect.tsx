"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function BackgroundEffect() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring animation for cursor tracking
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    setMounted(true)
    // Initialize center position to avoid jump
    if (typeof window !== "undefined") {
      x.set(window.innerWidth / 2)
      y.set(window.innerHeight / 2)
    }

    function handleMouseMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-700" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px), linear-gradient(to bottom, #8882 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

       {/* Interactive Cursor Blob */}
      <motion.div
        className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 dark:opacity-25 transition-all duration-700"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 400,
          height: 400,
          backgroundColor: resolvedTheme === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)', // blue variants
        }}
      />

      {/* Ambient Blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-30 dark:opacity-20 translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-20 -translate-x-1/2 translate-y-1/2"
      />
    </div>
  )
}
