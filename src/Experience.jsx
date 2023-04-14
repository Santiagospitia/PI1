import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Sphere from './Circle'
import Floor from './Floor'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper, HemisphereLight, HemisphereLightHelper, PointLightHelper, RectAreaLight, SpotLightHelper  } from 'three';
import { useReducer, useRef } from 'react'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    // useHelper(directionalLightRef, DirectionalLightHelper, 1)
    // useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    // useHelper(rectAreaLightRef, RectAreaLight, 1)    // RECTAREAHELPER 
    // useHelper(spotLightRef, SpotLightHelper, 1)


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight ref={directionalLightRef} position={[0, 1, -5]} intensity={1.5} castShadow={true} receiveShadow = {true}/>  */}
        {/* <hemisphereLight ref={hemisphereLightRef} position={[0, 1, -5]} intensity={1.5} receiveShadow = {true} castShadow = {true}/> */}
        <pointLight ref={ pointLightRef } position={[0, 1, -5]} castShadow={true} receiveShadow = {true} />
        {/* <rectAreaLight ref={rectAreaLightRef} position={[0, 1, -5]} castShadow={true} receiveShadow = {true} /> */}
        {/* <spotLight ref={spotLightRef} position={[0, 1, -5]} castShadow={true} receiveShadow = {true} /> */}
        <ambientLight intensity={0.5} />
        <Door/>
        <Sphere/>
        <Floor/>
    </>
}