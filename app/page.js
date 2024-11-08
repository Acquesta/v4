"use client"

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import CardInfos from "./components/CardsInfos";
import CardsProjects from "./components/CardsProjects";

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
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, #334155, transparent 80%)`,
  };

  const experiencias = [
    {
      date: '07-2024 | atualmente',
      title: 'Estagiario de TI | FIAP',
      description: 'Neste trabalho eu monitoro as salas de aulas da FIAP auxiliando os professores e alunos com a infraestrutura da faculdade, estou desenvolvendo vários aspectos como comunicação apresentando projetos da FIAP, manipulação de computadores em rede e computadores virtuais',
      skills: [
        'Comunicação', 'Redes', 'VM', 'CMD'
      ]
    },
    {
      date: '01-2024 | 07-2024',
      title: 'Jovem Aprendiz | Beneficiência Portuguesa',
      description: 'Neste trabalho eu conferia autorizações de de convênios para exames, a principal característica que desenvolvi foi a comunicação e entender como varios setores dentro da empresa funcionam',
      skills: [
        'Comunicação', 'Estrutura de empresas', 'Contabilidade', 'Comportamentos'
      ]
    },
  ]

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/acquesta/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error('Erro ao buscar repositórios:', error));
  }, []);

  console.log(repos);
  

  return (
    <div className="scroll-smooth transition-all">
      <div
        style={gradientStyle}
        className="-z-30 hidden lg:fixed inset-0 bg-slate-700 h-[100vh] w-full lg:flex justify-around"
      ></div>
      <Header lingua={"pt-br"} isVisible={isVisible} />
      <div className="flex flex-col justify-center items-end">
        <Sobre ref={refSobre} />
        <CardInfos id='experiencia' ref={refCardInfos} infos={experiencias} title='Experiência'/>
        <CardsProjects id='projetos' ref={refCardProjetos} infos={repos} title='Projetos'/>
      </div>
    </div>
  );
}
