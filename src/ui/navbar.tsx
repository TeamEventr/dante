import { useAuthStore } from "@/utils/Store";
import NavbarDropDown from "./navbar-dropdown";
import NavbarSidebar from "./navbar-sidebar";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const setLoginModal = useAuthStore((state) => state.setLoginModal);
    const setRegisterModal = useAuthStore((state) => state.setRegisterModal);
    return (
        <nav className="relative top-0 z-50 bg-eventr-gray-900 flex items-center justify-between p-2 px-4 md:px-4 w-full">
            <Link to="/" className="absolute -z-10 left-1/2 -translate-x-1/2 font-gothic w-full text-center text-4xl tracking-widest text-secondary">EVENTR</Link>
            <NavbarSidebar />
            {!isAuthenticated ? 
                <div className="flex gap-2">
                    <button onClick={() => setLoginModal(true)} className="hidden md:block px-4 py-2 border active:scale-90 duration-200 border-eventr-gray-200 bg-eventr-gray-800 text-sm rounded-lg font-semibold">Log In</button>
                    <button onClick={() => setRegisterModal(true)} className="px-4 py-2 border active:scale-90 duration-200 text-black border-eventr-gray-200 bg-white text-sm rounded-lg font-semibold">Sign Up</button>
                </div> :
                <NavbarDropDown />
            }

        </nav>
    )
}

