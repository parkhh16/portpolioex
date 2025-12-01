"use client"

import { useEffect, useMemo, useState, type RefObject } from "react"

interface UseScrollBoundTextOptions {
  text: string
  targetRef: RefObject<HTMLElement | null>
}

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max)

export function useScrollBoundText({ text, targetRef }: UseScrollBoundTextOptions) {
  const [displayText, setDisplayText] = useState("")

  const characters = useMemo(() => Array.from(text), [text])

  useEffect(() => {
    const updateText = () => {
      const element = targetRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || 1
      const elementCenter = rect.top + rect.height / 2
      const start = windowHeight
      const end = windowHeight * 0.7
      const range = Math.max(start - end, 1)
      const rawProgress = (start - elementCenter) / range
      const progress = clamp(rawProgress)
      const nextLength = Math.floor(characters.length * progress)
      setDisplayText(characters.slice(0, nextLength).join(""))
    }

    updateText()
    window.addEventListener("scroll", updateText, { passive: true })
    window.addEventListener("resize", updateText)

    return () => {
      window.removeEventListener("scroll", updateText)
      window.removeEventListener("resize", updateText)
    }
  }, [characters, targetRef])

  return displayText
}
