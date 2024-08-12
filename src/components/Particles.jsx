import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import snow from "../assets/snow.jpg"
import {useRef} from "react";

const Particles = () => {
    const paticlesRef = useRef();

    useFrame((state, delta) => {
        paticlesRef.current.rotation.y += delta * 0.1;
        paticlesRef.current.rotation.x += delta * 0.1;
    })

    const texture = useLoader(THREE.TextureLoader, snow);

    const verticesAmount = 2000;
    const positionArray = new Float32Array(verticesAmount * 3)

    for (let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10.0;
    }

    return (
        <points ref={paticlesRef}>
            <bufferGeometry>
                <bufferAttribute attach={`attributes-position`}
                                 count={verticesAmount}
                                 itemSize={3}
                                 array={positionArray}
                />
            </bufferGeometry>
            <pointsMaterial size={0.06} alphaMap={texture} transparent={true} depthTest={false} />
        </points>)
}

export default Particles;
