import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Button } from "./ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

export const Navigation = ({
    activeTab,
    setActiveTab
}: {
    activeTab: string,
    setActiveTab: (tab: string) => void
}) => {
    const handleNavClick = (sectionId: string) => {
        setActiveTab(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [setActiveTab]);

    return (
        <nav className="sticky top-0 bg-[#0a0a1a]/80 backdrop-blur-lg z-50 border-b border-indigo-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">LGMB</span>
                    </div>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                        <TabsList onClick={() => handleNavClick(activeTab)} className="flex bg-transparent border border-indigo-900/50 rounded-full px-1 py-1">
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="sobre" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Sobre</TabsTrigger>
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="projetos" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Projetos</TabsTrigger>
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="habilidades" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Habilidades</TabsTrigger>
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="experiencia" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Experiência</TabsTrigger>
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="educacao" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Educação</TabsTrigger>
                            <TabsTrigger
                                onClick={() => handleNavClick(activeTab)}
                                value="artigos"
                                className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                            >
                                Artigos
                            </TabsTrigger>
                            <TabsTrigger
                                onClick={() => handleNavClick(activeTab)}
                                value="blog"
                                className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                            >
                                Blog
                            </TabsTrigger>
                            <TabsTrigger onClick={() => handleNavClick(activeTab)} value="contato" className="text-sm font-medium rounded-full px-5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Contato</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Button className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">
                        <FontAwesomeIcon icon={faEnvelope} /> Contato
                    </Button>
                </div>
            </div>
        </nav>
    )
}
