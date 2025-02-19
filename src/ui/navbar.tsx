"use client"

import { useAuthStore } from "../utils/Store"
import NavbarDropDown from "./navbar-dropdown"
import NavbarSidebar from "./navbar-sidebar"
import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { Menu, User, Search, LayoutGrid } from "lucide-react"

export default function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const desktopMenuIcon = (
    <LayoutGrid className="h-5 w-5 text-eventr-gray-100 hover:text-secondary transition-colors duration-200" />
  )

  const mobileMenuIcon = (
    <Menu className="h-5 w-5 text-eventr-gray-100 hover:text-secondary transition-colors duration-200" />
  )

  return (
    <nav className="fixed top-0 z-50 w-full bg-eventr-gray-800 shadow-lg transition-all duration-300">
      {!isMobile ? (
        // Desktop View - Compact
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16"> {/* Reduced from h-20 */}
            {/* Left: Sidebar */}
            <div className="flex items-center space-x-3"> {/* Reduced spacing */}
              <NavbarSidebar icon={desktopMenuIcon} />
            </div>

            {/* Center: Compact Logo */}
            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 font-gothic text-5xl tracking-widest text-secondary hover:text-secondary-light transition-colors duration-200"
            >
              EVENTR
            </Link>

            {/* Right: Compact Auth buttons */}
            <div className="flex items-center space-x-3"> {/* Reduced spacing */}
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-1.5 text-sm text-eventr-gray-100 hover:text-secondary" // Smaller padding
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary-light text-eventr-gray-900 rounded-full" // Smaller padding
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <NavbarDropDown />
              )}
            </div>
          </div>
        </div>
      ) : (
        // Mobile View - Compact
        <div className="px-3 py-1.5"> {/* Reduced padding */}
          <div className="flex items-center justify-between h-12"> {/* Reduced height */}
            {/* Left: Sidebar */}
            <NavbarSidebar icon={mobileMenuIcon} />

            {/* Center: Smaller Logo */}
            <Link to="/" className="font-gothic text-xl tracking-tight text-secondary"> {/* Smaller text */}
              EVENTR
            </Link>

            {/* Right: Compact Icons */}
            <div className="flex items-center space-x-1.5"> {/* Reduced spacing */}
              <button className="p-1.5 rounded-full bg-eventr-gray-700 hover:bg-eventr-gray-600"> {/* Smaller padding */}
                <Search className="h-4 w-4 text-eventr-gray-100" /> {/* Smaller icon */}
              </button>
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="p-1.5 rounded-full bg-secondary hover:bg-secondary-light" // Smaller padding
                >
                  <User className="h-4 w-4 text-eventr-gray-900" /> {/* Smaller icon */}
                </Link>
              ) : (
                <NavbarDropDown />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}