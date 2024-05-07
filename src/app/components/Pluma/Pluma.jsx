'use client'
import Image from "next/image"
import image from "../../../../public/pluma/pluma9.png"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pluma() {

    // useEffect(() => {
    //     const sections = gsap.utils.toArray(".panel");
    
    //     gsap.to(sections, {
    //       xPercent: -100 * (sections.length - 1),
    //         ease: "none",

    //         scrollTrigger: {
    //         trigger: ".container",
    //         pin: true,
    //         invalidateOnRefresh: true,
    //         anticipatePin: 1,
    //         scrub: 1.23,
    //         end: () => "+=" + document.querySelector(".container").offsetWidth
    //         }
    //     });
    //     }, []);

    return (
        <section id="pluma" className="bg-gray-200 w-screen h-screen flex flex-col">
            <span className="pre-content text-black mt-20">( Pluma )</span>
                <section id="text-container" className="flex flex-col pl-20 relative panel">
                    <h2 className="text-[80px] font-editorialUltraLightItalic text-black uppercase tracking-wider w-20 leading-none">Introducing Pluma</h2>

                    <div>
                    <p className="text-black text-[19px] w-[18rem] text-justify font-neuethin"><i>Pluma</i> is an amateur and multilingual literature fanzine project that aims to promote the work of young artists. Pluma has published (9) fanzines between 2016 and 2022, each showcasing a diverse array of short stories, essays, and artwork.</p>
                    </div>

                    <div>
                    <p className="text-black text-[19px] w-[25rem] text-justify font-neuethin absolute top-[17rem] left-[26rem]">Founded with the purpose of fostering a sense of community around literature, Pluma seeks to connect with local talent and readers alike. Through open submissions, the editorial team carefully curates each publication, selecting works that captivate, inspire, and challenge. From over 500 submissions received, Pluma crafts a finely curated collection of 10 to 15 short stories, weaving together narratives that reflect the richness of contemporary storytelling.</p>
                    </div>

                    <div>
                    <p className="text-black text-[19px] w-[24rem] text-justify font-neuethin absolute top-[3rem] left-[45rem]">Pluma operates as a collaborative endeavor, driven by the passion and dedication of its four-member team. From the initial stages of editing and design to the final steps of printing and distribution, every aspect of Pluma's production process is made by us.</p>
                    </div>
                    
                </section>
        </section>
    )
}