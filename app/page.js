"use client"

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import CardInfos from "./components/CardsInfos";

import projetos from './data/projects.json'
import experiencias from './data/experiencias.json'

export default function Home() {
  // console.log(projetos);
  const [darkMode, setDarkMode] = useState(true)
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({
    sobre: false,
    cardInfos: false,
    cardProjetos: false
  });

  const refSobre = useRef(null);
  const refCardInfos = useRef(null);
  const refCardProjetos = useRef(null);

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
        setIsVisible((prev) => ({ ...prev, sobre: entry.isIntersecting }));
      },
      { threshold: .1 }
    );

    if (refSobre.current) {
      observer.observe(refSobre.current);
    }

    return () => {
      if (refSobre.current) {
        observer.unobserve(refSobre.current);
      }
    };
  }, [refSobre]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible((prev) => ({ ...prev, cardInfos: entry.isIntersecting }));
      },
      { threshold: .5 }
    );

    if (refCardInfos.current) {
      observer.observe(refCardInfos.current);
    }

    return () => {
      if (refCardInfos.current) {
        observer.unobserve(refCardInfos.current);
      }
    };
  }, [refCardInfos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible((prev) => ({ ...prev, cardProjetos: entry.isIntersecting }));
      },
      { threshold: .5 }
    );

    if (refCardProjetos.current) {
      observer.observe(refCardProjetos.current);
    }

    return () => {
      if (refCardProjetos.current) {
        observer.unobserve(refCardProjetos.current);
      }
    };
  }, [refCardProjetos]);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${darkMode ? '#334155, #0f172a' : '#93c5fd, #bfdbfe'})`,
  };

  // console.log(repos);

  const changeDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true)   
    console.log(darkMode);
  }
  
  return (
    <div className={`scroll-smooth transition-all ${darkMode ? 'bg-[#0f172a]' : 'bg-[#bfdbfe]'} lg:bg-transparent`}>
      <div
        style={gradientStyle}
        className={`-z-30 hidden lg:fixed inset-0 bg-blue-200 h-[100vh] w-full lg:flex justify-around transition-all`}
      ></div>
      <Header changeDarkMode={changeDarkMode} darkMode={darkMode} lingua={"pt-br"} isVisible={isVisible} />
      <div className="flex flex-col justify-center items-end">
        <Sobre darkMode={darkMode} ref={refSobre} />
        <CardInfos darkMode={darkMode} id='experiencia' ref={refCardInfos} infos={experiencias} title='Experiência'/>
        <CardInfos darkMode={darkMode} id='projetos' ref={refCardProjetos} infos={projetos} title='Projetos'/>
      </div>
    </div>
  );
}
