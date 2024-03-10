import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = ({ismobile}) => {
  const computer = useGLTF('./laptop/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={50} />
     
      <primitive
        object={computer.scene}
        scale={ismobile?20: 50.5}
        position={ismobile?[0,-3,1.0]: [0, -1.5, -1.5]}
       
        
      />
    </mesh>
  )
}


const ComputerCanvas = () => {
  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
    const mediaQuery=window.matchMedia("(max-width:500px)");
  
   setismobile(mediaQuery.matches);
   const handleMediaQueryChange=(event)=>{
    setismobile(event.matches);
   }
   mediaQuery.addEventListener('change',handleMediaQueryChange);
   return()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
   }
  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      
     
      camera={{
        near:10,
        far:200,

        position: [24, 3, 60], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Html>
      <span className='canvas-load'>
        <p
        style={{
          fontSize:14,
          color:'#f1f1f1',
          fontWeight:800,
          marginTop:40
        }}
        >Loading</p>
      </span>
    </Html>}>
        <OrbitControls enableZoom={false}
// enableDamping={true}

          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload />
    </Canvas>
  )
}

export default ComputerCanvas