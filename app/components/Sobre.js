function Sobre({ darkMode, ref }) {
    return ( 
        <div id="sobre" ref={ref} className={`right-20 ${darkMode ? 'text-slate-400' : 'text-indigo-950'} lg:w-1/2 mx-10 lg:py-20 text-lg tracking-wide`}>
            <h2 className={`${darkMode ? 'text-slate-200' : 'text-sky-900'} uppercase tracking-wider my-6`}>Sobre</h2>
            <p className="mb-4 ">Olá! Meu nome é Lorenzo Acquesta, tenho 18 anos e sou apaixonado por tecnologia. Concluí o ensino médio técnico em Tecnologia da Informação e atualmente estou cursando <span className="text-teal-400 font-bold">Engenharia de Software</span>.</p>
            <p className="mb-4 ">Estou sempre em busca de novos aprendizados e, ao longo da minha jornada, adquiri experiência em diversas linguagens de programação, como <span className="text-teal-400 font-bold">JavaScript, TypeScript, Angular, Java e Python</span>.</p>
            <p className="mb-4 ">Além disso, possuo conhecimentos em design, utilizando ferramentas como <span className="text-teal-400 font-bold">Figma, Photoshop e Canva</span>. Também tenho experiência com bancos de dados <span className="text-teal-400 font-bold">SQL e NoSQL</span>.</p>
            <p className="mb-4 ">Com essas habilidades, desenvolvo sites e aplicativos personalizados do zero, incluindo funcionalidades como login e cadastro de usuários, sempre focando na melhor experiência para o usuário.</p>            
        </div>
     );
}

export default Sobre;