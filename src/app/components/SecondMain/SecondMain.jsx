import React from 'react'
import main from "../../../../public/main.jpg"
import { GoDotFill } from "react-icons/go";
import Image from 'next/image'

export default function SecondMain() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    
    return (
        <div className="sticky m-3 bg-transparent h-full">
            <Image 
            src={main}
            alt='Murcia picture to main website'/>
            <h1 className="font-bapalopa text-[200px] absolute top-[25rem] left-10 text-yellow-300 leading-[140px] w-20 bg-transparent">Johanna cuevas*</h1>
            <div className=''>
                    <ul>
                        <li className='nav-main top-[20rem] left-[53rem] rotate-90' onClick={() => scrollToSection('contact')}> <GoDotFill className='main-dots'/>contact</li>
                        <li className='nav-main top-44 left-[53rem]' onClick={() => scrollToSection('pluma')}><GoDotFill className='main-dots'/>pluma</li>
                        <li className='nav-main top-20 left-[30rem] rotate-90' onClick={() => scrollToSection('projects')}><GoDotFill className='main-dots'/>projects</li>
                        <li className='nav-main top-[5rem] right-10' onClick={() => scrollToSection('about')}><GoDotFill className='main-dots'/>about</li>
                    </ul>
                </div>
        </div>
    );
}
