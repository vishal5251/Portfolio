import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import HeroImage from "./HeroImgComponent";

function DisSphere() {
  return (
    <div className="relative h-full w-full col-span row-start-1 row-end-2 mt-32 sm:mt-0 ">
      <div className="" style={{ width: "100%", height: "100%" }}>
        <Canvas flat linear >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.3}>
              <MeshDistortMaterial
                color="hotpink"
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-28 right-[146px]">
        <HeroImage />
      </div>
    </div>
  )
}

export default DisSphere