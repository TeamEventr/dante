import NavbarDropDown from "../ui/navbar-dropdown";
import NavbarSidebar from "../ui/navbar-sidebar";
import { Link } from "@tanstack/react-router";
export default function Navbar() {
    return (
        <nav className="fixed z-50 flex items-center justify-between p-2 w-full">
            <NavbarSidebar />
            <Link to="/" className="font-gothic text-4xl tracking-widest mr-2 text-secondary">EVENTR</Link>
            <NavbarDropDown />
        </nav>
    )
}
