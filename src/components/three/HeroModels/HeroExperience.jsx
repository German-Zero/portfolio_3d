import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Room } from './Room'
import HeroLights from './HeroLights'

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

        <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxDistance={75}
            minDistance={45}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            
        />
        <HeroLights />

        <group
          position={[0, -9, 0]}
          rotation={[0.1, -Math.PI / 3, 0]}
        >
          <Room />

        </group>

    </Canvas>
  )
}

export default HeroExperience