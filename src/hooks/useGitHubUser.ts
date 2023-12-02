import { useQuery } from "@tanstack/react-query";
import { GitHubUserResponse } from "../interfaces/gitHubUserResponse";
import axios from "axios";


const API_URL = 'https://api.github.com/users/'

const fetchData = async (user: string): Promise<GitHubUserResponse> => {
    const response = await axios.get<GitHubUserResponse>(API_URL + `${user}`)
    return response.data
}

export function useGitHubUser(user: string) {


    const query = useQuery({
        queryFn: () => fetchData(user),
        queryKey: ["user", user],
        enabled: !!user,
        retry: false,
        staleTime: 1000 * 60 * 5
    })


    console.log('query: ', query)
    return query
}