import React from 'react'
import main from "../../../../public/photo08_15.jpg"
import espiral from "../../../../public/espiral.png"
import { GoDotFill } from "react-icons/go";
import Image from 'next/image'

export default function SecondMain() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    
    return (
        <div className="sticky">
            <Image 
            src={main}
            alt='main'
            />
            {/* <Image 
            src={espiral}
            alt='espiral' 
            width={400}
            className='absolute top-[15rem] left-[30rem]'
            /> */}
            <h1 className="font-bapalopa text-[90px] absolute top-44 left-10 text-yellow-200 leading-none w-20">Welcome to my port folio</h1>
            <div className=''>
                    <ul>
                        <li className='nav-main top-[20rem] left-[53rem] rotate-90' onClick={() => scrollToSection('contact')}> <GoDotFill className='main-dots'/>contact</li>
                        <li className='nav-main top-44 left-[53rem]' onClick={() => scrollToSection('pluma')}><GoDotFill className='main-dots'/>pluma</li>
                        <li className='nav-main top-20 left-[30rem] rotate-90' onClick={() => scrollToSection('projects')}><GoDotFill className='main-dots'/>projects</li>
                        <li className='nav-main top-[5rem] right-10'><GoDotFill className='main-dots'/>about</li>
                    </ul>
                </div>
        </div>
    );
}