import {useFrame} from "@react-three/fiber";
import {Vector3} from "three";
import { useThree } from '@react-three/fiber'

const Rig = () => {
    const { camera, mouse } = useThree()
    const vec = new Vector3()

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.045)
        camera.lookAt(0, 0, 0)
    })
}

export default Rig;
