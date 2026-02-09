import { useState, useEffect, useRef } from 'react'
import { heroConfig, siteConfig } from '@/config'

/**
 * Hero section - Full viewport hero with large typography
 * First impression of the website with CTA buttons
 * Features typewriter animation for dynamic self-introduction
 */
export const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [tagIndex, setTagIndex] = useState(0)
  const typingSpeedRef = useRef(100)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true

    const type = () => {
      if (!isMountedRef.current) return

      const currentTag = heroConfig.tags[tagIndex]
      const fullText = currentTag

      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1))
        typingSpeedRef.current = 50
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1))
        typingSpeedRef.current = 100
      }

      if (!isDeleting && typedText === fullText) {
        typingSpeedRef.current = 2000
        setIsDeleting(true)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setTagIndex((prev) => (prev + 1) % heroConfig.tags.length)
        typingSpeedRef.current = 500
      }
    }

    const timer = setTimeout(type, typingSpeedRef.current)

    return () => {
      clearTimeout(timer)
      isMountedRef.current = false
    }
  }, [typedText, isDeleting, tagIndex])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue to-primary-pink opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue via-primary-pink to-primary-blue opacity-30 blur-lg animate-spin-slow" style={{ animationDuration: '8s' }} />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary-blue/40 shadow-2xl shadow-primary-blue/30 mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img
                src={siteConfig.avatar}
                alt={heroConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h14V7l-7-5zm0 2.236L15 8.868V16h-3v-4H8v4H5V8.868l5-4.632z"/>
              </svg>
              <span>OIer</span>
            </div>
          </div>
        </div>

        <h1 className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-primary-pink to-primary-blue bg-300% animate-gradient mb-6 animate-fade-in leading-tight"
            style={{
              fontSize: 'clamp(4rem, 13vw, 8rem)',
              textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(255, 20, 147, 0.2)',
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
            }}>
          {heroConfig.name}
        </h1>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <p className="font-body text-body-lg text-neutral-400 mb-2">
            {heroConfig.welcomePrefix}
          </p>
          <p className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block min-h-[2em]"
             style={{
               fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
               textShadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)'
             }}>
            {typedText}<span
              className="animate-cursor-blink inline-block"
              style={{
                color: '#6366F1',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                width: '1.5px',
                marginLeft: '2px',
                transform: 'translateY(-0.1em)',
                display: 'inline-block'
              }}
            >|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-primary-blue hover:bg-blue-600 text-neutral-50 font-semibold rounded-lg transition-all duration-150 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-blue/30"
          >
            查看项目
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 bg-transparent border-2 border-primary-pink text-primary-pink hover:bg-primary-pink/10 font-semibold rounded-lg transition-all duration-150 hover:transform hover:-translate-y-0.5"
          >
            联系我
          </button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-4 border-geometric-red/20 animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-geometric-yellow/20 rotate-45 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-geometric-blue/10 animate-float hidden lg:block" style={{ animationDelay: '4s' }} />
    </section>
  )
}
