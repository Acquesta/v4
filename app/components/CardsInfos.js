import Image from "next/image";

function CardInfos({ id, ref, infos, title }) {

    return ( 
        <div id={id} ref={ref} className="flex flex-col gap-5 lg:w-1/2 mx-10 my-10">
            <h2 className="text-slate-200 uppercase tracking-wider mt-10">{title}</h2>
            {
                infos.map(info => (
                    <div className={`flex lg:flex-col max-md:flex-col justify-center gap-2 hover:bg-slate-700/30 py-5 px-3 rounded-xl cursor-pointer shadow-xl`}>
                        {
                            info.image && 
                                <div className="w-3/4 max-sm:w-full max-sm:mx-auto">
                                    <Image 
                                        src='/projeto.jpg'
                                        layout="responsive"
                                        className="mb-5 rounded-xl"
                                        width='0'
                                        height='0'    
                                    ></Image> 
                                </div>
                        }
                        <div className="w-1/2">
                            <h4 className="text-slate-500 font-bold text-center lg:text-start max-md:text-start">{info.date}</h4>
                        </div>
                        <div className="">
                            <h4 className="text-teal-400 text-lg font-bold">{info.title}</h4>
                            <p className="text-slate-500 my-3">{info.description}</p>
                            <div>
                                <ul className="flex flex-wrap gap-2">
                                    {
                                        info.skills.map(skill => (
                                            <li className="bg-teal-400/10 text-teal-300 px-4 py-1 rounded-full">{skill}</li>
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