import styled from "styled-components";
import { HamburguerButton } from "../components/HamburguerButton";
import { useState } from "react";
import { MenuHistory } from "../components/MenuHistory";
import { BackButton } from "../components/BackButton";
import { useParams } from "react-router-dom";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { ProfileCard } from "../components/ProfileCard";
import { RepositoryList } from "../components/RepositoryList";


const Container = styled.div`
    height: 100%;
    width: 100%;
`

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: #cfc9c9;;

    padding: 10px;
`

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
    margin-bottom: 80px;
    gap: 20px;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-around;
    }
`


export default function ProfilePage() {
    const { user } = useParams();
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const { data, isLoading, isError } = useGitHubUser(user!);

    return (
        <Container >
            <HeaderContainer>
                <BackButton router="/" />
                <HamburguerButton handleClick={setMenuIsVisible} />
            </HeaderContainer>
            <MainSection>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        isError
                            ?
                            <ErrorMessage title='Usuário não encontrado' />
                            :
                            data && <ProfileCard
                                id={data.id}
                                avatar={data.avatar_url}
                                name={data.name}
                                login={data.login}
                                localization={data.location}
                                followers={data.followers}
                                repos_public={data.public_repos}
                            />
                }

                {
                    (user && data && (data?.public_repos > 0))
                    &&
                    <RepositoryList user={user} />
                }

            </MainSection>
            <MenuHistory
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
        </Container >
    )
}