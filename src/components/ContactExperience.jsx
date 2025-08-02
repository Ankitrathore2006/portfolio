import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";
import { Text3D } from "@react-three/drei";


const ContactExperience = () => {
  

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.5, 0]}>
        <Text3D
          className="animated-text"
          font="/fonts/Inter_Bold.json"
          size={0.5}
          position={[-3, -3, -2]}
          color="#1C34FF"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {`Hello there!`}
          <meshNormalMaterial />
        </Text3D>
        <Text3D
          className="animated-text"
          font="/fonts/Inter_Bold.json"
          size={0.5}
          position={[-5.5, -3, -1]}
          rotation={[0, Math.PI / 2, 0]}
          color="#1C34FF"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {`I'm \nAnkit`}
          <meshNormalMaterial />
        </Text3D>
        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
