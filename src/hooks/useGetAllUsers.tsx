import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import { Axios } from "../lib/Axios";

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export interface GetAllUsersResponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: User[];
};

interface QueryContext {
    queryKey: [string, number, number];
};

async function getAllUsers({ queryKey }: QueryContext) {
    try {
        const [_, page, per_page] = queryKey;

        const response: AxiosResponse<GetAllUsersResponse> = await Axios.get(`/users?page=${page}&per_page=${per_page}`)
        return response.data;
    } catch (err) {
        console.error("Failed to get all users:", err);
        throw new Error("Failed to get all users");
    }
}

export default function useGetAllUsers(page: number, per_page: number) {
    return useQuery({
        queryKey: ["get_all_users", page, per_page],
        queryFn: getAllUsers,
    })
}