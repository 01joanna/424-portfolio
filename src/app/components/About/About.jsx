'use client'
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import BeforeCoding from '../BeforeCoding/BeforeCoding';

export default function About() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: null });

    const handleModal = (title, content) => {
        setModalContent({ title, content });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id='about' className='bg-white font-neuethin my-20 flex flex-col gap-20'>
            <h1 className='text-[90px] leading-none tracking-wide mx-20'>
                Hello! I am <span className='johanna underline decoration-[7px] underline-offset-[7px]'>Johanna</span>, and you have found yourself inside my portfolio, welcome! I am a recently graduated web developer based in Barcelona and I love creating functional yet fun and innovative websites.
            </h1>
            <div className='flex justify-evenly text-[60px] w-full'>
                <h4 className='nav-about pr-52' onClick={() => handleModal('Projects', <Projects />)}>Projects</h4>
                <h4 className='nav-about' onClick={() => handleModal('Before Coding', <BeforeCoding />)}>Before Coding</h4>
                <h4 className='nav-about' onClick={() => handleModal('Skills and Studies', <Skills />)}>Skills and Studies</h4>
                <h4 className='nav-about' onClick={() => handleModal('Others', <div>Here is some other detailed information...</div>)}>Others</h4>
            </div>
            <Modal show={showModal} onClose={closeModal} content={modalContent.content} />
        </section>
    );
}

// Most of my selected work has been student-based projects that you can check some of them <s>here</s>, but I am working on my own personal projects that will soon be shown here.
        // <section id='about' className='font-neuethin flex flex-col gap-14 w-[500px] bg-white py-4 px-2 rounded-2xl'>
        //     <div className='flex gap-10 tracking-wide' >
        //         <h2 className='font-bold uppercase font-neuemedium'>Skills</h2>
        //         <div className='flex flex-col gap-5'>
        //             <p>HTML, CSS, JAVASCRIPT, TAILWIND, BOOTSTRAP, REACT, NEXT.JS, VUE</p>
        //             <p>PHP, LARAVEL, SQL-NOSQL DATABASE, PINIA, FIREBASE, MYSQL, TDD, CYPRESS, VITEST, JEST, RESTful APIs</p>
        //             <p>UX/UI DESIGN AND ACCESSIBILITY, ATOMIC DESIGN VARIETY, AGILE METHODOLOGIES, KANBAN and SCRUM METHODOLOGIES, SOLID CLEAN CODE, POSTMAN</p>
        //             <p>FIGMA, PHOTOSHOP ILLUSTRATOR, INDESIGN, EXCEL, ANALOG AND DIGITAL PHOTOGRAPHY</p>
        //         </div>
        //     </div>
        //     <div className='flex gap-7'>
        //         <h2 className='font-bold uppercase font-neuemedium
        //         '>Academics</h2>
        //         <div className='flex flex-col gap-5'>
        //             <p><span className='font-neuemedium'>OCT 23-APR 24: </span> FACTORIA F5 as a full-stack developer student</p>
        //             <p><span className='font-neuemedium'>FEB 24-MAY 24: </span> CODEOP as a front-end developer</p>
        //         </div>
        //     </div>
        // </section>
