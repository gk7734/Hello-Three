import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import gltfModel from "../assets/models/bottled_car.glb";

const Model = () => {
    const model = useLoader(GLTFLoader, gltfModel);

    return (
        <primitive object={model.scene}/>
    )
}

export default Model;
