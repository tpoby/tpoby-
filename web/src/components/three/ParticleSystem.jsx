import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'

/**
 * ParticleSystem - April Greiman inspired digital aesthetic
 * Creates a rotating particle field with electric blue color
 * Optimized for mobile devices with reduced particle count
 */
export const ParticleSystem = () => {
  const pointsRef = useRef()

  // Memoize particle positions to prevent recalculation on every render
  // Use useMemo with a ref to store random seed for deterministic results
  const positions = useMemo(() => {
    // Detect mobile device once during initialization
    // Use typeof window to ensure we're in browser environment
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? 500 : 1000

    // Use seeded random for deterministic results during render
    let seed = 12345
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (seededRandom() - 0.5) * 10
    }
    return positions
  }, []) // Empty dependency array - only calculate once

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Slow rotation for ambient effect
      pointsRef.current.rotation.x += delta * 0.05
      pointsRef.current.rotation.y += delta * 0.075
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}
