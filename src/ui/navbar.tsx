"use client"

import { useAuthStore } from "@/utils/Store"
import NavbarDropDown from "./navbar-dropdown"
import NavbarSidebar from "./navbar-sidebar"
import { Link } from "@tanstack/react-router"
import { Menu, X, Home, User, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const setLoginModal = useAuthStore((state) => state.setLoginModal)
  const setRegisterModal = useAuthStore((state) => state.setRegisterModal)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black w-full">
      <div className="flex items-center justify-between p-4">
        {/* Left section - Menu Icon (Mobile) / Sidebar (Desktop) */}
        <div className="w-1/3">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} />
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            <NavbarSidebar />
          </div>
        </div>

        {/* Center logo */}
        <div className="w-1/3 flex justify-center">
          <Link
            to="/"
            className="text-[#FFA500] font-gothic text-3xl md:text-4xl tracking-widest hover:text-[#FFA500]/90 transition-colors duration-200"
          >
            EVENTR
          </Link>
        </div>

        {/* Right section - Auth buttons */}
        <div className="w-1/3 flex justify-end items-center gap-2 md:gap-3">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => setLoginModal(true)}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
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
        <div className="fixed inset-0 lg:hidden bg-black z-50">
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <span className="text-[#FFA500] font-gothic text-xl tracking-widest">MENU</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white p-2">
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col p-4 gap-6">
              <Link
                to="/"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={24} />
                <span className="text-lg">Home</span>
              </Link>
              <Link
                to="/host/join"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={24} />
                <span className="text-lg">Become a Host</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle size={24} />
                <span className="text-lg">About</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

