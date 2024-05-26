'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import About from '../About/About';



export default function Main() {
    const imagesApi = [
        { id: 1, src: image1, alt: 'johanna cuevas' },
        { id: 2, src: image2, alt: 'johanna cuevas' },
        { id: 3, src: image3, alt: 'johanna cuevas' },
        { id: 4, src: image4, alt: 'johanna cuevas' },
        { id: 5, src: image5, alt: 'johanna cuevas' },
        { id: 6, src: image6, alt: 'johanna cuevas' },
        { id: 7, src: image7, alt: 'johanna cuevas' },
        { id: 8, src: image8, alt: 'johanna cuevas' },
        { id: 9, src: image9, alt: 'johanna cuevas' },
        { id: 10, src: image10, alt: 'johanna cuevas' },
        { id: 11, src: image11, alt: 'johanna cuevas' },
        { id: 12, src: image12, alt: 'johanna cuevas' },
        { id: 13, src: image13, alt: 'johanna cuevas' },
    ];
    const [isModal, setIsModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagePosition, setImagePosition] = useState({ bottom: 100, left: 100 });

    const openModal = () => {
        setIsModal(!isModal);
    };

    const closeModal = () => {
        setIsModal(false);
    };


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const getRandomImageIndex = () => {
        return Math.floor(Math.random() * imagesApi.length);
    };

    const getRandomPosition = () => {
        const maxWidth = window.innerWidth - 900;
        const maxHeight = window.innerHeight - 400;
        const randomBottom = Math.floor(Math.random() * maxHeight);
        const randomLeft = Math.floor(Math.random() * maxWidth);

        return { bottom: randomBottom, left: randomLeft };
    };

    const changeImage = () => {
        const newIndex = getRandomImageIndex();
        setCurrentImageIndex(newIndex);
        setImagePosition(getRandomPosition());
    };

    useEffect(() => {
        setImagePosition({ bottom: 2, left: 300 });
        changeImage();
    }, []);

    return (
        <section id="home" className='bg-[#E3D7EA] text-[#FE100F] w-screen h-screen flex items-center justify-center relative z-10' onClick={changeImage}>
            <div className='flex flex-col gap-3 font-bdsupper text-2xl ml-64 mt-72 right-44 w-[600px] items-center justify-center'>
                <h1 className="text-[45px] tracking-wider">johanna cuevas</h1>
                <p className="text-justify font-neuethin leading-none tracking-wider"> is a recently gratuated (full-stack) web developer, former book editor, based in Barcelona. She thrives on the intersection of creativity and functionality in web development. Her aim is to collaborate on innovative projects, make useful websites and build creative visual experiences through her work.</p>
            </div>

            <div id='pictures' className='absolute z-20 w-[900px] items-center justify-center' style={{ bottom: imagePosition.bottom, left: imagePosition.left, paddingLeft: '250px', paddingBottom: '300px', marginTop: '900px' }}>
    <Image id='image-changes'
        src={imagesApi[currentImageIndex].src}
        alt={imagesApi[currentImageIndex].alt}
        width={200}
        height={200}
        className='border-2 border-[#FE100F]'
    />
</div>

            <div>
                <hr className='border-3 w-[7rem] h-1 border-red-600 absolute bottom-[8rem] right-[15rem] rotate-[20deg]'/>
                <hr className='border-3 w-[10rem] h-1 border-red-600 absolute top-[23rem] left-[37rem] rotate-[40deg]'/>
                <hr className='border-3 w-[15rem] h-1 border-red-600 absolute bottom-44 left-[17rem] -rotate-[10deg]'/>
                <hr className='border-3 w-[8rem] h-1 border-red-600 absolute bottom-[22rem] right-[20rem] -rotate-[20deg]'/>
                <p className='font-neuethin text-sm w-[9rem] text-center absolute top-64 right-44'>( CLICK TO SEE MORE PICTURES! )</p>

                <div>
                    <ul>
                        <li className='nav-main bottom-[8rem] left-[14rem]' onClick={() => scrollToSection('contact')}>contact</li>
                        <li className='nav-main bottom-[27.5rem] left-[36rem]' onClick={() => scrollToSection('pluma')}>pluma</li>
                        <li className='nav-main bottom-[5rem] right-[12rem]' onClick={() => scrollToSection('projects')}>projects</li>
                        <li className='nav-main bottom-[24rem] right-[18rem]' onClick={openModal}>about</li>
                    </ul>
                </div>
            </div>

            {isModal && (

                <div className={`modal absolute top-2 left-0 w-[300px] ${isModal ? 'open' : ''}`}>
                    <button className="close-modal" onClick={closeModal}>X</button>
                    <About />
                </div>
            )}
        </section>
    )
}
