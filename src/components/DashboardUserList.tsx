import React, { useEffect, useState } from 'react';
import useGetAllUsers from '../hooks/useGetAllUsers';
import CommonTable from './common/CommonTable';
import Pagination from './common/Pagination';
import useDebounce from '../utils/useDebounce';

interface User {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
}


const DashboardUserList: React.FC = () => {

    const [rows, setRows] = useState<User[]>([]);
    const [activePage, setActivePage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);
    const [totalPages, setTotlePage] = useState<number>(0);
    const [totalEntries, setTotalEntries] = useState<number>(0);
    const [searchInput, setSearchInput] = useState<string>('');
    const deSearchInput = useDebounce(searchInput);

    const { data:getAllUsers, isLoading, error } = useGetAllUsers(activePage, pageLimit);

    useEffect(() => {
        if(getAllUsers?.data && getAllUsers?.total && getAllUsers?.total_pages) {
            setRows(getAllUsers?.data)
            setTotalEntries(getAllUsers?.total)
            setTotlePage(getAllUsers?.total_pages)
        }
    }, [getAllUsers])

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    const filteredUsers = rows?.filter(
        (u) =>
            u?.email?.toLowerCase().includes(deSearchInput.toLowerCase()) ||
            u?.first_name?.toLowerCase().includes(deSearchInput.toLowerCase()) ||
            u?.last_name?.toLowerCase().includes(deSearchInput.toLowerCase()) 
    );

    return (
        <>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <CommonTable<User>
                    isLoading={isLoading}
                    error={error}
                    heading="User List"
                    filterValue={searchInput}
                    onFilterChange={setSearchInput}
                    columns={[
                        { key: "id", label: "Id" },
                        { key: "avatar", label: "Profile", isImage: true },
                        { key: "email", label: "Email" },
                        { key: "first_name", label: "First Name" },
                        { key: "last_name", label: "Last Name" },
                    ]}
                    data={filteredUsers}
                />
                <Pagination
                    currentPage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    entriesPerPage={pageLimit}
                    totalEntries={totalEntries}
                    setPageLimit={setPageLimit}
                />
            </div>
        </>
    )
};

export default DashboardUserList;
