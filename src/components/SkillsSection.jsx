import { useState } from "react";
import { ClassNameCN } from "@/lib/utils.js";
import { ALargeSmall, Box, Brush, ChartArea, Clapperboard, Code, CodeXml, Cog, Cpu, File, FolderSync, Gamepad2, Github, Globe, Grid2x2, Hammer, HardDrive, Rabbit, Usb, Waves } from "lucide-react";

const skills = [
    { name: "HTML/CSS", category: "languages", icon: <CodeXml className="h-10 w-10 text-primary" /> },
    { name: "JavaScript", category: "languages", icon: <File className="h-10 w-10 text-primary" /> },
    { name: "Go", category: "languages", icon: <Rabbit className="h-10 w-10 text-primary" /> },
    { name: "Luau", category: "languages", icon: <Box className="h-10 w-10 text-primary" /> },
    { name: "React", category: "frontend", icon: <Globe className="h-10 w-10 text-primary" /> },
    { name: "Tailwind CSS", category: "frontend", icon: <Waves className="h-10 w-10 text-primary" /> },
    { name: "WordPress", category: "tools", icon: <Hammer className="h-10 w-10 text-primary" /> },
    { name: "Webflow", category: "tools", icon: <Hammer className="h-10 w-10 text-primary" /> },
    { name: "Figma", category: "tools", icon: <Brush className="h-10 w-10 text-primary" /> },
    { name: "GitHub", category: "tools", icon: <Github className="h-10 w-10 text-primary" /> },
    { name: "VS Code", category: "tools", icon: <Code className="h-10 w-10 text-primary" /> },
    { name: "WinSCP", category: "tools", icon: <FolderSync className="h-10 w-10 text-primary" /> },
    { name: "Filezilla", category: "tools", icon: <FolderSync className="h-10 w-10 text-primary" /> },
    { name: "CPU-Z", category: "tools", icon: <Cpu className="h-10 w-10 text-primary" /> },
    { name: "HWMonitor", category: "tools", icon: <ChartArea className="h-10 w-10 text-primary" /> },
    { name: "Rufus", category: "tools", icon: <Usb className="h-10 w-10 text-primary" /> },
    { name: "TreeSize", category: "tools", icon: <HardDrive className="h-10 w-10 text-primary" /> },
    { name: "Windows", category: "OS", icon: <Cog className="h-10 w-10 text-primary" /> },
    { name: "Debian", category: "OS", icon: <Cog className="h-10 w-10 text-primary" /> },
    { name: "Proxmox", category: "OS", icon: <Cog className="h-10 w-10 text-primary" /> },
    { name: "Android", category: "OS", icon: <Cog className="h-10 w-10 text-primary" /> },
    { name: "IOS", category: "OS", icon: <Cog className="h-10 w-10 text-primary" /> },
    { name: "CapCut", category: "anderes", icon: <Clapperboard className="h-10 w-10 text-primary" /> },
    { name: "Obsidian", category: "anderes", icon: <ALargeSmall className="h-10 w-10 text-primary" /> },
    { name: "Godot Engine", category: "anderes", icon: <Gamepad2 className="h-10 w-10 text-primary" /> },
    { name: "Unreal Engine 5", category: "anderes", icon: <Gamepad2 className="h-10 w-10 text-primary" /> },
]
const categories = ["alle", "languages", "frontend", "tools", "OS", "anderes"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("alle");

    const filteredSkills = skills.filter((skill) => activeCategory === "alle" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
                    Skills & <span className="text-primary"> Technologien</span>
                </h2>

                <p className="text-muted-foreground mb-12">
                    Mit den folgenden Technologien habe ich mich beschäftigt, mal mehr, mal weniger intensiv.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)} className={ClassNameCN("px-5 py-2 rounded-full transition-colors",
                            "duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div>
                                {skill.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}