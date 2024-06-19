'use client'
import Image from "next/image";
import { useState } from "react";
export default function Nav({image}){
    const [navbar, setNavBar] = useState(false);
    return(
        <header className="flex justify-center w-full fixed top-0 z-50 bg-transparent backdrop-blur-lg">
            <div className="flex flex-col justify-between md:items-center w-11/12 max-w-7xl md:flex-row">
                <div className="flex items-center w-full md:w-28 justify-between">
                    <a>
                        <Image
                        className="m-3 w-24 h-20"
                        src={image}
                        alt="Sunset Roofing logo"
                        width={1000}
                        height={1000}
                        />
                    </a>
                    <div className="md:hidden">
                        <button
                        onClick={()=>setNavBar(!navbar)}>
                            {navbar ? (
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/icon_close.svg"
                                    alt="option"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            ): 
                                (
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/icon_hamburger.svg"
                                    alt="option"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                )}                        
                        </button>
                    </div>
                </div>
                <nav className={`${navbar ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col pb-3 md:ml-10 md:justify-between md:flex-row">
                        <li className="px-3 my-1 py-1"><a className="block w-full text-white text-lg font-semibold md:text-xl" href="#">Home</a></li>
                        <li className="px-3 my-1 py-1"><a className="block w-full text-white text-lg font-semibold md:text-xl" href="#services">Services</a></li>
                        <li className="px-3 my-1 py-1"><a className="block w-full text-white text-lg font-semibold md:text-xl" href="#project">Project</a></li>
                        <li className="px-3 my-1 py-1"><a className="block w-full text-white text-lg font-semibold md:text-xl" href="#about-us">About us</a></li>
                        <li className="px-3 my-1 py-1"><a className="block w-full text-white text-lg font-semibold md:text-xl" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}