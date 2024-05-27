
export default function Header() {

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <nav className="w-full sticky z-30 top-0 ">
            <ul className="flex gap-14 text-yellow-200 items-center justify-around text-2xl uppercase bg-transparent font-neuethin absolute top-0 w-full">
            <li><a href="#home" onClick={scrollToSection}>Home</a></li>
                <li><a href="#about" onClick={scrollToSection}>About</a></li>
                <li><a href="#projects" onClick={scrollToSection}>Projects</a></li>
                <li><a href="#pluma" onClick={scrollToSection}>Pluma</a></li>
                <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
            </ul>
        </nav>
    )
}