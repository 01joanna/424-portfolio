
export default function Header() {

    
    return (
        <nav className="w-full sticky">
            <ul className="flex gap-14 items-center justify-around text-lg uppercase bg-transparent font-neuethin absolute top-0 w-full">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#pluma">Pluma</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}