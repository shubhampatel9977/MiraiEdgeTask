import React, { lazy, Suspense } from "react";
import Icons from "../assets/Icons";
import SummarySection from "../components/SummarySection";
const DashboardUserList = lazy(() => import('../components/DashboardUserList'));


const FallbackUI = () => {
    return (
        <div className="flex justify-center">
            <Icons.loadingIcon size={50} className="animate-spin" />
        </div>
    )
};

const Dashboard: React.FC = () => {

    return (
        <>
            <div className="p-5">
                <h1 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">Dashboard Summary</h1>
                <SummarySection />
            </div>
            <Suspense fallback={<FallbackUI />}>
                <DashboardUserList />
            </Suspense>
        </>
    )
};

export default Dashboard;