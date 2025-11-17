import { ArrowUp, Heart } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="relative bg-card border-t border-border p-7 flex items-center">
            <div className="w-10"></div>

            <p className="flex-1 text-center flex items-center justify-center gap-1">
                Made with <Heart /> by Marius using ReactJS/TailwindCSS
            </p>

            <a
                href="#startseite"
                className="w-10 flex justify-end p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={25} />
            </a>
        </footer>
    );
};