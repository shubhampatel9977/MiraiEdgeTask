import React from "react";

interface SummaryCardProps {
  label: string;
  value: number;
  Icon: React.ElementType
}

const SummaryCard: React.FC<{ item: SummaryCardProps }> = ({ item }) => {
  const { label, value, Icon } = item;

  return (
    <div className="flex justify-between p-5 rounded-xl shadow bg-white dark:bg-gray-900 hover:bg-blue-400 transition duration-300">
      <div>
        <p className="text-sm mb-2 font-medium text-gray-600 dark:text-gray-300">{label}</p>
        {Icon && <Icon className="text-3xl dark:text-white" />}
      </div>
      <p className="text-3xl font-bold text-gray-600 dark:text-gray-300 mt-2">{value}</p>
    </div>
  );
};

export default SummaryCard;