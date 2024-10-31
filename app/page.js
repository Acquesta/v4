"use client"

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import CardInfos from "./components/CardsInfos";

// import imagemProjeto from './assets/projeto.jpg'

export default function Home() {
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
      { threshold: .1 }
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
      { threshold: .1 }
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
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, #334155, transparent 80%)`,
  };

  const experiencias = [
    {
      date: '07-2024',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
  ]

  const projetos = [
    {
      date: '07-2024',
      image: '/projeto.jpg',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      image: '/projeto.jpg',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      image: '/projeto.jpg',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      image: '/projeto.jpg',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
    {
      date: '07-2024',
      image: '/projeto.jpg',
      title: 'Titulo da experiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.',
      skills: [
        'JavaScript','JavaScript','JavaScript','JavaScript'
      ]
    },
  ]

  return (
    <div className="scroll-smooth">
      <div
        style={gradientStyle}
        className="-z-30 fixed inset-0 bg-slate-700 h-[100vh] w-full flex justify-around"
      ></div>
      <Header lingua={"pt-br"} isVisible={isVisible} />
      <div className="flex flex-col justify-center items-end">
        <Sobre ref={refSobre} />
        <CardInfos id='experiencia' ref={refCardInfos} infos={experiencias} title='Experiência'/>
        <CardInfos id='projetos' ref={refCardProjetos} infos={projetos} title='Projetos'/>
      </div>
    </div>
  );
}
