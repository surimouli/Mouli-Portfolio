import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import Astronaut from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from 'maath';
import { Float } from '@react-three/drei';


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            {/* 🌍 Ambient Light for global illumination */}
            <ambientLight intensity={0.8} />

            {/* 💡 Point Light to brighten from front-right */}
            <pointLight position={[5, 5, 5]} intensity={1.2} />

            {/* 🎯 Spotlight for dramatic effect + shadows */}
            <spotLight
                position={[-5, 8, 5]}
                angle={0.3}
                penumbra={0.5}
                intensity={167}
                castShadow
            />

            {/* Your 3D model */}
            <Astronaut
                scale={(isMobile && 0.046) || 0.065}
                position={(isMobile && [0, 1.25, 0.2]) || [1, 1.8, 0]}
            />

            <OrbitControls enableZoom={false} />
            <Rig />
        </Canvas>
      </figure>
    </section>
  );
};


function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
