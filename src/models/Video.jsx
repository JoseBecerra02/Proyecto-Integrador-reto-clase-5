import React, { useState } from "react";
import {  useVideoTexture } from "@react-three/drei";

export default function Video(props) {
  const [play, setPlay] = useState(false);
  const videoTexture = useVideoTexture("/static/gato.mp4", {
    muted: false,
    start: play,
    loop: true,
  });
  const onHandle = (event) => {
    setPlay(!play);
  }
  return (
        <mesh castShadow={true}   position-x = {1.3}   scale={2} onClick={onHandle}>
          <planeGeometry />
          <meshBasicMaterial map={videoTexture}  toneMapped={false}/>
        </mesh>
  );
}