import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/common/TopNavbar";
import Sidebar from "../components/common/Sidebar";


const MainLayout: React.FC = () => {

    return (
        <div>
            <div><TopNavbar /></div>
            <div className="flex">
                <Sidebar />
                <div className="w-full p-10 bg-gray-100 dark:bg-gray-800">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};

export default MainLayout;