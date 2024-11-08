import Image from "next/image";

function CardsProjects( { infos, id, ref, title } ) {

    return ( 
        <div id={id} ref={ref} className="flex flex-col gap-5 lg:w-1/2 mx-10 my-10">
            <h2 className="text-slate-200 uppercase tracking-wider mt-10">{title}</h2>
            {
                infos?.map(info => (
                    <div className={`flex lg:flex-col max-md:flex-col justify-center gap-2 hover:bg-slate-700/30 py-5 px-3 rounded-xl cursor-pointer shadow-xl`}>
                        {
                            info.imagem && 
                                <div className="w-3/4 max-sm:w-full max-sm:mx-auto">
                                    <img 
                                        src={`${info.imagem}`}
                                        layout="responsive"
                                        className="w-auto mb-5 rounded-xl"
                                    /> 
                                </div>
                        }
                        <div className="w-1/2">
                            <h4 className="text-slate-500 font-bold text-center lg:text-start max-md:text-start">{info.date}</h4>
                        </div>
                        <div className="">
                            <h4 className="text-teal-400 text-lg font-bold">{info.nome}</h4>
                            <p className="text-slate-500 my-3">{info.descricao}</p>
                            <div>
                                <ul className="flex flex-wrap gap-2">
                                    {
                                        info.linguagens.map(linguagem => (
                                            <li className="bg-teal-400/10 text-teal-300 px-4 py-1 rounded-full">{linguagem}</li>                                    
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

export default CardsProjects;