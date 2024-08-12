import {useControls} from "leva";
import {Float, MeshTransmissionMaterial, Stars, Text, useGLTF} from "@react-three/drei";
import * as THREE from "three";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import font from '../assets/fonts/Pretendard-Bold.otf'
import glbModel from "../assets/models/isometric_room.glb"
import glbModel1 from "../assets/models/bottled_car.glb"
import Isometric from "./Isometric.jsx";
import {BottleCar} from "./Bottled_car.jsx";


const Scene = () => {
    const lightRef = useRef();
    const torusRef = useRef();

    const model = useGLTF(glbModel)
    const model1 = useGLTF(glbModel1)

    // useHelper(lightRef, THREE.DirectionalLightHelper )
    const {xRotate, yRotate, zRotate} = useControls("rotate", {
        xRotate: {value: 23, min: 0, max: 360, step: 1},
        yRotate: {value: 289, min: 0, max: 360, step: 1},
        zRotate: {value: 337, min: 0, max: 360, step: 1},
    })

    const materialProps = useControls("material", {
        thickness: {value: 0.25, min: 0, max: 3, step: 0.05},
        roughness: {value: 0.2, min: 0, max: 1, step: 0.1},
        transmission: {value: 0.99, min: 0, max: 1, step: 0.01},
        ior: {value: 1.5, min: 0, max: 3, step: 0.1},
        chromaticAberration: {value: 0.20, min: 0, max: 1},
        backside: {value: true}
    });

    useFrame((state, delta) => {
        torusRef.current.rotation.x += delta
        torusRef.current.rotation.y += delta
    })

    const clickHandler = (e) => {
        console.log('click')
    }

    return (
        <>
            <ambientLight/>
            <directionalLight castShadow ref={lightRef} position-y={3}/>
            <Float>
                <Isometric scale={[0.2, 0.2, 0.2]} position={[-7.5, 2, 0]}
                    rotation={[THREE.MathUtils.degToRad(xRotate), THREE.MathUtils.degToRad(yRotate), THREE.MathUtils.degToRad(zRotate)]}/>
            </Float>
            <group scale={[1.15, 1.15, 1.15]}>
                <Text font={font} position={[0, 0, -1]} fontSize={1.8} color={`white`} anchorX={`center`}
                      anchorY={`middle`}>Hello Three!</Text>
                <mesh ref={torusRef} castShadow scale={[1.35, 1.35, 1.35]} onClick={(e) => clickHandler(e)}>
                    <torusGeometry/>
                    <MeshTransmissionMaterial {...materialProps}/>
                </mesh>
            </group>
            <Float>
                <ambientLight intencity={2}/>
                <BottleCar position={[7, -3, 0]} scale={[10, 10, 10]}
                           rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(40), THREE.MathUtils.degToRad(20)]} />
            </Float>
            <Stars count={800} radius={100} depth={40} factor={5} saturation={0} fade={true} speed={2}/>

            {/*<Sparkles count={500} speed={0.2} scale={[10, 10, 10]} size={4} />*/}
            {/*<Environment background={true} files={stadium} />*/}
            {/*<mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>*/}
            {/*    <planeGeometry args={[8, 8]} />*/}
            {/*    <meshStandardMaterial color={`#CC3941`} />*/}
            {/*</mesh>*/}
        </>
    )
}

export default Scene;
