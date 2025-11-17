import { Code, Brush, Cpu } from "lucide-react"

export const AboutSection = () => {
    return <section id="ubermich" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Über <span className="text-primary"> Mich</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Webentwickler & Tech Guy
                    </h3>

                    <p className="text-muted-foreground">
                        Ich lerne zurzeit Webentwicklung und experimentiere mit Hardware und Servern. Beides macht mir großen Spaß! Die UIs, die ich benötige, designe ich in Figma! :)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="mailto:mail@mwerther.dev" className="cosmic-button">
                            Schreibe mir eine E-Mail!
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Webentwicklung </h4>
                                <p className="text-muted-foreground">
                                    Ich bin noch ein Anfänger, aber ich lerne gerade React und Tailwind!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Brush className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Ich habe den Großteil meiner produktiven Zeit in Figma investiert. Ich habe einige Webseiten und Game-UIs designed! Ich würde sagen, dass ich mich ganz gut auskenne.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cpu className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Hardware</h4>
                                <p className="text-muted-foreground">
                                    Ich hatte bisher nur in verschiedenen Praktika mit Hardware zu tun, aber das hat mir auch viel Freude bereitet. Momentan lerne ich über Server, baue mir einen eigenen und experimentiere auch mit Raspberry Pis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}