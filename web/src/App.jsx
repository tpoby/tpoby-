import { Suspense, lazy, useEffect } from 'react'
import { siteConfig } from './config'
import { SceneBackground } from './components/three/SceneBackground'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

// Lazy load below-the-fold sections for better performance
const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Blog = lazy(() => import('./components/sections/Blog'))
const Timeline = lazy(() => import('./components/sections/Timeline'))
const Contact = lazy(() => import('./components/sections/Contact'))

/**
 * SectionLoader - Loading fallback component for lazy sections
 */
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-pink mb-4"></div>
      <p className="text-neutral-400">加载中...</p>
    </div>
  </div>
)

/**
 * Main App component
 * Combines all sections and the 3D background
 * Implements lazy loading for better initial load performance
 */
function App() {
  useEffect(() => {
    document.title = siteConfig.title
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* 3D Background - always loaded */}
      <SceneBackground />

      {/* Header Navigation - always loaded */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero section - critical, loaded immediately */}
        <Hero />

        {/* Below-the-fold sections - lazy loaded with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer - always loaded */}
      <Footer />
    </div>
  )
}

export default App
