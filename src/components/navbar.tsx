import NavbarDropDown from "../ui/navbar-dropdown";
import NavbarSidebar from "../ui/navbar-sidebar";

export default function Navbar() {
    return (
        <nav className="h-16 z-50 flex items-center justify-between px-4 w-full">
            <NavbarSidebar />
            <a href="/" className="font-gothic text-4xl tracking-widest mr-2 text-secondary">EVENTR</a>
            <NavbarDropDown />
        </nav>
    )
}