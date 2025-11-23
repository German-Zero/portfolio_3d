import { useGLTF } from '@react-three/drei'

export function Mugi(props) {
  const { nodes, materials } = useGLTF('/models/Mugi.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.leaves} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.veil} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Mugi.glb')
