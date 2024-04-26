export default function Header() {
    return (
        <nav className="w-full absolute top-8 left-6">
            <ul className="flex flex-col text-sm uppercase bg-transparent font-neuethin">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#pluma">Pluma</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}