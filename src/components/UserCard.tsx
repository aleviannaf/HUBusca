import styled from "styled-components"
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    min-width: 320px;
    margin: 0 18px;
    background-color: #e4e1e1;
    border: 1px solid #ccc;
    border-radius: 8px;
    gap: 8px;
    
    a{
        display: inline-flex;
        border-radius: 8px 0 0 8px;

        &:hover{
            transform: scale(1.01);
        }
    }

    img{
        object-fit: cover;
        height: 150px;
        width: 150px;
        border-radius: 8px 0 0 8px;
    }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 20px 8px;
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

interface UserCardProps {
    avatar: string,
    name: string,
    login: string,
    localization: string
}


export function UserCard({ avatar, name, login, localization}: UserCardProps) {

    return (
        <Container>
             <Link to={`profile/${login}`}>
                <img src={avatar} alt="foto do usuario no github" />
            </Link>
            <UserInfo>
                <Title>
                    <FaRegUserCircle />
                    <h3>{name}</h3>
                </Title>
                <Text>
                    <FaGithub />
                    <span>{login}</span>
                </Text>
                <Text>
                    <GiPositionMarker />
                    <strong>{localization}</strong>
                </Text>
            </UserInfo>
        </Container>
    )
}