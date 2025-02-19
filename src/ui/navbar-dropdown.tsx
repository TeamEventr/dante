import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const animationParams = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: -10,
        transition: {
        duration: 0.2,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: -10,
        transition: {
        duration: 0.15,
        },
    },
};

export default function NavbarDropDown() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  
    const menuRef = useRef<HTMLDivElement>(null);
    const profileButtonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        } else if (event.target === profileButtonRef.current) {
        setIsMenuOpen(!isMenuOpen);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
    <div>
        <button className="active:scale-90 text-white border border-eventr-gray-200 bg-eventr-gray-800 rounded-full p-1 duration-200">
            <span
                ref={profileButtonRef}
                className="flex items-center material-symbols-rounded"
                style={{fontSize: "36px", fontVariationSettings: `'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24`,}}
            >
                account_circle
            </span>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial="hidden" animate="visible" exit="exit" variants={animationParams} ref={menuRef}
                  className="absolute text-lg right-3 lg:right-6 w-36 p-2 flex flex-col gap-1.5 bg-eventr-gray-900 border-2 border-eventr-gray-800 rounded-md shadow-lg z-40"
              >
                  <Link to="/u/$uId" params={{uId:'virat'}} onClick={() => setIsMenuOpen(false)} className="block px-2 py-1.5 rounded-md duration-200 hover:bg-eventr-gray-800">
                      Profile
                  </Link>
                  {/* <Link to="/tickets" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1.5 rounded-md duration-200 hover:bg-eventr-gray-800">
                      My Tickets
                  </Link>
                  <Link to="/favourites" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1.5 rounded-md duration-200 hover:bg-eventr-gray-800">
                      Favourites
                  </Link> */}
                  <button onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-2 py-1.5 rounded-md duration-200 hover:bg-eventr-gray-800 text-red-600">
                      Logout
                  </button>
              </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
