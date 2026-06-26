import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Button } from "./ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const NAV_ITEMS: { value: string; label: string }[] = [
    { value: "sobre", label: "Sobre" },
    { value: "projetos", label: "Projetos" },
    { value: "habilidades", label: "Habilidades" },
    { value: "experiencia", label: "Experiência" },
    { value: "educacao", label: "Educação" },
    // ⛔ Item do TCC removido temporariamente — arrumar manualmente depois.
    // { value: "artigos", label: "TCC" },
    { value: "roadmaps", label: "Roadmaps" },
    { value: "blog", label: "Blog" },
    { value: "contato", label: "Contato" },
]

export const Navigation = ({
    activeTab,
    setActiveTab
}: {
    activeTab: string,
    setActiveTab: (tab: string) => void
}) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleNavClick = (sectionId: string) => {
        setActiveTab(sectionId);
        setMobileOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        // Scroll-spy via faixa estreita perto do topo da viewport.
        // Usar threshold 0.5 falhava no mobile: seções mais altas que a tela
        // nunca atingem 50% de visibilidade e o destaque "travava".
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [setActiveTab]);

    return (
        <nav className="sticky top-0 bg-[#0a0a1a]/80 backdrop-blur-lg z-50 border-b border-indigo-900/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <button
                        onClick={() => handleNavClick("sobre")}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer"
                    >
                        LGMB
                    </button>

                    {/* Desktop tabs (lg+) */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden lg:block w-auto">
                        <TabsList className="flex bg-transparent border border-indigo-900/50 rounded-full px-1 py-1">
                            {NAV_ITEMS.map((item) => (
                                <TabsTrigger
                                    key={item.value}
                                    onClick={() => handleNavClick(item.value)}
                                    value={item.value}
                                    className="text-sm font-medium rounded-full px-4 py-1.5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-colors"
                                >
                                    {item.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>

                    {/* Desktop contact button (lg+) */}
                    <Button
                        onClick={() => handleNavClick('contato')}
                        className="hidden lg:inline-flex !rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm">
                        <FontAwesomeIcon icon={faEnvelope} /> Contato
                    </Button>

                    {/* Mobile hamburger (< lg) */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Abrir menu"
                        aria-expanded={mobileOpen}
                        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-indigo-900/50 text-indigo-300 hover:bg-indigo-900/40 transition-colors"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer panel */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-indigo-900/30 bg-[#0a0a1a]/95 backdrop-blur-lg">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => handleNavClick(item.value)}
                                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeTab === item.value
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-300 hover:bg-indigo-900/40"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
