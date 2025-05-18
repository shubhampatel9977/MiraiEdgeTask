import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from "../../assets/Icons";


const Sidebar: React.FC = () => {

    const { pathname } = useLocation();

    const navLinks = [
        { name: "Dashboard", href: "/", Icon: Icons.homeIcons},
        { name: "About", href: "/about", Icon: Icons.aboutIcons},
        { name: "Services", href: "/services", Icon: Icons.servicesIcons},
        { name: "Contact", href: "/contact", Icon: Icons.contactIcons},
    ];

    function checkPath(href: string) {
        if(pathname === href){
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <div className="min-h-screen w-64 shadow-lg p-6 bg-white dark:bg-gray-900">
                <nav className="mt-5 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="block text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                        >
                            <div className={ `flex gap-4 ${checkPath(link.href) ? "text-blue-600" : ""}`}>
                                <link.Icon  size={30}/>
                                {link.name}
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;