import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Scene from "./components/Scene.jsx";
import {Perf} from "r3f-perf";
import Rig from "./components/Rig.jsx";

function App() {

    return (
        <>
            <div className={`three`}>
                <Canvas shadows={true} camera={{
                    position: [0, 0, 9]
                }}>
                    {/*<OrbitControls/>*/}
                    <Scene />
                    <Perf position={`top-left`} />
                    <Rig/>
                </Canvas>
            </div>
        </>
    )
}

export default App
