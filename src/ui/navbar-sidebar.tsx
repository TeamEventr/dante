import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Home, HelpCircle, UserPlus, X, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

const animationParams = {
    hidden: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

export default function NavbarSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsSidebarOpen(false);
        } else if (event.target === menuButtonRef.current) {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button
                ref={menuButtonRef}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 active:scale-95"
            >
                <Menu size={24} className="text-gray-300" />
            </button>

            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={animationParams}
                        ref={sidebarRef}
                        className="fixed top-0 left-0 w-64 h-screen bg-black flex flex-col shadow-xl"
                    >
                        <div className="p-4 flex flex-col gap-6">
                            {/* Header with Menu text and close button */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#FFA500] font-gothic tracking-wider text-lg">
                                    MENU
                                </span>
                                <button 
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col gap-4">
                                <Link
                                    to="/"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Home size={20} />
                                    <span>Home</span>
                                </Link>
                                <Link
                                    to="/host/join"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <UserPlus size={20} />
                                    <span>Become a Host</span>
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <HelpCircle size={20} />
                                    <span>About</span>
                                </Link>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-800 w-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}