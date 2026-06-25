import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faServer, faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { blogPosts, BLOG_URL, type BlogCategory } from "../data/blogPosts"

const CATEGORY_META: Record<BlogCategory, { icon: typeof faCode; gradient: string }> = {
    Tech: { icon: faServer, gradient: "from-indigo-600/40 to-blue-700/30" },
    Games: { icon: faGamepad, gradient: "from-fuchsia-600/40 to-purple-700/30" },
    DevLog: { icon: faCode, gradient: "from-purple-600/40 to-indigo-700/30" },
}

export const BlogSection = () => {
    return (
        <section className="mb-20 md:mb-32" id="blog">
            <div className="text-center mb-12 md:mb-16">
                <p className="text-indigo-400 font-medium mb-2">
                    COMPARTILHANDO CONHECIMENTO
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Blog · 8-bit Chronicles</h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                    DevLogs, arquitetura de software e games retrô. Os posts abrem no blog.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post) => {
                    const meta = CATEGORY_META[post.category]
                    return (
                        <Card
                            key={post.id}
                            className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden group hover:border-indigo-600/50 transition-all duration-300 shadow-xl flex flex-col"
                        >
                            <a
                                href={`${BLOG_URL}/post/${post.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-40 overflow-hidden relative"
                            >
                                {post.cover ? (
                                    <img
                                        src={post.cover}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${meta.gradient} transition-transform duration-500 group-hover:scale-110`}>
                                        <FontAwesomeIcon icon={meta.icon} className="text-5xl text-white/80" />
                                    </div>
                                )}
                                <span className="absolute top-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-indigo-200 border border-indigo-500/30">
                                    {post.category}
                                </span>
                            </a>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-3 text-sm flex-1">
                                    {post.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={`${BLOG_URL}/post/${post.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button className="!rounded-button whitespace-nowrap bg-transparent hover:bg-indigo-900/50 border border-indigo-700/50 text-indigo-400 px-4 py-2 text-sm">
                                            Ler Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-xs" />
                                        </Button>
                                    </a>
                                    <span className="text-gray-500 text-sm">{post.date}</span>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>

            <div className="text-center mt-10 md:mt-12">
                <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 md:py-6 text-base md:text-lg font-medium">
                        Ver todos os posts no blog <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-sm" />
                    </Button>
                </a>
            </div>
        </section>
    )
}
