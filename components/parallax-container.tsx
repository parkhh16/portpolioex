"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function ParallaxContainer({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax-layer")

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.5")
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div ref={containerRef}>{children}</div>
}
