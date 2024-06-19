export default function Nav({image}){
    return(
        <header className="flex justify-center w-full fixed top-0 z-50 bg-transparent backdrop-blur-lg">
            <div className="flex flex-col justify-between items-center w-11/12 max-w-7xl md:flex-row">
                <div className="flex items-center w-full md:w-28 justify-between">
                    <a>
                        <img className="m-3 h-20" src={`${image}`} alt="Sunset Roofing logo’s"/>
                    </a>
                    <div className="md:hidden">
                        <button>
                        <svg
                            className="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2} // Aquí usamos { } para una expresión JavaScript, asegúrate de que evalúe correctamente.
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                            hola
                        </button>
                    </div>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex justify-between flex-col ml-10 md:flex-row">
                        <li className="px-3 py-1"><a className="text-xl text-white font-semibold" href="#">Home</a></li>
                        <li className="px-3 py-1"><a className="text-xl text-white font-semibold" href="#services">Services</a></li>
                        <li className="px-3 py-1"><a className="text-xl text-white font-semibold" href="#project">Project</a></li>
                        <li className="px-3 py-1"><a className="text-xl text-white font-semibold" href="#about-us">About us</a></li>
                        <li className="px-3 py-1"><a className="text-xl text-white font-semibold" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}