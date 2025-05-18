import React from "react";
import Icons from "../assets/Icons";
import SummaryCard from "./common/SummaryCard";

const summaryData = [
    { label: "Total Users", value: 1470, Icon: Icons.usersIcon },
    { label: "Active Users", value: 850, Icon: Icons.usersActiveIcon},
    { label: "Inactive Users", value: 500, Icon: Icons.usersInactiveIcon },
    { label: "Premium Users", value: 120, Icon: Icons.usersPremiumIcon },
];

const SummarySection: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {summaryData.map((item, index) => (
                    <SummaryCard key={index} item={item}/>
                ))}
            </div>
        </>
    )
};

export default SummarySection;