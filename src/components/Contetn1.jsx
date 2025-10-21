import React from 'react';
import Lanyard from "@/animations/Lanyard";
import Navbar from "./Navbar";
import CircularGallery from "@/animations/CircularGallery";
import Experiance from './Experiance';
import DesignToolsSection from './DesignToolsSection';


// Component1.jsx
export default function Component1() {
  return (
    <div className="w-full h-[4000px]">
      <h1 className="text-white text-2xl p-4">Component 1</h1>
      {/* <Navbar/> */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <div style={{ height: '700px', position: 'relative' }}>
        <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
      {/* <div style={{ height: '200vh' }}>
        <ScrollStack>
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
      </div> */}
      <Experiance/>
      <DesignToolsSection/>
    </div>
  );
}
