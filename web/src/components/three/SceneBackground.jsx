import { Canvas } from '@react-three/fiber'
import { ParticleSystem } from './ParticleSystem'
import { GeometricShapes } from './GeometricShapes'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * SceneBackground - Main Three.js canvas component
 * Displays animated particle system and geometric shapes
 * Falls back to static background if user prefers reduced motion
 */
export const SceneBackground = () => {
  const prefersReducedMotion = useReducedMotion()

  // Static fallback for users who prefer reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-950" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, 10]} angle={0.3} penumbra={1} intensity={0.5} />

        {/* 3D Objects */}
        <ParticleSystem />
        <GeometricShapes />
      </Canvas>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950/80 pointer-events-none" />
    </div>
  )
}
