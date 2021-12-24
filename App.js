import { PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cactus from './component/Cactus'
import Camera from './component/Camera'
import Cube from './component/Cube'
import Level from './component/Level'
import Pyramid from './component/Pyramid'
import Sudo from './component/Sudo'

export default function App() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      <color attach="background" args={['pink']} />
      <ambientLight />
      <PresentationControls globla zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={-0.75} dispoes={null}>
          <Sudo />
          <Camera />
          <Cactus />
          <Pyramid />
          <Cube />
          <Level />
        </group>
      </PresentationControls>
    </ Canvas>
  )
}