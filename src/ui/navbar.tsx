import { useAuthStore } from "@/utils/Store";
import NavbarDropDown from "./navbar-dropdown";
import NavbarSidebar from "./navbar-sidebar";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const setLoginModal = useAuthStore((state) => state.setLoginModal);
    const setRegisterModal = useAuthStore((state) => state.setRegisterModal);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black w-full">
            <div className="flex items-center justify-between p-4">
                {/* Left section - Mobile Menu */}
                <div className="lg:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-300 hover:text-white p-2"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Left section - Desktop */}
                <div className="hidden lg:flex items-center">
                    <NavbarSidebar />
                </div>

                {/* Center logo */}
                <Link 
                    to="/" 
                    className="text-[#FFA500] font-gothic text-3xl md:text-4xl tracking-widest hover:text-[#FFA500]/90 transition-colors duration-200"
                >
                    EVENTR
                </Link>

                {/* Right section - Auth buttons */}
                <div className="flex items-center gap-2 md:gap-3">
                    {!isAuthenticated ? (
                        <>
                            <button 
                                onClick={() => setLoginModal(true)}
                                className="hidden md:block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                Log In
                            </button>
                            <button 
                                onClick={() => setRegisterModal(true)}
                                className="px-3 py-1.5 md:px-4 md:py-2 bg-[#FFA500] hover:bg-[#FFA500]/90 text-black text-sm rounded-full font-medium transition-all duration-200 active:scale-95"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <NavbarDropDown />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black border-t border-gray-800">
                    <div className="p-4 space-y-4">
                        <div className="flex flex-col space-y-4">
                            {!isAuthenticated && (
                                <button 
                                    onClick={() => {
                                        setLoginModal(true);
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-gray-300 hover:text-white text-left text-sm font-medium"
                                >
                                    Log In
                                </button>
                            )}
                            <NavbarSidebar />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}