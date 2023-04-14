import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/door/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'aO.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })
    
    return (
        <mesh rotation-y={Math.PI / 12} castShadow={true} receiveShadow={true}>
            <planeGeometry args={[2, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}