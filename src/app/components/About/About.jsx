import React from 'react'

export default function About() {
    return (
        <section id='about' className='font-neuethin flex flex-col gap-14 w-[500px] bg-white py-4 px-2 rounded-2xl'>
            <div className='flex gap-10 tracking-wide' >
                <h2 className='font-bold uppercase font-neuemedium'>Skills</h2>
                <div className='flex flex-col gap-5'>
                    <p>HTML, CSS, JAVASCRIPT, TAILWIND, BOOTSTRAP, REACT, NEXT.JS, VUE</p>
                    <p>PHP, LARAVEL, SQL-NOSQL DATABASE, MYSQL, TDD, CYPRESS, VITEST, JEST, RESTful APIs</p>
                    <p>UX/UI DESIGN AND ACCESSIBILITY, ATOMIC DESIGN VARIETY, AGILE METHODOLOGIES, KANBAN and SCRUM METHODOLOGIES, SOLID CLEAN CODE, POSTMAN</p>
                    <p>FIGMA, PHOTOSHOP ILLUSTRATOR, INDESIGN, EXCEL, ANALOG AND DIGITAL PHOTOGRAPHY</p>
                </div>
            </div>
            <div className='flex gap-7'>
                <h2 className='font-bold uppercase font-neuemedium
                '>Academics</h2>
                <div className='flex flex-col gap-5'>
                    <p><span className='font-neuemedium'>OCT 23-APR 24: </span> FACTORIA F5 as a full-stack developer student</p>
                    <p><span className='font-neuemedium'>FEB 24-MAY 24: </span> CODEOP as a front-end developer</p>
                </div>
            </div>
        </section>
    )
}
