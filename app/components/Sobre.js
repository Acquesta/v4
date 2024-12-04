function Sobre({ darkMode, ref }) {
    return ( 
        <div id="sobre" ref={ref} className={`right-20 ${darkMode ? 'text-slate-400' : 'text-indigo-950'} lg:w-1/2 mx-10 lg:py-20 text-lg tracking-wide`}>
            <h2 className={`${darkMode ? 'text-slate-400' : 'text-sky-900'} uppercase tracking-wider my-8`}>Sobre</h2>
            <p className="mb-4 ">Olá eu sou o Lorenzo Acquesta, tenho 18 anos, cursei o ensino médio técnico em Tecnologia da Informação e atualmente estou fazendo faculdade de Engenharia de Softaware. Sempre busco aprender coisas novas a todo tempo, hoje em dia eu sei as liguagens de programação <span className="text-teal-400 font-bold">JavaScript, Angular, TypeScript e Python.</span></p>
            <p className="mb-4">Além das linguagens eu possuoa conhecimentos em plataformas de Desing como <span className="text-teal-400 font-bold">Figma, Photoshop e Canvas.</span> Também tenho conhecimentos em banco de dados <span className="text-teal-400 font-bold">NoSQL e SQL.</span> Com esses conhecimentos eu construo sites e aplicativos diversos e totalmente perssonalizados a partir do zero, podendo ter login e cadastro para o usuário.</p>
            <p></p>
        </div>
     );
}

export default Sobre;