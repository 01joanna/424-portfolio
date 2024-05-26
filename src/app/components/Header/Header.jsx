'use client'
import React, { useEffect, useState } from 'react';

export default function Header() {
    const [textColor, setTextColor] = useState('text-white');

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let newTextColor = 'text-white';
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    const backgroundColor = window.getComputedStyle(section).backgroundColor;
                    if (backgroundColor === 'rgb(255, 255, 255)') {
                        newTextColor = 'text-black';
                    } else {
                        newTextColor = 'text-white';
                    }
                }
            });
            setTextColor(newTextColor);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="w-full sticky z-30 top-0">
            <ul className={`flex gap-14 items-center justify-around text-2xl uppercase bg-transparent font-neuethin absolute top-0 w-full ${textColor}`}>
                <li><a href="#home" onClick={scrollToSection}>Home</a></li>
                <li><a href="#about" onClick={scrollToSection}>About</a></li>
                <li><a href="#projects" onClick={scrollToSection}>Projects</a></li>
                <li><a href="#pluma" onClick={scrollToSection}>Pluma</a></li>
                <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
            </ul>
        </nav>
    );
}
