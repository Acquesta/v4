import { useState } from "react";

function Header({ lingua, isVisible }) {

    console.log(isVisible);

    const [ hamburguer, setHamburguer ] = useState(false)

    const handleHamburguer = () => {
        hamburguer ? setHamburguer(false) : setHamburguer(true)
        console.log(hamburguer)
    }

    return ( 
        <div className="z-30 lg:fixed top-10 left-32 flex flex-col lg:justify-between mx-10 lg:mx-auto py-20 lg:w-1/3 lg:h-[100vh]">
            <div>
                <h1 className="text-slate-300 text-4xl font-bold">Lorenzo Adinolfi Acquesta</h1>
                <h2 className="text-slate-200 text-xl my-4">Engenheiro de software</h2>
                <p className="w-1/2 mt-4 text-slate-400 text-lg leading-normal">Desenvolvo projetos online completos, aplicações e designs</p>
            </div>
            <div className="lg:hidden fixed top-10 right-0 px-10 flex flex-col justify-center items-center">
                <div onClick={() => handleHamburguer()} className="flex flex-col gap-2 w-12 h-12 items-center justify-center cursor-pointer bg-slate-700 rounded-full">
                    <div className="w-6 h-[1px] bg-slate-300"></div>
                    <div className="w-6 h-[1px] bg-slate-300"></div>
                    <div className="w-6 h-[1px] bg-slate-300"></div>
                </div>

                <div className={`${hamburguer ? 'opacity-100' : 'opacity-0'} absolute top-14 bg-slate-700 py-3 px-3 rounded-md transition-all`}>
                    <div className="relative -top-4 w-4 h-4 bg-slate-700 mx-auto rotate-45" ></div>
                    <a href="#sobre"  className={`z-30 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer transition-all ${isVisible.sobre ? 'text-slate-100 w-full' : ''}`} >
                        <p  className="mx-auto">Sobre</p>
                    </a>
                    <a href="#experiencia" className={`z-30  mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer transition-all ${isVisible.cardInfos ? 'text-slate-100 w-full' : ''}`}>
                        <p className="mx-auto">Experiência</p>
                    </a>
                    
                    <a href="#projetos" className={`z-30  mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer transition-all ${isVisible.cardProjetos ? 'text-slate-100 w-full' : ''}`}>
                        <p className="mx-auto">Projetos</p>
                    </a>
                    
                    <a href="#contato" className=" mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer transition-all">
                        <p className="mx-auto">Contato</p>
                    </a>
                </div>
            </div>
            <div className="hidden lg:block">
                    <a href="#sobre"  className={`z-30 w-1/3 mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer hover:text-slate-300 hover:w-full transition-all ${isVisible.sobre ? 'text-slate-100 w-full' : ''}`} >
                        <div className="bg-slate-300 w-1/6 h-[1px]"></div>
                        <p>Sobre</p>
                    </a>
                    <a href="#experiencia" className={`z-30 w-1/3 mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer hover:text-slate-300 hover:w-full transition-all ${isVisible.cardInfos ? 'text-slate-100 w-full' : ''}`}>
                        <div className="bg-slate-400 w-1/6 h-[1px]" ></div>
                        <p>Experiência</p>
                    </a>
                    
                    <a href="#projetos" className={`z-30 w-1/3 mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer hover:text-slate-300 hover:w-full transition-all ${isVisible.cardProjetos ? 'text-slate-100 w-full' : ''}`}>
                        <div className="bg-slate-400 w-1/6 h-[1px]" ></div>
                        <p>Projetos</p>
                    </a>
                    
                    <a href="#contato" className="w-1/3 mt-4 flex items-center gap-2 uppercase font-bold text-xs text-slate-400 cursor-pointer hover:text-slate-300 hover:w-full transition-all">
                        <div className="bg-slate-400 w-1/6 h-[1px]" ></div>
                        <p>Contato</p>
                    </a>
            </div>
            <div>
                <ul className="flex gap-5 mt-5">
                    <li className="cursor-pointer">
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cbd5e1" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#cbd5e1" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>             
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#cbd5e1"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Header;