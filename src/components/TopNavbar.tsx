import React, { useState, useRef, useEffect } from "react";
import { toast } from 'react-toastify';
import Icons from "../assets/Icons";
import defautProfile from "../assets/defaultProfile.png";

const TopNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  function handleRouteClick(str: string) {
    toast.info(`${str} page is not Found!!`);
    setProfileOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-white dark:bg-gray-800 shadow-lg">
      <div className="text-xl font-bold">Miraiedge</div>

      <div className="flex items-center gap-7">
        <div className="relative">
          <button className="rounded-full p-2 bg-gray-200 dark:bg-gray-700">
            <Icons.notificationIcon />
          </button>
        </div>

        <button className="rounded-full p-2 bg-gray-200 dark:bg-gray-700" onClick={toggleTheme}>
          {darkMode ? <Icons.lightMoodIcon /> : <Icons.darkModeIcon />}
        </button>

        <div ref={profileRef} className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2">
            <img src={defautProfile} alt="Profile" className="h-10 w-10 rounded-full" />
            <span className="font-medium">John Doe</span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg p-2">
              <button onClick={() => handleRouteClick("Profile")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</button>
              <button onClick={() => handleRouteClick("Logout")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
