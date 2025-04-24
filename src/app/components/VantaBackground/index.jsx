"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";

const VantaBackground = ({children}) => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
  
    useEffect(() => {
      if (!vantaEffect && typeof window !== "undefined") {
        setVantaEffect(
          NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 0.3,
            scaleMobile: 1.0,
            color: 0x00ff99,
            backgroundColor: 0x000000,
          })
        );
      }
  
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
  
    return (
      <div ref={vantaRef} className="h-screen relative z-0 flex justify-center items-center">
        <div className="absolute z-10 ">
          {children}
        </div>
      </div>
    );
  }

export default VantaBackground
