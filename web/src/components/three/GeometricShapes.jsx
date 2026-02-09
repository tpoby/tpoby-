import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'

/**
 * GeometricShapes - Wassily Kandinsky inspired geometric abstraction
 * Creates floating geometric shapes with bold primary colors
 * Optimized for mobile devices with reduced shape count
 */
export const GeometricShapes = () => {
  const groupRef = useRef()

  // Memoize shapes array to prevent recalculation on every render
  const shapes = useMemo(() => {
    // Detect mobile device once during initialization
    // Use typeof window to ensure we're in browser environment
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    const allShapes = [
      { type: 'sphere', color: '#EF4444', position: [-2, 1, 0], args: [0.5, 32, 32] },
      { type: 'cone', color: '#F59E0B', position: [2, -1, 1], args: [0.5, 1, 32] },
      { type: 'torus', color: '#3B82F6', position: [0, 2, -2], args: [0.5, 0.2, 16, 100] },
      { type: 'sphere', color: '#FF1493', position: [1.5, 2, 1], args: [0.3, 32, 32] },
      { type: 'cone', color: '#00FFFF', position: [-1.5, -2, -1], args: [0.4, 0.8, 32] },
    ]
    // Return fewer shapes on mobile for better performance
    return isMobile ? allShapes.slice(0, 3) : allShapes
  }, []) // Empty dependency array - only calculate once

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation based on time
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position}>
          {shape.type === 'sphere' && <sphereGeometry args={shape.args} />}
          {shape.type === 'cone' && <coneGeometry args={shape.args} />}
          {shape.type === 'torus' && <torusGeometry args={shape.args} />}
          <meshStandardMaterial
            color={shape.color}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}
