import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
        <spotLight 
            position={[1, 3, 7]}
            angle={0.35}
            intensity={190}
            penumbra={0.2}
            color="white"
        />

        <spotLight 
            position={[4, 3, 4]}
            angle={1}
            intensity={100}
            color="#8AE058"
            penumbra={0.5}
        />

        <spotLight 
            position={[-4, 2, 4]}
            angle={1.2}
            intensity={100}
            penumbra={0.5}
            color="#E0D40D"
        />

        <primitive 
            object={new THREE.RectAreaLight('#0DE018', 8, 3, 2)}
            position={[2, 4, 4]}
            intensity={30}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        <pointLight 
            position={[0, 1, 0]}
            intensity={40}
            color="#09E05B"
        />

        <pointLight 
            position={[1, 2, -2]}
            intensity={40}
            color="#09E05B"
        />
    </>
  )
}

export default HeroLights