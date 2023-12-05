import styled from "styled-components"
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { useGitHubUser } from "../hooks/useGitHubUser";

const Container = styled.li`
    width: calc(100% - 18px);

    &:hover{
        opacity: 0.8;
    }
    
`

const ButtonNavigate = styled.button`
    list-style: none;
    display: flex;
    color: #000;
    width: 100%;
    background-color: #e4e1e1;
    border: 1px solid #ccc;
    border-radius: 8px;
    gap: 8px;

    cursor: pointer;
    
`
const Avatar = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img{
        object-fit: cover;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin: 15px;
    }
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 12px 8px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 8px;
`

const Text = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    gap: 8px;
`

interface HistoryCardProps {
    name: string,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


export function HistoryCard({ name, setMenu }: HistoryCardProps) {
    const { data } = useGitHubUser(name);
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate(`/profile/${name}`)
        setMenu(false)
    }

 
    return (
        <Container>
            {
                data && <ButtonNavigate onClick={handleSubmit}>
                    <Avatar>
                        <img src={data.avatar_url} alt="foto do usuario no github" />
                    </Avatar>
                    <UserInfo>
                        <Title>
                            <FaRegUserCircle />
                            <h3>{data.name}</h3>
                        </Title>
                        <Text>
                            <FaGithub />
                            <span>{data.login}</span>
                        </Text>
                        <Text>
                            <GiPositionMarker />
                            <strong>{data?.location}</strong>
                        </Text>
                    </UserInfo>
                </ButtonNavigate>
            }
        </Container>
    )
}