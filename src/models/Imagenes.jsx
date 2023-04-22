import React, { useRef, useState } from "react";
import {  useTexture } from "@react-three/drei";

export default function Imagenes(props) {
    const gato = useTexture("/static/gato.jpg")
    const gato1 = useTexture("/static/gato1.jpg")
    const imagenRef = useRef(null)
    const [imagen, setImagen] = useState(false)
    const onHandle = (event) => {
        setImagen(!imagen)
        if (imagen) {
            imagenRef.current.material.map = gato1
        } else {
            imagenRef.current.material.map = gato
        }
    }
    return (
        <mesh  ref={imagenRef} castShadow={true} position-x = {-1.3} scale={2} onContextMenu={onHandle}>
            <planeGeometry />
            <meshBasicMaterial map={gato} />
        </mesh>
    );
}