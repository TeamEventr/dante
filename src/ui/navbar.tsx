import { useAuthStore } from "@/utils/Store";
import NavbarDropDown from "./navbar-dropdown";
import NavbarSidebar from "./navbar-sidebar";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return (
        <nav className="fixed z-50 flex items-center justify-between p-2 w-full">
            <NavbarSidebar />
            <Link to="/" className="font-gothic text-4xl tracking-widest mr-2 text-secondary">EVENTR</Link>
            { isAuthenticated !== null &&
                <p>{isAuthenticated ? "hello" : "login" }</p>
            }<NavbarDropDown />
        </nav>
    )
}
