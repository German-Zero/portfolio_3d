import { Canvas } from '@react-three/fiber'
import { Mugi } from './Mugi'
import { OrbitControls } from '@react-three/drei'

const AboutExperience = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 55 }}
      gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}
      className='
        desktopHD:max-w-[1200px] desktopHD:max-h-[1200px]
        desktopXL:max-w-[900px] desktopXL:max-h-[900px]
        desktopL:max-w-[700px] desktopL:max-h-[700px]
        tablet:max-h-[500px]
        mobile:mobile:max-h-[400px]
      '
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
            position={[0, -3, 0]}
            rotation={[0.1, -Math.PI / 2, -0.1]}
        >
            <Mugi />
        </group>
    </Canvas>
  )
}

export default AboutExperience