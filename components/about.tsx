"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-fullscreen snap-section bg-secondary/30 py-16 sm:py-20 md:py-24 lg:py-28 flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafting Digital
              <br />
              <span className="text-accent">Experiences</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/90 leading-relaxed">
              저는 사용자가 실제로 “쓸 수 있는” 제품을 만드는 데 관심이 많습니다. 로깅, 실시간 데이터 분석, AI 처리
              흐름 같은 보이지 않는 부분을 탄탄하게 만들고, 사용자가 자연스럽게 이해할 수 있는 구조로 기능을 설계합니다.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/90 leading-relaxed">
              최근에는 APILog를 중심으로 FastAPI + InfluxDB 기반 데이터 파이프라인, React/Preact 기반 대시보드, AI
              기반 분석 기능을 설계·구현했습니다. 개발 과정 전체를 직접 설계하고, 팀원들과 함께 구조를 개선하는 역할을
              맡았습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
