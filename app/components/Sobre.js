function Sobre({ darkMode, ref }) {
    return ( 
        <div id="sobre" ref={ref} className={`right-20 ${darkMode ? 'text-slate-400' : 'text-indigo-950'} text-slate-400 lg:w-1/2 mx-10 lg:py-20 text-lg tracking-wide`}>
            <h2 className={`${darkMode ? 'text-slate-400' : 'text-sky-900'} text-slate-200 uppercase tracking-wider my-8`}>Sobre</h2>
            <p className="mb-4 ">Olá eu sou o Lorenzo Acquesta, tenho 18 anos, cursei o ensino médio técnico em Tecnologia da Informação e atualmente estou fazendo faculdade de Engenharia de Softaware. Sempre busco aprender coisas novas a todo tempo, hoje em dia eu sei as liguagens de programação JavaScript, Angular, TypeScript e Python. </p>
            <p className="mb-4">Além das linguagens eu possuoa conhecimentos em plataformas de Desing como Figma, Photoshop e Canvas. Também tenho conhecimentos em banco de dados NoSQL e SQL. Com esses conhecimentos eu construo sites e aplicativos diversos e totalmente perssonalizados a partir do zero, podendo ter login e cadastro para o usuário.</p>
            <p></p>
        </div>
     );
}

export default Sobre;