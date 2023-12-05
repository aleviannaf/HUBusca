import { useQuery } from "@tanstack/react-query";
import { GitHubUserResponse } from "../interfaces/gitHubUserResponse";
import axios, { AxiosError } from "axios";
import { handleApiError } from "../Error/handleApiError";
import { API_URL } from "../Api";


const fetchData = async (user: string): Promise<GitHubUserResponse> => {
    try{
        const response = await axios.get<GitHubUserResponse>(API_URL + `${user}`)
        return response.data
    } catch (error) {
      throw handleApiError(error as AxiosError<GitHubUserResponse>, "Usuário não encontrado")  
    }
}

export function useGitHubUser(user: string) {


    const query = useQuery({
        queryFn: () => fetchData(user),
        queryKey: ["user", user],
        enabled: !!user,
        retry: false,
        staleTime: 1000 * 60 * 5
    })

    return query
}