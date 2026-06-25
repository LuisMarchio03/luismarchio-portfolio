import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { roadmaps, type Roadmap, type RoadmapItem } from "../data/roadmaps"

const reveal = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
}

const Goals = ({ goals }: { goals: string[] }) => (
    <div className="flex flex-wrap gap-2 mt-3">
        {goals.map((g) => (
            <span
                key={g}
                className="px-3 py-1 bg-indigo-600/15 border border-indigo-500/40 rounded-full text-xs font-medium text-indigo-200"
            >
                {g}
            </span>
        ))}
    </div>
)

const ItemCard = ({ item }: { item: RoadmapItem }) => (
    <div className="bg-[#0a0a1a]/60 border border-indigo-900/30 rounded-xl p-5 hover:border-indigo-600/50 transition-colors">
        <h4 className="text-base md:text-lg font-semibold text-white mb-1">{item.label}</h4>
        {item.detail && <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>}
        {item.goals && item.goals.length > 0 && <Goals goals={item.goals} />}
    </div>
)

const Timeline = ({ roadmap }: { roadmap: Roadmap }) => (
    <div>
        {typeof roadmap.progress === "number" && (
            <div className="mb-8 max-w-xl">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progresso do ano</span>
                    <span>{roadmap.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-indigo-950/60 overflow-hidden">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${roadmap.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                    />
                </div>
            </div>
        )}

        <div className="relative">
            <span
                aria-hidden
                className="absolute left-[14px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent"
            />
            <div className="space-y-6">
                {roadmap.items.map((item, idx) => (
                    <motion.div
                        key={item.label}
                        className="relative pl-12"
                        {...reveal}
                        transition={{ duration: 0.45, delay: idx * 0.06 }}
                    >
                        <span className="absolute left-[8px] top-2 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-[#050816]" />
                        <ItemCard item={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
)

const Steps = ({ roadmap }: { roadmap: Roadmap }) => (
    <div className="space-y-6">
        {roadmap.items.map((item, idx) => (
            <motion.div
                key={item.label}
                className="relative pl-16"
                {...reveal}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
                <span className="absolute left-0 top-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    {idx + 1}
                </span>
                {idx < roadmap.items.length - 1 && (
                    <span
                        aria-hidden
                        className="absolute left-[22px] top-12 -bottom-6 w-0.5 bg-indigo-500/30"
                    />
                )}
                <ItemCard item={item} />
            </motion.div>
        ))}
    </div>
)

const Tracks = ({ roadmap }: { roadmap: Roadmap }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {roadmap.items.map((item, idx) => (
            <motion.div
                key={item.label}
                {...reveal}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-[#0a0a1a]/60 border border-indigo-900/30 rounded-xl p-5 hover:border-indigo-600/50 transition-colors"
            >
                <h4 className="text-lg font-semibold text-white">{item.label}</h4>
                {item.detail && (
                    <p className="text-indigo-400 text-xs font-medium mb-3 uppercase tracking-wider">
                        {item.detail}
                    </p>
                )}
                {item.goals && (
                    <ul className="space-y-2">
                        {item.goals.map((g) => (
                            <li key={g} className="flex gap-2 text-sm text-gray-400">
                                <span className="text-indigo-500 mt-0.5">▸</span>
                                <span>{g}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        ))}
    </div>
)

export const RoadmapsSection = () => {
    const [activeId, setActiveId] = useState(roadmaps[0]?.id)
    const active = roadmaps.find((r) => r.id === activeId) ?? roadmaps[0]

    if (!active) return null

    return (
        <section className="mb-20 md:mb-32" id="roadmaps">
            <div className="text-center mb-10 md:mb-12">
                <p className="text-indigo-400 font-medium mb-2">EM CONSTANTE EVOLUÇÃO</p>
                <h2 className="text-3xl md:text-4xl font-bold">Roadmaps · O que estou estudando</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {roadmaps.map((r) => (
                    <button
                        key={r.id}
                        onClick={() => setActiveId(r.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${activeId === r.id
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                            : "bg-transparent border border-indigo-900/50 text-gray-300 hover:bg-indigo-900/40"
                            }`}
                    >
                        {r.title}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
                        {active.subtitle}
                    </p>
                    {active.kind === "timeline" && <Timeline roadmap={active} />}
                    {active.kind === "steps" && <Steps roadmap={active} />}
                    {active.kind === "tracks" && <Tracks roadmap={active} />}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}
