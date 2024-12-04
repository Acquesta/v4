import Image from "next/image";

function CardInfos({ darkMode, id, ref, infos, title }) {

    return ( 
        <div id={id} ref={ref} className="flex flex-col gap-5 lg:w-1/2 mx-10 my-10">
            <h2 className={`${darkMode ? 'text-slate-200' : 'text-sky-900'} uppercase tracking-wider mt-10`}>{title}</h2>
            {
                infos?.map(info => (
                    <div className={`flex lg:flex-col max-md:flex-col justify-center gap-2 hover:bg-slate-700/30 py-5 px-3 rounded-xl cursor-pointer shadow-xl`}>
                        {
                            info.image && 
                                <div className="w-3/4 max-sm:w-full max-sm:mx-auto">
                                    <img 
                                        src={info.image}
                                        layout="responsive"
                                        className="mb-5 rounded-xl"    
                                    ></img> 
                                </div>
                        }
                        <div className="w-1/2">
                            <h4 className="text-slate-500 font-bold text-center lg:text-start max-md:text-start">{info.date}</h4>
                        </div>
                        <div className="">
                            <h4 className={`${darkMode ? 'text-teal-400' : 'text-sky-900'} text-lg font-bold`}>{info.title}</h4>
                            <p className={`${darkMode ? 'text-slate-500' : 'text-indigo-950'} my-3`}>{info.description}</p>
                            <div>
                                <ul className="flex flex-wrap gap-2">
                                    {
                                        info.skills.map(skill => (
                                            <li key={skill} className={` ${darkMode ? 'text-teal-300 bg-teal-400/10' : 'text-sky-900 bg-sky-900/10 '} px-4 py-1 rounded-full`}>{skill}</li>
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

export default CardInfos;