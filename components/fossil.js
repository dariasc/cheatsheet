import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from 'three'

function Cube(props) {
  // This reference will give us direct access to the mesh
  const ref = useRef()
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.start ? 'hotpink' : 'white'} />
    </mesh>
  )
}

export default function Fossil(props) {
  let camera = new PerspectiveCamera(60, 1, 0.1, 1000);
  // @todo: add distance property to each fossil
  camera.position.x = 5;
  camera.position.y = 7;
  camera.position.z = 5;

  // @todo: this works, but its ugly af, clean this
  let limits = [[0,0], [0,0], [0,0]];
  props.bones.forEach(bone => {
    for (let i = 0; i < 3; i++) {
      limits[i][0] = Math.min(limits[i][0], bone[i]);
      limits[i][1] = Math.max(limits[i][1], bone[i]);
    }
  });

  camera.lookAt(
    (limits[0][1]-limits[0][0])/2 + limits[0][0], 
    (limits[1][1]-limits[1][0])/2 + limits[1][0],
    (limits[2][1]-limits[2][0])/2 + limits[2][0]
  );

  return (
    <div style={{ width: 200, height: 200 }}>
      <Canvas camera={camera}>
        <ambientLight intensity={0.1}/>
        <pointLight position={[10, 10, 10]}/>
        <Cube start position={[0, 0, 0]}/>
        {props.bones.map((bone, index) => (
          <Cube key={index} position={bone}/>
        ))}
      </Canvas>
    </div>
  );
}
