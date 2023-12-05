import styled from "styled-components";
import { useGitHubRepository } from "../hooks/useGitHubRepository";
import { RepositoryCard } from "./RepositoryCard";
import { GitHubRepositoryResponse } from "../interfaces/gitHubRepositoryResponse";

const Container = styled.ul`
    display: flex;
    height: auto;
    max-height: 800px;
    min-width: 320px;
    max-width: 800px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #e4e1e1;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 25px 0 20px;
    margin: 0 18px;
    gap: 15px;

    overflow-x: hidden;
    overflow-y: scroll;
`;

interface RepositoryListProps {
    user: string,
}
export function RepositoryList({ user }: RepositoryListProps) {
    const { data } = useGitHubRepository(user!);

    return (
        <Container >
            {
                (data && (data.length > 0))
                &&
                data.map((repository: GitHubRepositoryResponse, index: number) => (

                    <RepositoryCard
                        key={index}
                        name={repository.name}
                        description={repository.description}
                        language={repository.language}
                        link={repository.html_url}
                        created_at={repository.created_at}
                        update_at={repository.updated_at}
                    />

                )
                )
            }
        </Container >
    )
}