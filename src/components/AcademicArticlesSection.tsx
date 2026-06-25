import { Card, CardContent } from "./ui/card"
import { tcc } from "../data/tcc"

export const AcademicArticlesSection = () => {
    return (
        <section className="mb-20 md:mb-32" id="artigos">
            <div className="text-center mb-12 md:mb-16">
                <p className="text-indigo-400 font-medium mb-2">
                    PRODUÇÃO ACADÊMICA
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                    Trabalho de Conclusão de Curso
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <Card className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden shadow-xl">
                    <CardContent className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/50 rounded-full text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                                {tcc.status}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white leading-snug">
                            {tcc.title}
                        </h3>
                        <p className="text-indigo-400 mb-5 text-sm md:text-base">
                            {tcc.theme}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {tcc.areas.map((area) => (
                                <span
                                    key={area}
                                    className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                            {tcc.abstract}
                        </p>

                        <div className="border-t border-indigo-900/30 pt-5">
                            <h4 className="text-sm font-semibold mb-3 text-white">
                                Stack & ferramentas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {tcc.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-purple-900/30 border border-purple-800/40 rounded-full text-xs font-medium text-purple-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {tcc.related && (
                                <a
                                    href={tcc.related.href}
                                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                                >
                                    {tcc.related.label} →
                                </a>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
