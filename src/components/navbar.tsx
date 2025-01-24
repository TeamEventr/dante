import NavbarDropDown from "../ui/navbar-dropdown";
import NavbarSidebar from "../ui/navbar-sidebar";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="h-16 z-50 flex items-center justify-between px-4 w-full">
            <NavbarSidebar />
            <NavLink to="/" className="font-gothic text-4xl tracking-widest mr-2 text-secondary">EVENTR</NavLink>
            <NavbarDropDown />
        </nav>
    )
}