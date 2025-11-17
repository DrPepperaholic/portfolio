import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 0,
        title: <>Mein Portfolio <br /> (Persönliches Projekt)</>,
        description: "Dieses Portfolio ist mein erstes Webentwicklungs Projekt! (Mit Hilfe von Tutorials!)",
        image: "/projects/project0.png",
        tags: ["React", "Tailwind"],
        demoUrl: "/projects/project0.png",
    },
    {
        id: 1,
        title: <>Visitenkarte Webseite <br /> (PYRIT)</>,
        description: "Ich habe diverse Designideen für PYRIT in meinem Praktikum entworfen. Eins dieser Designs war dieses Visitenkarten Design.",
        image: "/projects/project1.png",
        tags: ["Figma", "HTML", "CSS"],
        demoUrl: "/projects/project1.png",
    },
    {
        id: 2,
        title: <>Bento-Box Webseite <br /> (PYRIT)</>,
        description: "Ich habe diverse Designideen für PYRIT in meinem Praktikum entworfen. Eins dieser Designs war dieses Bento-Box Design welches zum Praktikumszeitpunkt im Trend war.",
        image: "/projects/project2.png",
        tags: ["Figma"],
        demoUrl: "/projects/project2.png",
    },
    {
        id: 3,
        title: <>Komplette Webseite <br /> (Pfötchen Chance e.V.)</>,
        description: "Diese Webseite habe ich vor meiner Programmierzeit, zu Lernzwecken in Webflow gebaut.",
        image: "/projects/project3.png",
        tags: ["Figma", "Webflow"],
        demoUrl: "/projects/project3_full.png",
    },
    {
        id: 4,
        title: <>Ergebnisbildschirm UI<br /> (Persönliches Projekt)</>,
        description: "Dieses UI habe ich für das Ende einer Runde in meinem eigenen Spiel designed.",
        image: "/projects/project4.png",
        tags: ["Figma"],
        demoUrl: "/projects/project4.png",
    },
    {
        id: 5,
        title: <>Fisch Shop UI<br /> (Commision)</>,
        description: "Dieses Shop-UI habe ich als Commision für eine andere Person designed.",
        image: "/projects/project5.png",
        tags: ["Figma"],
        demoUrl: "/projects/project5.png",
    },
    {
        id: 6,
        title: <>Homepage Hero<br /> (Persönliches Projekt)</>,
        description: "Diese Webseite habe ich als Prototyp für mein eigenes Hosting-Projekt designed.",
        image: "/projects/project6.png",
        tags: ["Figma"],
        demoUrl: "/projects/project6.png",
    },
    {
        id: 7,
        title: <>Homepage Preise<br /> (Persönliches Projekt)</>,
        description: "Diese Webseite habe ich als Prototyp für mein eigenes Hosting-Projekt designed.",
        image: "/projects/project7.png",
        tags: ["Figma"],
        demoUrl: "/projects/project7.png",
    },
]

export const ProjectsSection = () => {
    return <section id="projekte" className="py24 px-4 relative">
        <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> Meine <span className="text-primary"> Projekte</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-left"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4 text-left">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}