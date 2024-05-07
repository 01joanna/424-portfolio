import Button from '../Button/Button';

export default function Main() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className='bg-[#E3D7EA] text-[#FE100F] w-screen h-screen flex items-center justify-center relative'>
            <div className='flex flex-col gap-1 font-bdsupper text-lg ml-64 mt-72 right-44 w-[500px] items-center justify-center'>
                <h1 className="text-3xl tracking-wider">johanna cuevas</h1>
                <p className="text-center font-neuethin leading-none tracking-wider">is a recently gratuated (full-stack) web developer, former book editor, based in Barcelona. She thrives on the intersection of creativity and functionality in web development. Her aim is to collaborate on innovative projects, make useful websites and build creative visual experiences through her work.</p>
            </div>

            <div>
                <hr className='border-3 w-[6rem] h-1 border-red-600 absolute bottom-[9rem] right-[15rem] rotate-[20deg]'/>
                <hr className='border-3 w-[10rem] h-1 border-red-600 absolute top-[25rem] left-[37rem] rotate-[40deg]'/>
                <hr className='border-3 w-[15rem] h-1 border-red-600 absolute bottom-44 left-[20rem] -rotate-[10deg]'/>
                <hr className='border-3 w-[8rem] h-1 border-red-600 absolute bottom-[20rem] right-[20rem] -rotate-[20deg]'/>

                <div>
                    <ul>
                        <li className='nav-main bottom-[8rem] left-[17rem]' onClick={() => scrollToSection('contact')}>contact</li>
                        <li className='nav-main bottom-[25.5rem] left-[36rem]' onClick={() => scrollToSection('pluma')}>pluma</li>
                        <li className='nav-main bottom-[6rem] right-[12rem]' onClick={() => scrollToSection('projects')}>projects</li>
                        <li className='nav-main bottom-[22rem] right-[18rem]' onClick={() => scrollToSection('about')}>about</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
