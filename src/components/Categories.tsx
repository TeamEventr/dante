'use client'

import { useRef, useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function AnimatedCategories({ page }: { page: string }) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth * 0.25
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    const categories = [
        { 
            name: "Concerts", 
            route: "/explore", 
            params: { category: "concerts" } 
        },
        { 
            name: "Comedy", 
            route: "/explore", 
            params: { category: "comedy" } 
        },
        { 
            name: "Festivals", 
            route: "/explore", 
            params: { category: "festivals" } 
        },
        { 
            name: "Parties", 
            route: "/explore", 
            params: { category: "parties" } 
        },
        { 
            name: "Conferences", 
            route: "/explore", 
            params: { category: "conferences" } 
        },
        { 
            name: "Expos", 
            route: "/explore", 
            params: { category: "expos" } 
        },
        { 
            name: "Sports", 
            route: "/explore", 
            params: { category: "sports" } 
        },
        { 
            name: "Arts", 
            route: "/explore", 
            params: { category: "arts" } 
        }
    ]

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.category-card')
            cards.forEach((card: Element) => {
                const rect = (card as HTMLElement).getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
                ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
            })
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="w-full p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWm02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
            <header className="flex justify-between mb-6 relative z-10">
                <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                    {page === 'home' ? 'Browse Categories' : 'Browse Other Categories'}
                </h2>
                <div className="flex gap-2">
                    <button 
                        className="bg-black p-2 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20"
                        onClick={() => handleScroll("left")} 
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button 
                        className="bg-black p-2 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20"
                        onClick={() => handleScroll("right")} 
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </header>
            <div 
                ref={scrollRef} 
                className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth py-4 px-2"
            >
                {categories.map((category, index) => (
                    <Link 
                        to={category.route} 
                        params={category.params}
                        key={index} 
                        className="relative flex-shrink-0 snap-start group"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        title={`View all ${category.name} events`}
                    >
                        <div className="pb-12 px-1">
                            <div className={`category-card w-60 h-40 rounded-lg overflow-hidden transition-all duration-500 
                                ${activeIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                                ${activeIndex !== null && activeIndex !== index ? 'opacity-50' : 'opacity-100'}
                                hover:shadow-xl hover:shadow-purple-900/30 group-hover:z-10 relative bg-black`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-75 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWm02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-2 z-10">
                                    <span className="text-white text-lg font-bold text-center relative z-10 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">{category.name}</span>
                                </div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-900/20 to-purple-800/20 backdrop-blur-sm"></div>
                                <div className="glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className={`absolute inset-x-0 bottom-2 text-center transition-all duration-500 transform 
                                ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            >
                                <span className="inline-block bg-gradient-to-r from-purple-800 to-purple-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                                    Explore
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .category-card {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .glow::before {
                    content: '';
                    position: absolute;
                    top: var(--mouse-y);
                    left: var(--mouse-x);
                    transform: translate(-50%, -50%);
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, rgba(88,28,135,0.3) 0%, rgba(88,28,135,0) 70%);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .category-card:hover .glow::before {
                    opacity: 1;
                }
            `}</style>
        </section>
    )
}