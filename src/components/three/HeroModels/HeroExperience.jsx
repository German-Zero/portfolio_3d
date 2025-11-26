import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Room } from './Room'
import HeroLights from './HeroLights'
import { useMediaQuery } from 'react-responsive'

const HeroExperience = () => {

  const isLaptop = useMediaQuery({ query: '(min-width:1024px)' })
  const isTablet = useMediaQuery({ query: '(min-width:768px)' })
  const isMobile = useMediaQuery({ query: '(min-width:416px) (max-width:767px)' })

  const groupPosition = 
    isLaptop ? [-1, -10, 0] :
    isTablet ? [-1, -9, 0] :
    isMobile ? [-3, -4, 0] :
    [-0.5, -9, 0]

  const groupRotation =
  isLaptop ? [0.1, -Math.PI / 3, 0] :
  isMobile ? [0.4, -Math.PI / 2.8, 0] :
  isTablet ? [0.1, -Math.PI / 2.4, 0] :
  [0.1, -Math.PI / 3, 0]

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      className='
      relative
      desktopHD:max-h-[1000px]
      desktopXL:max-h-[700px]
      desktopL:max-h-[575px]
      laptop:max-h-[400px]
      tablet:max-h-[550px]
      mobile:max-h-[350px]
      '>

        <OrbitControls
            enablePan={false}
            enableZoom={!isMobile}
            maxDistance={75}
            minDistance={45}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            
        />
        <HeroLights />

        <group
          position={groupPosition}
          rotation={groupRotation}
        >
          <Room />

        </group>

    </Canvas>
  )
}

export default HeroExperience