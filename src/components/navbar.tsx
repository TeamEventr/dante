import NavbarDropDown from "../ui/navbar-dropdown";
import NavbarSidebar from "../ui/navbar-sidebar";
import { Link } from "@tanstack/react-router";
export default function Navbar() {
    return (
        <nav className="h-12 z-50 flex items-center justify-between px-4 w-full">
            <NavbarSidebar />
            <Link to="/" className="font-gothic text-4xl tracking-widest mr-2 text-secondary">EVENTR</Link>
            <NavbarDropDown />
        </nav>
    )
}
