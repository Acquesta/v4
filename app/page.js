"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 0, 0.7), rgba(0, 0, 255, 0.1))`,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: '-1'
  };

  return (
    <div style={gradientStyle}>
      <h1>Move o mouse para ver o degradê!</h1>
      {/* Adicione conteúdo extra aqui */}
      <div style={{ height: '400vh', paddingTop: '20px' }}>
        <p>Role para baixo para ver o efeito do degradê ao longo da página.</p>
      </div>
    </div>
  );
}
