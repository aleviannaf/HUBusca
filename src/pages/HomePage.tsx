import { useState } from 'react';
import { useGitHubUser } from '../hooks/useGitHubUser';
import { Logo } from '../components/Logo';
import { SearchUser } from '../components/SearchUser';
import { UserCard } from '../components/UserCard';
import { Loader } from '../components/Loader';
import styled from 'styled-components';
import { ErrorMessage } from '../components/ErrorMessage';
import { HamburguerButton } from '../components/HamburguerButton';
import { MenuHistory } from '../components/MenuHistory';
import { useLocalHistoric } from '../hooks/useHistoric';
import { useStoreSelector } from '../hooks/hooks';
import { HistoryState } from '../store/modules/history/historySlice';


const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin-top: 20px;

    &>:nth-child(2) {
        margin-bottom: 50px; 
    }
`

const HistoricButtonWrap = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`

export default function HomePage() {
    const [user, setUser] = useState<string>('');
    const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
    const { data, isLoading, isError } = useGitHubUser(user);
    const { updateLocalHistoric } = useLocalHistoric()
    const history: Array<HistoryState> = useStoreSelector((state) => state.history)

    const verifySearch = (search: string) => {
        return history.some(item => item.search == search)
    }

    if (!isError && !isLoading && user) {
        if (!verifySearch(user)) {
            updateLocalHistoric(user)
        }
    }

    return (<>
        <Container>
            <Logo />
            <SearchUser setUser={setUser} />
            {
                isLoading
                    ?
                    <Loader />
                    :
                    isError
                        ?
                        <ErrorMessage title='Usuário não encontrado' />
                        :
                        data && <UserCard
                            avatar={data.avatar_url}
                            name={data.name}
                            login={data.login}
                            localization={data.location}
                        />
            }
        </Container>
        <MenuHistory
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
        />
        <HistoricButtonWrap>
            <HamburguerButton handleClick={setMenuIsVisible} />
        </HistoricButtonWrap>
    </>
    )

}

