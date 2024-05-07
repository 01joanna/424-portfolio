'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import About from '../About/About';
import image1 from '../../../../public/joanna/image-2.jpeg';
import image2 from '../../../../public/joanna/image3.jpeg';
import image3 from '../../../../public/joanna/image4.jpeg';
import image4 from '../../../../public/joanna/image5.jpeg';
import image5 from '../../../../public/joanna/image6.jpeg';
import image6 from '../../../../public/joanna/image7.jpeg';
import image7 from '../../../../public/joanna/image8.jpeg';
import image8 from '../../../../public/joanna/image9.jpeg';
import image9 from '../../../../public/joanna/image10.jpeg';
import image10 from '../../../../public/joanna/image11.jpeg';
import image11 from '../../../../public/joanna/image12.jpeg';
import image12 from '../../../../public/joanna/image13.jpeg';
import image13 from '../../../../public/joanna/image14.jpeg';


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
    const [imagePosition, setImagePosition] = useState({ bottom: 300, left: 300 });

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
        setImagePosition({ bottom: 100, left: 300 });
        changeImage();
    }, []);

    return (
        <section className='bg-[#E3D7EA] text-[#FE100F] w-screen h-screen flex items-center justify-center relative' onClick={changeImage}>
            <div className='flex flex-col gap-1 font-bdsupper text-lg ml-64 mt-72 right-44 w-[500px] items-center justify-center'>
                <h1 className="text-3xl tracking-wider">johanna cuevas</h1>
                <p className="text-center font-neuethin leading-none tracking-wider">is a recently gratuated (full-stack) web developer, former book editor, based in Barcelona. She thrives on the intersection of creativity and functionality in web development. Her aim is to collaborate on innovative projects, make useful websites and build creative visual experiences through her work.</p>
            </div>

            <div id='pictures' className='absolute z-20 w-[700px]' style={{ bottom: imagePosition.bottom, left: imagePosition.left, paddingLeft: '250px', paddingBottom: '300px', marginTop: '900px' }}>
    <Image id='image-changes'
        src={imagesApi[currentImageIndex].src}
        alt={imagesApi[currentImageIndex].alt}
        width={200}
        height={200}
    />
</div>

            <div>
                <hr className='border-3 w-[6rem] h-1 border-red-600 absolute bottom-[9rem] right-[15rem] rotate-[20deg]'/>
                <hr className='border-3 w-[10rem] h-1 border-red-600 absolute top-[25rem] left-[37rem] rotate-[40deg]'/>
                <hr className='border-3 w-[15rem] h-1 border-red-600 absolute bottom-44 left-[20rem] -rotate-[10deg]'/>
                <hr className='border-3 w-[8rem] h-1 border-red-600 absolute bottom-[20rem] right-[20rem] -rotate-[20deg]'/>
                <p className='font-neuethin text-xs w-32 text-center absolute top-64 right-44'>( CLICK TO SEE MORE PICTURES! )</p>

                <div>
                    <ul>
                        <li className='nav-main bottom-[8rem] left-[17rem]' onClick={() => scrollToSection('contact')}>contact</li>
                        <li className='nav-main bottom-[25.5rem] left-[36rem]' onClick={() => scrollToSection('pluma')}>pluma</li>
                        <li className='nav-main bottom-[6rem] right-[12rem]' onClick={() => scrollToSection('projects')}>projects</li>
                        <li className='nav-main bottom-[22rem] right-[18rem]' onClick={openModal}>about</li>
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
