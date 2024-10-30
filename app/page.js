"use client"

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: .1, // Ajusta o percentual de visibilidade necessário
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, #334155, transparent 80%)`,
  };

  return (
    <div className="">
      <div
        style={gradientStyle}
        className="-z-30 fixed inset-0 bg-slate-700 h-[100vh] w-full flex justify-around"
      ></div>
      <Header lingua={"pt-br"} sobreVisible={isVisible} />
      <div className="flex flex-col justify-center items-end">
        <Sobre ref={ref} />
        <div className="relative h-[100vh] w-full "></div>
      </div>
    </div>
  );
}
