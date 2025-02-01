import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "./icon-wrapper";
import { HomeIcon, SearchIcon } from "./icons";
import { Link } from "@tanstack/react-router";

const animationParams = {
    hidden: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.2,  
            ease: "easeInOut",
        },
    },
};

export default function NavbarSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  
    const sidebarRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
        } else if (event.target === menuButtonRef.current) {
        setIsSidebarOpen(!isSidebarOpen);
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
        <button className="active:scale-90 text-eventr-gray-50 bg-eventr-gray-800 rounded-full p-1 duration-200">
            <span
                ref={menuButtonRef}
                className="flex items-center material-symbols-rounded"
                style={{fontSize: "32px", fontVariationSettings: `'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24`,}}
            >
                menu
            </span>
        </button>
        <AnimatePresence>
          {isSidebarOpen && (
              <motion.div
                  initial="hidden" animate="visible" exit="exit" variants={animationParams} ref={sidebarRef}
                  className="absolute top-0 z-50 left-0 w-52 h-screen p-2 flex flex-col gap-1.5 shadow-xl bg-eventr-gray-900 border-r-2 border-eventr-gray-800"
              >
                    <button className="mb-4 ml-2" onClick={() => setIsSidebarOpen(false)}>
                        <Icon icon="close" size="32px" />
                    </button>
                <Link to="/" onClick={() => setIsSidebarOpen(false)} className="flex gap-2 text-lg p-2 rounded-md duration-200 hover:bg-eventr-gray-800">
                    <HomeIcon size={26}/> Home
                  </Link>
                  <Link to="/explore" onClick={() => setIsSidebarOpen(false)} className="flex gap-2 text-lg p-2 rounded-md duration-200 hover:bg-eventr-gray-800">
                      <SearchIcon size={26}/> Explore
                  </Link>

                  <Link to="/help" onClick={() => setIsSidebarOpen(false)} className="flex gap-2 text-lg p-2 rounded-md duration-200 hover:bg-eventr-gray-800">
                      <Icon icon="help" size="26px" /> Help
                  </Link>
                  {/* <Link to="/settings" onClick={() => setIsSidebarOpen(false)} className="flex gap-2 text-lg p-2 rounded-md duration-200 hover:bg-eventr-gray-800">
                      <Icon icon="settings" size="26px" /> Settings
                  </Link> */}
                  <div className="h-0.5 bg-eventr-gray-800 rounded-full m-4"/>
                  <Link to="/host/join" onClick={() => setIsSidebarOpen(false)} className="flex  bg-gradient-to-br from-purple-600 via-purple-800 to-purple-900 gap-2 text-lg p-2 h-24 rounded-md duration-200">
                      <Icon icon="person_play" size="26px"/> Become a Host
                  </Link>
              </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
