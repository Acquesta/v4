function CardInfos() {
    return ( 
        <div className="flex gap-5 w-1/2 mx-10 my-10">
            <div className="flex hover:bg-slate-700/30 py-5 px-3 rounded-xl cursor-pointer">
                <div className="w-1/2">
                    <h4 className="text-slate-500 font-bold">07-2024</h4>
                </div>
                <div>
                    <h4 className="text-teal-400 text-lg font-bold">Titulo</h4>
                    <p className="text-slate-500 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tincidunt mauris, vitae varius tortor pharetra vitae. Integer eleifend est dui. Nam consequat elit sed commodo aliquet. Etiam dolor elit, rutrum id arcu nec, vehicula hendrerit magna.</p>
                    <div>
                        <ul className="flex flex-wrap gap-2">
                            <li className="bg-teal-400/10 text-teal-300 px-4 py-1 rounded-full">JavaScript</li>
                            <li className="bg-teal-400/10 text-teal-300 px-4 py-1 rounded-full">JavaScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardInfos;