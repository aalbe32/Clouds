import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, OrbitControls } from '@react-three/drei'
import './App.css'


export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
       <Cloud segments={40} bounds={[10, 10, 30]} volume={30} color="orange" />
      <OrbitControls />
    </Canvas>
  )
}
