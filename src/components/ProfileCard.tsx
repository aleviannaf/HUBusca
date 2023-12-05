import styled from "styled-components"
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub, FaUserPlus } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    margin: 0 18px;
    max-height: 450px;
    background-color: #e4e1e1;
    border: 1px solid #ccc;
    border-radius: 8px;
    gap: 8px;
`

const Avatar = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img{
        object-fit: cover;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin: 15px;
    }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 20px 28px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    gap: 8px;
`

const Text = styled.div`
    display: flex;
    align-items: center;
     font-size: 1.1rem;
    gap: 8px;
`

interface ProfileCardProps {
    id: number,
    avatar: string,
    name: string,
    login: string,
    localization: string
    followers: number,
    repos_public: number
}


export function ProfileCard({id, avatar, name, login, localization, followers, repos_public }: ProfileCardProps) {
    return (
        <Container>
             <Avatar>
                <img src={avatar} alt="foto do usuario no github" />
            </Avatar>
            <UserInfo>
                <Text>
                    <FaUserPlus />
                    <strong>{id}</strong>
                </Text>
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
                <Text>
                    <BsFillPeopleFill />
                    <strong>{followers} Seguidores</strong>
                </Text>
                <Text>
                    <AiFillContainer />
                    <strong>{repos_public} Seguidores</strong>
                </Text>
            </UserInfo>
        </Container>
    )
}