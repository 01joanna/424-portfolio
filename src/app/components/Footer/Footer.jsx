import Button from "../Button/Button"

export default function Footer() {
    return (
        <section id="contact" className="w-screen h-[90%] bg-black p-10 text-white font-neuethin flex flex-col gap-10 justify-center items-center z-10">
            <p className="pre-content">( Contact )</p>
            <h1 className="font-bapalopa text-[70px] leading-none text-center">Think we can<br/><i>CREATE SOMETHING</i><br/>together?</h1>

            <div className="flex gap-44 items-center justify-center"> 
                <div className="flex flex-col gap-4">
                    <p>(C)</p>

                    <div className="text-sm">
                        <p>Barcelona, Spain</p>
                        <p>joa.cuevas9@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p>(S)</p>

                    <div className="text-sm">
                        <Button to={"https://www.linkedin.com/in/johanna-cuevas-5b7983299/"} text={"Linkedin"}/>
                        <Button to={"https://github.com/01joanna"} text={"Github"}/>
                        <Button to={"https://instagram.com/747joanna/"} text={"Instagram"}/>
                        <Button to={"https://plumafanzine.bigcartel.com/"} text={"Pluma's Bigcartel"}/>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p>(N)</p>

                    <div className="text-sm">
                        <p>About</p>
                        <p>Projects</p>
                        <p>Pluma</p>
                    </div>
                </div>
            </div>
            <p className="mt-10">SCROLL BACK TO TOP  ⭡</p>
        </section>
    )
}