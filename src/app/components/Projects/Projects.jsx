export default function Projects() {

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Project 1 description',
            image: 'image1',
            alt: 'Project 1'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Project 2 description',
            image: 'image2',
            alt: 'Project 2'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Project 3 description',
            image: 'image3',
            alt: 'Project 3'
        },

    ]
    return (
        <section id="projects" className="w-screen h-screen mb-20 bg-transparent flex flex-col items-center justify-center z-10">
            <span className="pre-content text-black mt-20">( SELECTED WORKS )</span>
            <div id="projects-container" className=" w-full flex flex-col items-center justify-center">
                {projects.map(project => (
                    <div key={project.id} className="border-2 border-gray-500 rounded-md p-4 m-4">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p>{project.description}</p>
                        {/* Aquí podrías agregar la imagen del proyecto si lo deseas */}
                    </div>
                ))}
            </div>
        </section>
    )
}