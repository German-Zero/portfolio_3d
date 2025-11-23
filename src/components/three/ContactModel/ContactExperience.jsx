import { Canvas } from '@react-three/fiber'
import { Coffe } from './Coffe'
import { OrbitControls } from '@react-three/drei'

const ContactExperience = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 35 }}
      gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}
    >

        <OrbitControls 
            enablePan={false}
            enableZoom={false}
            maxDistance={10}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        <group
            position={[0, -0.5, 0]}
            rotation={[0.1, -Math.PI / 6, 0]}
        >
            <Coffe />
        </group>
    </Canvas>
  )
}

export default ContactExperience