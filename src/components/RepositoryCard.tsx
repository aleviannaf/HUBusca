import styled from "styled-components";
import { formatDate } from "../util/formatDate";
import { Link } from "react-router-dom";


const LinkConatiner = styled(Link)`
    text-decoration: none;
    list-style: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    min-width: 320px;
    margin: 0 18px;
    background-color: #f3ecec;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 14px;
    gap: 8px;

    transition: all 0.4s ease-in-out;

    &:hover{
        transform: scale(1.01);
        background-color: white;
    }
`

const Title = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
`
const Description = styled.p`
    font-size: 1rem;
`
const Language = styled.span`
    font-size: 0.8rem;

    strong{
        font-weight: 600;
    }
`
const DataAt = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0.8rem;
`

interface RepositoryCardProps {
    name: string,
    description: string | null,
    created_at: string,
    update_at: string,
    language: string,
    link: string
}

export function RepositoryCard({
    name,
    description,
    created_at,
    update_at,
    language,
    link
}: RepositoryCardProps) {

    return (
        <li>
            <LinkConatiner to={link} target="_blank">
                <DataAt>
                    <span>🌐 Criado em: {formatDate(created_at)}</span>
                    <span>🕜 Atualizado: {formatDate(update_at)} </span>
                </DataAt>
                <Title >{name}</Title >
                <Description>Descrição: {description}</Description>
                <Language>
                    <strong>Linguagens: </strong>
                    {language}
                </Language>
            </LinkConatiner>
        </li>
    )
} 