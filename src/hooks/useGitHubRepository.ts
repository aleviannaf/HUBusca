import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { handleApiError } from "../Error/handleApiError";
import { GitHubRepositoryResponse } from "../interfaces/gitHubRepositoryResponse";
import { API_URL } from "../Api";


const fetchData = async (user: string): Promise<GitHubRepositoryResponse[]> => {
    try{
        const response = await axios.get<GitHubRepositoryResponse[]>(`${API_URL}${user}/repos`)
        return response.data
    } catch (error) {
      throw handleApiError(error as AxiosError<GitHubRepositoryResponse[]>, "Repositórios não encontrados")  
    }
}

export function useGitHubRepository(user: string) {


    const query = useQuery({
        queryFn: () => fetchData(user),
        queryKey: ["repositories", user],
        enabled: !!user,
        retry: false,
        staleTime: 1000 * 60 * 5
    })

    return query
}