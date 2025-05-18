import React from "react";
import Icons from "../../assets/Icons";
import ServiceUnavailable from "../ServiceUnavailable";

interface TableColumn<T> {
  key: keyof T;
  label: string;
  isImage?: boolean;
}

interface CommonTableProps<T> {
  isLoading: boolean;
  error: Error | null;
  heading: string;
  filterValue: string;
  onFilterChange: (value: string) => void;
  columns: TableColumn<T>[];
  data: T[];
}

function CommonTable<T>({
  isLoading,
  error,
  heading,
  filterValue,
  onFilterChange,
  columns,
  data,
}: CommonTableProps<T>) {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {heading}
        </h2>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <Icons.loadingIcon size={50} className="animate-spin" />
        </div>
      ) : (
        error ? (
          <ServiceUnavailable />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={String(col.key)}
                      className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                    >
                      No data found.
                    </td>
                  </tr>
                ) : (
                  data.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      {columns.map((col) => (
                        <td
                          key={String(col.key)}
                          className="px-4 py-3 text-gray-700 dark:text-gray-200"
                        >
                          {col.isImage ? (
                            <img
                              src={item[col.key] as string}
                              alt="profile"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            (item[col.key] as React.ReactNode)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )
      )}

    </div>
  );
}

export default CommonTable;
