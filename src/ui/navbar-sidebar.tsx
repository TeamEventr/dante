"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, X, Home, Search, HelpCircle, UserPlus } from "lucide-react"

interface NavbarSidebarProps {
  icon?: ReactNode
}

export default function NavbarSidebar({ icon }: NavbarSidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && event.target !== menuButtonRef.current) {
        setIsSidebarOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div>
      <button ref={menuButtonRef} onClick={toggleSidebar} className="active:scale-90 border border-gray-200 bg-gray-800 rounded-full p-1 duration-200 focus:outline-none">
        {icon || <Menu className="h-6 w-6 text-gray-100 hover:text-secondary transition-colors duration-200" />}
      </button>

      {isSidebarOpen && (
        <>
          {/* Changed bg-gray-900 to bg-black here */}
          <div ref={sidebarRef} className="fixed top-0 left-0 w-64 h-screen bg-black shadow-lg z-50 overflow-y-auto">
            <div className="p-4">
              <button onClick={toggleSidebar} className="absolute top-4 right-4 focus:outline-none">
                <X className="h-6 w-6 text-gray-100 hover:text-secondary transition-colors duration-200" />
              </button>
              <div className="mt-8 mb-6"><h2 className="text-2xl font-gothic tracking-wider text-secondary">MENU</h2></div>
              <nav className="space-y-4">
                <Link to="/" className="flex items-center gap-2 py-2 text-gray-100 hover:text-secondary transition-colors duration-200" onClick={toggleSidebar}><Home size={20} /><span>Home</span></Link>
                <Link to="/explore" className="flex items-center gap-2 py-2 text-gray-100 hover:text-secondary transition-colors duration-200" onClick={toggleSidebar}><Search size={20} /><span>Explore</span></Link>
                <Link to="/host/join" className="flex items-center gap-2 py-2 text-gray-100 hover:text-secondary transition-colors duration-200" onClick={toggleSidebar}><UserPlus size={24} /><span>Become a Host</span></Link>
                <Link to="/help" className="flex items-center gap-2 py-2 text-gray-100 hover:text-secondary transition-colors duration-200" onClick={toggleSidebar}><HelpCircle size={20} /><span>Help</span></Link>
              </nav>
              {/* Changed divider color to match better with black background */}
              <div className="h-0.5 bg-gray-900 rounded-full my-4" />
            </div>
          </div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />
        </>
      )}
    </div>
  )
}