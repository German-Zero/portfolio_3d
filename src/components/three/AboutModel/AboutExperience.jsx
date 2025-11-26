import { Canvas } from '@react-three/fiber'
import { Mugi } from './Mugi'
import { OrbitControls } from '@react-three/drei'

const AboutExperience = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 55 }}
      className='
        desktopHD:max-h-[1000px]
        desktopXL:max-h-[800px]
        desktopL:max-h-[650px]
        laptop:max-h-[500px]
        tablet:max-h-[550px]
      '>

        <OrbitControls 
            enablePan={false}
            enableZoom={false}
            maxDistance={10}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />
        
        <group
            position={[0, -3, 0]}
            rotation={[0.1, -Math.PI / 2, -0.1]}
        >
            <Mugi />
        </group>
    </Canvas>
  )
}

export default AboutExperience