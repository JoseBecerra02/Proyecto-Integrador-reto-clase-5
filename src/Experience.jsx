import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Imagenes from './models/Imagenes'
import Video from './models/Video'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        
        <Imagenes/>
        <Video/>
        <Sky/>
        <mesh receiveShadow={true} scale={2} position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial color="brown" />
        </mesh>
    </>
}